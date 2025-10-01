'use client'
import { Project } from '@/content/projects'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'
import { dict } from '@/lib/i18n'
import { useUI } from '@/lib/store'

interface Props {
  project: Project
  slug: string
}

export default function ProjectDetailClient({ project: p, slug }: Props) {
  const { lang } = useUI()
  const t = dict[lang]
  
  // Get translations for this project
  const projectTranslation = t.projects[slug as keyof typeof t.projects]
  const isMLProject = p.title === 'Mobile Legends Player Analytics';
  const isEPLProject = p.title === 'EPL 2024/2025 Passing Networks (cGANs)';
  const isHoneyProject = p.title === 'IoT Monitoring Kualitas Madu';

  return (
    <main className="container-phi py-10">
      <MotionSection>
        <h1 className="text-3xl font-extrabold gradient-text tracking-tight mb-2">
          {projectTranslation?.title || p.title}
        </h1>
        <p className="mt-1 text-slate-700 dark:text-white/85 text-[1rem] leading-snug">
          {projectTranslation?.description || p.description}
        </p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {p.tags.map(tag => <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 dark:bg-white/10 dark:text-white text-xs">{tag}</span>)}
        </div>
        {p.collaborators?.length ? <p className="mt-2 text-xs opacity-80">{t.common.collaboration}: {p.collaborators.join(', ')}</p> : null}
        <div className="mt-3 flex gap-2">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="underline">{t.common.live}</a>}
          {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="underline">{t.common.github}</a>}
        </div>
      </MotionSection>

      {isMLProject && (
        <MotionSection delay={0.1}>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Case Study Details</h2>
          <div className="prose prose-invert dark:prose-invert prose-slate mt-2 max-w-none text-[0.97rem] leading-tight">
            <h3 className="text-lg font-bold mb-1">K-Means vs DBSCAN: Medan Player Segmentation</h3>
            <p className="mb-1"><b>Problem:</b> Player profiles in Medan are diverse, difficult to group effectively for strategy and matchmaking.</p>
            <p className="mb-1"><b>Method:</b> Performance data analysis (KDA, Win Rate, GPM, role, hero) using K-Means & DBSCAN.</p>
            <ul className="mb-1 ml-4 list-disc">
              <li>Clusters: "Carries", "Objective-Oriented", "Casual".</li>
              <li>DBSCAN more accurate in detecting unique/anomaly players (Silhouette: 0.68 vs 0.54).</li>
              <li>Insight: Segmentation facilitates promotion, events, and fair matchmaking.</li>
            </ul>
            <p className="mb-0"><b>Next:</b> Chat data integration, churn prediction, automated dashboard.</p>
          </div>
        </MotionSection>
      )}
      {isEPLProject && (
        <MotionSection delay={0.1}>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Case Study Details</h2>
          <div className="prose prose-invert dark:prose-invert prose-slate mt-2 max-w-none text-[0.97rem] leading-tight">
            <h3 className="text-lg font-bold mb-1">CGAN Premier League Passing Networks</h3>
            <p className="mb-1"><b>Problem:</b> Traditional passing analysis is limited, cannot predict new patterns. Teams need real-time tactical simulations.</p>
            <p className="mb-1"><b>Approach:</b> CGAN (Generator/Discriminator), EPL 2024/2025 data, inputs: formation, playing style, creativity. Real-time web UI, 5 main formations.</p>
            <ul className="mb-1 ml-4 list-disc">
              <li>100% test pass, AI generates new passing networks</li>
              <li>6 interactive tactical analysis features, thickness/curve/marker visuals</li>
              <li>Loading &lt;10 seconds, multi-browser support, concurrent access</li>
            </ul>
            <p className="mb-0"><b>Next:</b> Real-time match data integration, league expansion, mobile app, AI injury prediction, video analysis.</p>
          </div>
        </MotionSection>
      )}
      {isHoneyProject && (
        <MotionSection delay={0.1}>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Case Study Details</h2>
          <div className="prose prose-invert dark:prose-invert prose-slate mt-2 max-w-none text-[0.97rem] leading-tight">
            <h3 className="text-lg font-bold mb-1">IoT Monitoring Trigona Honey Quality</h3>
            <p className="mb-1"><b>Problem:</b> Honey quality is difficult to maintain without real-time monitoring. Beekeepers need an automated & accurate system.</p>
            <p className="mb-1"><b>Approach:</b> ESP32 + 5 sensors (DHT22, pH, MQ-135, TDS, LDR), data to Firebase, K-NN classification (K=5), real-time web dashboard.</p>
            <ul className="mb-1 ml-4 list-disc">
              <li>315 test data, 3 types of Trigona honey</li>
              <li>Accuracy 88.25%, precision 92.7% (Good), recall 89.6% (Very Good)</li>
              <li>TDS & pH = main factors, confidence 85-92%</li>
              <li>Dashboard: visualization & automatic alerts</li>
            </ul>
            <p className="mb-0"><b>Next:</b> Real-time data API integration, expansion to other farms, quality prediction & mobile app.</p>
          </div>
        </MotionSection>
      )}
      <div className="mt-8"><Link href="/" className="underline">{t.common.backToHome}</Link></div>
    </main>
  )
}