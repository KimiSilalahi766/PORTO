'use client'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Magnetic from '@/components/Magnetic'
import { Button } from '@/components/ui/button'

interface Certificate {
  title: string
  issuer: string
  file: string
}

const certificates: Certificate[] = [
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    file: '/certificates/INTRODUCTION TO MODERN AI.pdf'
  },
  {
    title: 'English for IT',
    issuer: 'Cisco Networking Academy',
    file: '/certificates/CISCO_ English for IT.pdf'
  },
  {
    title: 'Data Science',
    issuer: 'Udemy',
    file: '/certificates/CERTIFICATE DATA SCIENCE.pdf'
  },
  {
    title: 'Microsoft Excel Beginner to Advanced',
    issuer: 'Udemy',
    file: '/certificates/CERTIFICATE MICROSOFT EXCEL.pdf'
  },
  {
    title: 'Machine Learning A-Z AI Python',
    issuer: 'Udemy',
    file: '/certificates/CERTIFICATE MACHINE LEARNING.pdf'
  },
  {
    title: 'Web Development',
    issuer: 'Udemy',
    file: '/certificates/CERTIFICATE WEB DEVELOPMENT.pdf'
  }
]

export default function Certificates({ title }: { title: string }) {
  return (
    <section className="py-[var(--space-4)]">
      <h3 className="text-2xl font-semibold mb-[var(--space-3)]">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-3)]">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Card className="p-[var(--space-3)] hover:shadow-lg transition-shadow h-full flex flex-col">
              <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
              <p className="text-sm opacity-75 mb-3 flex-grow">{cert.issuer}</p>
              <Magnetic>
                <a href={cert.file} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">View Certificate</Button>
                </a>
              </Magnetic>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
