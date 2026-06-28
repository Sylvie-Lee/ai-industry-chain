import { industryChain } from '../../data/industryChain'
import { ChainSection } from './ChainSection'

export function IndustryChainView() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">AI 产业链互动地图</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          从上游的“食材与厨房”，到中游的“大脑与菜谱”，再到下游的“菜单与招牌菜”。
          点击任意卡片，层层拆解，看懂 AI 是怎么端到端运转的。
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {industryChain.sections.map((section) => (
          <ChainSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}
