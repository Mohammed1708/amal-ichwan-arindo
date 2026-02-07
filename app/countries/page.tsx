export const metadata = {
  title: 'Deployment Countries | PT Amal Ichwan Arindo',
  description: 'Deployment destinations for Indonesian workers. Country-specific recruitment standards and sector focus across Japan, Middle East, and Southeast Asia.',
}

export default function Countries() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Deployment Countries</h1>
          <p className="text-xl text-primary-foreground/90">
            We connect Indonesian workers with opportunities across multiple international markets, each with unique standards, requirements, and economic opportunities.
          </p>
        </div>
      </section>

      {/* Country Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {[
            {
              country: 'Japan',
              flag: '🇯🇵',
              overview:
                'Japan represents one of our largest and most developed deployment markets. With an aging population and strong economy, there is consistent demand for caregiving, healthcare, and skilled workers.',
              sectors: ['Caregiving', 'Healthcare', 'Hospitality', 'Manufacturing', 'Technical Services'],
              standards: [
                'High standards for health and background checks',
                'Language training often required',
                'Detailed employment contracts',
                'Strong worker protection laws',
                'Competitive wages and benefits',
              ],
              deployment: 'Long-term contracts (2-5 years typical)',
              advantages: [
                'Excellent wages compared to many markets',
                'Strong worker protections and labor laws',
                'Modern infrastructure and facilities',
                'Professional workplace environments',
                'Potential for skills development',
              ],
            },
            {
              country: 'Middle East',
              flag: '🌍',
              overview:
                'Major market including UAE, Saudi Arabia, and surrounding regions. Strong demand for domestic workers, hospitality staff, and service professionals. Growing market with diverse opportunities.',
              sectors: ['Domestic Work', 'Hospitality', 'Retail', 'Services', 'Healthcare'],
              standards: [
                'Contract-based employment terms',
                'Sponsorship system for visa/employment',
                'Varying labor standards by country',
                'Accommodation often provided',
                'Clear employment agreements required',
              ],
              deployment: 'Contract-based (1-3 years typical)',
              advantages: [
                'High demand for workers',
                'Good earning potential',
                'Many positions include accommodation',
                'Tax-efficient earnings',
                'Career advancement opportunities',
              ],
            },
            {
              country: 'Southeast Asia',
              flag: '🏝️',
              overview:
                'Growing market in Singapore, Malaysia, Thailand, and Indonesia itself. Increasing demand as the region develops and tourism grows. Regional opportunities with varying wage levels.',
              sectors: ['Hospitality', 'Tourism', 'Retail', 'Food & Beverage', 'Services'],
              standards: [
                'Regional labor standards vary',
                'Generally accessible for regional workers',
                'Growing hotel and tourism sectors',
                'Manufacturing and light industry',
                'Service sector expansion',
              ],
              deployment: 'Flexible terms (6 months to 3 years)',
              advantages: [
                'Closer to home/family',
                'Lower language barriers',
                'Regional development opportunities',
                'Tourism sector growth',
                'Service industry demand',
              ],
            },
          ].map((country, idx) => (
            <div key={idx} className="border-b border-border pb-12 last:border-b-0">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  {country.flag} {country.country}
                </h2>
                <p className="text-lg text-foreground/70 mb-6">{country.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Sectors</h3>
                  <ul className="space-y-2">
                    {country.sectors.map((sector, sidx) => (
                      <li key={sidx} className="flex items-center gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Recruitment Standards</h3>
                  <ul className="space-y-2">
                    {country.standards.map((standard, sidx) => (
                      <li key={sidx} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span className="text-foreground/70">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary p-8 rounded">
                <div>
                  <h4 className="font-bold mb-3">Typical Deployment</h4>
                  <p className="text-foreground/70">{country.deployment}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-3">Key Advantages</h4>
                  <ul className="space-y-2">
                    {country.advantages.map((adv, aidx) => (
                      <li key={aidx} className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span className="text-foreground/70 text-sm">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Overview */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold">Factor</th>
                  <th className="text-left p-4 font-bold">Japan</th>
                  <th className="text-left p-4 font-bold">Middle East</th>
                  <th className="text-left p-4 font-bold">SE Asia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">Wage Level</td>
                  <td className="p-4">High</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Moderate</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Contract Length</td>
                  <td className="p-4">2-5 years</td>
                  <td className="p-4">1-3 years</td>
                  <td className="p-4">6m-3 years</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Worker Protection</td>
                  <td className="p-4">Very Strong</td>
                  <td className="p-4">Moderate</td>
                  <td className="p-4">Developing</td>
                </tr>
                <tr>
                  <td className="p-4">Distance</td>
                  <td className="p-4">Far</td>
                  <td className="p-4">Moderate</td>
                  <td className="p-4">Close</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Compliance Approach</h2>
          <p className="text-center text-foreground/70 mb-8 max-w-3xl mx-auto">
            Regardless of destination country, PT Amal Ichwan Arindo ensures every placement meets Indonesian legal requirements and follows ethical international labor standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Indonesian Compliance',
                items: [
                  'BP2MI registration requirements',
                  'Indonesian labor law adherence',
                  'Proper documentation processing',
                  'Worker welfare monitoring',
                ],
              },
              {
                title: 'Destination Compliance',
                items: [
                  'Country-specific visa requirements',
                  'Local labor law adherence',
                  'Employer vetting and verification',
                  'Regulatory approval processes',
                ],
              },
              {
                title: 'Ethical Standards',
                items: [
                  'Fair wage verification',
                  'Safe working conditions',
                  'Contract transparency',
                  'Worker support systems',
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((i, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-foreground/70">
                      <span className="text-accent">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a Specific Market?</h2>
          <p className="text-primary-foreground/90 mb-8">
            Contact us to learn more about opportunities in any of these countries or to discuss your specific deployment needs.
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
