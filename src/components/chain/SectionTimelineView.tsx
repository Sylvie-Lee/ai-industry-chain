import { useNavigation } from '../../context/NavigationContext'
import type { ChainSection, ChainNode } from '../../types'
import { timelineEvents } from '../../data/industryChain'
import { buildAxisNodes, groupEventsByChild } from '../../utils/layout'
import { TimelineAxis } from './TimelineAxis'

interface SectionTimelineViewProps {
  section: ChainSection
}

export function SectionTimelineView({ section }: SectionTimelineViewProps) {
  const { goToOverview } = useNavigation()

  const color = section.id === 'upstream' ? 'upstream' : section.id === 'midstream' ? 'midstream' : 'downstream'

  // Build lanes:
  // 1. For each top-level node with children, create a lane for its children
  // 2. If no children but has grouped events, create lanes per child group
  // 3. Otherwise single-node lane
  const lanes: { title: string; nodes: ReturnType<typeof buildAxisNodes>; parentNode?: ChainNode }[] = []

  for (const node of section.nodes) {
    if (node.children && node.children.length > 0) {
      lanes.push({
        title: node.name,
        nodes: buildAxisNodes(node.children, timelineEvents),
        parentNode: node,
      })
    } else {
      const grouped = groupEventsByChild(node, timelineEvents)
      if (grouped.length > 0) {
        for (const g of grouped) {
          lanes.push({
            title: `${node.name} · ${g.child.name}`,
            nodes: buildAxisNodes([g.child], timelineEvents),
            parentNode: node,
          })
        }
      } else {
        lanes.push({
          title: node.name,
          nodes: buildAxisNodes([node], timelineEvents),
        })
      }
    }
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#0B0F19]">
      <div className="flex items-center justify-between px-8 py-4 border-b border-slate-700/50 bg-slate-900/40 backdrop-blur-sm flex-none">
        <div className="flex items-center gap-4">
          <button
            onClick={goToOverview}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600/50 text-slate-300 text-sm
              hover:bg-slate-700/50 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回总览
          </button>
          <div>
            <h2 className="text-2xl font-bold font-heading text-white">{section.title}</h2>
            <p className="text-sm text-slate-400">{section.subtitle}</p>
          </div>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded-full border ${getBadgeClass(color)}`}>
          {lanes.length} 条时间轴 · {lanes.reduce((sum, l) => sum + l.nodes.length, 0)} 个节点
        </span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex flex-col">
          <div className="my-auto py-4">
            {lanes.map((lane) => (
              <TimelineAxis
                key={lane.title}
                title={lane.title}
                nodes={lane.nodes}
                color={color}
                sectionId={section.id}
                parentNode={lane.parentNode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function getBadgeClass(color: string) {
  switch (color) {
    case 'upstream': return 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10'
    case 'midstream': return 'border-violet-500/40 text-violet-300 bg-violet-500/10'
    case 'downstream': return 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
    default: return 'border-slate-500/40 text-slate-300 bg-slate-500/10'
  }
}
