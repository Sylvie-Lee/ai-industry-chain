import type { ChainNode as ChainNodeType } from '../../types'
import { AnalogyIllustration } from '../illustrations/AnalogyIllustration'
import { RichText } from '../ui/RichText'
import { useNavigation } from '../../context/NavigationContext'

interface ChainNodeProps {
  node: ChainNodeType
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-100 text-red-700' },
  overseas: { label: '海外', className: 'bg-blue-100 text-blue-700' },
  both: { label: '全球', className: 'bg-gray-100 text-gray-700' },
}

export function ChainNodeCard({ node }: ChainNodeProps) {
  const { navigateToNode } = useNavigation()
  const badge = originBadge[node.origin]

  return (
    <div
      onClick={() => navigateToNode(node.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          navigateToNode(node.id)
        }
      }}
      className="group text-left w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-5 flex gap-4 items-start cursor-pointer"
    >
      <AnalogyIllustration analogy={node.analogy} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{node.name}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}>{badge.label}</span>
        </div>
        <RichText text={node.shortDescription} className="text-sm text-gray-600 line-clamp-2" stopPropagation />
      </div>
      <svg
        className="w-5 h-5 text-gray-300 group-hover:text-violet-500 transition-colors flex-shrink-0 mt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )
}
