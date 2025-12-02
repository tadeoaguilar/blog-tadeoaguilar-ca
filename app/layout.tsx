// app/layout.tsx
import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tadeo Aguilar - Tech Insights',
    template: '%s | Tadeo Aguilar',
  },
  description: 'A technology professional passionate about SAP Finance, Software Architecture, Data Analytics, and AI. Insights, tutorials, and real-world experiences from the IT industry.',
  openGraph: {
    title: 'Tadeo Aguilar - Tech Insights',
    description: 'Insights on SAP Finance, Software Architecture, Data Analytics, AI, and enterprise technology.',
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

const cx = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen bg-slate-950">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}