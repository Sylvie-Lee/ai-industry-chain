import type { ReactNode } from 'react'
import { useCanvasTransform } from '../../hooks/useCanvasTransform'

interface ChainCanvasProps {
  children: ReactNode
  /** 是否启用弹性阻力（短链用） */
  elastic?: boolean
  /** 初始缩放 */
  initialScale?: number
  className?: string
}

export function ChainCanvas({ children, elastic = false, initialScale = 1, className = '' }: ChainCanvasProps) {
  const { transform, containerRef, contentRef, onWheel, onPointerDown, onPointerMove, onPointerUp } =
    useCanvasTransform({ elastic, initialScale })

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className={`w-full h-full relative overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
    >
      <div
        ref={contentRef}
        className="absolute top-0 left-0 min-w-full min-h-full flex items-center justify-center"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
