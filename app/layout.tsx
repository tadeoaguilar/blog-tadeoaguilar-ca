// app/layout.tsx
import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tadeo Aguilar - Bridging Technology and Business',
    template: '%s | Tadeo Aguilar',
  },
  description: 'Software Architect with 25+ years of experience. Insights on technology, architecture, and bridging business with technical excellence.',
  openGraph: {
    title: 'Tadeo Aguilar - Software Architect',
    description: 'Insights on technology, architecture, and bridging business with technical excellence.',
    url: baseUrl,
    siteName: 'Tadeo Aguilar Blog',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-text-gradient-light bg-gradient-to-b from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen flex flex-col bg-gradient-to-b from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}