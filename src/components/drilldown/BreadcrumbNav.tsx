import { useNavigation } from '../../context/NavigationContext'
import { resolvePath } from '../../utils/helpers'

interface BreadcrumbNavProps {
  path: string[]
}

export function BreadcrumbNav({ path }: BreadcrumbNavProps) {
  const { navigateToPath, goToOverview } = useNavigation()

  if (path.length === 0) return null

  const labels = path.map((id, index) => {
    const partial = path.slice(0, index + 1)
    const resolved = resolvePath(partial)
    return {
      id,
      label:
        resolved.childNode?.name || resolved.node?.name || resolved.section?.title || id,
      path: partial,
      isLast: index === path.length - 1,
    }
  })

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <button
        onClick={goToOverview}
        className="hover:text-violet-600 transition-colors"
      >
        首页
      </button>
      {labels.map((item) => (
        <span key={item.id} className="flex items-center gap-2">
          <span className="text-gray-300">/</span>
          {item.isLast ? (
            <span className="font-medium text-gray-900">{item.label}</span>
          ) : (
            <button
              onClick={() => navigateToPath(item.path)}
              className="hover:text-violet-600 transition-colors"
            >
              {item.label}
            </button>
          )}
        </span>
      ))}
    </nav>
  )
}
