import type { AxisNode } from '../../utils/layout'
import { AnalogyIllustration } from '../illustrations/AnalogyIllustration'

interface ChainNodeCardProps {
  node: AxisNode
  color: 'upstream' | 'midstream' | 'downstream'
  onClick: () => void
  size?: 'lg' | 'md' | 'sm'
  showDate?: boolean
}

const sizeClasses = {
  lg: 'w-64 p-6',
  md: 'w-52 p-5',
  sm: 'w-44 p-4',
}

const colorMap = {
  upstream: {
    hex: '#22d3ee',
    gradient: 'from-cyan-400 to-blue-500',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  },
  midstream: {
    hex: '#c084fc',
    gradient: 'from-violet-400 to-fuchsia-500',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  },
  downstream: {
    hex: '#34d399',
    gradient: 'from-emerald-400 to-teal-500',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-500/15 text-red-300 border-red-500/30' },
  overseas: { label: '海外', className: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  both: { label: '全球', className: 'bg-slate-500/15 text-slate-300 border-slate-500/30' },
}

export function ChainNodeCard({ node, color, onClick, size = 'md', showDate = true }: ChainNodeCardProps) {
  const badge = originBadge[node.origin]
  const theme = colorMap[color]

  return (
    <button
      onClick={onClick}
      data-no-pan
      className={`group relative ${sizeClasses[size]} rounded-2xl border border-slate-700/60 bg-slate-800/50
        backdrop-blur-sm text-left transition-all duration-300 ease-out
        hover:scale-[1.05] focus:outline-none focus-visible:ring-2`}
      style={{
        ['--glow-color' as string]: theme.hex,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${theme.hex}60`
        e.currentTarget.style.boxShadow = `0 0 24px ${theme.hex}40, 0 0 8px ${theme.hex}20`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.boxShadow = ''
      }}
    >
      <div className={`absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b ${theme.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <AnalogyIllustration analogy={node.analogy} size="sm" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={`font-bold text-slate-100 group-hover:text-white transition-colors ${size === 'lg' ? 'text-lg' : 'text-base'}`}>
              {node.name}
            </h3>
          </div>
          <p className={`text-slate-400 line-clamp-2 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            {node.shortDescription}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${badge.className}`}>
              {badge.label}
            </span>
            {showDate && node.dateLabel && (
              <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                {node.dateLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
