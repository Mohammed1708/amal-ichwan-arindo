'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'
import {
  homeServices,
  activeJobCategories,
  deploymentCountries,
  homeBenefits,
} from '@/lib/config/home'

export default function Home() {
  const { language } = useLanguage()
  const t = (path: string) => getTranslation(language, path)

  return (
    <>
      {/* Hero Section with Image */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pretty">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-balance">
              {t('home.heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/employers"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition"
              >
                {t('home.forEmployers')} <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/job-seekers"
                className="inline-flex items-center justify-center border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary-foreground hover:text-primary transition"
              >
                {t('home.forJobSeekers')}
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/hero-workers.jpg"
              alt="Indonesian workers in professional setting"
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        </div>
      </section>

      {/* Legal Authority Section with Image */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('home.trustTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/legal-compliance.jpg"
                alt="Legal compliance and documentation"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded border border-border">
                <div className="font-bold text-lg mb-2">{t('home.licensedP3MI')}</div>
                <p className="text-foreground/70">{t('home.licensedP3MIDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded border border-border">
                <div className="font-bold text-lg mb-2">{t('home.bp2miReg')}</div>
                <p className="text-foreground/70">{t('home.bp2miDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded border border-border">
                <div className="font-bold text-lg mb-2">{t('home.leadership')}</div>
                <p className="text-foreground/70">{t('home.leadershipDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services with Image */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('home.coreServices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/recruitment-process.jpg"
                alt="Professional recruitment process"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {homeServices.map((service, idx) => (
                <div key={idx} className="border border-border p-6 rounded hover:border-accent transition">
                  <h3 className="text-lg font-bold mb-2">{t(service.titleKey)}</h3>
                  <p className="text-foreground/70 text-sm">{t(service.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Job Orders Preview */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('home.activeJobs')}</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            {t('home.activeJobsDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {activeJobCategories.map((job) => (
              <div key={job.key} className="bg-white p-6 rounded border border-border text-center hover:shadow-lg transition">
                <h3 className="font-bold text-lg">{t(job.labelKey)}</h3>
                <p className="text-sm text-foreground/60 mt-2">Active overseas demand</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/job-orders"
              className="inline-flex items-center text-accent font-semibold hover:opacity-80 transition"
            >
              {t('home.viewAllJobs')} <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Deployment Countries with Image */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('home.deploymentCountries')}</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            {t('home.deploymentCountriesDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/workers-abroad.jpg"
                alt="Indonesian workers deployed abroad"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {deploymentCountries.map((item) => (
                <div key={item.countryKey} className="border border-border p-6 rounded hover:border-accent transition">
                  <h3 className="text-lg font-bold mb-2">{t(item.countryKey)}</h3>
                  <p className="text-foreground/70 text-sm">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/countries"
              className="inline-flex items-center text-accent font-semibold hover:opacity-80 transition"
            >
              {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('nav.employers')}</h3>
              <p className="mb-6 text-primary-foreground/90">
                Connect with vetted Indonesian workers. Browse our active job orders and inquire about partnership opportunities.
              </p>
              <Link
                href="/employers"
                className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition"
              >
                {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('nav.jobSeekers')}</h3>
              <p className="mb-6 text-primary-foreground/90">
                Understand our legal recruitment process and how to connect with legitimate overseas opportunities.
              </p>
              <Link
                href="/job-seekers"
                className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition"
              >
                {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('home.whyChoose')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {homeBenefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle className="flex-shrink-0 text-accent" size={24} />
                <span className="font-medium">{t(benefit.labelKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
