'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'
import { navigationItems, languageOptions, companyName } from '@/lib/config/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = (path: string) => getTranslation(language, path)

  // Show only main sections on desktop, hide nested items for cleaner look
  const mainNavItems = navigationItems.slice(0, 6)

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left Aligned */}
          <Link href="/" className="flex-shrink-0 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            {companyName}
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-accent transition-colors duration-200 relative group"
              >
                {t(item.labelKey)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Language Switcher - Right Aligned (Desktop) */}
          <div className="hidden md:flex gap-1 items-center">
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded transition-all duration-200 ${
                  language === lang.code
                    ? 'bg-accent text-primary'
                    : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium hover:text-accent transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </div>
            
            {/* Mobile Language Switcher */}
            <div className="border-t border-primary-foreground/20 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/60 mb-3 px-4">
                Language
              </p>
              <div className="flex gap-2 px-4">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    className={`flex-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-accent text-primary'
                        : 'bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
