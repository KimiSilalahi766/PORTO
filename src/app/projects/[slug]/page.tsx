import { projects } from '@/content/projects'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: encodeURIComponent(p.title) }))
}

export default function ProjectPage({ params }:{ params: { slug: string } }) {
  const title = decodeURIComponent(params.slug)
  const p = projects.find(x => x.title === title)
  if(!p) return <div className="container-phi py-16"><p>Project tidak ditemukan.</p><Link href="/">← Kembali</Link></div>
  const isMLProject = p.title === 'Mobile Legends Player Analytics';
  const isEPLProject = p.title === 'EPL 2024/2025 Passing Networks (cGANs)';
  const isHoneyProject = p.title === 'IoT Monitoring Kualitas Madu';
  return (
    <main className="container-phi py-10">
      <MotionSection>
        <h1 className="text-3xl font-extrabold gradient-text tracking-tight mb-2">{p.title}</h1>
        <p className="mt-1 text-white/85 text-[1rem] leading-snug">{p.description}</p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {p.tags.map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-white/10 text-xs">{t}</span>)}
        </div>
        {p.collaborators?.length ? <p className="mt-2 text-xs opacity-80">Kolaborasi: {p.collaborators.join(', ')}</p> : null}
        <div className="mt-3 flex gap-2">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" className="underline">Live</a>}
          {p.githubUrl && <a href={p.githubUrl} target="_blank" className="underline">GitHub</a>}
        </div>
      </MotionSection>

      {isMLProject && (
        <MotionSection delay={0.1}>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Case Study</h2>
          <div className="prose prose-invert mt-2 max-w-none text-[0.97rem] leading-tight">
            <h3 className="text-lg font-bold mb-1">K-Means vs DBSCAN: Segmentasi Pemain Medan</h3>
            <p className="mb-1"><b>Problem:</b> Profil pemain di Medan beragam, sulit dikelompokkan secara efektif untuk strategi dan matchmaking.</p>
            <p className="mb-1"><b>Metode:</b> Analisis data performa (KDA, Win Rate, GPM, role, hero) dengan K-Means & DBSCAN.</p>
            <ul className="mb-1 ml-4 list-disc">
              <li>Klaster: "Carries", "Objective-Oriented", "Casual".</li>
              <li>DBSCAN lebih akurat deteksi pemain unik/anomali (Silhouette: 0.68 vs 0.54).</li>
              <li>Insight: Segmentasi memudahkan promosi, event, dan matchmaking adil.</li>
            </ul>
            <p className="mb-0"><b>Next:</b> Integrasi data chat, prediksi churn, dashboard otomatis.</p>
          </div>
        </MotionSection>
      )}
      {isEPLProject && (
        <MotionSection delay={0.1}>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Case Project</h2>
          <div className="prose prose-invert mt-2 max-w-none text-[0.97rem] leading-tight">
            <h3 className="text-lg font-bold mb-1">CGAN Premier League Passing Networks</h3>
            <p className="mb-1"><b>Problem:</b> Analisis passing tradisional terbatas, tidak bisa prediksi pola baru. Tim butuh simulasi taktik real-time.</p>
            <p className="mb-1"><b>Approach:</b> CGAN (Generator/Discriminator), data FPL 2024/2025, input: formasi, gaya main, kreativitas. Web UI real-time, 5 formasi utama.</p>
            <ul className="mb-1 ml-4 list-disc">
              <li>100% test pass, AI hasilkan passing networks baru</li>
              <li>6 fitur analisis taktik interaktif, visual tebal/curve/marker</li>
              <li>Loading &lt;10 detik, support multi-browser, akses bersamaan</li>
            </ul>
            <p className="mb-0"><b>Next:</b> Integrasi data match real-time, ekspansi liga, mobile app, AI prediksi cedera, video analysis.</p>
          </div>
        </MotionSection>
      )}
      {isHoneyProject && (
        <MotionSection delay={0.1}>
          <h2 className="mt-6 text-xl font-semibold tracking-tight">Case Project</h2>
          <div className="prose prose-invert mt-2 max-w-none text-[0.97rem] leading-tight">
            <h3 className="text-lg font-bold mb-1">IoT Monitoring Kualitas Madu Trigona</h3>
            <p className="mb-1"><b>Problem:</b> Kualitas madu sulit dijaga tanpa monitoring real-time. Peternak butuh sistem otomatis & akurat.</p>
            <p className="mb-1"><b>Approach:</b> ESP32 + 5 sensor (DHT22, pH, MQ-135, TDS, LDR), data ke Firebase, klasifikasi K-NN (K=5), dashboard web realtime.</p>
            <ul className="mb-1 ml-4 list-disc">
              <li>315 data uji, 3 jenis madu Trigona</li>
              <li>Akurasi 88,25%, precision 92,7% (Baik), recall 89,6% (Sangat Baik)</li>
              <li>TDS & pH = faktor utama, confidence 85-92%</li>
              <li>Dashboard: visualisasi & alert otomatis</li>
            </ul>
            <p className="mb-0"><b>Next:</b> Integrasi API data real-time, ekspansi ke peternakan lain, prediksi kualitas & mobile app.</p>
          </div>
        </MotionSection>
      )}
      <div className="mt-8"><Link href="/" className="underline">← Kembali ke halaman utama</Link></div>
    </main>
  )
}
