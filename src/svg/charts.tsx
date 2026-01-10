export const ManualProcessesChart = (x: number, y: number)=>(
    <svg viewBox="0 0 400 200">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#ccc"/>
        <line x1="40" y1="20" x2="40" y2="160" stroke="#ccc"/>

        <polyline points="40,40 360,140" fill="none" stroke="#ff5c5c" stroke-width="3"/>
        <polyline points="40,140 360,40" fill="none" stroke="#fbbf24" stroke-width="3"/>
        <polyline points="40,120 360,20" fill="none" stroke="#60a5fa" stroke-width="3"/>

        <text x="250" y="155" font-size="10">Growth →</text>
        <text x="5" y="20" font-size="10" transform="rotate(-90 10,20)">Impact</text>
      </svg>
)

export const BrandSoftwareProcessesChart = ()=>(
    <svg viewBox="0 0 400 200">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#ccc"/>
        <line x1="40" y1="20" x2="40" y2="160" stroke="#ccc"/>

        <polyline points="40,60 200,40 360,100" fill="none" stroke="#fbbf24" stroke-width="3"/>
        <polyline points="40,100 360,40" fill="none" stroke="#ff5c5c" stroke-width="3"/>
        <polyline points="40,120 360,80" fill="none" stroke="#60a5fa" stroke-width="3"/>
    </svg>
)

export const CustomProcessesChart = ()=>(
    <svg viewBox="0 0 400 200">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#ccc"/>
        <line x1="40" y1="20" x2="40" y2="160" stroke="#ccc"/>

        <polyline points="40,100 360,40" fill="none" stroke="#22c55e" stroke-width="3"/>
        <polyline points="40,40 360,120" fill="none" stroke="#60a5fa" stroke-width="3"/>
        <polyline points="40,120 360,160" fill="none" stroke="#fbbf24" stroke-width="3"/>
    </svg>
)