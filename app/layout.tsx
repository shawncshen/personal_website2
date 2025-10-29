import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: 'Shawn Shen - Personal Portfolio',
  description: 'My personal portfolio and about me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body>{children}</body>
    </html>
  )
}
