'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, defaultLanguage } from './i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const defaultContextValue: LanguageContextType = {
  language: defaultLanguage,
  setLanguage: () => {},
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)

  useEffect(() => {
    // Get language from localStorage on mount
    const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null
    if (saved && (saved === 'en' || saved === 'id')) {
      setLanguageState(saved as Language)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}
