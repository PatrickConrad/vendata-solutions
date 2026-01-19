type IconProps = {
    className?:string,
    color?: string
}

export const SunIcon = ({className = "w-10 h-10", color="currentColor"}: IconProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        fill="none" 
        stroke={`${color}`} 
        stroke-width="20" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        className={`${className??'w-6 h-6'}`}
    >
        <circle cx="256" cy="256" r="80" />

        <line x1="256" y1="40"  x2="256" y2="120" />
        <line x1="256" y1="392" x2="256" y2="472" />

        <line x1="40"  y1="256" x2="120" y2="256" />
        <line x1="392" y1="256" x2="472" y2="256" />

        <line x1="96"  y1="96"  x2="152" y2="152" />
        <line x1="360" y1="360" x2="416" y2="416" />

        <line x1="360" y1="152" x2="416" y2="96" />
        <line x1="96"  y1="416" x2="152" y2="360" />
    </svg>
)

export const MoonIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)
    
export const MagnifyingGlassIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
)


export const EyeIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Eye outline */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    {/* Pupil */}
    <circle cx="12" cy="12" r="3" />
  </svg>
)


export const MusicalNotesIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Lower Left Note */}
    <g>
      <circle cx="5" cy="19" r="2" fill={color} />
      <path d="M7 19V8" />
      <path d="M7 8C9 8 11 9 11 11" />
    </g>

    {/* Upper Right Note - Moved further out to the edge */}
    <g>
      <circle cx="17" cy="13" r="2" fill={color} />
      <path d="M19 13V2" />
      <path d="M19 2C21 2 23 3 23 5" />
    </g>
  </svg>
)



export const NexusIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Connection Lines radiating from center to corners */}
    <line x1="12" y1="12" x2="19" y2="5" />   {/* Top Right */}
    <line x1="12" y1="12" x2="5" y2="5" />    {/* Top Left */}
    <line x1="12" y1="12" x2="19" y2="19" />  {/* Bottom Right */}
    <line x1="12" y1="12" x2="5" y2="19" />   {/* Bottom Left */}

    {/* Peripheral Nodes */}
    <circle cx="19" cy="5" r="2" fill={color} />
    <circle cx="5" cy="5" r="2" fill={color} />
    <circle cx="19" cy="19" r="2" fill={color} />
    <circle cx="5" cy="19" r="2" fill={color} />

    {/* The Central Nexus Hub */}
    <circle cx="12" cy="12" r="3.5" fill="none" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.5" fill={color} />
  </svg>
)

export const PlayButtonIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer Box */}
    <rect x="3" y="3" width="18" height="18" rx="2" />

    {/* Outlined Triangle (Centered) */}
    <path d="M10 8L16 12L10 16V8Z" />
  </svg>
)

export const TargetIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >            
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="0" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="24"/>
        <line x1="0" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="24" y2="12"/>
    </svg>
)


export const MapIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* The Tri-fold Paper Structure */}
    <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" />
    
    {/* Internal Folding Lines */}
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
)

export const ProcessAuditIcon = ({ className = "w-10 h-10", color = "currentColor" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Simplified Clipboard */}
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    
    {/* Single Action Line (The "Check") */}
    <path d="M9 14l2 2 4-4" />
    
    {/* Simple Pen Tool */}
    <path d="M20 7l-3-3" />
  </svg>
)

export const GraphIcon = ({ className = "w-10 h-10", color = "currentColor" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* The Graph Axes (L-shape) */}
        <path d="M3 3v18h18" opacity="0.5" />

        {/* The Wavy Upward Line */}
        <path 
            d="M3 17 
               c 2 2, 4-6, 6-4 
               s 4-6, 6-4 
               s 4-8, 6-6" 
            strokeWidth="2"
        />

        {/* The Terminal Point (Upward finish) */}
        <circle cx="21" cy="3" r="1" fill={color} stroke="none" />
    </svg>
);