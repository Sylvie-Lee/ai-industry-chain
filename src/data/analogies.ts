import type { Analogy } from '../types'

export const analogies: Record<string, Analogy> = {
  // 通用
  data: {
    title: '数据就像食材',
    text: '做一道好菜需要新鲜、干净的食材；训练一个好模型也需要大量、优质的数据。食材种类越多、搭配越合理，菜肴越丰富。',
    illustrationType: 'kitchen',
    colorTheme: 'text-blue-500',
  },
  chips: {
    title: '芯片就像厨房里的炉灶',
    text: '再厉害的厨师，没有火力强劲的炉灶也很难快速出菜。芯片就是 AI 的“炉灶”，决定了一次能炒多少菜、炒得多快。',
    illustrationType: 'factory',
    colorTheme: 'text-orange-500',
  },
  gpu: {
    title: 'GPU 就像商用大灶',
    text: '能同时开很多火眼，适合一次性炒大量同样的菜。AI 里的矩阵计算就像“批量炒菜”，GPU 特别擅长。',
    illustrationType: 'factory',
    colorTheme: 'text-orange-600',
  },
  tpu: {
    title: 'TPU 就像专用披萨烤炉',
    text: 'Google 为 AI 计算定制的芯片，就像为烤披萨专门设计的烤炉：做特定任务非常高效，但不够通用。',
    illustrationType: 'factory',
    colorTheme: 'text-blue-600',
  },
  npu: {
    title: 'NPU 就像便携式电磁炉',
    text: '专门放在手机、平板、汽车里做 AI 推理，省电、体积小，就像随身的电磁炉。',
    illustrationType: 'factory',
    colorTheme: 'text-red-600',
  },
  compute: {
    title: '算力就像餐厅后厨',
    text: '后厨里有炉灶、冰箱、洗菜池和厨师团队。算力就是把所有计算资源整合起来，支撑 AI 训练和日常服务。',
    illustrationType: 'factory',
    colorTheme: 'text-amber-600',
  },
  training: {
    title: '训练就像教小孩学习',
    text: '给模型看大量例题和答案，让它自己总结规律。就像老师批改作业、学生反复练习，越练越熟练。',
    illustrationType: 'brain',
    colorTheme: 'text-amber-700',
  },
  inference: {
    title: '推理就像餐厅出菜',
    text: '模型已经学会做菜，客人点单后快速出餐。推理更在意上菜速度、成本和并发量。',
    illustrationType: 'store',
    colorTheme: 'text-amber-500',
  },

  // 中游
  models: {
    title: '模型就像一座图书馆',
    text: '图书馆里收藏了大量书籍（训练数据），训练好的模型就像一位能随时调用这些知识的图书管理员，能回答问题、写文章、生成图片。',
    illustrationType: 'library',
    colorTheme: 'text-violet-500',
  },
  algorithms: {
    title: '算法就像菜谱',
    text: '同样的食材，用不同菜谱能做出完全不同的菜。算法就是告诉模型“怎么学、怎么改、怎么输出”的步骤。',
    illustrationType: 'recipe',
    colorTheme: 'text-pink-500',
  },
  moe: {
    title: 'MoE 就像一家“专家餐厅”',
    text: '餐厅里有寿司师傅、川菜大厨、甜点师。来什么客人，就唤醒对应的专家。这样既省人力（计算量），又能做出各种菜。',
    illustrationType: 'restaurant',
    colorTheme: 'text-indigo-500',
  },
  mla: {
    title: 'MLA 就像“压缩笔记本”',
    text: '以前学生记笔记要抄整本书；MLA 只记最关键的几页摘要，需要时再展开。这样考试时（推理时）书包轻了，脑子还快。',
    illustrationType: 'notebook',
    colorTheme: 'text-cyan-600',
  },
  sigmoidGating: {
    title: 'Sigmoid 门控就像“独立开关”',
    text: '每个专家头顶有一个独立开关，客人来了按需求打开几位厨师，而不是把 100% 的订单硬拆给所有人。',
    illustrationType: 'switch',
    colorTheme: 'text-emerald-600',
  },
  softmaxGating: {
    title: 'Softmax 门控就像“强制分蛋糕”',
    text: '来了 100% 的订单，必须全部分给所有厨师，总和得是 100%。这样容易让最受欢迎的厨师累垮，别的厨师没事做。',
    illustrationType: 'cake',
    colorTheme: 'text-rose-500',
  },
  rlhf: {
    title: 'RLHF 就像“家长教孩子懂礼貌”',
    text: '孩子先学会说话（预训练），再由家长告诉TA哪些话得体、哪些不该说，最终变得更符合人类偏好。',
    illustrationType: 'brain',
    colorTheme: 'text-teal-500',
  },
  grpo: {
    title: 'GRPO 就像“自学+互评小组”',
    text: '学生们自己做题，然后互相批改、讨论对错，不需要家长（外部模型）一直盯着，也能进步。',
    illustrationType: 'group',
    colorTheme: 'text-lime-600',
  },
  longContext: {
    title: '长上下文就像“能读整本书的记忆力”',
    text: '普通模型只能看几页书；长上下文模型能一次性读完一整本小说，还能记得开头埋下的伏笔。',
    illustrationType: 'book',
    colorTheme: 'text-sky-600',
  },
  multimodal: {
    title: '多模态就像“五感俱全的人”',
    text: '不只看得懂文字，还能看图、听声音、看视频。就像一个人同时用眼睛、耳朵和大脑理解世界。',
    illustrationType: 'senses',
    colorTheme: 'text-fuchsia-500',
  },

  // 下游
  applications: {
    title: '应用就像餐厅里的菜单',
    text: '同样的厨房（模型），可以做成不同菜品：聊天机器人、画图工具、代码助手、自动驾驶……',
    illustrationType: 'store',
    colorTheme: 'text-green-500',
  },
  products: {
    title: '产品就像招牌菜',
    text: '每个产品都是把 AI 能力打包成一道“招牌菜”，用户直接点餐使用。',
    illustrationType: 'store',
    colorTheme: 'text-emerald-600',
  },

  // 具体模型/技术占位
  chatgpt: {
    title: 'ChatGPT 就像一位 24 小时在线的问答助手',
    text: '它会聊天、写文章、解释概念，是很多人第一次接触 AI 的窗口。',
    illustrationType: 'library',
    colorTheme: 'text-emerald-600',
  },
  gpt4: {
    title: 'GPT-4 就像一位博学的通才',
    text: '能写代码、做翻译、分析文件、解数学题，综合能力很强，但运行成本也更高。',
    illustrationType: 'library',
    colorTheme: 'text-emerald-700',
  },
  deepseek: {
    title: 'DeepSeek 就像一位“精打细算的高手”',
    text: '用更少的资源（芯片、电力）做出接近顶尖模型的效果，尤其在推理和代码方面表现突出。',
    illustrationType: 'library',
    colorTheme: 'text-red-600',
  },
  kimi: {
    title: 'Kimi 就像一位“超长记忆秘书”',
    text: '特别擅长读长文档、长篇小说、长篇报告，能记住很远处的细节。',
    illustrationType: 'book',
    colorTheme: 'text-sky-600',
  },
  qwen: {
    title: '通义千问就像一位“多语言翻译官”',
    text: '中文能力强，也支持多种语言，擅长理解和生成中文内容。',
    illustrationType: 'library',
    colorTheme: 'text-purple-600',
  },
  glm: {
    title: '智谱 GLM 就像一位“专攻代码的资深工程师”',
    text: '不像什么都懂的通才，这位工程师把所有精力都投入到写代码、修 bug、理解大型项目上，在编程这个细分领域做到极致。',
    illustrationType: 'library',
    colorTheme: 'text-green-600',
  },
  glm45: {
    title: 'GLM-4.5 就像一座“窄而高的塔”',
    text: '它的楼层很多（89 层），但每层房间不多。这样适合一步一步想清楚复杂问题，而不是一次性摊开所有知识。',
    illustrationType: 'library',
    colorTheme: 'text-green-600',
  },
  glm5: {
    title: 'GLM-5 就像一家“全自动编程工厂”',
    text: '原料（代码仓库）进去，工厂自动拆解、测试、修复、再测试。训练和使用都围绕“让机器更像工程师”这个目标优化。',
    illustrationType: 'factory',
    colorTheme: 'text-green-600',
  },
  glm52: {
    title: 'GLM-5.2 就像一位“能读完整个工程项目的架构师”',
    text: '它能一次性读完整整一百万 token 的代码库，还能精准记住每个文件的位置，像真正的资深架构师一样做长程工程决策。',
    illustrationType: 'book',
    colorTheme: 'text-green-600',
  },
  indexShare: {
    title: 'IndexShare 就像“共享的图书馆索引卡”',
    text: '每四层书架共用一张索引卡，不用每层都重新查一遍。这样找书（做注意力）又快又省人力。',
    illustrationType: 'notebook',
    colorTheme: 'text-cyan-600',
  },
  dsa: {
    title: 'DSA 就像“舞台聚光灯”',
    text: '台上演员很多（token），但聚光灯只照亮最重要的几位。这样既看清重点，又不用给全场打光。',
    illustrationType: 'senses',
    colorTheme: 'text-indigo-500',
  },
  muonSplit: {
    title: 'Muon Split 就像“把大积木拆成小积木”',
    text: '原本太大塞不进盒子（优化器不兼容），拆成小块后既能放进去，又能保持原来的形状。',
    illustrationType: 'switch',
    colorTheme: 'text-violet-600',
  },
  slime: {
    title: 'Slime 就像“后厨和前台完全分开的餐厅”',
    text: '前台服务员（推理引擎）不断接待客人、点单，后厨厨师（训练引擎）同时炒菜，两边不用互相等待，整个餐厅运转效率更高。',
    illustrationType: 'restaurant',
    colorTheme: 'text-orange-500',
  },
  tito: {
    title: 'TITO 就像“原封不动传递图纸”',
    text: '代码里的缩进、括号就像建筑图纸上的细节。TITO 直接传原始 token，不让图纸在复印过程中变形。',
    illustrationType: 'recipe',
    colorTheme: 'text-teal-600',
  },
  crossStageDistillation: {
    title: '跨阶段蒸馏就像“毕业前把所有老师的本事复习一遍”',
    text: '学生学了数学、编程、通用知识多位老师，最后把所有本领整合复习，确保新学的通用知识不冲淡推理和编程能力。',
    illustrationType: 'group',
    colorTheme: 'text-lime-600',
  },
  dpAwareRouting: {
    title: 'DP-aware Routing 就像“同一个客人固定同一个服务员”',
    text: '服务员已经记住了客人的口味和之前点过的菜（KV-cache），下次再来直接接着服务，不用重新问一遍。',
    illustrationType: 'store',
    colorTheme: 'text-amber-600',
  },
}

export function getAnalogy(key: string): Analogy {
  return (
    analogies[key] || {
      title: 'AI 技术',
      text: '这是一项人工智能领域的关键技术。',
      illustrationType: 'library',
      colorTheme: 'text-gray-500',
    }
  )
}
