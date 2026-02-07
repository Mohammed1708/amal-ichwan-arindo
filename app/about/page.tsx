'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'

export default function About() {
  const { language } = useLanguage()
  const t = (path: string) => getTranslation(language, path)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-primary-foreground/90">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t('about.background')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('about.founded')}</h3>
              <p className="text-foreground/70 mb-4 text-lg font-semibold">
                {t('about.founderDesc')}
              </p>
              <p className="text-foreground/70 mb-6">
                {t('about.backgroundDesc')}
              </p>
              <p className="text-foreground/70">
                {t('about.experienceDesc')}
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="/images/legal-compliance.jpg"
                alt="Legal foundation and compliance"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience in Overseas Recruitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded border border-border">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="font-semibold mb-2">Years of Experience</p>
              <p className="text-foreground/70">
                Over a decade of dedicated service in connecting Indonesian workers with international opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded border border-border">
              <div className="text-3xl font-bold text-accent mb-2">Multiple</div>
              <p className="font-semibold mb-2">Deployment Countries</p>
              <p className="text-foreground/70">
                Active partnerships and placements across Japan, Middle East, and Southeast Asian markets.
              </p>
            </div>
            <div className="bg-white p-8 rounded border border-border">
              <div className="text-3xl font-bold text-accent mb-2">Ethical</div>
              <p className="font-semibold mb-2">Recruitment Standards</p>
              <p className="text-foreground/70">
                Unwavering commitment to transparent, compliant, and worker-protective practices throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Commitment to Ethical Recruitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Worker Protection',
                description:
                  'Every placement is designed with worker safety and rights as the highest priority. We ensure clear contracts, fair wages, and proper working conditions.',
              },
              {
                title: 'Transparency',
                description:
                  'All processes are transparent to both employers and workers. We maintain clear communication throughout recruitment, placement, and deployment.',
              },
              {
                title: 'Regulatory Compliance',
                description:
                  'Full adherence to Indonesian labor laws, BP2MI standards, and destination country regulations. No shortcuts, no exceptions.',
              },
              {
                title: 'Anti-Fraud Measures',
                description:
                  'Robust verification systems to prevent fraud and scams. We protect both workers and employers from unethical practices.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
          <div className="max-w-md mx-auto bg-white p-8 rounded border border-border text-center">
            <h3 className="text-2xl font-bold mb-2">Hasan Saleh</h3>
            <p className="text-accent font-semibold mb-4">Director & Founder</p>
            <p className="text-foreground/70">
              Leading PT Amal Ichwan Arindo with a vision of ethical overseas recruitment and commitment to protecting Indonesian workers while serving international employers with integrity and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Integrity', 'Transparency', 'Compliance', 'Excellence'].map((value, idx) => (
              <div key={idx} className="text-center p-6 border border-border rounded hover:border-accent transition">
                <p className="text-xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
