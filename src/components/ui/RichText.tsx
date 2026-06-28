import { useNavigation } from '../../context/NavigationContext'
import type { ReactNode } from 'react'
import { findTermPath, termToPath } from '../../utils/terms'

interface RichTextProps {
  text: string
  className?: string
  stopPropagation?: boolean
  autoLink?: boolean
}

interface TermMatch {
  term: string
  start: number
  end: number
  path: string[]
}

/**
 * 支持 [[术语]] 或 [[术语|显示文本]] 语法的富文本组件。
 * 同时会自动把 plain text 中的已知术语变成可点击链接。
 *
 * 例如：
 * - "[[GPU]] 是 AI 的算力核心" → GPU 是可点击链接
 * - "GPU 负责并行计算" → GPU 自动变成可点击链接
 */
export function RichText({ text, className = '', stopPropagation = false, autoLink = true }: RichTextProps) {
  // 第一步：解析显式 [[...]] 标记
  const explicitParts: Array<{ type: 'text' | 'term'; content: string; display?: string }> = []
  const regex = /\[\[(.*?)(?:\|(.*?))?\]\]/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, term, display] = match
    if (match.index > lastIndex) {
      explicitParts.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }
    explicitParts.push({ type: 'term', content: term.trim(), display: display?.trim() })
    lastIndex = match.index + fullMatch.length
  }

  if (lastIndex < text.length) {
    explicitParts.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return (
    <span className={className}>
      {explicitParts.map((part, index) => {
        if (part.type === 'term') {
          return (
            <TermLink
              key={index}
              term={part.content}
              display={part.display}
              stopPropagation={stopPropagation}
            />
          )
        }

        if (autoLink) {
          return <AutoLinkText key={index} text={part.content} stopPropagation={stopPropagation} />
        }

        return <span key={index}>{part.content}</span>
      })}
    </span>
  )
}

function TermLink({
  term,
  display,
  stopPropagation,
}: {
  term: string
  display?: string
  stopPropagation?: boolean
}) {
  const { navigateToPath } = useNavigation()
  const path = findTermPath(term)

  if (!path) {
    return <span>{display || term}</span>
  }

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={(e) => {
        if (stopPropagation) e.stopPropagation()
        navigateToPath(path)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          if (stopPropagation) e.stopPropagation()
          navigateToPath(path)
        }
      }}
      className="inline text-violet-600 hover:text-violet-800 underline underline-offset-2 font-medium cursor-pointer"
      title={`查看 ${term}`}
    >
      {display || term}
    </span>
  )
}

function AutoLinkText({ text, stopPropagation }: { text: string; stopPropagation?: boolean }) {
  const matches = findTermMatches(text)

  if (matches.length === 0) {
    return <span>{text}</span>
  }

  const elements: ReactNode[] = []
  let cursor = 0

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i]
    if (m.start > cursor) {
      elements.push(<span key={`text-${i}`}>{text.slice(cursor, m.start)}</span>)
    }
    elements.push(
      <TermLink
        key={`term-${i}`}
        term={m.term}
        stopPropagation={stopPropagation}
      />
    )
    cursor = m.end
  }

  if (cursor < text.length) {
    elements.push(<span key="text-end">{text.slice(cursor)}</span>)
  }

  return <>{elements}</>
}

function findTermMatches(text: string): TermMatch[] {
  const allMatches: TermMatch[] = []

  for (const term of Object.keys(termToPath)) {
    const path = termToPath[term]
    const occurrences = findAllOccurrences(text, term)
    for (const [start, end] of occurrences) {
      allMatches.push({ term, start, end, path })
    }
  }

  // 按起始位置升序，相同起始位置按长度降序（优先匹配更长的术语）
  allMatches.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start
    return b.end - b.start - (a.end - a.start)
  })

  // 贪心选择不重叠的匹配
  const selected: TermMatch[] = []
  let lastEnd = -1

  for (const m of allMatches) {
    if (m.start >= lastEnd) {
      selected.push(m)
      lastEnd = m.end
    }
  }

  return selected
}

function findAllOccurrences(text: string, term: string): Array<[number, number]> {
  const results: Array<[number, number]> = []

  // 中文或混合术语：直接 substring 搜索
  if (/[一-龥]/.test(term)) {
    let index = text.indexOf(term)
    while (index !== -1) {
      results.push([index, index + term.length])
      index = text.indexOf(term, index + 1)
    }
    return results
  }

  // 纯英文/数字/符号术语：用单词边界
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`\\b${escaped}\\b`, 'g')
  let m
  while ((m = regex.exec(text)) !== null) {
    results.push([m.index, m.index + term.length])
  }

  return results
}
