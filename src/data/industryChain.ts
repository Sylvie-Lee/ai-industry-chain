import type { IndustryChain } from '../types'
import { upstreamNodes } from './upstream'
import { midstreamNodes } from './midstream'
import { downstreamNodes } from './downstream'

export const industryChain: IndustryChain = {
  sections: [
    {
      id: 'upstream',
      title: '上游',
      subtitle: '数据、芯片、算力 —— AI 的“原材料”与“厨房”',
      colorTheme: 'bg-blue-500',
      nodes: upstreamNodes,
    },
    {
      id: 'midstream',
      title: '中游',
      subtitle: '模型与关键技术 —— AI 的“大脑”与“菜谱”',
      colorTheme: 'bg-violet-500',
      nodes: midstreamNodes,
    },
    {
      id: 'downstream',
      title: '下游',
      subtitle: '应用与产品 —— AI 端上餐桌的“菜单”与“招牌菜”',
      colorTheme: 'bg-emerald-500',
      nodes: downstreamNodes,
    },
  ],
}

export * from './timelines'
export { upstreamNodes } from './upstream'
export { midstreamNodes } from './midstream'
export { downstreamNodes } from './downstream'
