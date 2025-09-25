import { projects } from '@/content/projects'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'
import ProjectDetailClient from './ProjectDetailClient'

export async function generateStaticParams() {
  return projects.map(p => ({ 
    slug: p.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim() 
  }))
}

export default function ProjectPage({ params }:{ params: { slug: string } }) {
  const slug = params.slug
  const p = projects.find(x => 
    x.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim() === slug
  )
  
  if(!p) return (
    <div className="container-phi py-16">
      <p>Project not found.</p>
      <Link href="/">← Back</Link>
    </div>
  )
  
  return <ProjectDetailClient project={p} slug={slug} />
}
