export const metadata = {
  title: 'Services | PT Amal Ichwan Arindo',
  description: 'Comprehensive overseas recruitment and manpower placement services. From sourcing to deployment and support.',
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-foreground/90">
            End-to-end overseas recruitment and manpower placement solutions designed to connect international employers with qualified Indonesian workers.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Overseas Recruitment & Placement',
                description:
                  'Expert sourcing and placement of Indonesian workers for international employers. Our service includes job analysis, candidate sourcing, screening, interview coordination, and final placement. We manage the entire recruitment cycle from initial employer inquiry to worker deployment.',
              },
              {
                title: 'Indonesian Workforce Sourcing',
                description:
                  'Access to a extensive network of pre-screened, qualified Indonesian workers across multiple sectors. We identify and evaluate candidates based on employer requirements, conducting thorough background checks and skills verification. All candidates meet our quality standards.',
              },
              {
                title: 'Contract-Based Worker Deployment',
                description:
                  'Flexible deployment solutions with contractual arrangements tailored to employer needs. Fixed-term contracts, renewable options, and project-based placements are all available. We ensure transparent terms beneficial to both employer and worker.',
              },
              {
                title: 'Documentation & Regulatory Compliance',
                description:
                  'Full handling of visa processing, travel documentation, medical checks, and regulatory compliance with Indonesian and destination country requirements. We manage all paperwork ensuring 100% legal compliance at every step.',
              },
            ].map((service, idx) => (
              <div key={idx} className="border border-border p-8 rounded hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Inquiry', description: 'Employer provides job requirements and placement needs' },
              { step: '2', title: 'Sourcing', description: 'We identify and screen qualified candidates' },
              { step: '3', title: 'Interview', description: 'Candidates are interviewed and verified' },
              { step: '4', title: 'Documentation', description: 'All regulatory documents and visas processed' },
              { step: '5', title: 'Deployment', description: 'Worker is deployed and supported abroad' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-border">
                <div className="text-3xl font-bold text-accent mb-2">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Job Categories We Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Caregiving & Healthcare',
                roles: ['Elderly Caregiver', 'Home Health Aide', 'Healthcare Worker', 'Nursing Assistant'],
              },
              {
                category: 'Domestic & Hospitality',
                roles: ['Domestic Worker', 'Hotel Staff', 'Restaurant Staff', 'Housekeeping'],
              },
              {
                category: 'Wellness & Services',
                roles: ['Spa Therapist', 'Massage Therapist', 'Beauty Worker', 'Personal Care'],
              },
              {
                category: 'Technical & Other',
                roles: ['Technical Support', 'Construction', 'Manufacturing', 'Agriculture'],
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded">
                <h3 className="text-xl font-bold mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.roles.map((role, ridx) => (
                    <li key={ridx} className="text-foreground/70 flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-foreground/70 mt-8 max-w-3xl mx-auto">
            These are common categories of placements. We can accommodate requests for other job categories based on availability and employer requirements.
          </p>
        </div>
      </section>

      {/* Destination Countries */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Deployment Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                country: 'Japan',
                details: 'Major deployment market for caregiving, healthcare, and technical roles. Established partnerships with Japanese employers across multiple prefectures.',
              },
              {
                country: 'Middle East',
                details: 'Significant demand for domestic workers and service roles. Strong network of employer partners across UAE, Saudi Arabia, and surrounding regions.',
              },
              {
                country: 'Southeast Asia',
                details: 'Regional opportunities in Singapore, Malaysia, and Thailand. Growing market with diverse employment opportunities across sectors.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded border border-border">
                <h3 className="text-2xl font-bold mb-4">{item.country}</h3>
                <p className="text-foreground/70">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Licensed P3MI agency with official government registration',
              'BP2MI compliance ensures highest worker protection standards',
              'Transparent pricing with no hidden fees',
              'Comprehensive candidate screening and verification',
              'Complete documentation and visa handling',
              'Post-deployment support for both employer and worker',
              'Ethical recruitment practices throughout',
              'Experienced team with industry expertise',
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-6 rounded">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find the Right Workers?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your manpower needs and learn how we can support your organization.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
