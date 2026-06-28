import type { ChainNode } from '../types'
import { getAnalogy } from './analogies'

export const downstreamNodes: ChainNode[] = [
  {
    id: 'applications',
    name: '应用场景',
    shortDescription: 'AI 能力落地的“菜单”：聊天、画图、编程、自动驾驶等',
    origin: 'both',
    analogy: getAnalogy('applications'),
    detailView: {
      type: 'concept',
      explanation:
        '应用场景是 AI 技术真正帮到人的地方。同样的底层模型，可以做成聊天机器人、画图工具、代码助手、推荐系统，就像同一间厨房能做出不同菜系。',
      technicalDetails:
        '应用层通常把大模型 API 或开源模型封装成产品，加入用户界面、业务逻辑、数据回流和合规审查。热门方向包括生成式 AI（AIGC）、智能体（Agent）、代码辅助、多模态创作。',
      analogy: getAnalogy('applications'),
      whyItMatters:
        '产业链最终的价值要在应用层实现。应用最接近用户和收入，也是创业机会最多的环节。',
      parameters: [
        { label: '主要方向', value: '对话、搜索、写作、编程、图像/视频生成、音乐、自动驾驶、医疗、教育' },
        { label: '商业模式', value: '订阅、按量计费、企业私有化部署、广告、增值服务' },
      ],
      bestFor:
        '把模型能力转化为具体产品体验，解决真实用户或企业的痛点。',
    },
  },
  {
    id: 'products',
    name: '代表产品',
    shortDescription: 'AI 产业链的“招牌菜”',
    origin: 'both',
    analogy: getAnalogy('products'),
    detailView: {
      type: 'concept',
      explanation:
        '代表产品是 AI 能力最直观的入口。它们把复杂的技术包装成简单的界面，让普通用户也能直接使用 AI。',
      technicalDetails:
        '产品竞争集中在模型能力、交互体验、价格、生态集成。海外产品通常技术领先但国内使用受限；国产产品在中文场景、合规、本地化服务上更有优势。',
      analogy: getAnalogy('products'),
      whyItMatters:
        '产品决定了 AI 技术的普及速度和商业化规模。',
      parameters: [
        { label: '海外代表', value: 'ChatGPT、Claude、Gemini、Midjourney、GitHub Copilot、Perplexity' },
        { label: '国产代表', value: 'DeepSeek App、Kimi Chat、文心一言、通义千问、豆包、可灵' },
      ],
      bestFor:
        '直接面向终端用户或企业客户，提供开箱即用的 AI 服务。',
    },
    children: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        shortDescription: 'OpenAI 推出的对话产品，引爆了生成式 AI 浪潮',
        origin: 'overseas',
        analogy: getAnalogy('chatgpt'),
        detailView: {
          type: 'product',
          explanation:
            'ChatGPT 是 OpenAI 在 2022 年 11 月发布的聊天机器人。它让普通人第一次感受到 AI 可以像人一样自然对话，被认为是生成式 AI 爆发的标志性产品。',
          analogy: getAnalogy('chatgpt'),
          whyItMatters:
            'ChatGPT 让大语言模型从实验室走向大众，推动了整个产业链的投资和应用落地。',
          parameters: [
            { label: '所属公司', value: 'OpenAI', explanation: '美国人工智能研究公司' },
            { label: '发布时间', value: '2022-11' },
            { label: '底层模型', value: 'GPT-3.5 / GPT-4 / GPT-4o / o1 等' },
            { label: '核心能力', value: '对话、写作、翻译、代码、分析' },
          ],
          bestFor: '通用问答、内容创作、学习辅助、代码初稿。',
        },
      },
      {
        id: 'deepseek-app',
        name: 'DeepSeek App',
        shortDescription: '国产高性价比推理助手，以 R1 推理模型闻名',
        origin: 'china',
        analogy: getAnalogy('deepseek'),
        detailView: {
          type: 'product',
          explanation:
            'DeepSeek App 是幻方量化旗下 DeepSeek 推出的 AI 助手。2025 年初，DeepSeek-R1 以极低的训练成本和强大的推理能力引发全球关注，被称为“来自东方的黑马”。',
          analogy: getAnalogy('deepseek'),
          whyItMatters:
            'DeepSeek 证明了国产模型可以用更少的资源追赶顶尖水平，对全球 AI 成本结构和竞争格局产生了重大影响。',
          parameters: [
            { label: '所属公司', value: 'DeepSeek（杭州深度求索）', explanation: '由幻方量化孵化' },
            { label: '代表模型', value: 'DeepSeek-V3 / DeepSeek-R1' },
            { label: '核心能力', value: '推理、数学、代码、长文本' },
            { label: '突出特点', value: '训练成本低、推理能力强、开源' },
          ],
          bestFor: '数学推理、代码生成、复杂问题分析、需要透明思考过程的对话。',
        },
      },
      {
        id: 'kimi-chat',
        name: 'Kimi Chat',
        shortDescription: '月之暗面推出的长文本对话产品',
        origin: 'china',
        analogy: getAnalogy('kimi'),
        detailView: {
          type: 'product',
          explanation:
            'Kimi Chat 是国内最早把“超长上下文”作为核心卖点的产品之一。用户可以直接上传整本书、长篇报告，让 AI 总结、问答、提取信息。',
          analogy: getAnalogy('kimi'),
          whyItMatters:
            '长上下文能力让 AI 从“只能看几页纸”进化到“能读一整本书”，拓展了很多专业场景。',
          parameters: [
            { label: '所属公司', value: '月之暗面（Moonshot AI）' },
            { label: '核心卖点', value: '超长上下文窗口' },
            { label: '典型场景', value: '读论文、读财报、读小说、整理会议纪要' },
          ],
          bestFor: '需要处理长文档、长报告、长篇内容的用户。',
        },
      },
    ],
  },
]
