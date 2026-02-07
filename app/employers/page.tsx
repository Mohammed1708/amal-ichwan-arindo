import Link from 'next/link'

export const metadata = {
  title: 'For Employers | PT Amal Ichwan Arindo',
  description: 'B2B recruitment solutions. Why hire Indonesian workers. Partnership with a licensed P3MI agency. Recruitment process and compliance.',
}

export default function Employers() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Partner With PT Amal Ichwan Arindo</h1>
          <p className="text-xl text-primary-foreground/90">
            Connect with qualified Indonesian workers through a licensed, compliant, and reliable recruitment partner.
          </p>
        </div>
      </section>

      {/* Why Hire Indonesian Workers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Hire Indonesian Workers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Skilled & Dedicated Workforce',
                description:
                  'Indonesian workers are known for strong work ethic, reliability, and dedication. Many have international experience and are eager to provide excellent service.',
              },
              {
                title: 'Cost Advantage',
                description:
                  'Competitive salary requirements compared to local workers in many developed markets, without compromising on quality and dedication.',
              },
              {
                title: 'Diverse Skills',
                description:
                  'Access to workers across healthcare, hospitality, domestic services, technical roles, and many other sectors. Pre-screened and qualified candidates.',
              },
              {
                title: 'Cultural Alignment',
                description:
                  'Indonesian workers are experienced in multicultural environments and adapt well to international workplace standards and expectations.',
              },
              {
                title: 'Regulatory Compliance',
                description:
                  'All placements handled through official channels with full legal compliance. Transparent process with proper documentation and protections.',
              },
              {
                title: 'Reliable Partnership',
                description:
                  'Work with a licensed P3MI agency. We manage recruitment, visa processing, and provide ongoing support throughout the employment relationship.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PT Amal Ichwan Arindo */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Partner With PT Amal Ichwan Arindo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Licensed P3MI Agency',
                description:
                  'Official government license as a Private Indonesian Overseas Placement Service. Verified, legitimate, and operating under Indonesian law.',
              },
              {
                title: 'BP2MI Registered',
                description:
                  'Registered with Indonesia\'s Overseas Worker Placement Board. Compliance with highest international standards for worker placement and protection.',
              },
              {
                title: 'Transparent Process',
                description:
                  'Clear communication at every step. No hidden fees, no surprises. You know exactly what to expect from initial inquiry to worker deployment.',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Rigorous candidate screening, background checks, and skills verification. Only qualified, vetted workers are presented for your consideration.',
              },
              {
                title: 'Complete Documentation',
                description:
                  'We handle all visa processing, medical checks, travel arrangements, and regulatory paperwork. Full compliance with Indonesian and destination country requirements.',
              },
              {
                title: 'Post-Deployment Support',
                description:
                  'Ongoing support after worker deployment. We manage issues, facilitate communication, and ensure smooth working relationships.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Recruitment Process</h2>
          <div className="space-y-8">
            {[
              {
                step: 'Step 1: Initial Inquiry',
                description: 'Contact us with your job requirements, position details, timeline, and any specific preferences. We discuss scope, timeline, and process.',
              },
              {
                step: 'Step 2: Candidate Sourcing',
                description:
                  'We identify qualified candidates matching your requirements from our network. Each candidate is pre-screened, verified, and interviewed.',
              },
              {
                step: 'Step 3: Candidate Presentation',
                description: 'We present qualified candidates with detailed profiles, references, and background information. You select candidates for interviews.',
              },
              {
                step: 'Step 4: Interview & Selection',
                description:
                  'Conduct interviews with candidates. We facilitate communication and answer any questions about the candidates or process.',
              },
              {
                step: 'Step 5: Documentation & Visas',
                description: 'Once selected, we handle all documentation, visa applications, medical checks, and travel arrangements. Full legal compliance ensured.',
              },
              {
                step: 'Step 6: Deployment & Support',
                description:
                  'Worker is deployed to your organization. We provide ongoing support, manage any issues, and ensure successful workplace integration.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-8">
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Available Job Categories</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            We can fill positions across many sectors. Here are some of our most common placements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Caregiving', 'Healthcare', 'Hospitality', 'Domestic Services', 'Spa & Wellness', 'Manufacturing', 'Technical Services', 'Construction', 'Other Sectors'].map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-border text-center hover:border-accent transition">
                <p className="font-semibold">{cat}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/70 mt-8">
            Don't see your specific need? Contact us to discuss custom placement solutions.
          </p>
        </div>
      </section>

      {/* Deployment Countries */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Deployment Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: 'Japan', sectors: 'Caregiving, Healthcare, Technical' },
              { country: 'Middle East', sectors: 'Domestic, Hospitality, Services' },
              { country: 'Southeast Asia', sectors: 'Various Sectors' },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded text-center">
                <h3 className="text-2xl font-bold mb-2">{item.country}</h3>
                <p className="text-foreground/70 text-sm">{item.sectors}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Compliance & Legal Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">Our Credentials</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Licensed P3MI Agency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>BP2MI Registered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Director: Hasan Saleh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Years of Experience</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">Your Assurances</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Legally compliant placements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Qualified, verified candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Transparent pricing & process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Ongoing support & assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find the Workers You Need?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Submit your inquiry today. Let's discuss your manpower needs and how we can support your organization with qualified Indonesian workers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Submit Employer Inquiry
          </Link>
        </div>
      </section>
    </>
  )
}
