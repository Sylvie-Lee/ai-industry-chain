import { useEffect, useState } from 'react'
import { resolvePath } from '../../utils/helpers'
import { timelineEvents } from '../../data/timelines'
import { industryChain } from '../../data/industryChain'
import { useNavigation } from '../../context/NavigationContext'
import { BreadcrumbNav } from './BreadcrumbNav'
import { DetailCard } from './DetailCard'
import { TimelineView } from './TimelineView'
import type { TimelineEvent, ChainNode } from '../../types'

interface DrillDownPanelProps {
  path: string[]
}

export function DrillDownPanel({ path }: DrillDownPanelProps) {
  const { navigateToPath, goBack, goToOverview } = useNavigation()
  const isOpen = path.length >= 2
  const { node } = resolvePath(path)
  const [isExpanded, setIsExpanded] = useState(false)

  // Reset expanded state when drawer closes
  useEffect(() => {
    if (!isOpen) setIsExpanded(false)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') goBack()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, goBack])

  const relatedEvents = node
    ? timelineEvents.filter(
        (event) => event.relatedNodes.includes(node.id) || node.detailView.timelineEventIds?.includes(event.id)
      )
    : []

  const uniqueEvents = Array.from(
    new Map(relatedEvents.map((e) => [e.id, e])).values()
  ).sort((a, b) => a.date.localeCompare(b.date))

  const handleEventClick = (event: TimelineEvent) => {
    const targetId = event.relatedNodes.find((id) => id !== node?.id) || event.relatedNodes[0]
    if (!targetId) return
    const targetPath = buildPathToNode(targetId)
    if (targetPath) navigateToPath(targetPath)
  }

  return (
    <>
      {/* Backdrop - light tint, does not block left-side interaction */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-500 ease-out pointer-events-none
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-slate-900/98 backdrop-blur-xl
          border-l border-slate-700/50 shadow-[-20px_0_80px_rgba(0,0,0,0.7)]
          flex flex-col transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          ${isExpanded ? 'w-full rounded-l-none' : 'w-[40%] min-w-[320px] max-w-[720px] rounded-l-2xl'}`}
      >
        {/* Subtle left edge glow */}
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-500/20 to-transparent" />

        <PanelHeader path={path} isExpanded={isExpanded} onToggleExpand={() => setIsExpanded((v) => !v)} />

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {!node ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <p className="text-slate-400">未找到该节点</p>
              <button
                onClick={goToOverview}
                className="mt-4 px-4 py-2 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/40 hover:bg-violet-500/30 transition-colors"
              >
                返回首页
              </button>
            </div>
          ) : (
            <div
              className={`px-5 sm:px-6 py-6 space-y-6 transition-all duration-500 ease-out
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <DetailCard node={node} />

              {uniqueEvents.length > 0 && (
                <TimelineView events={uniqueEvents} onEventClick={handleEventClick} />
              )}

              {node.children && node.children.length > 0 && (
                <ChildNodes node={node} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function PanelHeader({ path, isExpanded, onToggleExpand }: { path: string[]; isExpanded: boolean; onToggleExpand: () => void }) {
  const { goBack } = useNavigation()
  return (
    <div className="flex-none border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md">
      <div className="px-5 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="p-2 hover:bg-slate-700/50 rounded-full transition-colors text-slate-400 hover:text-white"
            aria-label="返回"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <BreadcrumbNav path={path} />
          </div>
          <button
            onClick={onToggleExpand}
            className="p-2 hover:bg-slate-700/50 rounded-full transition-colors text-slate-400 hover:text-white"
            aria-label={isExpanded ? '退出全屏' : '全屏'}
            title={isExpanded ? '退出全屏' : '全屏'}
          >
            {isExpanded ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25M15 15v4.5M15 15h4.5M15 15l5.25 5.25" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5M3.75 3.75h4.5M3.75 3.75l5.25 5.25m11.25-5.25v4.5m0-4.5h-4.5m5.25 0l-5.25 5.25M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0l5.25-5.25m11.25 5.25v-4.5m0 4.5h-4.5m5.25 0l-5.25-5.25" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function ChildNodes({ node }: { node: ChainNode }) {
  const { navigateToNode } = useNavigation()
  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5">
      <h3 className="text-lg font-bold font-heading text-white mb-4">继续拆解</h3>
      <div className="grid gap-3">
        {node.children!.map((child) => (
          <button
            key={child.id}
            onClick={() => navigateToNode(child.id)}
            className="text-left bg-slate-700/30 hover:bg-slate-700/60 rounded-xl p-4 transition-colors group border border-slate-600/30 hover:border-slate-500/50"
          >
            <div className="font-semibold text-slate-200 group-hover:text-white">{child.name}</div>
            <p className="text-sm text-slate-400 line-clamp-2 mt-1">{child.shortDescription}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

function buildPathToNode(targetId: string): string[] | null {
  for (const section of industryChain.sections) {
    for (const node of section.nodes) {
      if (node.id === targetId) return [section.id, node.id]
      if (node.children) {
        const child = node.children.find((c) => c.id === targetId)
        if (child) return [section.id, node.id, child.id]
      }
    }
  }
  return null
}
