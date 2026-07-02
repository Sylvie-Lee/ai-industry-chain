import { useNavigation } from '../../context/NavigationContext'
import { industryChain } from '../../data/industryChain'
import { timelineEvents } from '../../data/industryChain'
import { buildAxisNodes } from '../../utils/layout'

const sectionMeta: Record<string, { color: 'upstream' | 'midstream' | 'downstream'; emoji: string; label: string }> = {
  upstream: { color: 'upstream', emoji: '🌊', label: '上游 · 原材料' },
  midstream: { color: 'midstream', emoji: '🧠', label: '中游 · 大脑' },
  downstream: { color: 'downstream', emoji: '🚀', label: '下游 · 应用' },
}

export function OverviewAxis() {
  const { navigateToPath } = useNavigation()

  return (
    <div className="flex items-center gap-8 px-12">
      {industryChain.sections.map((section, index) => {
        const meta = sectionMeta[section.id]
        const sortedNodes = buildAxisNodes(section.nodes, timelineEvents)

        return (
          <div key={section.id} className="flex items-center gap-8">
            <button
              onClick={() => navigateToPath([section.id])}
              data-no-pan
              className="group relative w-72 p-7 rounded-3xl border border-slate-700/60 bg-slate-800/60
                backdrop-blur-sm text-left transition-all duration-300 ease-out
                hover:scale-[1.04] hover:border-opacity-80 focus:outline-none"
              style={{ ['--section-color' as string]: getSectionHex(section.id) }}
              onMouseEnter={(e) => {
                const color = getSectionHex(section.id)
                e.currentTarget.style.borderColor = `${color}70`
                e.currentTarget.style.boxShadow = `0 0 32px ${color}30, inset 0 0 20px ${color}08`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${getGradient(section.id)} opacity-80`} />
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{meta.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold font-heading text-white">{section.title}</h2>
                  <p className="text-xs font-mono text-slate-400 tracking-wider">{meta.label}</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{section.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {sortedNodes.slice(0, 4).map((node) => (
                  <span
                    key={node.id}
                    className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/40"
                  >
                    {node.name}
                  </span>
                ))}
                {sortedNodes.length > 4 && (
                  <span className="text-xs px-2 py-1 rounded-md text-slate-500">+{sortedNodes.length - 4}</span>
                )}
              </div>
            </button>

            {index < industryChain.sections.length - 1 && (
              <div className="flex flex-col items-center">
                <svg width="48" height="24" viewBox="0 0 48 24" className="text-slate-600">
                  <line
                    x1="0" y1="12" x2="44" y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className="animate-flow-dash"
                  />
                  <polygon points="44,8 48,12 44,16" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function getSectionHex(id: string) {
  switch (id) {
    case 'upstream': return '#22d3ee'
    case 'midstream': return '#c084fc'
    case 'downstream': return '#34d399'
    default: return '#94a3b8'
  }
}

function getGradient(id: string) {
  switch (id) {
    case 'upstream': return 'from-cyan-400 to-blue-500'
    case 'midstream': return 'from-violet-400 to-fuchsia-500'
    case 'downstream': return 'from-emerald-400 to-teal-500'
    default: return 'from-slate-400 to-slate-500'
  }
}
