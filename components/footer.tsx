'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'
import { footerQuickLinks, footerServices, companyName, companyAddress } from '@/lib/config/footer'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = (path: string) => getTranslation(language, path)

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{companyName}</h3>
            <p className="text-sm text-primary-foreground/80">
              {t('footer.aboutUsText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-foreground/80 transition">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-foreground/80 transition">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <p className="text-sm mb-2">
              <strong>{t('footer.address')}:</strong><br />
              {companyAddress}
            </p>
            <p className="text-sm">
              <strong>{t('footer.email')}:</strong><br />
              info@ptamalindah.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {currentYear} {t('footer.copyright')} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
