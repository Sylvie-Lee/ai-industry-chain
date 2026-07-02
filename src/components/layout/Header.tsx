import { useNavigation } from '../../context/NavigationContext'

export function Header() {
  const { goToOverview } = useNavigation()
  return (
    <header className="bg-slate-900/60 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          onClick={goToOverview}
          className="text-xl font-bold font-heading text-slate-100 hover:text-cyan-400 transition-colors tracking-wide"
        >
          🤖 AI 产业链地图
        </button>
        <nav className="text-sm text-slate-400 font-body">
          滑动探索 · 点击拆解
        </nav>
      </div>
    </header>
  )
}
