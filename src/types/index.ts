export type ChainLevel = 'upstream' | 'midstream' | 'downstream'
export type Origin = 'china' | 'overseas' | 'both'
export type DetailViewType = 'model' | 'technology' | 'concept' | 'product'
export type Significance = 'low' | 'medium' | 'high' | 'breakthrough'

export interface Analogy {
  /** 类比标题，如“模型就像一座图书馆” */
  title: string
  /** 类比正文 */
  text: string
  /** 对应 SVG 组件 key */
  illustrationType: string
  /** Tailwind 颜色类，如 text-blue-500 */
  colorTheme: string
}

export interface Parameter {
  label: string
  value: string | number
  unit?: string
  /** 小白能看懂的解释 */
  explanation?: string
}

export interface ComparisonPoint {
  /** 对比维度，如“专家负载均衡” */
  dimension: string
  /** 本技术/方案表现 */
  us: string
  /** 对比方案表现 */
  them: string
}

export interface TechnologyLink {
  /** 使用了该技术或与之关联的模型/产品名 */
  name: string
  /** 国产/海外 */
  origin: Origin
  /** 怎么用、为什么用 */
  usage: string
}

export interface TimelineEvent {
  id: string
  /** 日期，格式 YYYY-MM 或 YYYY-MM-DD */
  date: string
  title: string
  description: string
  significance: Significance
  /** 关联节点 id */
  relatedNodes: string[]
  /** 国产/海外 */
  origin: Origin
}

export interface DetailView {
  type: DetailViewType
  /** 小白向总体解释 */
  explanation: string
  /** 更技术向的解释 */
  technicalDetails?: string
  /** 类比 */
  analogy: Analogy
  /** 参数列表（模型用） */
  parameters?: Parameter[]
  /** 关键对比：本技术 vs 替代方案 */
  comparison?: {
    opponent: string
    opponentAnalogy?: string
    points: ComparisonPoint[]
    conclusion: string
  }
  /** 使用了该技术/与之关联的模型或产品 */
  usedBy?: TechnologyLink[]
  /** 单从这项技术看，最适合什么场景 */
  bestFor?: string
  /** 为什么重要 */
  whyItMatters: string
  /** 关联时间线事件 id */
  timelineEventIds?: string[]
  /** 子节点（可继续 drill-down） */
  children?: ChainNode[]
}

export interface ChainNode {
  id: string
  name: string
  /** 一句话描述 */
  shortDescription: string
  /** 国产/海外 */
  origin: Origin
  analogy: Analogy
  detailView: DetailView
  /** 可选子节点 */
  children?: ChainNode[]
}

export interface ChainSection {
  id: ChainLevel
  title: string
  subtitle: string
  colorTheme: string
  nodes: ChainNode[]
}

export interface IndustryChain {
  sections: ChainSection[]
}

/** 导航状态 */
export interface NavigationState {
  /** 当前路径，如 ['midstream', 'models', 'deepseek-v3'] */
  path: string[]
  /** 当前视图 */
  view: 'overview' | 'node' | 'detail'
}
