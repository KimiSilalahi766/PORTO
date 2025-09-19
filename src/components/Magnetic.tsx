'use client'
import { useRef } from 'react'
export default function Magnetic({ children, strength=0.25 }:{children:React.ReactNode; strength?:number}) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      onMouseMove={e=>{
        const el=ref.current!; const r=el.getBoundingClientRect()
        const x=(e.clientX-(r.left+r.width/2))*strength, y=(e.clientY-(r.top+r.height/2))*strength
        el.style.transform=`translate3d(${x}px,${y}px,0)`
      }}
      onMouseLeave={()=>{ if(ref.current) ref.current.style.transform='translate3d(0,0,0)' }}
      className="inline-block will-change-transform"
    >
      {children}
    </div>
  )
}
