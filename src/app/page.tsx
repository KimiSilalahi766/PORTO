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
  // Use translated timeline data with proper typing
  const timeline = [...t.timeline] as { title: string; period: string; detail: string; }[]

  return (
    <main className="container-phi min-h-screen">
      <QuickPalette />
      <div className="flex justify-end gap-[var(--space-2)] pt-[var(--space-2)]">
        <Button variant="outline" onClick={()=> setLang(lang==='id'?'en':'id')}>{t.cta.switchLang}</Button>
        <Button variant="outline" onClick={()=> setTheme((theme ?? 'dark') === 'dark' ? 'light' : 'dark')}>{t.cta.theme}: {theme ?? 'dark'}</Button>
      </div>

      <div className="flex justify-center mt-4">
        <span className="bg-green-600/90 text-white px-8 py-2 rounded-full font-bold text-lg shadow-lg animate-pulse tracking-wide">{t.banner.openToWork}</span>
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
