export const metadata = {
  title: 'For Job Seekers | PT Amal Ichwan Arindo',
  description: 'Legal overseas employment information. Anti-scam protection. How to connect with legitimate opportunities through P3MI agencies.',
}

export default function JobSeekers() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">For Job Seekers</h1>
          <p className="text-xl text-primary-foreground/90">
            Information about legal overseas employment, how to protect yourself from scams, and how to connect with legitimate recruitment agencies.
          </p>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What PT Amal Ichwan Arindo Is (and Is Not)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded border-2 border-accent">
              <h3 className="text-xl font-bold mb-4 text-accent">✓ What We ARE</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>A licensed P3MI recruitment agency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Officially registered with BP2MI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>A bridge connecting workers to international employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Advocates for fair treatment and worker protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Transparent about our process and limitations</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded border-2 border-red-500">
              <h3 className="text-xl font-bold mb-4 text-red-600">✗ What We Are NOT</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>A job portal or online application platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>A direct employer—we connect you with employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Able to guarantee specific job placements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>A financing provider or loan agency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Requiring upfront payments for job placement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Recruitment Process */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Understanding Legal Recruitment</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-foreground/70">
              Legal overseas employment in Indonesia follows official channels regulated by the government. Here's what legitimate recruitment looks like:
            </p>
            {[
              {
                title: 'Licensed Agency',
                description:
                  'Work only with agencies officially licensed as P3MI (Private Indonesian Overseas Placement Service) and registered with BP2MI.',
              },
              {
                title: 'No Upfront Fees',
                description:
                  'Legitimate agencies do NOT require upfront payment. Your fees may be deducted from your salary after employment begins, based on contract terms.',
              },
              {
                title: 'Clear Contracts',
                description:
                  'A legitimate job comes with a clear, written contract detailing wages, working conditions, duration, benefits, and your rights.',
              },
              {
                title: 'Employer Verification',
                description:
                  'The agency verifies the employer and working conditions. Legitimate employers are willing to provide information about their business and workplace.',
              },
              {
                title: 'Government Support',
                description:
                  'The Indonesian government supports legal workers overseas through embassies and official channels. Real protection is available to you.',
              },
              {
                title: 'Worker Rights',
                description:
                  'You maintain rights regardless of location. Fair wages, reasonable working hours, and safe conditions are your rights, not privileges.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Protection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Protect Yourself From Scams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-600">🚨 RED FLAGS</h3>
              <ul className="space-y-4">
                {[
                  'Agency demands upfront payment before employment',
                  'Promises of extremely high wages with no experience needed',
                  'Refuses to provide written contract or delays providing details',
                  'Cannot provide official license or BP2MI registration number',
                  'Requests personal documents and does not return them',
                  'Pressure to decide immediately without time to research',
                  'Vague about actual job duties or working conditions',
                  'No verifiable phone number or official office location',
                  'Guarantees job without interview or employer contact',
                ].map((flag, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-red-600">
                    <span className="font-bold flex-shrink-0">✗</span>
                    <span className="text-foreground/70">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-green-600">✓ SAFE SIGNS</h3>
              <ul className="space-y-4">
                {[
                  'Licensed P3MI agency—verify with BP2MI',
                  'Realistic wages appropriate to job type and experience',
                  'Provides detailed written contract before accepting',
                  'Can show official government license and registration',
                  'Returns all documents to you in secure manner',
                  'Takes time to understand your needs and concerns',
                  'Clear explanation of duties, location, and conditions',
                  'Official office with verifiable contact information',
                  'Introduction to employer or employer interview process',
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-green-600">
                    <span className="font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground/70">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Legitimate Opportunities */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Find Legitimate Opportunities</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: '1. Research Licensed Agencies',
                description:
                  'Visit BP2MI website to find licensed P3MI agencies in your area. Only work with agencies officially listed and registered.',
              },
              {
                step: '2. Visit Their Office',
                description:
                  'Go to the agency office in person. Legitimate agencies have physical locations, professional staff, and can show you official documents.',
              },
              {
                step: '3. Ask Questions',
                description:
                  'Ask about the job, employer, contract terms, wages, and working conditions. Do not feel pressured. Legitimate agencies welcome questions.',
              },
              {
                step: '4. Verify Information',
                description:
                  'Ask for the agency license, BP2MI registration number, and employer information. You can verify these independently.',
              },
              {
                step: '5. Get Contract in Writing',
                description:
                  'Before committing, get the complete job contract in writing. Take time to read it carefully or have someone trusted review it.',
              },
              {
                step: '6. Understand Your Rights',
                description:
                  'Learn about worker rights in your destination country. Contact your local embassy or consulate for information and support.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-border">
                <h3 className="font-bold mb-2">{item.step}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Your Rights as a Migrant Worker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Right to fair wages for work performed',
              'Right to safe and healthy working conditions',
              'Right to reasonable working hours and rest days',
              'Right to maintain your documents (passport, contracts)',
              'Right to medical care if injured or ill',
              'Right to freedom from discrimination',
              'Right to report abuse without fear of deportation',
              'Right to communicate with family and friends',
              'Right to contact your embassy or consulate',
              'Right to legal assistance if mistreated',
              'Right to adequate housing and food',
              'Right to be informed of all contract terms',
            ].map((right, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 border border-border rounded hover:border-accent transition">
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <span className="text-foreground/70">{right}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Support & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">BP2MI (Indonesian Government)</h3>
              <p className="text-foreground/70 mb-4 text-sm">
                The official Indonesian Overseas Worker Placement Board (BP2MI) regulates all P3MI agencies and protects migrant worker rights.
              </p>
              <p className="font-semibold text-sm">
                <strong>Website:</strong> Access through your country's Indonesian embassy or consulate for official resources.
              </p>
            </div>
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">Indonesian Embassies & Consulates</h3>
              <p className="text-foreground/70 mb-4 text-sm">
                Your country's Indonesian embassy or consulate provides support, legal assistance, and information for Indonesian workers abroad.
              </p>
              <p className="font-semibold text-sm">
                <strong>Contact:</strong> Find your nearest embassy for support and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Agency */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About PT Amal Ichwan Arindo</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded text-center">
              <p className="font-bold text-lg text-accent mb-2">Licensed P3MI</p>
              <p className="text-foreground/70 text-sm">
                Officially registered as a Private Indonesian Overseas Placement Service
              </p>
            </div>
            <div className="bg-secondary p-6 rounded text-center">
              <p className="font-bold text-lg text-accent mb-2">BP2MI Registered</p>
              <p className="text-foreground/70 text-sm">
                Meets highest standards for worker protection and compliance
              </p>
            </div>
            <div className="bg-secondary p-6 rounded text-center">
              <p className="font-bold text-lg text-accent mb-2">Transparent & Ethical</p>
              <p className="text-foreground/70 text-sm">
                Committed to honest practices and worker welfare
              </p>
            </div>
          </div>
          <p className="text-center text-foreground/70 mt-8 max-w-2xl mx-auto">
            We advocate for fair treatment, transparent processes, and your rights as a worker. While we primarily work with international employers to place workers, we also provide information and support to help job seekers connect with legitimate opportunities.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Overseas Employment?</h2>
          <p className="text-primary-foreground/90 mb-8">
            Contact us for information about legitimate opportunities or to verify information about our agency.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
