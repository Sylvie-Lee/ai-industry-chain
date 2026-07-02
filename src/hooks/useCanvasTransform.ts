import { useCallback, useEffect, useRef, useState } from 'react'

interface Transform {
  x: number
  y: number
  scale: number
}

interface UseCanvasTransformOptions {
  /** 是否启用弹性阻力（用于主界面短链） */
  elastic?: boolean
  /** 最大缩放 */
  maxScale?: number
  /** 最小缩放 */
  minScale?: number
  /** 初始缩放 */
  initialScale?: number
}

export function useCanvasTransform(options: UseCanvasTransformOptions = {}) {
  const {
    elastic = false,
    maxScale = 2.5,
    minScale = 0.5,
    initialScale = 1,
  } = options

  const [transform, setTransform] = useState<Transform>({
    x: 0,
    y: 0,
    scale: initialScale,
  })

  const transformRef = useRef(transform)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const lastPointerRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef<Transform>(transform)

  useEffect(() => {
    transformRef.current = transform
  }, [transform])

  const clampScale = useCallback((s: number) => Math.min(maxScale, Math.max(minScale, s)), [maxScale, minScale])

  const applyTransform = useCallback((next: Transform) => {
    targetRef.current = next
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      setTransform({ ...targetRef.current })
    })
  }, [])

  const reset = useCallback(() => {
    applyTransform({ x: 0, y: 0, scale: initialScale })
  }, [applyTransform, initialScale])

  // Compute bounds based on content vs container size
  const getBounds = useCallback(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return null

    const cw = container.clientWidth
    const ch = container.clientHeight
    const bw = content.scrollWidth * transformRef.current.scale
    const bh = content.scrollHeight * transformRef.current.scale

    return {
      containerWidth: cw,
      containerHeight: ch,
      contentWidth: bw,
      contentHeight: bh,
      minX: Math.min(0, cw - bw),
      maxX: Math.max(0, cw - bw),
      minY: Math.min(0, ch - bh),
      maxY: Math.max(0, ch - bh),
    }
  }, [])

  const clampWithElastic = useCallback((next: Transform): Transform => {
    const bounds = getBounds()
    if (!bounds) return next

    const scale = clampScale(next.scale)
    let x = next.x
    let y = next.y

    if (elastic) {
      // For short chains: allow small drag but spring back via maxOffset
      const maxOffset = bounds.containerWidth * 0.15
      x = Math.max(-maxOffset, Math.min(maxOffset, x))
      y = Math.max(-maxOffset * 0.5, Math.min(maxOffset * 0.5, y))
    } else {
      // For timelines: free pan within content bounds
      x = Math.max(bounds.minX, Math.min(bounds.maxX, x))
      y = Math.max(bounds.minY, Math.min(bounds.maxY, y))
    }

    return { x, y, scale }
  }, [clampScale, elastic, getBounds])

  const zoomAtPoint = useCallback((pointX: number, pointY: number, deltaScale: number) => {
    const prev = transformRef.current
    const newScale = clampScale(prev.scale * deltaScale)
    if (newScale === prev.scale) return

    // Zoom around cursor: newX = pointX - (pointX - oldX) * (newScale / oldScale)
    const ratio = newScale / prev.scale
    const newX = pointX - (pointX - prev.x) * ratio
    const newY = pointY - (pointY - prev.y) * ratio

    applyTransform(clampWithElastic({ x: newX, y: newY, scale: newScale }))
  }, [clampScale, clampWithElastic, applyTransform])

  // Wheel handler: horizontal pan + zoom with ctrl/cmd
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const prev = transformRef.current
    const isZoom = e.ctrlKey || e.metaKey
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    if (isZoom) {
      const delta = -e.deltaY * 0.002
      const scaleFactor = Math.exp(delta)
      zoomAtPoint(e.clientX - rect.left, e.clientY - rect.top, scaleFactor)
      return
    }

    // Trackpad: two-finger swipe maps to deltaX/deltaY. We pan freely.
    // Use a damping factor for silky feel.
    const damping = 0.8
    const newX = prev.x - e.deltaX * damping
    const newY = prev.y - e.deltaY * damping

    applyTransform(clampWithElastic({ x: newX, y: newY, scale: prev.scale }))
  }, [applyTransform, clampWithElastic, zoomAtPoint])

  // Pointer drag
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('[data-no-pan]')) return
    draggingRef.current = true
    lastPointerRef.current = { x: e.clientX, y: e.clientY }
    containerRef.current?.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return
    const dx = e.clientX - lastPointerRef.current.x
    const dy = e.clientY - lastPointerRef.current.y
    lastPointerRef.current = { x: e.clientX, y: e.clientY }

    const prev = transformRef.current
    applyTransform(clampWithElastic({ x: prev.x + dx, y: prev.y + dy, scale: prev.scale }))
  }, [applyTransform, clampWithElastic])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    draggingRef.current = false
    containerRef.current?.releasePointerCapture(e.pointerId)
    // Spring back to bounds if elastic
    if (elastic) {
      applyTransform(clampWithElastic(transformRef.current))
    }
  }, [applyTransform, clampWithElastic, elastic])

  // Keyboard reset
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        reset()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [reset])

  return {
    transform,
    containerRef,
    contentRef,
    onWheel,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    reset,
    setTransform: useCallback((t: Transform) => applyTransform(clampWithElastic(t)), [applyTransform, clampWithElastic]),
  }
}
