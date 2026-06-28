import { industryChain } from '../data/industryChain'
import type { ChainNode, ChainSection } from '../types'

export function findSectionById(id: string): ChainSection | undefined {
  return industryChain.sections.find((s) => s.id === id)
}

export function findNodeById(id: string): ChainNode | undefined {
  for (const section of industryChain.sections) {
    const found = findNodeInList(section.nodes, id)
    if (found) return found
  }
  return undefined
}

function findNodeInList(nodes: ChainNode[], id: string): ChainNode | undefined {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findNodeInList(node.children, id)
      if (found) return found
    }
  }
  return undefined
}

export function resolvePath(path: string[]): {
  section?: ChainSection
  node?: ChainNode
  childNode?: ChainNode
} {
  const [sectionId, nodeId, childId] = path
  const section = sectionId ? findSectionById(sectionId) : undefined
  const node = nodeId ? findNodeById(nodeId) : undefined
  const childNode = childId && node?.children
    ? findNodeInList(node.children, childId)
    : undefined
  return { section, node: childNode || node, childNode }
}
