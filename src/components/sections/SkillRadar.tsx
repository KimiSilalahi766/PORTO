'use client'
type Skill = { name: string, value: number }
export default function SkillRadar({ data }: { data: Skill[] }) {
  const size = 260, cx = size/2, cy = size/2, levels = 5, radius = size/2 - 28
  const angle = (i:number) => (Math.PI * 2 * i) / data.length
  const clamp = (n:number, lo:number, hi:number) => Math.max(lo, Math.min(hi, n))
  const points = data.map((d, i) => { const r = (clamp(d.value, 0, 100)/100) * radius; return [cx + Math.cos(angle(i))*r, cy + Math.sin(angle(i))*r] })
  const path = points.map((p, i) => `${i===0?'M':'L'}${p[0]},${p[1]}`).join(' ') + ' Z'
  return (
    <svg width={size} height={size} role="img" aria-label="skill radar">
      <g>
        {Array.from({length: levels}).map((_, i)=>(<circle key={i} cx={cx} cy={cy} r={((i+1)/levels)*radius} fill="none" stroke="rgba(255,255,255,.15)" />))}
        <path d={path} fill="rgba(99,102,241,.35)" stroke="#6366f1" />
        {data.map((d,i)=>{ const a = angle(i); const tx = cx + Math.cos(a) * (radius + 12); const ty = cy + Math.sin(a) * (radius + 12); return <text key={i} x={tx} y={ty} fontSize={10} textAnchor="middle" fill="currentColor">{d.name}</text> })}
      </g>
    </svg>
  )
}
