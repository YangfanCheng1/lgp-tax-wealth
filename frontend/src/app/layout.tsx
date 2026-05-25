import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LGP Tax & Wealth Management',
    template: '%s | LGP Tax & Wealth Management',
  },
  description:
    'Professional tax planning, wealth management, and financial advisory services for individuals and businesses. Trusted guidance to protect and grow your financial future.',
  keywords: [
    'tax planning',
    'wealth management',
    'financial advisor',
    'CPA',
    'CFP',
    'retirement planning',
    'estate planning',
    'tax preparation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'LGP Tax & Wealth Management',
    title: 'LGP Tax & Wealth Management',
    description:
      'Professional tax planning, wealth management, and financial advisory services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
