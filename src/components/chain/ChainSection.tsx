import { useState } from 'react'
import type { ChainSection as ChainSectionType } from '../../types'
import { ChainNodeCard } from './ChainNode'

interface ChainSectionProps {
  section: ChainSectionType
}

const sectionColors: Record<string, string> = {
  upstream: 'from-blue-500 to-cyan-400',
  midstream: 'from-violet-500 to-fuchsia-400',
  downstream: 'from-emerald-500 to-teal-400',
}

export function ChainSection({ section }: ChainSectionProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${sectionColors[section.id]}`} />
      <div className="p-6">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="w-full flex items-start justify-between text-left"
        >
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${section.colorTheme}`} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{section.subtitle}</p>
            </div>
          </div>
          <svg
            className={`w-6 h-6 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expanded && (
          <div className="mt-6 grid gap-4">
            {section.nodes.map((node) => (
              <ChainNodeCard key={node.id} node={node} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
