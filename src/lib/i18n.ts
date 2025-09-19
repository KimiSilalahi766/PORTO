
export const dict = {
  id: {
    nav: { projects: 'Proyek', skills: 'Keahlian', timeline: 'Linimasa', contributions: 'Kontribusi' },
    cta: { switchLang: 'EN/ID', theme: 'Tema' },
    hero: {
      title: 'Kimsang Silalahi — Portofolio',
      subtitle: 'Web3 Developer | IoT Engineer | Technical Project Manager | Building Scalable Solutions with Blockchain & Edge Computing'
    },
    filters: { all:'Semua', data:'Data', ai:'AI', iot:'IoT', web:'Web' },
    ident: { title: 'Identitas & Kontribusi', summary: 'Software Engineer fokus Data/AI. Mengembangkan analitik, visualisasi, dan UI modern.' }
  },
  en: {
    nav: { projects: 'Projects', skills: 'Skills', timeline: 'Timeline', contributions: 'Contributions' },
    cta: { switchLang: 'EN/ID', theme: 'Theme' },
    hero: {
      title: 'Kimsang Silalahi — Portfolio',
      subtitle: 'Web3 Developer | IoT Engineer | Technical Project Manager | Building Scalable Solutions with Blockchain & Edge Computing'
    },
    filters: { all:'All', data:'Data', ai:'AI', iot:'IoT', web:'Web' },
    ident: { title: 'Identity & Contributions', summary: 'Software Engineer focused on Data/AI. Building analytics, visualization, and modern UIs.' }
  }
} as const;

export type Locale = keyof typeof dict;
