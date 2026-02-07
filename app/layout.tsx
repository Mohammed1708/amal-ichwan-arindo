import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'
import LayoutClient from '@/components/layout-client'

const geist = Geist({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'PT Amal Ichwan Arindo | Licensed Indonesian P3MI Manpower Agency',
  description: 'Licensed Indonesian overseas recruitment and manpower placement agency. Official P3MI registered with BP2MI. Connecting international employers with qualified Indonesian workers.',
  keywords: 'Indonesian manpower agency, P3MI, licensed recruitment, overseas employment, BP2MI registered',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
