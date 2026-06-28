import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { NavigationState } from '../types'
import { industryChain } from '../data/industryChain'

interface NavigationContextType {
  state: NavigationState
  navigateToNode: (nodeId: string) => void
  navigateToPath: (path: string[]) => void
  goBack: () => void
  goToOverview: () => void
}

interface InternalState extends NavigationState {
  historyStack: string[][]
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

function parseHash(): NavigationState {
  const hash = window.location.hash.replace(/^#/, '').replace(/^\//, '')
  if (!hash) return { path: [], view: 'overview' }
  const parts = hash.split('/').filter(Boolean)
  return {
    path: parts,
    view: parts.length > 0 ? 'node' : 'overview',
  }
}

function serializePath(path: string[]): string {
  if (path.length === 0) return ''
  return `#/${path.join('/')}`
}

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false
  return a.every((value, index) => value === b[index])
}

function findPathToNode(nodeId: string): string[] | null {
  for (const section of industryChain.sections) {
    for (const node of section.nodes) {
      if (node.id === nodeId) return [section.id, node.id]
      if (node.children) {
        const child = node.children.find((c) => c.id === nodeId)
        if (child) return [section.id, node.id, child.id]
      }
    }
  }
  return null
}

function getInitialState(): InternalState {
  const initial = parseHash()
  return { ...initial, historyStack: [initial.path] }
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<InternalState>(getInitialState)

  // state 是路由唯一来源：state 变化后同步到 hash
  useEffect(() => {
    const serialized = serializePath(state.path)
    if (window.location.hash !== serialized) {
      window.location.hash = serialized
    }
  }, [state.path])

  // 浏览器前进/后退：同步到 state，并维护历史栈
  useEffect(() => {
    const handleHashChange = () => {
      const newPath = parseHash().path
      setState((prev) => {
        if (arraysEqual(newPath, prev.path)) return prev

        if (
          prev.historyStack.length > 1 &&
          arraysEqual(newPath, prev.historyStack[prev.historyStack.length - 2])
        ) {
          return {
            path: newPath,
            view: newPath.length > 0 ? 'node' : 'overview',
            historyStack: prev.historyStack.slice(0, -1),
          }
        }

        return {
          path: newPath,
          view: newPath.length > 0 ? 'node' : 'overview',
          historyStack: [...prev.historyStack, newPath],
        }
      })
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateToNode = useCallback((nodeId: string) => {
    setState((prev) => {
      let newPath: string[]
      if (prev.path.length === 0) {
        const fullPath = findPathToNode(nodeId)
        newPath = fullPath || [nodeId]
      } else {
        newPath = [...prev.path, nodeId]
      }
      if (arraysEqual(newPath, prev.path)) return prev
      return {
        path: newPath,
        view: 'node',
        historyStack: [...prev.historyStack, newPath],
      }
    })
  }, [])

  const navigateToPath = useCallback((path: string[]) => {
    setState((prev) => {
      if (arraysEqual(path, prev.path)) return prev
      return {
        path,
        view: path.length > 0 ? 'node' : 'overview',
        historyStack: [...prev.historyStack, path],
      }
    })
  }, [])

  const goBack = useCallback(() => {
    setState((prev) => {
      if (prev.historyStack.length <= 1) {
        return { path: [], view: 'overview', historyStack: [[]] }
      }
      const newStack = prev.historyStack.slice(0, -1)
      const newPath = newStack[newStack.length - 1]
      return {
        path: newPath,
        view: newPath.length > 0 ? 'node' : 'overview',
        historyStack: newStack,
      }
    })
  }, [])

  const goToOverview = useCallback(() => {
    setState({ path: [], view: 'overview', historyStack: [[]] })
  }, [])

  return (
    <NavigationContext.Provider
      value={{
        state: { path: state.path, view: state.view },
        navigateToNode,
        navigateToPath,
        goBack,
        goToOverview,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const ctx = useContext(NavigationContext)
  if (!ctx) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return ctx
}
