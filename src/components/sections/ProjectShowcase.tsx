'use client'
import { useMemo } from 'react'
import { projects, type Project } from '@/content/projects'
import { useUI } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectShowcase({ labels }: { labels: { all:string, data:string, ai:string, iot:string, web:string } }) {
  const { filter, setFilter } = useUI()
  const filtered = useMemo(() => (filter === 'All' ? projects : projects.filter(p => p.category === filter)), [filter])
  const tabs: { key: typeof filter, label: string }[] = [
    { key: 'All', label: labels.all }, { key: 'Data', label: labels.data }, { key: 'AI', label: labels.ai }, { key: 'IoT', label: labels.iot }, { key: 'Web', label: labels.web }
  ]
  return (
    <section className="py-[var(--space-5)]">
      <div className="flex gap-[var(--space-2)] flex-wrap mb-[var(--space-3)]">
        {tabs.map(t => (<Button key={t.key} variant={filter===t.key?'primary':'outline'} onClick={()=>setFilter(t.key)}>{t.label}</Button>))}
      </div>
      <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
        {filtered.map((p: Project, i) => (
          // @ts-ignore
          <motion.div key={p.title} className="relative [transform-style:preserve-3d]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20% 0%' }} transition={{ duration: 0.5, ease: 'easeOut', delay: i*0.05 }} whileHover={{ rotateX:-2, rotateY:3, transition:{ type:'spring', stiffness:100, damping:12 }}}>
            <div className="absolute -inset-1 blur-2xl rounded-2xl" style={{ background: 'conic-gradient(from 0deg, rgba(99,102,241,.35), rgba(0,255,157,.25), rgba(139,92,246,.35), rgba(99,102,241,.35))' }}/>
            <Card className="relative p-7">
              <div className="flex items-center justify-between mb-2"><CardTitle className="text-[1.2rem] tracking-phi-wide">{p.title}</CardTitle><span className="text-xs text-white/60">{p.category ?? ''}</span></div>
              <CardContent>
                <p className="text-white/85 tracking-phi lead-phi mb-[var(--space-2)]">{p.description}</p>
                {p.collaborators?.length ? (<p className="text-xs text-white/75 mb-[var(--space-2)]">Kolaborasi: {p.collaborators.join(', ')}</p>) : null}
                <div className="flex flex-wrap gap-[calc(var(--space-2)/1.2)] mb-[var(--space-2)]">{p.tags.map((t)=> <Badge key={t}>{t}</Badge>)}</div>
                <div className="flex gap-[var(--space-2)]">
                  <Link href={`/projects/${encodeURIComponent(p.title)}`}><Button size="sm">Details</Button></Link>
                  {p.liveUrl && <a href={p.liveUrl} target="_blank"><Button size="sm" variant="outline">Live</Button></a>}
                  {p.githubUrl && <a href={p.githubUrl} target="_blank"><Button size="sm" variant="outline">GitHub</Button></a>}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}