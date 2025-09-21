// app/layout.tsx
import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import ScrollProvider from '@/components/ScrollProvider'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kimsang Silalahi — Portfolio',
  description: 'Portfolio',
  openGraph: {
    title: 'Kimsang Silalahi — Portfolio',
    description: 'Portfolio',
    url: 'https://example.com',
    siteName: 'Kimsang Portfolio',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Kimsang Portfolio' }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Kimsang Silalahi — Portfolio', description: 'Portfolio', images: ['/og.png'] },
}

// pastikan viewport untuk perangkat mobile
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kimsang Silalahi',
    url: 'https://example.com',
    sameAs: [
      'https://github.com/KimiSilalahi766',
      'https://id.linkedin.com/in/kimsang-silalahi-3a8b13308',
      'https://iao.usu.ac.id/en/news/usu-students-took-part-at-humanitarian-program-in-malaysia',
    ],
    jobTitle: 'Software Engineer (Data/AI)',
  }

  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* fallback meta viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>

      {/* KUNCI: hindari overflow horizontal + tipografi rapi di mobile */}
      <body className="antialiased bg-slate-950 text-slate-100 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProvider />
          {/* Saran: bungkus halamanmu dengan container ini di page.tsx:
              <main className="w-full safe-x mx-auto max-w-screen-lg px-4 sm:px-6">
                ...sections...
              </main>
           */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
