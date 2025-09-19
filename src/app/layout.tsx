import '@/styles/globals.css'
import type { Metadata } from 'next'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kimsang Silalahi",
    "url": "https://example.com",
    "sameAs": [
      "https://github.com/KimiSilalahi766",
      "https://id.linkedin.com/in/kimsang-silalahi-3a8b13308",
      "https://iao.usu.ac.id/en/news/usu-students-took-part-at-humanitarian-program-in-malaysia"
    ],
    "jobTitle": "Software Engineer (Data/AI)"
  }
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(jsonLd)}</Script>
      </head>
      <body className="noise bg-wave">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
