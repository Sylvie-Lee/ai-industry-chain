import type { ChainNode, ChainSection, TimelineEvent } from '../types'

export interface AxisNode extends ChainNode {
  /** 派生出的排序日期，YYYY-MM-DD 或 YYYY-MM */
  sortDate: string | null
  /** 格式化后的日期显示 */
  dateLabel: string | null
}

export interface AxisGroup {
  id: string
  title: string
  colorTheme: string
  nodes: AxisNode[]
}

const DATE_RE = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/

export function parseDate(value: string | number | undefined): string | null {
  if (value === undefined || value === null) return null
  const s = String(value).trim()
  const m = s.match(DATE_RE)
  if (!m) return null
  const [, year, month, day] = m
  return day ? `${year}-${month}-${day}` : `${year}-${month}-01`
}

export function formatDateLabel(value: string | number | undefined): string | null {
  if (value === undefined || value === null) return null
  const s = String(value).trim()
  const m = s.match(DATE_RE)
  if (!m) return null
  const [, year, month, day] = m
  return day ? `${year}.${month}.${day}` : `${year}.${month}`
}

export function deriveNodeDate(node: ChainNode, events: TimelineEvent[]): { sortDate: string | null; dateLabel: string | null } {
  // 1. parameters 中的发布时间
  const releaseParam = node.detailView.parameters?.find((p) => p.label.includes('发布时间'))
  if (releaseParam) {
    const parsed = parseDate(releaseParam.value)
    if (parsed) {
      return { sortDate: parsed, dateLabel: formatDateLabel(releaseParam.value) }
    }
  }

  // 2. 关联的最早 timeline event
  const relatedEvents = events.filter(
    (e) =>
      e.relatedNodes.includes(node.id) ||
      (node.children ?? []).some((child) => e.relatedNodes.includes(child.id))
  )
  if (relatedEvents.length > 0) {
    const earliest = relatedEvents.sort((a, b) => a.date.localeCompare(b.date))[0]
    return { sortDate: parseDate(earliest.date), dateLabel: formatDateLabel(earliest.date) }
  }

  return { sortDate: null, dateLabel: null }
}

export function buildAxisNodes(nodes: ChainNode[], events: TimelineEvent[]): AxisNode[] {
  const withDates = nodes.map((node) => {
    const { sortDate, dateLabel } = deriveNodeDate(node, events)
    return { ...node, sortDate, dateLabel }
  })

  return withDates.sort((a, b) => {
    if (a.sortDate && b.sortDate) return a.sortDate.localeCompare(b.sortDate)
    if (a.sortDate) return -1
    if (b.sortDate) return 1
    return a.name.localeCompare(b.name)
  })
}

export function buildSectionAxisGroups(sections: ChainSection[], events: TimelineEvent[]): AxisGroup[] {
  return sections.map((section) => ({
    id: section.id,
    title: section.title,
    colorTheme: section.colorTheme,
    nodes: buildAxisNodes(section.nodes, events),
  }))
}

export function flattenAllNodes(sections: ChainSection[], events: TimelineEvent[]): AxisNode[] {
  return sections.flatMap((section) =>
    buildAxisNodes(section.nodes, events).map((node) => ({
      ...node,
      // Keep section context via a synthetic id or property if needed
    }))
  )
}

/** Extract timeline events for a specific node (including its children) */
export function getTimelineEventsForNode(node: ChainNode, events: TimelineEvent[]): TimelineEvent[] {
  const ids = new Set([node.id, ...(node.children ?? []).map((c) => c.id)])
  return events
    .filter((e) => e.relatedNodes.some((id) => ids.has(id)))
    .sort((a, b) => a.date.localeCompare(b.date))
}

/** Group timeline events by the child node they most directly relate to */
export function groupEventsByChild(
  parentNode: ChainNode,
  events: TimelineEvent[]
): { child: ChainNode; events: TimelineEvent[] }[] {
  const children = parentNode.children ?? []
  if (children.length === 0) return []

  return children.map((child) => ({
    child,
    events: events
      .filter((e) => e.relatedNodes.includes(child.id))
      .sort((a, b) => a.date.localeCompare(b.date)),
  })).filter((g) => g.events.length > 0)
}
