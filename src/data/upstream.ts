import type { ChainNode } from '../types'
import { getAnalogy } from './analogies'

export const upstreamNodes: ChainNode[] = [
  {
    id: 'data',
    name: '数据',
    shortDescription: 'AI 的“食材”：文本、图片、音频、视频等原始材料',
    origin: 'both',
    analogy: getAnalogy('data'),
    detailView: {
      type: 'concept',
      explanation:
        '数据是训练 [[AI 模型|模型]] 的基础原材料。就像厨师需要食材才能做菜，[[AI 模型|模型]] 也需要海量数据才能学会说话、认图、推理。数据越多、越干净、越多样，[[AI 模型|模型]] 通常越聪明。',
      technicalDetails:
        '训练数据通常分为预训练数据（无标注的大规模网页、书籍、代码）和微调数据（带标注的问答、对话、安全对齐数据）。数据质量、去重、版权、隐私都是关键问题。',
      analogy: getAnalogy('data'),
      whyItMatters:
        '没有高质量数据，再强的算法和 [[芯片]] 也训练不出好 [[AI 模型|模型]]。数据被誉为“新时代的石油”。',
      parameters: [
        { label: '常见类型', value: '文本、图像、音频、视频、代码、结构化表格' },
        { label: '代表性数据集', value: 'Common Crawl、WebText、ImageNet、LAION-5B、The Pile' },
        { label: '关键指标', value: '规模、多样性、质量、版权合规、隐私脱敏' },
      ],
      bestFor:
        '为 [[AI 模型|模型]] 提供知识和能力来源。文本数据让 [[AI 模型|模型]] 会“说话”，代码数据让 [[AI 模型|模型]] 会“编程”，[[多模态]] 数据让 [[AI 模型|模型]] 会“看图”。',
    },
  },
  {
    id: 'chips',
    name: '芯片',
    shortDescription: 'AI 的“炉灶”：[[GPU]]、[[TPU]]、[[NPU]] 等专用计算[[芯片]]',
    origin: 'both',
    analogy: getAnalogy('chips'),
    detailView: {
      type: 'concept',
      explanation:
        '[[芯片]] 是运行 AI 的“炉灶”。普通 CPU 像家用小灶，一次只能炒一盘菜；[[GPU]] 像商用大灶，可以同时炒很多盘菜，非常适合 AI 里大量的矩阵计算。',
      technicalDetails:
        'AI [[训练]] 和 [[推理]] 主要依赖并行计算。[[GPU]]（NVIDIA）目前占据主流，[[TPU]]（Google）和 [[NPU]]（华为昇腾、苹果 A/M 系列）也在快速发展。国产 [[芯片]] 在生态和制程上仍面临挑战。',
      analogy: getAnalogy('chips'),
      whyItMatters:
        '[[芯片]] 性能直接决定能训练多大的 [[AI 模型|模型]]、[[推理]] 有多快、成本有多高。它是 AI 产业链的“硬约束”。',
      parameters: [
        { label: '海外代表', value: 'NVIDIA H100/H200/Blackwell、Google TPU v5p、AMD MI300X' },
        { label: '国产代表', value: '华为昇腾 910B、寒武纪思元、海光 DCU、摩尔线程' },
        { label: '关键指标', value: '算力（TFLOPS）、显存（GB）、带宽（GB/s）、能耗（W）' },
      ],
      comparison: {
        opponent: 'CPU',
        opponentAnalogy: '家用小灶，适合精细小炒',
        points: [
          {
            dimension: '并行能力',
            us: '成千上万个核心同时计算，适合矩阵乘法',
            them: '核心数少，适合顺序逻辑任务',
          },
          {
            dimension: '适合场景',
            us: 'AI [[训练]]/[[推理]]、图形渲染、科学计算',
            them: '通用办公、数据库、复杂分支逻辑',
          },
          {
            dimension: '能耗效率',
            us: '专用架构，单位算力能耗更低',
            them: '通用架构，AI 任务能效较低',
          },
        ],
        conclusion:
          'AI [[训练]] 和 [[推理]] 首选 [[GPU]]/[[TPU]]/[[NPU]]；CPU 更适合调度、传统业务逻辑。',
      },
      bestFor:
        '大规模并行浮点运算，尤其是深度学习中的矩阵乘法和卷积操作。',
    },
    children: [
      {
        id: 'gpu',
        name: 'GPU',
        shortDescription: '通用并行计算芯片，AI 训练和推理的主力',
        origin: 'both',
        analogy: getAnalogy('gpu'),
        detailView: {
          type: 'concept',
          explanation:
            'GPU（Graphics Processing Unit）最初为图形渲染设计，但因为能同时跑成千上万个简单计算，成了 AI 的最爱。它就像厨房里的商用大灶，一次能炒很多盘菜。',
          technicalDetails:
            'GPU 拥有大量小核心，适合矩阵乘法和并行浮点运算。NVIDIA 的 H100/H200/Blackwell 系列目前是 AI 训练的主流，AMD MI300X、国产华为昇腾 910B 等也在追赶。',
          analogy: getAnalogy('gpu'),
          whyItMatters: 'GPU 是当今 AI 算力的“硬通货”，决定了能训练多大规模的模型、推理有多快。',
          parameters: [
            { label: '海外代表', value: 'NVIDIA H100/H200/Blackwell、AMD MI300X' },
            { label: '国产代表', value: '华为昇腾 910B、摩尔线程、海光 DCU' },
            { label: '关键指标', value: '算力（TFLOPS）、显存（GB）、带宽（GB/s）、能耗（W）' },
          ],
          bestFor: 'AI 训练、推理、图形渲染、科学计算等需要大规模并行的任务。',
        },
      },
      {
        id: 'tpu',
        name: 'TPU',
        shortDescription: 'Google 专为 AI 设计的定制化芯片',
        origin: 'overseas',
        analogy: getAnalogy('tpu'),
        detailView: {
          type: 'concept',
          explanation:
            'TPU（Tensor Processing Unit）是 Google 专门为机器学习设计的芯片。它不像 GPU 那么通用，但做特定 AI 任务时效率很高，就像专用的披萨烤炉。',
          technicalDetails:
            'TPU 针对 TensorFlow 和矩阵运算做了硬件级优化，强调高吞吐和低能耗。最新 TPU v5p/v6 用于训练 Gemini 等大型模型。',
          analogy: getAnalogy('tpu'),
          whyItMatters: 'TPU 代表“专用芯片”路线：为特定算法优化，能在某些场景下比通用 GPU 更高效。',
          parameters: [
            { label: '研发方', value: 'Google' },
            { label: '代表版本', value: 'TPU v4 / v5p / v6' },
            { label: '典型应用', value: 'Google 搜索、Gemini、Cloud TPU 服务' },
          ],
          bestFor: '大规模矩阵运算、与 Google 生态紧密集成的 AI 训练和推理。',
        },
      },
      {
        id: 'npu',
        name: 'NPU',
        shortDescription: '端侧 AI 芯片，省电、体积小',
        origin: 'both',
        analogy: getAnalogy('npu'),
        detailView: {
          type: 'concept',
          explanation:
            'NPU（Neural Processing Unit）是专为神经网络推理设计的芯片，通常放在手机、平板、汽车里。它像便携式电磁炉，体积小、省电，能让 AI 在设备本地运行。',
          technicalDetails:
            'NPU 针对低精度整数运算和常见神经网络操作优化，强调能效比。苹果 A/M 系列 Neural Engine、华为昇腾 NPU、高通 Hexagon 都是代表。',
          analogy: getAnalogy('npu'),
          whyItMatters: 'NPU 让 AI 可以“跑在设备上”，保护隐私、降低延迟、减少云端成本。',
          parameters: [
            { label: '典型场景', value: '手机拍照、语音识别、人脸识别、自动驾驶' },
            { label: '海外代表', value: 'Apple Neural Engine、高通 Hexagon、Google Edge TPU' },
            { label: '国产代表', value: '华为昇腾 NPU、寒武纪思元' },
          ],
          bestFor: '端侧推理、隐私敏感、低功耗、低延迟的 AI 应用。',
        },
      },
    ],
  },
  {
    id: 'compute',
    name: '算力',
    shortDescription: '把 [[芯片]]、服务器、网络整合起来的“后厨”',
    origin: 'both',
    analogy: getAnalogy('compute'),
    detailView: {
      type: 'concept',
      explanation:
        '[[算力]] 是 [[芯片]]、服务器、机房、网络、电力组合起来的整体“厨房”。再强的炉灶，没有厨师、食材、电力也做不出菜。云厂商把这些资源整合好，按需租给用户。',
      technicalDetails:
        '[[训练]] 大 [[AI 模型|模型]] 通常需要数千张 [[GPU]] 组成集群，通过高速互联（InfiniBand/RoCE）协同。[[推理]] 则更注重延迟、成本和并发。云计算（AWS/Azure/阿里云/华为云）降低了获取 [[算力]] 的门槛。',
      analogy: getAnalogy('compute'),
      whyItMatters:
        '[[算力]] 决定了 AI 研发的门槛。[[训练]] 一次 [[GPT-4]] 级别的 [[AI 模型|模型]] 需要数千万美元的 [[算力]] 投入。',
      parameters: [
        { label: '海外云厂商', value: 'AWS（Trainium/Inferentia）、Azure、Google Cloud' },
        { label: '国产云厂商', value: '阿里云、华为云、腾讯云、百度云、火山引擎' },
        { label: '关键指标', value: '训练集群规模（GPU 数量）、推理吞吐量、延迟、成本/百万 token' },
      ],
      bestFor:
        '支撑 AI [[AI 模型|模型]] [[训练]]、微调和线上 [[推理]] 服务。',
    },
    children: [
      {
        id: 'training',
        name: '训练',
        shortDescription: '让模型从海量数据中学习规律的“学习阶段”',
        origin: 'both',
        analogy: getAnalogy('training'),
        detailView: {
          type: 'concept',
          explanation:
            '训练就像教小孩认字：给模型看成千上万本书，让它自己发现“看到‘猫’字大概率对应毛茸茸的小动物”。通过不断预测下一个词并对比正确答案，模型慢慢学会语言、知识和推理。',
          technicalDetails:
            '现代大模型通常先进行大规模无监督预训练（看网页、书籍、代码），再进行监督微调（SFT）和对齐（RLHF/DPO）。训练需要大量 GPU 集群和高带宽互联，是算力消耗最大的阶段。',
          analogy: getAnalogy('training'),
          whyItMatters: '训练决定模型“懂多少”。没有高质量训练，再聪明的架构也只是空壳。',
          parameters: [
            { label: '核心需求', value: '高吞吐、大显存、稳定互联' },
            { label: '典型硬件', value: 'NVIDIA H100/H200、华为昇腾 910B、AMD MI300X' },
            { label: '关键指标', value: 'FLOPS、显存带宽、训练时间、成本' },
          ],
          bestFor: '赋予模型基础知识和能力，是模型能力的来源。',
        },
      },
      {
        id: 'inference',
        name: '推理',
        shortDescription: '模型学会后，给用户提供服务的“出菜阶段”',
        origin: 'both',
        analogy: getAnalogy('inference'),
        detailView: {
          type: 'concept',
          explanation:
            '推理就是模型“学会出师后接客”。用户输入一个问题，模型用自己的知识生成回答。就像餐厅里厨师已经练好菜，客人点单后快速出餐。',
          technicalDetails:
            '推理更关注延迟（多久出答案）、吞吐量（每秒能服务多少用户）、成本和并发。常用优化包括量化、KV-cache、缓存、批处理、模型蒸馏等。',
          analogy: getAnalogy('inference'),
          whyItMatters: '推理是 AI 真正触达用户的环节。推理成本直接决定产品能不能大规模商用。',
          parameters: [
            { label: '核心需求', value: '低延迟、高并发、低成本' },
            { label: '常用优化', value: '量化、KV-cache、连续批处理、投机采样' },
            { label: '关键指标', value: 'TTFT、TPOT、吞吐（token/s）、成本/百万 token' },
          ],
          bestFor: '线上服务、实时对话、批量生成、成本敏感场景。',
        },
      },
    ],
  },
]
