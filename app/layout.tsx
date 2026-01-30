import './globals.css'
import '../styles/community-cards.css'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AmplifierChat from '@/components/AmplifierChat'
import { getGitHubStats } from '@/lib/github'

export const metadata: Metadata = {
  title: 'Amplifier',
  description: 'Build AI Your Way. Your AI agent is a file you can read, write, and share.',
  keywords: ['AI', 'agents', 'LLM', 'open source', 'Microsoft', 'developer tools'],
  authors: [{ name: 'Microsoft' }],
  openGraph: {
    title: 'Amplifier',
    description: 'Build AI Your Way. Your AI agent is a file you can read, write, and share.',
    url: 'https://withamplifier.com',
    siteName: 'Amplifier',
    images: [
      {
        url: 'https://withamplifier.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amplifier - Build AI Your Way',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplifier',
    description: 'Build AI Your Way. Your AI agent is a file you can read, write, and share.',
    images: ['https://withamplifier.com/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#5B4DE3',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch GitHub stats server-side, cached for 1 hour
  const githubStats = await getGitHubStats()
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Epilogue:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-ink antialiased">
        <Navigation stars={githubStats.stars} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AmplifierChat />
      </body>
    </html>
  )
}
