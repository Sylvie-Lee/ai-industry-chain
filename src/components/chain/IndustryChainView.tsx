import { useNavigation } from '../../context/NavigationContext'
import { findSectionById } from '../../utils/helpers'
import { ChainCanvas } from './ChainCanvas'
import { OverviewAxis } from './OverviewAxis'
import { SectionTimelineView } from './SectionTimelineView'

export function IndustryChainView() {
  const { state } = useNavigation()

  // Empty path -> overview of all sections (elastic canvas)
  if (state.path.length === 0) {
    return (
      <ChainCanvas elastic initialScale={1}>
        <div className="flex flex-col items-center justify-center min-w-max h-full py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black font-heading text-white mb-4 tracking-tight">
              AI 产业链互动地图
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-body">
              从上游的“食材与厨房”，到中游的“大脑与菜谱”，再到下游的“菜单与招牌菜”。
              滑动探索，点击任意环节查看时间轴与深度解析。
            </p>
          </div>
          <OverviewAxis />
        </div>
      </ChainCanvas>
    )
  }

  // Single segment path -> section timeline view (native horizontal scroll)
  const section = findSectionById(state.path[0])
  if (section) {
    return <SectionTimelineView section={section} />
  }

  // Fallback
  return (
    <ChainCanvas elastic>
      <div className="text-center">
        <p className="text-slate-400">未找到对应分类</p>
      </div>
    </ChainCanvas>
  )
}
