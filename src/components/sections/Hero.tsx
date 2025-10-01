'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Magnetic from '@/components/Magnetic'

export default function Hero({ title, subtitle, github, linkedin }: { title: string, subtitle: string, github: string, linkedin: string }) {

  return (
    <section className="py-[var(--space-6)]">
      <div>
        {/* @ts-ignore */}
        <motion.h1 className="text-5xl md:text-6xl font-extrabold gradient-text leading-tight tracking-phi-wide" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          {title}
        </motion.h1>
        {/* @ts-ignore */}
        <motion.p className="mt-[var(--space-3)] text-slate-700 dark:text-white/85 max-w-2xl text-lg tracking-phi lead-phi" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}>
          {subtitle}
        </motion.p>
        {/* @ts-ignore */}
        <motion.div className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-2)]" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
          <Magnetic><a href="https://www.instagram.com/kimsilalahi_/" target="_blank" rel="noopener noreferrer"><Button variant="outline">IG</Button></a></Magnetic>
          <Magnetic><a href="https://x.com/cardio_logist" target="_blank" rel="noopener noreferrer"><Button variant="outline">X</Button></a></Magnetic>
          <Magnetic><a href={github} target="_blank" rel="noopener noreferrer"><Button>GitHub</Button></a></Magnetic>
          <Magnetic><a href={linkedin} target="_blank" rel="noopener noreferrer"><Button variant="outline">LinkedIn</Button></a></Magnetic>
          <Magnetic><a href="https://iao.usu.ac.id/en/news/usu-students-took-part-at-humanitarian-program-in-malaysia" target="_blank" rel="noopener noreferrer"><Button variant="outline">IAO News</Button></a></Magnetic>
        </motion.div>
      </div>
    </section>
  )
}