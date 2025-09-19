'use client'
import { motion } from 'framer-motion'
export default function MotionSection({ children, delay=0 }: {children: React.ReactNode; delay?: number}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0%' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  )
}
