import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '../../context/NavigationContext'
import type { ChainNode } from '../../types'
import type { AxisNode } from '../../utils/layout'

interface TimelineAxisProps {
  title: string
  nodes: AxisNode[]
  color: 'upstream' | 'midstream' | 'downstream'
  sectionId: string
  parentNode?: ChainNode
}

const colorHex = {
  upstream: '#22d3ee',
  midstream: '#c084fc',
  downstream: '#34d399',
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-500/15 text-red-300 border-red-500/30' },
  overseas: { label: '海外', className: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  both: { label: '全球', className: 'bg-slate-500/15 text-slate-300 border-slate-500/30' },
}

export function TimelineAxis({ title, nodes, color, sectionId, parentNode }: TimelineAxisProps) {
  const { navigateToPath } = useNavigation()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const nodeButtons = Array.from(container.querySelectorAll<HTMLElement>('.timeline-node'))
    if (nodeButtons.length === 0) return

    let rafId: number | null = null
    const updateFocus = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const containerRect = container.getBoundingClientRect()
        const centerX = containerRect.left + containerRect.width / 2
        const maxDistance = containerRect.width / 2 + 80

        nodeButtons.forEach((btn) => {
          const rect = btn.getBoundingClientRect()
          const btnCenter = rect.left + rect.width / 2
          const distance = Math.abs(centerX - btnCenter)
          const focus = Math.max(0, 1 - distance / maxDistance)
          // Strong contrast: center = 1.75x, edges = 0.65x
          const scale = 0.65 + focus * 1.1
          btn.style.setProperty('--focus-scale', scale.toFixed(3))
          // Edges noticeably faded, center fully opaque
          const opacity = 0.35 + focus * 0.65
          btn.style.setProperty('--focus-opacity', opacity.toFixed(2))
        })
      })
    }

    const onScroll = () => {
      setHoveredId(null)
      updateFocus()
    }

    updateFocus()
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateFocus)

    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateFocus)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [nodes])

  if (nodes.length === 0) return null

  const handleNodeClick = (nodeId: string) => {
    if (parentNode) {
      navigateToPath([sectionId, parentNode.id, nodeId])
    } else {
      navigateToPath([sectionId, nodeId])
    }
  }

  return (
    <div className="py-3">
      <div className="flex items-center gap-4 mb-3 px-8">
        <div className={`h-px flex-1 bg-gradient-to-r ${getGradient(color)} opacity-40`} />
        <h3 className="text-sm font-bold font-heading text-slate-400 tracking-widest uppercase whitespace-nowrap">
          {title}
        </h3>
        <div className={`h-px flex-1 bg-gradient-to-l ${getGradient(color)} opacity-40`} />
      </div>

      <div className="relative">
        {/* Timeline track with glow */}
        <div className="absolute top-[68px] left-8 right-8 h-0.5">
          <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(color)} opacity-30 rounded-full`} />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${getGradient(color)} rounded-full animate-flow-pulse`}
            style={{ filter: `blur(2px)`, opacity: 0.2 }}
          />
        </div>

        {/* Scrollable container - min-w-full + justify-center to center short lanes */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar snap-x snap-proximity pb-6 pt-6"
        >
          <div className="flex items-end gap-8 px-12 min-w-full justify-center">
            {nodes.map((node, index) => (
              <>
                {index > 0 && (
                  <FlowArrow key={`arrow-${node.id}`} color={color} />
                )}
                <TimelineNode
                  key={node.id}
                  node={node}
                  color={color}
                  isHovered={hoveredId === node.id}
                  onHover={() => setHoveredId(node.id)}
                  onLeave={() => setHoveredId(null)}
                  onClick={() => handleNodeClick(node.id)}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FlowArrow({ color }: { color: 'upstream' | 'midstream' | 'downstream' }) {
  const hex = colorHex[color]
  return (
    <div className="flex items-center self-end mb-[46px] opacity-50">
      <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
        <line x1="0" y1="6" x2="20" y2="6" stroke={hex} strokeWidth="1.5" strokeDasharray="3 2" />
        <polygon points="20,3 28,6 20,9" fill={hex} />
      </svg>
    </div>
  )
}

function TimelineNode({
  node,
  color,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  node: AxisNode
  color: 'upstream' | 'midstream' | 'downstream'
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onClick: () => void
}) {
  const badge = originBadge[node.origin]
  const hex = colorHex[color]
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (rect) {
      setPopupPos({ x: rect.left + rect.width / 2, y: rect.top - 12 })
    }
    onHover()
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.setProperty('--hover-scale', '1.2')
          e.currentTarget.style.setProperty('--hover-y', '-6px')
          handleMouseEnter()
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('--hover-scale', '1')
          e.currentTarget.style.setProperty('--hover-y', '0px')
          onLeave()
        }}
        style={{
          transform: 'scale(calc(var(--focus-scale, 1) * var(--hover-scale, 1))) translateY(var(--hover-y, 0))',
          opacity: 'var(--focus-opacity, 1)',
        } as React.CSSProperties}
        className={`timeline-node group relative flex flex-col items-center justify-end snap-center shrink-0
          transition-transform duration-100 ease-out
          focus:outline-none`}
      >
        {/* Dot on timeline */}
        <div
          className={`
            relative z-10 w-3.5 h-3.5 rounded-full border-2 border-[#0B0F19] ${getSolidColor(color)}
            transition-all duration-300 ease-out
            group-hover:scale-[1.85] group-hover:shadow-[0_0_22px_rgba(255,255,255,0.35)]
          `}
        />

        {/* Default title below dot */}
        <div className="mt-4 w-36 text-center transition-colors duration-200">
          <div className="text-[15px] font-bold text-slate-200 group-hover:text-white line-clamp-2 leading-tight">
            {node.name}
          </div>
        </div>
      </button>

      {/* Fixed popup - rendered outside scroll container to avoid clipping */}
      <div
        className={`
          fixed z-50 w-60 rounded-2xl border bg-slate-800/95 backdrop-blur-md p-4 shadow-2xl
          text-center pointer-events-none
          transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isHovered ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-95'}
        `}
        style={{
          left: popupPos.x,
          top: popupPos.y,
          transform: `translate(-50%, -100%) ${isHovered ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)'}`,
          borderColor: `${hex}55`,
          boxShadow: `0 16px 50px ${hex}20`,
        }}
      >
        <div className="text-base font-bold text-white leading-tight">{node.name}</div>

        {node.dateLabel && (
          <div className="text-[11px] font-mono text-slate-400 mt-1">{node.dateLabel}</div>
        )}

        <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
          {node.shortDescription}
        </p>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${badge.className}`}>{badge.label}</span>
          <span className="text-[10px] font-medium" style={{ color: hex }}>查看 →</span>
        </div>
      </div>
    </>
  )
}

function getGradient(id: string) {
  switch (id) {
    case 'upstream': return 'from-cyan-400 via-blue-500 to-cyan-400'
    case 'midstream': return 'from-violet-400 via-fuchsia-500 to-violet-400'
    case 'downstream': return 'from-emerald-400 via-teal-500 to-emerald-400'
    default: return 'from-slate-400 to-slate-500'
  }
}

function getSolidColor(id: string) {
  switch (id) {
    case 'upstream': return 'bg-cyan-400'
    case 'midstream': return 'bg-violet-400'
    case 'downstream': return 'bg-emerald-400'
    default: return 'bg-slate-400'
  }
}
