export const metadata = {
  title: 'Job Orders | PT Amal Ichwan Arindo',
  description: 'Current overseas job orders. Proof of active international demand for qualified Indonesian workers across multiple sectors and destinations.',
}

export default function JobOrders() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Current Job Orders</h1>
          <p className="text-xl text-primary-foreground/90">
            Active overseas job orders from our international employer partners, demonstrating current demand for qualified Indonesian workers.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-foreground/70 mb-4">
            <strong>Important Note:</strong> This page showcases job categories with active international demand. These are not direct job applications. For job seekers in Indonesia, legitimate opportunities are available through official recruitment channels listed on our For Job Seekers page.
          </p>
        </div>
      </section>

      {/* Job Orders Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Active Job Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Elderly Caregiver',
                destination: 'Japan',
                quantity: '15-20 positions',
                description:
                  'Compassionate caregiving for elderly clients in Japan. Requires patience, physical capability, and commitment to quality care. Competitive salary and accommodation provided.',
                requirements: ['Good health', 'Caregiving experience', 'Basic Japanese language helpful'],
              },
              {
                title: 'Domestic Worker',
                destination: 'Middle East (UAE/Saudi Arabia)',
                quantity: '25-30 positions',
                description:
                  'Household management and domestic services. Responsible for cleaning, cooking, laundry, and general household operations for international families.',
                requirements: ['Household management skills', 'Reliability', 'Strong work ethic'],
              },
              {
                title: 'Spa Therapist',
                destination: 'Japan',
                quantity: '8-12 positions',
                description:
                  'Provide therapeutic massage and spa services in Japanese wellness centers. Training opportunities available for continuous skill development.',
                requirements: ['Massage/therapy experience', 'Customer service skills', 'Physical capability'],
              },
              {
                title: 'Healthcare Worker',
                destination: 'Japan / Southeast Asia',
                quantity: '10-15 positions',
                description:
                  'Support healthcare professionals in hospitals and care facilities. Assist with patient care, hygiene, and daily activities under medical supervision.',
                requirements: ['Healthcare basics', 'Compassion for patient care', 'Good English communication'],
              },
              {
                title: 'Hotel Staff',
                destination: 'Southeast Asia',
                quantity: '20-25 positions',
                description:
                  'Housekeeping, front desk, and hospitality services in international hotels. Opportunity to develop professional hospitality skills in modern facilities.',
                requirements: ['Hospitality skills', 'Guest service orientation', 'Attention to detail'],
              },
              {
                title: 'Restaurant/Kitchen Staff',
                destination: 'Middle East / Southeast Asia',
                quantity: '15-20 positions',
                description:
                  'Kitchen assistants, cooks, and service staff in international restaurants. Support international culinary operations and fine dining service standards.',
                requirements: ['Food service experience', 'Teamwork ability', 'Food safety awareness'],
              },
            ].map((job, idx) => (
              <div key={idx} className="border border-border rounded overflow-hidden hover:shadow-lg transition">
                <div className="bg-accent text-accent-foreground p-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-sm opacity-90">{job.destination}</p>
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold text-primary mb-3">{job.quantity}</p>
                  <p className="text-foreground/70 mb-4">{job.description}</p>
                  <div>
                    <p className="font-semibold text-sm mb-2">Requirements:</p>
                    <ul className="space-y-1">
                      {job.requirements.map((req, ridx) => (
                        <li key={ridx} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
              <p className="text-foreground/70 mb-3">
                If you are an Indonesian job seeker interested in legitimate overseas employment, please:
              </p>
              <ol className="list-decimal list-inside text-foreground/70 space-y-2 text-sm">
                <li>Visit official recruitment channels in Indonesia</li>
                <li>Contact legitimate P3MI agencies directly</li>
                <li>Never pay upfront fees for job placements</li>
                <li>Verify agency legitimacy with BP2MI</li>
              </ol>
            </div>
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">For Employers</h3>
              <p className="text-foreground/70 mb-3">
                If you are an international employer seeking Indonesian workers:
              </p>
              <ol className="list-decimal list-inside text-foreground/70 space-y-2 text-sm">
                <li>Contact us through our employer inquiry form</li>
                <li>Provide specific job requirements and timeline</li>
                <li>We handle all recruitment and documentation</li>
                <li>Transparent process from inquiry to deployment</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Quantity Notes */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">About These Orders</h3>
          <div className="space-y-4 text-foreground/70">
            <p>
              <strong>Dynamic Demand:</strong> The quantities and specific positions listed above represent current market demand from our employer partners. These numbers change regularly as new orders are received and placements are completed.
            </p>
            <p>
              <strong>Active Placement:</strong> All job orders listed are actively being filled. Our team works continuously to match qualified candidates with appropriate positions based on their skills, experience, and preferences.
            </p>
            <p>
              <strong>Confidentiality:</strong> Specific employer information is kept confidential during recruitment to protect employer privacy. Candidates and employers are matched through our secure process.
            </p>
            <p>
              <strong>Ongoing Recruitment:</strong> We are continuously recruiting for these positions. If you are a qualified job seeker or an employer seeking workers, contact us to discuss opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for Opportunities?</h2>
          <p className="text-primary-foreground/90 mb-8">
            Contact us to learn more about placement opportunities or to submit your employer inquiry.
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
