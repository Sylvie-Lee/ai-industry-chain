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
    <nav className="flex items-center gap-2 text-sm text-slate-400">
      <button
        onClick={goToOverview}
        className="hover:text-cyan-400 transition-colors"
      >
        首页
      </button>
      {labels.map((item) => (
        <span key={item.id} className="flex items-center gap-2">
          <span className="text-slate-600">/</span>
          {item.isLast ? (
            <span className="font-medium text-slate-100 truncate max-w-[180px]">{item.label}</span>
          ) : (
            <button
              onClick={() => navigateToPath(item.path)}
              className="hover:text-cyan-400 transition-colors truncate max-w-[120px]"
            >
              {item.label}
            </button>
          )}
        </span>
      ))}
    </nav>
  )
}
