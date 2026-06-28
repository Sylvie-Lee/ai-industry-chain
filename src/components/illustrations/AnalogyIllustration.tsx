import type { Analogy } from '../../types'
import {
  LibrarySVG,
  KitchenSVG,
  FactorySVG,
  RecipeSVG,
  BrainSVG,
  StoreSVG,
  NotebookSVG,
  SwitchSVG,
  CakeSVG,
  BookSVG,
  RestaurantSVG,
  GroupSVG,
  SensesSVG,
} from './svg'

const svgMap: Record<string, React.FC<{ className?: string }>> = {
  library: LibrarySVG,
  kitchen: KitchenSVG,
  factory: FactorySVG,
  recipe: RecipeSVG,
  brain: BrainSVG,
  store: StoreSVG,
  notebook: NotebookSVG,
  switch: SwitchSVG,
  cake: CakeSVG,
  book: BookSVG,
  restaurant: RestaurantSVG,
  group: GroupSVG,
  senses: SensesSVG,
}

const sizeMap = {
  sm: 'w-14 h-14',
  md: 'w-24 h-24',
  lg: 'w-40 h-40',
}

interface AnalogyIllustrationProps {
  analogy: Analogy
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function AnalogyIllustration({ analogy, size = 'md', className = '' }: AnalogyIllustrationProps) {
  const SVGComponent = svgMap[analogy.illustrationType] || LibrarySVG
  return (
    <div
      className={`${sizeMap[size]} ${analogy.colorTheme} flex items-center justify-center animate-float p-2 ${className}`}
      aria-label={analogy.title}
    >
      <SVGComponent className="w-full h-full" />
    </div>
  )
}
