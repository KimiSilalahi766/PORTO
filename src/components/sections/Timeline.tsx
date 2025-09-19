import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function Timeline({ title, items }: { title: string, items: { title: string, period: string, detail: string }[] }) {
  return (
    <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}}>
      <Card>
        <div className="text-xl font-semibold tracking-phi-wide mb-[var(--space-2)]">{title}</div>
        <div className="relative pl-6">
          <div className="absolute left-1 top-0 bottom-0 w-[2px] bg-white/20" />
          {items.map((it, i) => (
            <div key={i} className="mb-[var(--space-2)] relative">
              <div className="w-2 h-2 rounded-full bg-accent absolute left-0 translate-x-[-5px] translate-y-[10px]" />
              <div className="ml-1.5">
                <div className="font-semibold tracking-phi">{it.title}</div>
                <div className="text-sm text-white/70 tracking-phi">{it.period}</div>
                <p className="text-white/85 tracking-phi lead-phi mt-1">{it.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
