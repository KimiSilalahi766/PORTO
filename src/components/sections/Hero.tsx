'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const Eye3D = dynamic(() => import('./Eye3D'), { ssr: false })
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Magnetic from '@/components/Magnetic'

export default function Hero({ title, subtitle, github, linkedin }: { title: string, subtitle: string, github: string, linkedin: string }) {
  const [ready,setReady]=useState(false)
  useEffect(()=>{
    const id = (window as any).requestIdleCallback ? (window as any).requestIdleCallback(()=>setReady(true)) : setTimeout(()=>setReady(true), 150)
    return () => { (window as any).cancelIdleCallback?.(id); clearTimeout(id) }
  },[])

  return (
    <section className="grid md:grid-cols-[1.618fr_1fr] items-center gap-[var(--space-5)] py-[var(--space-6)]">
      <div>
        {/* @ts-ignore */}
        <motion.h1 className="text-5xl md:text-6xl font-extrabold gradient-text leading-tight tracking-phi-wide" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          {title}
        </motion.h1>
        {/* @ts-ignore */}
        <motion.p className="mt-[var(--space-3)] text-white/85 dark:text-white/85 light:text-black/80 max-w-2xl text-lg tracking-phi lead-phi" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}>
          {subtitle}
        </motion.p>
        {/* @ts-ignore */}
        <motion.div className="mt-[var(--space-4)] flex gap-[var(--space-2)]" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
          <Magnetic><a href={github} target="_blank"><Button>GitHub</Button></a></Magnetic>
          <Magnetic><a href={linkedin} target="_blank"><Button variant="outline">LinkedIn</Button></a></Magnetic>
          <Magnetic><a href="https://iao.usu.ac.id/en/news/usu-students-took-part-at-humanitarian-program-in-malaysia" target="_blank"><Button variant="outline">IAO News</Button></a></Magnetic>
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        {ready && <Eye3D textureUrl="/assets/eye.jpg" size={380} speed={0.10} parallax={0.25} />}
      </div>
    </section>
  )
}