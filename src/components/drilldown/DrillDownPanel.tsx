import { useNavigation } from '../../context/NavigationContext'
import { resolvePath, findNodeById } from '../../utils/helpers'
import { timelineEvents } from '../../data/timelines'
import { industryChain } from '../../data/industryChain'
import { BreadcrumbNav } from './BreadcrumbNav'
import { DetailCard } from './DetailCard'
import { TimelineView } from './TimelineView'
import { RichText } from '../ui/RichText'
import { AnalogyIllustration } from '../illustrations/AnalogyIllustration'
import type { TimelineEvent, ChainNode, ChainSection } from '../../types'

interface DrillDownPanelProps {
  path: string[]
}

export function DrillDownPanel({ path }: DrillDownPanelProps) {
  const { navigateToPath } = useNavigation()
  const { section, node } = resolvePath(path)

  // 只选了 section，没选具体节点：渲染 section 概览
  if (section && !node) {
    return (
      <SectionOverview section={section} path={path} />
    )
  }

  if (!node) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">未找到该节点</p>
          <button
            onClick={() => navigateToPath([])}
            className="mt-4 text-violet-600 font-medium"
          >
            返回首页
          </button>
        </div>
      </div>
    )
  }

  // 找到与该节点相关的时间线事件
  const relatedEvents = timelineEvents.filter(
    (event) => event.relatedNodes.includes(node.id) || node.detailView.timelineEventIds?.includes(event.id)
  )

  // 去重并按日期排序
  const uniqueEvents = Array.from(
    new Map(relatedEvents.map((e) => [e.id, e])).values()
  ).sort((a, b) => a.date.localeCompare(b.date))

  const handleEventClick = (event: TimelineEvent) => {
    // 优先跳到与当前节点不同的关联节点，否则保持当前
    const targetId = event.relatedNodes.find((id) => id !== node.id) || event.relatedNodes[0]
    if (!targetId) return
    const target = findNodeById(targetId)
    if (!target) return
    // 构建路径：找到 target 在产业链中的位置
    const targetPath = buildPathToNode(targetId)
    if (targetPath) {
      navigateToPath(targetPath)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex flex-col">
      <PanelHeader path={path} />

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          <DetailCard node={node} />

          {uniqueEvents.length > 0 && (
            <TimelineView events={uniqueEvents} onEventClick={handleEventClick} />
          )}

          {node.children && node.children.length > 0 && (
            <ChildNodes node={node} />
          )}
        </div>
      </div>
    </div>
  )
}

function PanelHeader({ path }: { path: string[] }) {
  const { goBack } = useNavigation()
  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="返回"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <BreadcrumbNav path={path} />
        </div>
      </div>
    </div>
  )
}

function SectionOverview({ section, path }: { section: ChainSection; path: string[] }) {
  const { navigateToNode } = useNavigation()

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex flex-col">
      <PanelHeader path={path} />

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-4 h-4 rounded-full ${section.colorTheme}`} />
              <h1 className="text-3xl font-bold text-gray-900">{section.title}</h1>
            </div>
            <p className="text-gray-600 text-lg">{section.subtitle}</p>
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">该环节包含的节点</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.nodes.map((node) => (
                <div
                  key={node.id}
                  onClick={() => navigateToNode(node.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      navigateToNode(node.id)
                    }
                  }}
                  className="text-left bg-gray-50 hover:bg-violet-50 rounded-xl p-4 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <AnalogyIllustration analogy={node.analogy} size="sm" />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-violet-700">{node.name}</div>
                      <RichText text={node.shortDescription} className="text-sm text-gray-600 line-clamp-2" stopPropagation />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChildNodes({ node }: { node: ChainNode }) {
  const { navigateToNode } = useNavigation()
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">继续拆解</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {node.children!.map((child) => (
          <div
            key={child.id}
            onClick={() => navigateToNode(child.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                navigateToNode(child.id)
              }
            }}
            className="text-left bg-gray-50 hover:bg-violet-50 rounded-xl p-4 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <AnalogyIllustration analogy={child.analogy} size="sm" />
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-violet-700">{child.name}</div>
                <RichText text={child.shortDescription} className="text-sm text-gray-600 line-clamp-2" stopPropagation />
              </div>
            </div>
          </div>
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
