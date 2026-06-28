import type { TimelineEvent } from '../../types'
import { RichText } from '../ui/RichText'

interface TimelineItemProps {
  event: TimelineEvent
  onClick?: () => void
}

const significanceStyles: Record<string, string> = {
  low: 'border-gray-200 bg-white',
  medium: 'border-blue-200 bg-blue-50/50',
  high: 'border-violet-200 bg-violet-50/50',
  breakthrough: 'border-amber-200 bg-amber-50',
}

const significanceDot: Record<string, string> = {
  low: 'bg-gray-300',
  medium: 'bg-blue-400',
  high: 'bg-violet-500',
  breakthrough: 'bg-amber-500 animate-pulse-slow',
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-100 text-red-700' },
  overseas: { label: '海外', className: 'bg-blue-100 text-blue-700' },
  both: { label: '全球', className: 'bg-gray-100 text-gray-700' },
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
      className={`relative w-full text-left rounded-xl border p-4 transition-all hover:shadow-md ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } ${significanceStyles[event.significance]}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center pt-1">
          <div className={`w-3 h-3 rounded-full ${significanceDot[event.significance]}`} />
          <div className="w-0.5 h-full bg-gray-200 mt-1" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-gray-400">{event.date}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}>{badge.label}</span>
          </div>
          <h4 className="font-bold text-gray-900">{event.title}</h4>
          <RichText text={event.description} className="text-sm text-gray-600 mt-1" stopPropagation />
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
      <h3 className="text-lg font-bold text-gray-900 mb-4">时间线</h3>
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
