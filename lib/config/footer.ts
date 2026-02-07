export interface FooterQuickLink {
  href: string
  labelKey: string
}

export interface FooterSection {
  titleKey: string
  links: FooterQuickLink[]
}

export const footerQuickLinks: FooterQuickLink[] = [
  { href: '/about', labelKey: 'nav.about' },
  { href: '/services', labelKey: 'nav.services' },
  { href: '/job-orders', labelKey: 'nav.jobOrders' },
  { href: '/contact', labelKey: 'nav.contact' },
]

export const footerServices: FooterQuickLink[] = [
  { href: '/employers', labelKey: 'nav.employers' },
  { href: '/job-seekers', labelKey: 'nav.jobSeekers' },
  { href: '/countries', labelKey: 'nav.countries' },
  { href: '/legal', labelKey: 'nav.legal' },
]

export const companyAddress = 'Jakarta, Indonesia'
export const companyName = 'PT Amal Ichwan Arindo'
