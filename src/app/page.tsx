'use client'
import Hero from '@/components/sections/Hero'
import ProjectShowcase from '@/components/sections/ProjectShowcase'
import IdentityPanel from '@/components/sections/IdentityPanel'
import SkillRadar from '@/components/sections/SkillRadar'
import Timeline from '@/components/sections/Timeline'
import MotionSection from '@/components/MotionSection'
import QuickPalette from '@/components/QuickPalette'
import { resumeData } from '@/content/resume'
import { useUI } from '@/lib/store'
import { dict } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export default function Page() {
  const { lang, setLang } = useUI()
  const { theme, setTheme } = useTheme()
  const t = dict[lang]

  const skillset = [{ name:'Python', value:85 }, { name:'TypeScript', value:80 }, { name:'React', value:85 }, { name:'DataViz', value:75 }, { name:'IoT', value:65 }]
  const timeline = [
    { title: 'Sedang Mengerjakan/Mencari Sertifikat Pendukung', period: 'Sep 2025 – Ongoing', detail: 'AWS, IBM Blockchain Essentials, dan Google AI Engineering' },
    { title: 'CareerVerse — Employment Recruiter (AI + ICP)', period: 'Sep 2025', detail: 'Marketplace lowongan kerja bertenaga AI dengan identitas terdesentralisasi' },
    { title: 'TaniSayur — Online Grocery Store', period: 'Sep 2025', detail: 'Toko sayur & buah segar dari petani lokal dengan UI/UX modern' },
    { title: 'Hackathon BUIDL — DoraHacks', period: 'Sep 2025', detail: 'Founder/Engineer, entri BUIDL dengan dokumentasi solusi' },
    { title: 'EPL Passing Networks (cGANs)', period: 'Sep 2024 – 2025', detail: 'Kolaborasi dengan Samuel — analisis jaringan operan dengan AI' },
    { title: 'Mobile Legends Player Analytics', period: 'Sep 2024', detail: 'Dashboard analitik: K-Means vs DBSCAN untuk segmentasi pemain' },
    { title: 'IoT Monitoring Kualitas Madu', period: 'Aug 2024', detail: 'Kolaborasi dengan Bima — sistem monitoring dengan ESP32 & cloud dashboard' },
    { title: 'Intern — Kemenkumham Medan', period: 'Jul–Aug 2024', detail: 'CodeIgniter 4, content management & web development' },
    { title: 'Hackathon 11 — Decodream', period: 'Jun 2024', detail: 'Team lead, AI-powered dream interpretation platform' },
    { title: 'International Affairs Program', period: 'Oktober 2023-Januari 2024', detail: 'USU Students Humanitarian Program in Malaysia (IAO News)' },
    { title: 'Universitas Sumatera Utara', period: 'July 2021 – July 2025', detail: 'Bachelor of Computer Science, GPA 3.78/4.00' }
  ]

  return (
    <main className="container-phi min-h-screen">
      <QuickPalette />
      <div className="flex justify-end gap-[var(--space-2)] pt-[var(--space-2)]">
        <Button variant="outline" onClick={()=> setLang(lang==='id'?'en':'id')}>{t.cta.switchLang}</Button>
        <Button variant="outline" onClick={()=> setTheme((theme ?? 'dark') === 'dark' ? 'light' : 'dark')}>{t.cta.theme}: {theme ?? 'dark'}</Button>
      </div>

      <div className="flex justify-center mt-4">
        <span className="bg-green-600/90 text-white px-8 py-2 rounded-full font-bold text-lg shadow-lg animate-pulse tracking-wide">Open to Work, Fresh Graduate</span>
      </div>

      <Hero title={t.hero.title} subtitle={t.hero.subtitle} github={resumeData.contacts.find(c=>c.type==='github')?.value ?? '#'} linkedin={resumeData.contacts.find(c=>c.type==='linkedin')?.value ?? '#'} />

      <MotionSection delay={0.05}><IdentityPanel title={t.ident.title} summary={t.ident.summary} /></MotionSection>
      <MotionSection delay={0.1}><h2 className="text-2xl font-semibold mb-[var(--space-2)]">{t.nav.projects}</h2><ProjectShowcase labels={t.filters} /></MotionSection>
      <MotionSection delay={0.15}>
        <section className="grid md:grid-cols-2 gap-[var(--space-4)]">
          <div><h3 className="text-2xl font-semibold mb-[var(--space-2)]">{t.nav.skills}</h3><SkillRadar data={skillset} /></div>
          <div><Timeline title={t.nav.timeline} items={timeline} /></div>
        </section>
      </MotionSection>
      <footer className="py-[var(--space-5)] text-xs opacity-75">© {new Date().getFullYear()} {resumeData.name}. Portfolio</footer>
    </main>
  )
}
