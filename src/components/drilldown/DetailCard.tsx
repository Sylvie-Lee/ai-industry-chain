import type { ChainNode } from '../../types'
import { AnalogyIllustration } from '../illustrations/AnalogyIllustration'
import { RichText } from '../ui/RichText'

interface DetailCardProps {
  node: ChainNode
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-500/15 text-red-300 border-red-500/30' },
  overseas: { label: '海外', className: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  both: { label: '全球', className: 'bg-slate-500/15 text-slate-300 border-slate-500/30' },
}

export function DetailCard({ node }: DetailCardProps) {
  const { detailView } = node
  const badge = originBadge[node.origin]

  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <AnalogyIllustration analogy={detailView.analogy} size="lg" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold font-heading text-white">{node.name}</h2>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${badge.className}`}>{badge.label}</span>
          </div>
          <RichText text={detailView.explanation} className="text-slate-300 leading-relaxed" />

          {detailView.technicalDetails && (
            <div className="mt-4">
              <h4 className="font-semibold text-white mb-1 font-heading">技术细节</h4>
              <RichText text={detailView.technicalDetails} className="text-sm text-slate-400 leading-relaxed" />
            </div>
          )}
        </div>
      </div>

      {detailView.parameters && detailView.parameters.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-white mb-3 font-heading">关键参数</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {detailView.parameters.map((param, idx) => (
              <div key={idx} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <div className="text-xs text-slate-500 mb-1">{param.label}</div>
                <div className="font-semibold text-slate-100">
                  <RichText text={String(param.value)} />
                  {param.unit && <span className="text-sm font-normal text-slate-500 ml-1">{param.unit}</span>}
                </div>
                {param.explanation && (
                  <RichText text={param.explanation} className="text-xs text-slate-500 mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {detailView.comparison && (
        <div className="mt-6">
          <h4 className="font-semibold text-white mb-3 font-heading">
            对比：<RichText text={detailView.comparison.opponent} />
          </h4>
          {detailView.comparison.opponentAnalogy && (
            <p className="text-sm text-slate-500 mb-3 italic">
              类比：<RichText text={detailView.comparison.opponentAnalogy} />
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left py-2 font-medium text-slate-400">维度</th>
                  <th className="text-left py-2 font-medium text-cyan-400">本技术/模型</th>
                  <th className="text-left py-2 font-medium text-slate-400">{detailView.comparison.opponent}</th>
                </tr>
              </thead>
              <tbody>
                {detailView.comparison.points.map((point, idx) => (
                  <tr key={idx} className="border-b border-slate-700/30">
                    <td className="py-3 font-medium text-slate-200">
                      <RichText text={point.dimension} />
                    </td>
                    <td className="py-3 text-slate-300">
                      <RichText text={point.us} />
                    </td>
                    <td className="py-3 text-slate-300">
                      <RichText text={point.them} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-200 mt-3 bg-violet-500/10 border border-violet-500/20 rounded-lg p-3">
            <RichText text={detailView.comparison.conclusion} />
          </p>
        </div>
      )}

      {detailView.usedBy && detailView.usedBy.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-white mb-3 font-heading">谁在用 / 关联模型</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {detailView.usedBy.map((link, idx) => (
              <div key={idx} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-100">{link.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      link.origin === 'china'
                        ? 'bg-red-500/15 text-red-300 border border-red-500/30'
                        : link.origin === 'overseas'
                        ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                        : 'bg-slate-500/15 text-slate-300 border border-slate-500/30'
                    }`}
                  >
                    {link.origin === 'china' ? '国产' : link.origin === 'overseas' ? '海外' : '全球'}
                  </span>
                </div>
                <p className="text-sm text-slate-400"><RichText text={link.usage} /></p>
              </div>
            ))}
          </div>
        </div>
      )}

      {detailView.bestFor && (
        <div className="mt-6">
          <h4 className="font-semibold text-white mb-1 font-heading">单从这项技术看，适合干嘛？</h4>
          <RichText text={detailView.bestFor} className="text-slate-300 leading-relaxed" />
        </div>
      )}

      <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
        <h4 className="font-semibold text-amber-300 mb-1 font-heading">为什么重要？</h4>
        <RichText text={detailView.whyItMatters} className="text-amber-100/80 text-sm leading-relaxed" />
      </div>
    </div>
  )
}
