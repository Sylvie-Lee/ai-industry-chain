interface SVGProps {
  className?: string
}

export function LibrarySVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Building */}
      <rect x="15" y="35" width="70" height="50" rx="4" opacity="0.15" />
      <rect x="20" y="40" width="25" height="40" rx="2" opacity="0.4" />
      <rect x="55" y="40" width="25" height="40" rx="2" opacity="0.4" />
      {/* Books */}
      <rect x="26" y="55" width="4" height="22" rx="1" />
      <rect x="32" y="50" width="4" height="27" rx="1" opacity="0.8" />
      <rect x="38" y="58" width="4" height="19" rx="1" opacity="0.6" />
      <rect x="61" y="52" width="4" height="25" rx="1" opacity="0.9" />
      <rect x="67" y="57" width="4" height="20" rx="1" opacity="0.7" />
      <rect x="73" y="54" width="4" height="23" rx="1" opacity="0.5" />
      {/* Roof */}
      <path d="M10 35 L50 12 L90 35" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* Sign */}
      <rect x="36" y="18" width="28" height="10" rx="2" opacity="0.9" />
    </svg>
  )
}

export function KitchenSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Bowl */}
      <path d="M20 55 Q20 80 50 80 Q80 80 80 55 Z" opacity="0.2" />
      <path d="M20 55 Q20 80 50 80 Q80 80 80 55 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Ingredients */}
      <circle cx="35" cy="45" r="8" opacity="0.8" />
      <rect x="50" y="38" width="12" height="16" rx="3" opacity="0.7" />
      <circle cx="70" cy="46" r="7" opacity="0.6" />
      {/* Steam */}
      <path d="M40 25 Q45 15 40 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path d="M50 28 Q55 18 50 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path d="M60 25 Q65 15 60 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      {/* Spoon */}
      <rect x="78" y="20" width="5" height="35" rx="2" opacity="0.4" transform="rotate(30 80 37)" />
      <ellipse cx="88" cy="22" rx="7" ry="10" opacity="0.4" transform="rotate(30 88 22)" />
    </svg>
  )
}

export function FactorySVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Building */}
      <rect x="15" y="45" width="70" height="40" rx="2" opacity="0.15" />
      <rect x="15" y="45" width="70" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Chimney */}
      <rect x="65" y="15" width="12" height="35" opacity="0.4" />
      {/* Smoke */}
      <circle cx="71" cy="10" r="5" opacity="0.3" />
      <circle cx="78" cy="5" r="4" opacity="0.25" />
      <circle cx="84" cy="10" r="3" opacity="0.2" />
      {/* Windows / Chips */}
      <rect x="25" y="55" width="12" height="12" rx="1" opacity="0.6" />
      <rect x="44" y="55" width="12" height="12" rx="1" opacity="0.6" />
      <rect x="25" y="72" width="12" height="12" rx="1" opacity="0.4" />
      <rect x="44" y="72" width="12" height="12" rx="1" opacity="0.4" />
      {/* Lightning bolt */}
      <path d="M68 65 L60 78 L66 78 L62 90 L74 74 L67 74 L72 65 Z" opacity="0.8" />
    </svg>
  )
}

export function RecipeSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Book */}
      <rect x="20" y="15" width="60" height="70" rx="4" opacity="0.15" />
      <rect x="20" y="15" width="60" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Spine */}
      <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      {/* Lines */}
      <rect x="28" y="28" width="18" height="4" rx="1" opacity="0.7" />
      <rect x="28" y="38" width="36" height="3" rx="1" opacity="0.5" />
      <rect x="28" y="46" width="30" height="3" rx="1" opacity="0.5" />
      <rect x="28" y="54" width="38" height="3" rx="1" opacity="0.5" />
      <rect x="28" y="62" width="24" height="3" rx="1" opacity="0.5" />
      {/* Spoon icon */}
      <circle cx="70" cy="72" r="6" opacity="0.6" />
      <rect x="69" y="76" width="4" height="10" rx="1" opacity="0.6" transform="rotate(-30 71 81)" />
    </svg>
  )
}

export function BrainSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Brain outline */}
      <path
        d="M30 70 Q15 60 20 42 Q18 25 35 22 Q45 10 60 18 Q78 15 80 35 Q92 45 82 62 Q85 80 65 82 Q50 90 35 80 Q25 82 30 70"
        opacity="0.2"
      />
      <path
        d="M30 70 Q15 60 20 42 Q18 25 35 22 Q45 10 60 18 Q78 15 80 35 Q92 45 82 62 Q85 80 65 82 Q50 90 35 80 Q25 82 30 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Brain lines */}
      <path d="M38 30 Q45 40 38 55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M62 30 Q55 40 62 55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M45 65 Q50 70 55 65" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {/* Spark */}
      <path d="M75 25 L78 18 L81 25 L88 28 L81 31 L78 38 L75 31 L68 28 Z" opacity="0.8" />
    </svg>
  )
}

export function StoreSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Awning */}
      <path d="M10 35 L15 15 L85 15 L90 35 Z" opacity="0.3" />
      <path d="M10 35 Q25 45 40 35 Q55 45 70 35 Q85 45 90 35" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Shop body */}
      <rect x="15" y="35" width="70" height="45" rx="2" opacity="0.15" />
      <rect x="15" y="35" width="70" height="45" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Door */}
      <rect x="55" y="52" width="20" height="28" rx="1" opacity="0.3" />
      {/* Window */}
      <rect x="25" y="50" width="20" height="18" rx="1" opacity="0.4" />
      {/* Sign */}
      <rect x="32" y="22" width="36" height="8" rx="2" opacity="0.8" />
    </svg>
  )
}

export function NotebookSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Notebook */}
      <rect x="20" y="15" width="55" height="70" rx="4" opacity="0.15" />
      <rect x="20" y="15" width="55" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Spiral */}
      <circle cx="28" cy="25" r="2" />
      <circle cx="28" cy="38" r="2" />
      <circle cx="28" cy="51" r="2" />
      <circle cx="28" cy="64" r="2" />
      <circle cx="28" cy="77" r="2" />
      {/* Compressed lines */}
      <rect x="36" y="28" width="28" height="3" rx="1" opacity="0.6" />
      <rect x="36" y="36" width="22" height="3" rx="1" opacity="0.5" />
      <rect x="36" y="44" width="30" height="3" rx="1" opacity="0.5" />
      {/* Magnify arrow - expansion */}
      <path d="M75 55 L92 72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M92 72 L92 62 M92 72 L82 72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function SwitchSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Background panel */}
      <rect x="15" y="25" width="70" height="50" rx="6" opacity="0.15" />
      <rect x="15" y="25" width="70" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Independent switches ON */}
      <rect x="24" y="35" width="14" height="22" rx="7" opacity="0.9" />
      <circle cx="31" cy="41" r="4" fill="white" opacity="0.9" />
      <rect x="43" y="35" width="14" height="22" rx="7" opacity="0.5" />
      <circle cx="50" cy="50" r="4" fill="white" opacity="0.9" />
      <rect x="62" y="35" width="14" height="22" rx="7" opacity="0.9" />
      <circle cx="69" cy="41" r="4" fill="white" opacity="0.9" />
    </svg>
  )
}

export function CakeSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Cake base */}
      <path d="M15 60 Q50 80 85 60 L85 75 Q50 95 15 75 Z" opacity="0.2" />
      <path d="M15 60 Q50 80 85 60 L85 75 Q50 95 15 75 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Top of cake */}
      <ellipse cx="50" cy="60" rx="35" ry="12" opacity="0.3" />
      <ellipse cx="50" cy="60" rx="35" ry="12" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Slices showing forced split */}
      <line x1="50" y1="48" x2="50" y2="72" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="28" y1="56" x2="72" y2="64" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="28" y1="64" x2="72" y2="56" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {/* Big slice vs small slice */}
      <path d="M50 60 L75 55 L78 65 Z" opacity="0.8" />
    </svg>
  )
}

export function BookSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Open book */}
      <path d="M15 75 Q15 25 50 25 Q85 25 85 75 L85 80 Q50 60 15 80 Z" opacity="0.15" />
      <path d="M15 75 Q15 25 50 25 Q85 25 85 75 L85 80 Q50 60 15 80 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Center fold */}
      <line x1="50" y1="25" x2="50" y2="72" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      {/* Pages lines */}
      <rect x="22" y="38" width="24" height="2" rx="1" opacity="0.5" />
      <rect x="22" y="46" width="20" height="2" rx="1" opacity="0.4" />
      <rect x="22" y="54" width="22" height="2" rx="1" opacity="0.4" />
      <rect x="54" y="38" width="24" height="2" rx="1" opacity="0.5" />
      <rect x="54" y="46" width="20" height="2" rx="1" opacity="0.4" />
      <rect x="54" y="54" width="22" height="2" rx="1" opacity="0.4" />
      {/* Long arrow */}
      <path d="M10 20 L90 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
      <path d="M85 16 L90 20 L85 24" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function RestaurantSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Counter */}
      <rect x="10" y="55" width="80" height="30" rx="2" opacity="0.15" />
      <rect x="10" y="55" width="80" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Chefs hats */}
      <path d="M25 50 L30 35 L20 35 Z" opacity="0.8" />
      <path d="M25 35 Q18 28 25 22 Q32 28 25 35" opacity="0.8" />
      <path d="M50 50 L55 35 L45 35 Z" opacity="0.6" />
      <path d="M50 35 Q43 28 50 22 Q57 28 50 35" opacity="0.6" />
      <path d="M75 50 L80 35 L70 35 Z" opacity="0.4" />
      <path d="M75 35 Q68 28 75 22 Q82 28 75 35" opacity="0.4" />
      {/* Order ticket */}
      <rect x="42" y="62" width="16" height="18" rx="1" opacity="0.7" />
      <rect x="45" y="66" width="10" height="2" opacity="0.5" />
      <rect x="45" y="71" width="8" height="2" opacity="0.5" />
    </svg>
  )
}

export function GroupSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Three people */}
      <circle cx="25" cy="35" r="8" opacity="0.7" />
      <path d="M15 60 Q25 50 35 60 L35 70 L15 70 Z" opacity="0.5" />
      <circle cx="50" cy="28" r="8" opacity="0.9" />
      <path d="M40 53 Q50 43 60 53 L60 70 L40 70 Z" opacity="0.6" />
      <circle cx="75" cy="35" r="8" opacity="0.7" />
      <path d="M65 60 Q75 50 85 60 L85 70 L65 70 Z" opacity="0.5" />
      {/* Speech / exchange arrows */}
      <path d="M32 38 Q40 32 48 35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M68 38 Q60 32 52 35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      {/* Check mark */}
      <path d="M46 78 L50 82 L58 74" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function SensesSVG({ className }: SVGProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Head */}
      <circle cx="50" cy="50" r="28" opacity="0.15" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Eye - image */}
      <ellipse cx="38" cy="45" rx="6" ry="4" opacity="0.7" />
      <circle cx="38" cy="45" r="2" fill="white" opacity="0.8" />
      {/* Ear - audio */}
      <path d="M72 42 Q78 45 72 58" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {/* Mouth - text */}
      <rect x="42" y="62" width="16" height="3" rx="1" opacity="0.6" />
      <rect x="45" y="68" width="10" height="2" rx="1" opacity="0.5" />
      {/* Waves around head */}
      <path d="M20 30 Q10 25 15 15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M80 30 Q90 25 85 15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M20 70 Q10 75 15 85" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M80 70 Q90 75 85 85" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}
