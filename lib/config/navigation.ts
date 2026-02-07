export interface NavItem {
  href: string
  labelKey: string
}

export const navigationItems: NavItem[] = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/services', labelKey: 'nav.services' },
  { href: '/job-orders', labelKey: 'nav.jobOrders' },
  { href: '/countries', labelKey: 'nav.countries' },
  { href: '/employers', labelKey: 'nav.employers' },
  { href: '/job-seekers', labelKey: 'nav.jobSeekers' },
  { href: '/legal', labelKey: 'nav.legal' },
  { href: '/contact', labelKey: 'nav.contact' },
]

export interface LanguageOption {
  code: string
  label: string
  nativeLabel: string
}

export const languageOptions: LanguageOption[] = [
  { code: 'en', label: 'EN', nativeLabel: 'English' },
  { code: 'id', label: 'ID', nativeLabel: 'Bahasa' },
]

export const companyName = 'PT Amal Ichwan Arindo'
export const contactEmail = 'info@ptamalindah.com'
