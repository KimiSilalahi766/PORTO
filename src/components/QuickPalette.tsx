'use client'
import { useEffect, useState } from 'react'
import { projects } from '@/content/projects'
import { useRouter } from 'next/navigation'
export default function QuickPalette() {
  const [open,setOpen]=useState(false)
  const [q,setQ]=useState('')
  const router = useRouter()
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{ if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){ e.preventDefault(); setOpen(v=>!v) } }
    window.addEventListener('keydown',onKey)
    return()=>window.removeEventListener('keydown',onKey)
  },[])
  const suggestions = projects.filter(p => p.title.toLowerCase().includes(q.toLowerCase())).slice(0,6)
  const go = (slug:string) => { setOpen(false); router.push(`/projects/${encodeURIComponent(slug)}`) }
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24">
      <div className="w-full max-w-xl card-glass rounded-2xl p-4">
        <input autoFocus placeholder="Cari proyek… (Enter untuk buka)" value={q} onChange={e=>setQ(e.target.value)} className="w-full bg-transparent outline-none text-lg" onKeyDown={e=>{ if(e.key==='Enter' && suggestions[0]) go(suggestions[0].title) }} />
        <div className="mt-3 space-y-2">
          {suggestions.map(s => (<button key={s.title} onClick={()=>go(s.title)} className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 transition">{s.title}</button>))}
          {!suggestions.length && <div className="text-sm opacity-60 px-3 py-2">Tidak ada hasil</div>}
        </div>
        <div className="text-xs opacity-60 mt-3 px-3">Tip: tekan ⌘/Ctrl + K untuk membuka / menutup</div>
      </div>
    </div>
  )
}
