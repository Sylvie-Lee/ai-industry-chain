import type { TimelineEvent } from '../../types'
import { RichText } from '../ui/RichText'

interface TimelineItemProps {
  event: TimelineEvent
  onClick?: () => void
}

const significanceStyles: Record<string, string> = {
  low: 'border-slate-700/50 bg-slate-800/30',
  medium: 'border-blue-500/30 bg-blue-500/10',
  high: 'border-violet-500/30 bg-violet-500/10',
  breakthrough: 'border-amber-500/30 bg-amber-500/10',
}

const significanceDot: Record<string, string> = {
  low: 'bg-slate-500',
  medium: 'bg-blue-400',
  high: 'bg-violet-400',
  breakthrough: 'bg-amber-400 animate-pulse-slow',
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-500/15 text-red-300 border-red-500/30' },
  overseas: { label: '海外', className: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  both: { label: '全球', className: 'bg-slate-500/15 text-slate-300 border-slate-500/30' },
}

export function TimelineItem({ event, onClick }: TimelineItemProps) {
  const badge = originBadge[event.origin]

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
      className={`relative w-full text-left rounded-xl border p-4 transition-all hover:shadow-md hover:brightness-110 ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } ${significanceStyles[event.significance]}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center pt-1">
          <div className={`w-3 h-3 rounded-full ${significanceDot[event.significance]}`} />
          <div className="w-0.5 h-full bg-slate-700 mt-1" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-slate-500">{event.date}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${badge.className}`}>{badge.label}</span>
          </div>
          <h4 className="font-bold text-slate-100">{event.title}</h4>
          <RichText text={event.description} className="text-sm text-slate-400 mt-1" stopPropagation />
        </div>
      </div>
    </div>
  )
}

interface TimelineViewProps {
  events: TimelineEvent[]
  onEventClick?: (event: TimelineEvent) => void
}

export function TimelineView({ events, onEventClick }: TimelineViewProps) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-white mb-4 font-heading">时间线</h3>
      {sorted.map((event) => (
        <TimelineItem
          key={event.id}
          event={event}
          onClick={onEventClick ? () => onEventClick(event) : undefined}
        />
      ))}
    </div>
  )
}
