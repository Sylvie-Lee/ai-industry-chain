import type { ChainNode } from '../../types'
import { AnalogyIllustration } from '../illustrations/AnalogyIllustration'
import { RichText } from '../ui/RichText'

interface DetailCardProps {
  node: ChainNode
}

const originBadge = {
  china: { label: '国产', className: 'bg-red-100 text-red-700' },
  overseas: { label: '海外', className: 'bg-blue-100 text-blue-700' },
  both: { label: '全球', className: 'bg-gray-100 text-gray-700' },
}

export function DetailCard({ node }: DetailCardProps) {
  const { detailView } = node
  const badge = originBadge[node.origin]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <AnalogyIllustration analogy={detailView.analogy} size="lg" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-gray-900">{node.name}</h2>
            <span className={`text-sm px-2.5 py-0.5 rounded-full font-medium ${badge.className}`}>{badge.label}</span>
          </div>
          <RichText text={detailView.explanation} className="text-gray-600 leading-relaxed" />

          {detailView.technicalDetails && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-1">技术细节</h4>
              <RichText text={detailView.technicalDetails} className="text-sm text-gray-600 leading-relaxed" />
            </div>
          )}
        </div>
      </div>

      {detailView.parameters && detailView.parameters.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">关键参数</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {detailView.parameters.map((param, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4">
                <div className="text-xs text-gray-500 mb-1">{param.label}</div>
                <div className="font-semibold text-gray-900">
                  <RichText text={String(param.value)} />
                  {param.unit && <span className="text-sm font-normal text-gray-500 ml-1">{param.unit}</span>}
                </div>
                {param.explanation && (
                  <RichText text={param.explanation} className="text-xs text-gray-500 mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {detailView.comparison && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            对比：<RichText text={detailView.comparison.opponent} />
          </h4>
          {detailView.comparison.opponentAnalogy && (
            <p className="text-sm text-gray-500 mb-3 italic">
              类比：<RichText text={detailView.comparison.opponentAnalogy} />
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-medium text-gray-500">维度</th>
                  <th className="text-left py-2 font-medium text-violet-700">本技术/模型</th>
                  <th className="text-left py-2 font-medium text-gray-500">{detailView.comparison.opponent}</th>
                </tr>
              </thead>
              <tbody>
                {detailView.comparison.points.map((point, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-3 font-medium text-gray-900">
                      <RichText text={point.dimension} />
                    </td>
                    <td className="py-3 text-gray-600">
                      <RichText text={point.us} />
                    </td>
                    <td className="py-3 text-gray-600">
                      <RichText text={point.them} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 mt-3 bg-violet-50 rounded-lg p-3">
            <RichText text={detailView.comparison.conclusion} />
          </p>
        </div>
      )}

      {detailView.usedBy && detailView.usedBy.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">谁在用 / 关联模型</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {detailView.usedBy.map((link, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">{link.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      link.origin === 'china'
                        ? 'bg-red-100 text-red-700'
                        : link.origin === 'overseas'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {link.origin === 'china' ? '国产' : link.origin === 'overseas' ? '海外' : '全球'}
                  </span>
                </div>
                <p className="text-sm text-gray-600"><RichText text={link.usage} /></p>
              </div>
            ))}
          </div>
        </div>
      )}

      {detailView.bestFor && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-1">单从这项技术看，适合干嘛？</h4>
          <RichText text={detailView.bestFor} className="text-gray-600 leading-relaxed" />
        </div>
      )}

      <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-4">
        <h4 className="font-semibold text-amber-900 mb-1">为什么重要？</h4>
        <RichText text={detailView.whyItMatters} className="text-amber-900/80 text-sm leading-relaxed" />
      </div>
    </div>
  )
}
