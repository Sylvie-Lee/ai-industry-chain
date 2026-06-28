import type { ChainNode } from '../types'
import { getAnalogy } from './analogies'

export const midstreamNodes: ChainNode[] = [
  {
    id: 'models',
    name: '大语言模型',
    shortDescription: 'AI 产业链的“图书馆”：能听懂、会表达、可推理的核心大脑',
    origin: 'both',
    analogy: getAnalogy('models'),
    detailView: {
      type: 'concept',
      explanation:
        '大语言模型（LLM）是 AI 产业链的核心。它通过阅读海量文本学会语言规律，能回答问题、写文章、写代码。我们可以把它想象成一座超级图书馆，里面不仅藏书，还有一位能随时调用知识的图书管理员。',
      technicalDetails:
        '大模型通常基于 Transformer 架构，通过“预测下一个词”进行预训练，再用 RLHF/DPO 等方法对齐人类偏好。模型能力随参数规模、数据量和训练算力增长而提升。',
      analogy: getAnalogy('models'),
      whyItMatters:
        '大模型是连接上游数据、算力和下游应用的“中枢”。它的能力边界决定了整个产业链能做什么。',
      parameters: [
        { label: '海外代表', value: 'GPT-4、Claude、Gemini、LLaMA、Mistral' },
        { label: '国产代表', value: 'DeepSeek-V3/R1、通义千问、Kimi、智谱 GLM-4.5/5/5.2、文心一言、豆包' },
        { label: '核心指标', value: '参数规模、上下文长度、推理能力、多模态能力、成本' },
      ],
      bestFor: '作为通用智能底座，支撑对话、搜索、编程、创作等各类应用。',
      timelineEventIds: [
        'chatgpt-rlhf',
        'moe-gpt4',
        'mixtral-moe',
        'mla-intro',
        'sigmoid-gating-intro',
        'grpo-intro',
        'glm-45-release',
        'glm-5-release',
        'glm-52-release',
        'slime-intro',
        'indexshare-intro',
      ],
    },
    children: [
      // 海外模型
      {
        id: 'gpt-4',
        name: 'GPT-4',
        shortDescription: 'OpenAI 发布的多模态大模型，综合能力标杆',
        origin: 'overseas',
        analogy: getAnalogy('gpt4'),
        detailView: {
          type: 'model',
          explanation:
            'GPT-4 是 OpenAI 在 2023 年 3 月发布的大模型。它像一位博学的通才，能写代码、做翻译、分析文件、解数学题。相比 GPT-3.5，它在复杂推理、专业知识和安全性上都有明显提升。',
          technicalDetails:
            'GPT-4  reportedly 采用混合专家（MoE）架构，总参数量巨大，推理时只激活部分参数。它支持文本和图像输入，是早期“多模态大模型”的代表。',
          analogy: getAnalogy('gpt4'),
          whyItMatters: 'GPT-4 确立了 2023 年大模型的能力标杆，推动了企业和开发者广泛采用 AI。',
          parameters: [
            { label: '发布方', value: 'OpenAI' },
            { label: '发布时间', value: '2023-03' },
            { label: '架构', value: 'Transformer / 据传为 MoE', explanation: '混合专家：推理时只调用部分专家，节省算力' },
            { label: '上下文长度', value: '8K / 32K（最初版本）' },
            { label: '突出能力', value: '综合推理、多模态、代码、安全性' },
          ],
          bestFor: '通用复杂任务、企业应用、需要高可靠性的场景。',
        },
      },
      {
        id: 'claude',
        name: 'Claude',
        shortDescription: 'Anthropic 推出的安全对齐型大模型',
        origin: 'overseas',
        analogy: getAnalogy('library'),
        detailView: {
          type: 'model',
          explanation:
            'Claude 是 Anthropic 公司推出的大模型系列，特别注重安全性和有用性。它像一位谨慎又可靠的助手，擅长长文档分析、代码和对话。',
          technicalDetails:
            'Claude 系列基于 Constitutional AI 等方法进行对齐，强调在有用、无害、诚实之间取得平衡。Claude 3 引入多模态，Claude 3.5 Sonnet 在代码和推理上表现突出。',
          analogy: getAnalogy('library'),
          whyItMatters: 'Claude 在安全和长上下文方面推动了行业实践，是 OpenAI 的重要竞争者。',
          parameters: [
            { label: '发布方', value: 'Anthropic' },
            { label: '代表版本', value: 'Claude 3 / 3.5 Sonnet / Opus / Haiku' },
            { label: '上下文长度', value: '200K token（部分版本）' },
            { label: '突出特点', value: '安全性、长上下文、代码能力' },
          ],
          bestFor: '长文档分析、需要高安全性和可控输出的场景。',
        },
      },
      {
        id: 'gemini',
        name: 'Gemini',
        shortDescription: 'Google 的原生多模态大模型系列',
        origin: 'overseas',
        analogy: getAnalogy('multimodal'),
        detailView: {
          type: 'model',
          explanation:
            'Gemini 是 Google DeepMind 推出的多模态大模型，从设计之初就同时训练文本、图像、音频、视频。它像一个五感俱全的人，能同时理解不同类型的信息。',
          technicalDetails:
            'Gemini 1.5 Pro 引入了超长上下文（最高 1M-2M token）和原生多模态能力。Gemini 2.0 进一步提升推理和 Agent 能力。',
          analogy: getAnalogy('multimodal'),
          whyItMatters: 'Gemini 代表了原生多模态和长上下文的技术方向，与 GPT 系列形成差异化竞争。',
          parameters: [
            { label: '发布方', value: 'Google DeepMind' },
            { label: '代表版本', value: 'Gemini 1.0 / 1.5 Pro / 2.0' },
            { label: '上下文长度', value: '1M–2M token（1.5 Pro 长上下文版）' },
            { label: '突出能力', value: '原生多模态、超长上下文、与 Google 生态集成' },
          ],
          bestFor: '需要同时处理文本、图片、音频、视频的多模态任务。',
        },
      },
      {
        id: 'llama',
        name: 'LLaMA',
        shortDescription: 'Meta 开源的大模型系列',
        origin: 'overseas',
        analogy: getAnalogy('library'),
        detailView: {
          type: 'model',
          explanation:
            'LLaMA（Large Language Model Meta AI）是 Meta 发布的开源大模型。它像一本公开的“教科书”，任何人都可以下载、修改和再发布，推动了开源模型生态。',
          technicalDetails:
            'LLaMA 2 开放商用，LLaMA 3 在同等规模下大幅提升性能。开源模型让中小企业和研究者能在本地或私有云上部署大模型。',
          analogy: getAnalogy('library'),
          whyItMatters: 'LLaMA 降低了大模型使用门槛，催生了大量开源衍生模型（如Alpaca、Vicuna、Qwen 早期也受到启发）。',
          parameters: [
            { label: '发布方', value: 'Meta' },
            { label: '代表版本', value: 'LLaMA / LLaMA 2 / LLaMA 3' },
            { label: '开源协议', value: '相对宽松（需遵守 Meta 许可）' },
            { label: '突出特点', value: '开源、可本地部署、生态丰富' },
          ],
          bestFor: '学术研究、私有化部署、预算有限但需要大模型能力的场景。',
        },
      },
      // 国产模型
      {
        id: 'deepseek-v3',
        name: 'DeepSeek-V3',
        shortDescription: '国产高性价比 MoE 大模型',
        origin: 'china',
        analogy: getAnalogy('deepseek'),
        detailView: {
          type: 'model',
          explanation:
            'DeepSeek-V3 是 DeepSeek 在 2024 年底发布的 MoE 大模型。它像一位“精打细算的高手”，用极低的训练成本达到了接近 GPT-4o 的水平，震惊全球 AI 圈。',
          technicalDetails:
            'DeepSeek-V3 采用 MoE 架构，总参数量约 671B，每次前向传播激活约 37B 参数。它创新性地使用了无辅助损失的负载均衡负载均衡策略、Sigmoid 门控和 Multi-head Latent Attention（MLA）等技术，大幅降低了训练和推理成本。',
          analogy: getAnalogy('deepseek'),
          whyItMatters:
            'DeepSeek-V3 证明了国产模型在工程优化上的创新能力，挑战了“只有堆算力才能做大模型”的常识。',
          parameters: [
            { label: '发布方', value: 'DeepSeek（杭州深度求索）' },
            { label: '发布时间', value: '2024-12' },
            { label: '总参数量', value: '约 6710 亿', explanation: '但推理时只激活约 370 亿参数' },
            { label: '激活参数量', value: '约 370 亿' },
            { label: '上下文长度', value: '128K token' },
            { label: '核心技术', value: 'MoE、MLA、Sigmoid 门控、FP8 混合精度训练' },
          ],
          bestFor: '通用对话、代码生成、长文本处理，以及注重成本的部署。',
        },
      },
      {
        id: 'deepseek-r1',
        name: 'DeepSeek-R1',
        shortDescription: '国产开源推理模型，擅长数学和代码',
        origin: 'china',
        analogy: getAnalogy('deepseek'),
        detailView: {
          type: 'model',
          explanation:
            'DeepSeek-R1 是 DeepSeek 在 2025 年初发布的推理模型。它像一位会“把思考过程写出来”的解题高手，在数学、代码、逻辑推理任务上表现出色，而且完全开源。',
          technicalDetails:
            'R1 采用强化学习（GRPO）提升推理能力，不需要大量人工标注的偏好数据。它会显式输出“思考链”（Chain-of-Thought），让用户看到模型是如何一步步得出结论的。',
          analogy: getAnalogy('deepseek'),
          whyItMatters:
            'R1 以开源和高性价比挑战了 OpenAI o1 等闭源推理模型，推动了推理能力的普及。',
          parameters: [
            { label: '发布方', value: 'DeepSeek' },
            { label: '发布时间', value: '2025-01' },
            { label: '训练方法', value: 'GRPO + 冷启动数据 + 多阶段 RL' },
            { label: '突出能力', value: '数学推理、代码竞赛、逻辑分析' },
            { label: '开源协议', value: 'MIT（非常宽松）' },
          ],
          bestFor: '需要深度推理、可解释思考过程、数学和编程任务的场景。',
        },
      },
      {
        id: 'qwen',
        name: '通义千问（Qwen）',
        shortDescription: '阿里云开源/商用大模型系列',
        origin: 'china',
        analogy: getAnalogy('qwen'),
        detailView: {
          type: 'model',
          explanation:
            '通义千问是阿里云推出的多语言大模型，中文能力强，开源版本生态活跃。它像一位“多语言翻译官”，在中文理解和生成上表现优异。',
          technicalDetails:
            'Qwen 系列覆盖从 0.5B 到 100B+ 多个尺寸，包含基座模型、对话模型、多模态模型（Qwen-VL）、代码模型（Qwen-Coder）和数学模型（Qwen-Math）。',
          analogy: getAnalogy('qwen'),
          whyItMatters: 'Qwen 是国产开源模型生态最丰富的系列之一，被全球开发者广泛下载和微调。',
          parameters: [
            { label: '发布方', value: '阿里云' },
            { label: '代表版本', value: 'Qwen / Qwen2 / Qwen2.5 / Qwen3 / Qwen-VL / Qwen-Coder' },
            { label: '突出特点', value: '中文强、尺寸齐全、开源生态好、多模态覆盖全' },
            { label: '开源协议', value: 'Apache 2.0 / Qwen License' },
          ],
          bestFor: '中文场景、多语言任务、私有化部署、多模态应用。',
        },
      },
      {
        id: 'glm-45',
        name: 'GLM-4.5',
        shortDescription: '智谱首款“窄深”MoE 推理模型，专攻代码与推理',
        origin: 'china',
        analogy: getAnalogy('glm45'),
        detailView: {
          type: 'model',
          explanation:
            'GLM-4.5 是智谱 2025 年 8 月发布的窄深 MoE 模型。它的层数比同行多、每层专家更少，像一座“窄而高的塔”，更适合一步一步做复杂推理。智谱认为 Coding 是通往 AGI 的最短路径，因此 GLM-4.5 的每一个设计都围绕推理和代码任务展开。',
          technicalDetails:
            'GLM-4.5 采用 89 层 MoE，总参数量 355B，激活参数 32B，每层 160 个专家，hidden dimension 5120。它使用 Sigmoid 门控和 loss-free 负载均衡，并破天荒地把注意力头数加到 96 个（同等规模模型的 2.5 倍）。训练 loss 没有下降，但 MMLU、BBH 等推理 benchmark 明显提升，说明更多注意力头是一种“推理储备能力”。',
          analogy: getAnalogy('glm45'),
          whyItMatters:
            'GLM-4.5 是智谱“Coding 至上”战略的技术原点：窄深架构、Sigmoid 门控、高注意力头数，这些选择后续被 GLM-5/5.2 继承并放大。',
          parameters: [
            { label: '发布方', value: '智谱 AI（Zhipu）' },
            { label: '发布时间', value: '2025-08' },
            { label: '总参数量', value: '3550 亿' },
            { label: '激活参数量', value: '320 亿' },
            { label: '层数', value: '89', explanation: '比 DeepSeek-V3（58 层）深 53%' },
            { label: '每层专家数', value: '160' },
            { label: '注意力头数', value: '96', explanation: '同等规模模型的约 2.5 倍' },
            { label: '核心卖点', value: '窄深架构、Sigmoid 门控、推理/代码优化' },
          ],
          bestFor: '需要逐步推理的代码任务、数学推导、复杂逻辑分析。',
        },
      },
      {
        id: 'glm-5',
        name: 'GLM-5',
        shortDescription: '智谱面向 Coding Agent 的全栈 MoE 模型',
        origin: 'china',
        analogy: getAnalogy('glm5'),
        detailView: {
          type: 'model',
          explanation:
            'GLM-5 是智谱 2026 年 2 月发布的全栈模型。如果说 GLM-4.5 是“把模型做成适合推理的形状”，GLM-5 就是“把训练、推理、Agent 环境全部打通”。它引入了 MLA、DSA、Slime 异步 RL 等一整套工程创新，目标是用有限算力训练出最强的 Coding Agent。',
          technicalDetails:
            'GLM-5 总参数量 744B，激活参数 40B，75 层，256 专家/层，hidden dimension 6144。它从 GQA 切换到 MLA 以降低 KV-cache，并自研 Muon Split 修复 MLA 与 Muon 优化器的不兼容。训练框架 Slime 把训练引擎和推理引擎解耦，GPU 利用率从 ~30% 提升到 ~80%；TITO Gateway 直接传递原始 token IDs，避免代码被重新分词后破坏缩进和括号边界。',
          analogy: getAnalogy('glm5'),
          whyItMatters:
            'GLM-5 代表智谱从“做模型”转向“做 Coding Agent 系统”。它的很多工程优化（异步 RL、TITO、DP-aware Routing）只有大规模做 Coding Agent 才会遇到。',
          parameters: [
            { label: '发布方', value: '智谱 AI（Zhipu）' },
            { label: '发布时间', value: '2026-02' },
            { label: '总参数量', value: '7440 亿' },
            { label: '激活参数量', value: '400 亿' },
            { label: '层数', value: '75', explanation: '比 GLM-4.5 减少，但仍比 DeepSeek 深 29%' },
            { label: '上下文长度', value: '200K（后续扩展至 1M）' },
            { label: '核心技术', value: 'MLA + Muon Split、DSA、Slime、TITO、分阶段 RL' },
          ],
          bestFor: '长代码仓库理解、Agentic 编程、多轮工程任务。',
        },
      },
      {
        id: 'glm-52',
        name: 'GLM-5.2',
        shortDescription: '智谱“Solid 1M”上下文 Coding 旗舰，Code Arena 全球第一',
        origin: 'china',
        analogy: getAnalogy('glm52'),
        detailView: {
          type: 'model',
          explanation:
            'GLM-5.2 是智谱 2026 年 6 月发布的旗舰模型。它解决了 GLM-5.1“纸面百万上下文”的问题，通过 IndexShare 从 128K 开始重新训练，真正实现了“Solid 1M”——模型在 1M token 上下文中仍能保持精准定位。它在 Code Arena 盲测中排名全球第一，SWE-bench Pro 等长程工程评测上接近 Claude Opus 4.8。',
          technicalDetails:
            'GLM-5.2 在 GLM-5 的 744B/40B MoE 基础上，将 IndexCache 研究成果工程化为 IndexShare：每 4 层 Transformer 共享一个 indexer，在 1M 上下文下 per-token FLOPs 降低 2.9 倍。它支持 1M token 输入 + 128K token 输出，MRCR v2 长上下文评测得分 33.0%（高于 DeepSeek V4-Pro 的 28.3%）。同等工程任务 token 消耗约 170K，比 Claude Opus 4.8 的 ~260K 低 35%。',
          analogy: getAnalogy('glm52'),
          whyItMatters:
            'GLM-5.2 是智谱“Coding 至上”战略的阶段性兑现：用远小于 Anthropic 的算力，在代码 Agent 效率和长程工程任务上做到全球顶尖水平。',
          parameters: [
            { label: '发布方', value: '智谱 AI（Zhipu）' },
            { label: '发布时间', value: '2026-06' },
            { label: '总参数量', value: '7440 亿' },
            { label: '激活参数量', value: '400 亿（激活比例 5.4%）' },
            { label: '上下文长度', value: '1M token 输入 + 128K token 输出' },
            { label: 'Code Arena', value: '全球第一', explanation: '百万用户盲测，不知道背后模型' },
            { label: 'SWE-bench Pro', value: '62.1', explanation: '接近 Claude Opus 4.8（~63）' },
            { label: 'TerminalBench 2.1', value: '81.0', explanation: '接近 Claude Opus 4.8（~83）' },
            { label: 'MRCR v2', value: '33.0%', explanation: 'DeepSeek V4-Pro 28.3%，Claude Opus 4.6 46.9%' },
            { label: '同等任务 token 消耗', value: '~170K', explanation: '比 Claude Opus 4.8 低约 35%' },
          ],
          bestFor: '超大型代码仓库理解、长程软件工程任务、Agentic Engineering。',
        },
      },
      {
        id: 'kimi-model',
        name: 'Kimi 系列',
        shortDescription: '月之暗面的长上下文大模型',
        origin: 'china',
        analogy: getAnalogy('kimi'),
        detailView: {
          type: 'model',
          explanation:
            'Kimi 是月之暗面（Moonshot AI）推出的长文本大模型。它像一位“超长记忆秘书”，能一次性阅读和理解非常长的文档。',
          technicalDetails:
            'Kimi 在上下文长度上持续领先，支持 200K 甚至更长 token 的上下文。它针对长文本的检索、摘要、问答做了专门优化。',
          analogy: getAnalogy('kimi'),
          whyItMatters: '长上下文能力让大模型能处理整本书、长篇报告、大量聊天记录，拓展了专业应用边界。',
          parameters: [
            { label: '发布方', value: '月之暗面（Moonshot AI）' },
            { label: '核心卖点', value: '超长上下文窗口' },
            { label: '上下文长度', value: '200K+ token' },
            { label: '典型场景', value: '读论文、读财报、读小说、整理会议纪要' },
          ],
          bestFor: '长文档理解、知识库问答、需要记忆大量上下文的对话。',
        },
      },
      {
        id: 'wenxin',
        name: '文心一言',
        shortDescription: '百度推出的中文大模型产品',
        origin: 'china',
        analogy: getAnalogy('library'),
        detailView: {
          type: 'model',
          explanation:
            '文心一言是百度推出的知识增强大语言模型。它像一位熟悉中文互联网和百科知识的助手，能对话、写作、画图、生成 PPT。',
          technicalDetails:
            '文心大模型依托百度多年的搜索和知识图谱积累，强调知识增强和多模态生成。文心一言是面向 C 端的产品形态。',
          analogy: getAnalogy('library'),
          whyItMatters: '文心一言是国内最早一批对标 ChatGPT 的产品，推动了中文大模型市场竞争。',
          parameters: [
            { label: '发布方', value: '百度' },
            { label: '代表版本', value: '文心一言 / 文心大模型 4.0' },
            { label: '突出特点', value: '中文知识、搜索增强、多模态生成' },
          ],
          bestFor: '中文搜索问答、知识查询、办公辅助。',
        },
      },
    ],
  },
  {
    id: 'algorithms',
    name: '关键技术',
    shortDescription: '让模型更聪明、更快、更省资源的“菜谱”',
    origin: 'both',
    analogy: getAnalogy('algorithms'),
    detailView: {
      type: 'concept',
      explanation:
        '关键技术是决定模型“怎么学、怎么想、怎么省资源”的核心方法。如果把模型比作图书馆，关键技术就是图书馆的编目规则、检索方法和节能方案。',
      technicalDetails:
        '从 ChatGPT 时代开始，MoE、RLHF、长上下文、多模态、高效注意力等关键技术推动了模型能力飞跃。每项技术背后都有国产和海外不同的实现路线。',
      analogy: getAnalogy('algorithms'),
      whyItMatters:
        '技术路线决定了模型的成本、能力和适用场景。掌握这些技术，才能真正理解不同模型的差异。',
      bestFor: '支撑模型能力提升、降低成本、拓展应用场景。',
    },
    children: [
      {
        id: 'moe',
        name: 'MoE（混合专家）',
        shortDescription: '每次只调用一部分专家，省算力做大模型',
        origin: 'both',
        analogy: getAnalogy('moe'),
        detailView: {
          type: 'technology',
          explanation:
            'MoE（Mixture of Experts）把大模型拆成很多“专家子网络”。处理每个任务时，只唤醒最相关的几位专家，而不是让整个大脑全速运转。这就像一家餐厅有寿司师傅、川菜大厨、甜点师，来什么客人就唤醒对应的厨师。',
          technicalDetails:
            'MoE 通常包含一个“路由网络”来决定每个输入 token 应该由哪些专家处理。通过门控机制（gating）打分，选择 top-k 个专家。总参数量可以很大，但激活参数量小，推理成本更低。',
          analogy: getAnalogy('moe'),
          whyItMatters:
            'MoE 让模型在保持巨大知识容量的同时，推理成本可控，是 GPT-4、DeepSeek-V3 等顶尖模型的核心架构。',
          comparison: {
            opponent: 'Dense（稠密模型）',
            opponentAnalogy: '所有厨师同时上班，无论来什么客人都全员待命',
            points: [
              {
                dimension: '推理成本',
                us: '只激活部分专家，单位 token 计算量更低',
                them: '每次前向传播激活全部参数，成本高',
              },
              {
                dimension: '模型容量',
                us: '总参数量可以很大，记忆能力强',
                them: '同样激活参数下，总容量受限制',
              },
              {
                dimension: '负载均衡',
                us: '需要精心设计，否则部分专家会“摸鱼”或“过劳”',
                them: '不存在专家选择问题',
              },
            ],
            conclusion:
              '想做大容量又要省推理成本，选 MoE；想要简单稳定、对小规模任务更可控，选 Dense。',
          },
          usedBy: [
            { name: 'GPT-4（据传）', origin: 'overseas', usage: '提升模型容量同时控制推理成本' },
            { name: 'Mixtral 8x7B/8x22B', origin: 'overseas', usage: '开源 MoE 的代表，8 个专家选 2 个' },
            { name: 'DeepSeek-V2/V3', origin: 'china', usage: 'Sigmoid 门控 + 无辅助损失负载均衡，大幅降低训练成本' },
            { name: 'GLM-4.5', origin: 'china', usage: '窄深 MoE（89 层），专攻推理/代码' },
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: '744B/40B 窄深 MoE，持续优化专家利用率' },
            { name: 'Qwen-MoE', origin: 'china', usage: '阿里推出的 MoE 版本，探索国产 MoE 路线' },
          ],
          bestFor:
            '需要大参数量、强记忆能力，但又希望推理成本可控的场景。',
        },
      },
      {
        id: 'sigmoid-gating',
        name: 'Sigmoid 门控',
        shortDescription: 'DeepSeek 提出的专家路由打分方式',
        origin: 'china',
        analogy: getAnalogy('sigmoidGating'),
        detailView: {
          type: 'technology',
          explanation:
            '在 MoE 中，“门控”决定每个输入应该交给哪些专家处理。传统 Softmax 门控像“强制分蛋糕”——必须把 100% 的概率分完，容易让热门专家太累、冷门专家太闲。Sigmoid 门控则像“独立开关”——每个专家单独打分，可以同时选多个，也可以一个都不选。',
          technicalDetails:
            'Softmax 的输出强制和为 1，导致路由分数高度集中；Sigmoid 把每个专家视为二元选择问题，输出 0–1 之间的独立概率，天然更适合多标签选择。DeepSeek 在 V2/V3 中使用 Sigmoid 门控配合无辅助损失的负载均衡策略，让专家利用率更均衡。',
          analogy: getAnalogy('sigmoidGating'),
          whyItMatters:
            '门控设计直接影响 MoE 的负载均衡和训练稳定性。Sigmoid 门控是 DeepSeek 实现低成本高效 MoE 的关键创新之一。',
          comparison: {
            opponent: 'Softmax 门控',
            opponentAnalogy: '来了订单必须把 100% 的工作量拆给所有厨师',
            points: [
              {
                dimension: '概率约束',
                us: '每个专家独立打分，不需要总和为 1',
                them: '输出必须总和为 1，天然倾向少数高分专家',
              },
              {
                dimension: '专家负载',
                us: '更容易分散到多个专家，避免“明星专家”垄断',
                them: '容易让个别专家承担大部分工作，其他专家闲置',
              },
              {
                dimension: '多选能力',
                us: '天然支持“选多个专家”或“不选”',
                them: '虽然也能选 top-k，但分数分布偏向头部',
              },
            ],
            conclusion:
              '专家数量多、希望负载均衡、需要细粒度激活时，Sigmoid 门控更合适；简单场景下 Softmax 仍是主流。',
          },
          usedBy: [
            { name: 'DeepSeek-V2', origin: 'china', usage: '首次引入 Sigmoid 门控到 MoE 路由' },
            { name: 'DeepSeek-V3', origin: 'china', usage: '继续使用并优化 Sigmoid 门控' },
            { name: 'DeepSeek-R1', origin: 'china', usage: '基于 V3 架构，继承了其路由机制' },
            { name: 'GLM-4.5 / GLM-5 / GLM-5.2', origin: 'china', usage: '采用 loss-free balance routing + Sigmoid，适配窄深 MoE 的代码推理场景' },
          ],
          bestFor:
            '专家数量多、希望避免路由坍塌、追求负载均衡的 MoE 架构。',
        },
      },
      {
        id: 'mla',
        name: 'MLA（多头潜在注意力）',
        shortDescription: 'DeepSeek 提出的高效注意力机制',
        origin: 'china',
        analogy: getAnalogy('mla'),
        detailView: {
          type: 'technology',
          explanation:
            'MLA（Multi-head Latent Attention）是 DeepSeek 提出的一种注意力机制。传统注意力需要保存很长的“笔记”才能回忆前文；MLA 把笔记压缩成几页“摘要”，需要时再展开。这样推理时占用的显存更少、速度更快。',
          technicalDetails:
            '标准 MHA（Multi-Head Attention）需要缓存完整的 Key/Value，显存随上下文长度线性增长。MLA 通过低秩压缩（low-rank compression）把 KV 缓存压缩到更小的潜在向量，显著减少推理内存占用。它还与 DeepSeek-V2/V3 的 MoE 架构协同，进一步降低成本。',
          analogy: getAnalogy('mla'),
          whyItMatters:
            'KV 缓存是长上下文推理的主要显存瓶颈。MLA 让长文本推理更便宜、更快，是 DeepSeek 实现高性价比的核心技术之一。',
          comparison: {
            opponent: 'MHA（标准多头注意力）',
            opponentAnalogy: '学生把整本书抄下来以备考试',
            points: [
              {
                dimension: 'KV 缓存大小',
                us: '通过低秩压缩，显存占用显著降低',
                them: '需要完整缓存每层的 Key/Value，显存随长度线性增长',
              },
              {
                dimension: '长文本推理',
                us: '更适合长上下文，成本低',
                them: '长文本时显存压力巨大',
              },
              {
                dimension: '实现复杂度',
                us: '需要额外压缩/解压缩矩阵',
                them: '实现简单，是 Transformer 原始方案',
              },
            ],
            conclusion:
              '长上下文推理、重视成本和吞吐时，MLA 是优秀选择；简单短文本场景 MHA 仍然够用。',
          },
          usedBy: [
            { name: 'DeepSeek-V2', origin: 'china', usage: '首次提出 MLA，显著降低 KV 缓存' },
            { name: 'DeepSeek-V3', origin: 'china', usage: '继承并优化 MLA' },
            { name: 'DeepSeek-R1', origin: 'china', usage: '推理模型同样受益于 MLA 的高效 KV 缓存' },
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: '从 GQA 切换到 MLA，并自研 Muon Split 修复与 Muon 优化器的不兼容' },
          ],
          bestFor:
            '长上下文推理、高并发服务、显存受限的部署环境。',
        },
      },
      {
        id: 'rlhf',
        name: 'RLHF / DPO / GRPO',
        shortDescription: '让模型输出更符合人类偏好的训练方法',
        origin: 'both',
        analogy: getAnalogy('rlhf'),
        detailView: {
          type: 'technology',
          explanation:
            '模型先通过海量数据学会“说话”，但不一定知道什么回答是人类喜欢的。RLHF（基于人类反馈的强化学习）就像家长教孩子懂礼貌：先让模型尝试回答，再由人类打分，模型根据分数调整自己。',
          technicalDetails:
            'RLHF 通常包括三步：1）监督微调（SFT）；2）训练奖励模型（Reward Model）对人类偏好打分；3）用 PPO 等强化学习算法优化策略。DPO 省去了奖励模型，直接用偏好数据优化。GRPO 则是 DeepSeek-R1 使用的组相对策略优化，不需要单独的 Critic 模型，靠一组答案的相对奖励来训练。',
          analogy: getAnalogy('rlhf'),
          whyItMatters:
            '对齐技术决定了模型是否 helpful、harmless、honest。它是 ChatGPT 等产品体验优秀的重要原因。',
          comparison: {
            opponent: '纯监督微调（SFT）',
            opponentAnalogy: '只让学生背答案，不教什么答案更好',
            points: [
              {
                dimension: '反馈粒度',
                us: '能利用“答案 A 比 B 更好”的相对偏好',
                them: '只能利用“标准答案”',
              },
              {
                dimension: '训练复杂度',
                us: 'RLHF 需要奖励模型和 RL，较复杂；DPO 简化；GRPO 进一步降低依赖',
                them: '实现简单，但天花板低',
              },
              {
                dimension: '适用场景',
                us: '对话产品、需要安全可控的输出',
                them: '基础能力学习、格式化任务',
              },
            ],
            conclusion:
              '想做高质量对话产品，必须做对齐；DeepSeek-R1 的 GRPO 为推理模型提供了新的对齐路径。',
          },
          usedBy: [
            { name: 'ChatGPT / GPT-4', origin: 'overseas', usage: 'OpenAI 用 RLHF 大幅提升对话体验' },
            { name: 'Claude', origin: 'overseas', usage: 'Constitutional AI + RLHF 强调安全' },
            { name: 'DeepSeek-R1', origin: 'china', usage: 'GRPO 实现推理能力自我进化，减少人工偏好标注' },
            { name: '大多数国产对话模型', origin: 'china', usage: '采用 RLHF 或 DPO 进行人类偏好对齐' },
          ],
          bestFor:
            '让模型输出更安全、更有用、更符合人类表达习惯，是产品化的关键一步。',
        },
      },
      {
        id: 'long-context',
        name: '长上下文',
        shortDescription: '让模型一次记住更多内容',
        origin: 'both',
        analogy: getAnalogy('longContext'),
        detailView: {
          type: 'technology',
          explanation:
            '长上下文技术让模型一次能“读”很长的文本。普通模型像只能看几页纸的读者；长上下文模型像能读完一整本书还能记住伏笔的人。',
          technicalDetails:
            '上下文长度受注意力计算复杂度和 KV 缓存限制。常用优化包括：稀疏注意力、滑动窗口、外推位置编码、环形注意力、KV 缓存压缩（如 MLA）。长上下文对 Agent、RAG、代码库理解等场景至关重要。',
          analogy: getAnalogy('longContext'),
          whyItMatters:
            '上下文长度是模型能力的“内存”指标。越长，模型能处理的任务越复杂。',
          comparison: {
            opponent: '短上下文',
            opponentAnalogy: '只能看一页纸的读者',
            points: [
              {
                dimension: '信息记忆',
                us: '能记住整本书、长报告、大量聊天记录',
                them: '很快遗忘前面的内容',
              },
              {
                dimension: '应用场景',
                us: '长篇小说分析、代码库理解、Agent 长任务',
                them: '简短问答、单轮翻译',
              },
              {
                dimension: '成本',
                us: '推理成本和显存更高，需要专门优化',
                them: '成本较低',
              },
            ],
            conclusion:
              '需要理解长材料、做复杂多步任务时，长上下文必不可少；简单短对话用短上下文更经济。',
          },
          usedBy: [
            { name: 'Claude 3', origin: 'overseas', usage: '200K 上下文窗口' },
            { name: 'Gemini 1.5 Pro', origin: 'overseas', usage: '1M–2M token 超长上下文' },
            { name: 'Kimi', origin: 'china', usage: '国产长上下文代表，200K+ token' },
            { name: 'GLM-4-9B', origin: 'china', usage: '长文本版本支持 128K+ context' },
            { name: 'DeepSeek-V3', origin: 'china', usage: '128K context，配合 MLA 降低长文本成本' },
          ],
          bestFor:
            '长文档问答、代码库理解、Agent 长程任务、会议纪要整理。',
        },
      },
      {
        id: 'multimodal',
        name: '多模态',
        shortDescription: '让模型同时理解文字、图像、音频、视频',
        origin: 'both',
        analogy: getAnalogy('multimodal'),
        detailView: {
          type: 'technology',
          explanation:
            '多模态让 AI 不只看得懂文字，还能看图、听声音、看视频。它就像一个五感俱全的人，能同时理解不同类型的信息。',
          technicalDetails:
            '多模态模型通常把图像、音频等编码成类似 token 的表示，再交给 Transformer 统一处理。原生多模态（如 Gemini、GPT-4o）从训练初期就融合多种模态；拼接式方案则先分别处理再融合。',
          analogy: getAnalogy('multimodal'),
          whyItMatters:
            '真实世界信息是多种模态并存的。多模态让 AI 更接近人类感知方式，解锁图像理解、视频分析、机器人等应用。',
          comparison: {
            opponent: '单模态（纯文本）',
            opponentAnalogy: '只能通过文字了解世界的人',
            points: [
              {
                dimension: '信息来源',
                us: '文本、图像、音频、视频统一理解',
                them: '只能处理文字',
              },
              {
                dimension: '应用场景',
                us: '看图说话、视频分析、自动驾驶、机器人',
                them: '聊天、写作、代码',
              },
              {
                dimension: '训练难度',
                us: '需要多模态数据对齐，更复杂',
                them: '数据获取和训练相对简单',
              },
            ],
            conclusion:
              '需要理解图像、音频、视频时选多模态；纯文字任务用单模态更经济。',
          },
          usedBy: [
            { name: 'GPT-4o / GPT-4V', origin: 'overseas', usage: 'OpenAI 多模态旗舰' },
            { name: 'Gemini 1.5 / 2.0', origin: 'overseas', usage: '原生多模态 + 长上下文' },
            { name: 'Qwen-VL', origin: 'china', usage: '阿里开源多模态模型' },
            { name: '可灵 / 即梦', origin: 'china', usage: '视频生成多模态应用' },
          ],
          bestFor:
            '图像理解、视频分析、跨模态生成、机器人感知、富媒体内容创作。',
        },
      },
      {
        id: 'dsa',
        name: 'DSA（动态稀疏注意力）',
        shortDescription: '只关注重要 token，长上下文注意力计算减半',
        origin: 'both',
        analogy: getAnalogy('dsa'),
        detailView: {
          type: 'technology',
          explanation:
            'DSA（Dynamic Sparse Attention）像舞台上的聚光灯：台上演员（token）很多，但它只照亮最重要的几位。这样模型在长文本中做注意力时，不用给全场打光，计算量大幅降低。',
          technicalDetails:
            'DSA 通过一个轻量级 indexer 为每个 token 挑选出最重要的 top-k（如 2048 个）token，只在这些 token 之间做注意力计算。DeepSeek 首创 DSA，智谱在 GLM-5/5.2 中采用并进一步优化。相比滑动窗口（SWA）和线性注意力，DSA 被智谱验证为“在长上下文精细检索任务上几乎无损”的方案。',
          analogy: getAnalogy('dsa'),
          whyItMatters:
            '全量注意力的计算成本随上下文长度平方增长。DSA 让 128K–1M 上下文的推理在 GPU 成本上变得可行，是长代码仓库 Agent 的基础设施。',
          comparison: {
            opponent: '全量注意力（Full Attention）',
            opponentAnalogy: '给全场每个演员都单独打光',
            points: [
              {
                dimension: '计算量',
                us: 'O(L×k)，k 远小于 L，长序列下降 1.5–2×',
                them: 'O(L²)，随长度平方增长',
              },
              {
                dimension: '精度',
                us: '被智谱验证为在精细检索任务上几乎无损',
                them: '无精度损失，但成本极高',
              },
              {
                dimension: 'Indexer 开销',
                us: '仍需 O(L²) 的 indexer，IndexShare 可再降 75%',
                them: '无 indexer',
              },
            ],
            conclusion:
              '长上下文、需要精准定位细节时，DSA 是效率和精度的优秀平衡；不计成本追求绝对精度可选全量注意力。',
          },
          usedBy: [
            { name: 'DeepSeek-V3.2', origin: 'china', usage: 'DSA 首创者，支持 1M 上下文' },
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: '采用 DSA 并生产部署 IndexShare，实现 Solid 1M 上下文' },
          ],
          bestFor:
            '长代码仓库、长文档问答、任何需要在超长文本中精准检索细节的场景。',
        },
      },
      {
        id: 'index-share',
        name: 'IndexShare / IndexCache',
        shortDescription: '让 DSA 的“聚光灯目录”少查几层',
        origin: 'china',
        analogy: getAnalogy('indexShare'),
        detailView: {
          type: 'technology',
          explanation:
            'DSA 需要 constantly 查“哪些 token 重要”的目录（indexer）。IndexShare 发现相邻层查到的目录高度重叠，于是让每 4 层书架共用一张索引卡，不用每层都重新查。',
          technicalDetails:
            'IndexCache 是智谱 2025 年发表的研究：相邻 Transformer 层的 top-k 选择重叠度达 70–100%，因此只需保留 1/4 的 indexer 即可。GLM-5.2 将其工程化为 IndexShare：每 4 层共享一个 indexer，在 1M 上下文下 per-token FLOPs 降低 2.9 倍，prefill 速度提升最高 1.82×。',
          analogy: getAnalogy('indexShare'),
          whyItMatters:
            'DSA 的 indexer 本身在长序列下仍是瓶颈（200K 时占 81% prefill 时间）。IndexShare 让“1M 上下文 Coding Agent”从技术上可行变成商业上可行。',
          comparison: {
            opponent: '每层独立 indexer',
            opponentAnalogy: '每层书架都重新做一套索引卡',
            points: [
              {
                dimension: '计算量',
                us: '每 4 层共享，indexer 计算减少 75%',
                them: '每层独立，冗余度高',
              },
              {
                dimension: '精度影响',
                us: '相邻层 top-k 高度重叠，可忽略',
                them: '精度最高，但成本也最高',
              },
              {
                dimension: '工程复杂度',
                us: '需要重新训练模型以适配共享 indexer',
                them: '实现简单',
              },
            ],
            conclusion:
              '超大规模上下文（1M 级别）必须做 IndexShare 级别的优化，否则推理成本不可接受。',
          },
          usedBy: [
            { name: 'GLM-5.2', origin: 'china', usage: '生产部署 IndexShare，实现 Solid 1M 上下文' },
          ],
          bestFor:
            '1M 级超长上下文推理，尤其是需要降低 per-token 成本的大规模服务。',
        },
      },
      {
        id: 'muon-split',
        name: 'Muon Split',
        shortDescription: '让 MLA 与 Muon 优化器和平共处',
        origin: 'china',
        analogy: getAnalogy('muonSplit'),
        detailView: {
          type: 'technology',
          explanation:
            'Muon 是一种收敛更快的优化器，很适合 MoE；MLA 是省显存的注意力机制。但两者原本“合不来”——就像大积木塞不进小盒子。Muon Split 把大矩阵拆成小块，既保留了 Muon 的优势，又兼容了 MLA。',
          technicalDetails:
            '原版 MLA 把 KV 压缩到一个较大的潜在矩阵中，与 Muon 的矩阵正交化操作不兼容。智谱自研 Muon Split：把矩阵拆成多个小矩阵，对每个小矩阵独立做正交化。实验显示修复后 MLA 的性能可以追平 GQA-8。',
          analogy: getAnalogy('muonSplit'),
          whyItMatters:
            '这个修复让智谱能在保持 MLA 显存优势的同时，继续用收敛更快的 Muon 优化器训练大模型，是“采纳 + 适配 + 改进”模式的典型例子。',
          usedBy: [
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: '自研修复 MLA 与 Muon 优化器不兼容问题' },
          ],
          bestFor:
            '需要同时享受 MLA 显存节省和 Muon 优化器收敛优势的训练场景。',
        },
      },
      {
        id: 'slime',
        name: 'Slime（异步 Agent RL 框架）',
        shortDescription: '让 GPU 在 Agent RL 中不再“空等”',
        origin: 'china',
        analogy: getAnalogy('slime'),
        detailView: {
          type: 'technology',
          explanation:
            '传统 Agent RL 中，GPU 经常要等待 Agent 完成长程任务（读代码 → 定位 bug → 写修复 → 跑测试）才能继续训练。Slime 把训练引擎和推理引擎完全解耦，就像餐厅前台和后厨分开：前台不断接待客人，后厨同时炒菜，两边不用互相等。',
          technicalDetails:
            'Slime 将 Megatron（训练）和 SGLang（推理）解耦成异步架构，并支持 1000+ 并发编程沙箱、TITO Gateway（直接传 token IDs）、确定性 top-k（适配 DSA）、DP-aware Routing 等 Coding 专项设计。GPU 利用率从同步 RL 的 ~30% 提升到 ~80%。',
          analogy: getAnalogy('slime'),
          whyItMatters:
            '在算力只有 Anthropic 1/50 的前提下，把 GPU 利用率从 30% 拉到 80%，等效于获得 2.5 倍虚拟算力。这是智谱用有限资源追赶顶尖模型的关键工程。',
          comparison: {
            opponent: '同步 RL 框架',
            opponentAnalogy: '厨师等客人点完单、吃完、付完账才做下一桌',
            points: [
              {
                dimension: 'GPU 利用率',
                us: '~80%+',
                them: '~30%',
              },
              {
                dimension: '任务延迟敏感度',
                us: '低，推理和训练互不阻塞',
                them: '高，长程 Agent 任务会拖慢整个批次',
              },
              {
                dimension: 'Coding 专项优化',
                us: 'TITO、确定性 top-k、DP-aware Routing 等',
                them: '通用设计',
              },
            ],
            conclusion:
              '做大规模 Coding Agent RL 时，异步解耦是必要工程；简单短任务可用同步框架。',
          },
          usedBy: [
            { name: 'GLM-4.5 / GLM-5 / GLM-5.2', origin: 'china', usage: '智谱自研并开源的异步 Agent RL 框架' },
          ],
          bestFor:
            '长程 Agent RL 训练，尤其是需要高并发编程环境、严格 token 一致性的 Coding 任务。',
        },
      },
      {
        id: 'tito',
        name: 'TITO Gateway',
        shortDescription: '保证代码 token 在训练中不被“重新复印变形”',
        origin: 'china',
        analogy: getAnalogy('tito'),
        detailView: {
          type: 'technology',
          explanation:
            '传统 RL 中，Agent 生成的文本传回训练端后会被重新分词（text-in-text-out），这对对话任务影响不大，但对代码是致命的：缩进、括号、分号的 token 边界可能改变，导致训练信号与实际行为错位。TITO 直接传递原始 token IDs，就像把建筑图纸原封不动地传过去，不让复印过程变形。',
          technicalDetails:
            'TITO（Token-In-Token-Out）Gateway 在 Slime 框架中直接传递 token ID 序列，而不是解码成文本后再重新 tokenize。这消除了 re-tokenization 带来的边界错位，对需要精确字符级匹配的代码任务至关重要。',
          analogy: getAnalogy('tito'),
          whyItMatters:
            '这个优化只对 Coding Agent 有意义，通用对话模型不需要这种精度。它是智谱“Coding 专项”战略的又一体现。',
          comparison: {
            opponent: 'Text-in-Text-Out',
            opponentAnalogy: '把图纸扫描成图片再重新描一遍',
            points: [
              {
                dimension: 'Token 边界精度',
                us: '100% 保留原始 token IDs',
                them: '重新分词可能改变缩进、括号等边界',
              },
              {
                dimension: '对代码训练影响',
                us: '避免奖励信号与生成行为错位',
                them: '可能破坏 step alignment',
              },
              {
                dimension: '适用场景',
                us: '代码 Agent RL',
                them: '通用对话、文本生成',
              },
            ],
            conclusion:
              '做代码 Agent RL 时必须保证 token 一致性；通用文本任务可用更简单的 text 传输。',
          },
          usedBy: [
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: 'Slime 框架中的 token 精确传输组件' },
          ],
          bestFor:
            '需要精确 token 边界保障的代码 Agent 强化学习训练。',
        },
      },
      {
        id: 'cross-stage-distillation',
        name: '跨阶段在线蒸馏',
        shortDescription: '防止通用 RL“冲淡”推理和编程能力',
        origin: 'china',
        analogy: getAnalogy('crossStageDistillation'),
        detailView: {
          type: 'technology',
          explanation:
            '模型先学推理、再学编程、最后学通用对话。最后的通用阶段可能会让前面的核心能力“遗忘”。跨阶段在线蒸馏就像毕业前把所有老师的本事再复习整合一遍，确保新学的通用知识不冲淡推理和编程能力。',
          technicalDetails:
            'GLM-5 的后训练顺序是：SFT → Reasoning RL → Agentic RL → General RL → 跨阶段蒸馏。蒸馏阶段用前面各阶段的模型作为“老师”，优势直接来自与老师模型的差距，因此可以把 group size 降到 1，batch size 上到 1024，同时缓解灾难性遗忘。',
          analogy: getAnalogy('crossStageDistillation'),
          whyItMatters:
            '如果通用 RL 后推理/编程能力下降，整个“Coding 至上”战略就失败了。跨阶段蒸馏是确保战略不被颠覆的“保险机制”。',
          usedBy: [
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: '后训练最后阶段防止能力遗忘' },
          ],
          bestFor:
            '多阶段后训练，尤其是需要保持核心能力不被通用化阶段侵蚀的模型。',
        },
      },
      {
        id: 'dp-aware-routing',
        name: 'DP-aware Routing',
        shortDescription: '同一个 Agent 固定同一个 GPU，复用 KV-cache',
        origin: 'china',
        analogy: getAnalogy('dpAwareRouting'),
        detailView: {
          type: 'technology',
          explanation:
            'Coding Agent 会针对同一个代码仓库进行多轮交互。如果每轮请求随机分配到不同 GPU，之前缓存的上下文（KV-cache）就作废了。DP-aware Routing 让同一个 Agent 的所有轮次都落在同一块 GPU 上，像让同一个客人固定由同一个服务员接待。',
          technicalDetails:
            'DP-aware Routing 把所有属于同一个 Agent 实例的请求路由到同一个数据并行 rank，消除跨 rank 的 cache miss。这样 prefill 成本从“重新计算全部上下文”降到“只计算增量 token”。',
          analogy: getAnalogy('dpAwareRouting'),
          whyItMatters:
            '这个优化只在长上下文多轮编程任务中有意义，是又一项为 Coding Agent 定制的工程决策。',
          usedBy: [
            { name: 'GLM-5 / GLM-5.2', origin: 'china', usage: '多轮编程 Agent 的 KV-cache 复用' },
          ],
          bestFor:
            '多轮、长上下文的 Agent 服务，尤其是需要复用同一项目前缀的 Coding Agent。',
        },
      },
    ],
  },
]
