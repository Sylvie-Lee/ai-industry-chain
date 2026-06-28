import { useNavigation } from '../../context/NavigationContext'

export function Header() {
  const { goToOverview } = useNavigation()
  return (
    <header className="bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          onClick={goToOverview}
          className="text-xl font-bold text-gray-900 hover:text-violet-600 transition-colors"
        >
          🤖 AI 产业链地图
        </button>
        <nav className="text-sm text-gray-500">
          点击卡片，层层拆解
        </nav>
      </div>
    </header>
  )
}
