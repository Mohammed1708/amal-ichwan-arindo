'use client'

import { ReactNode } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { LanguageProvider } from '@/lib/language-context'

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
