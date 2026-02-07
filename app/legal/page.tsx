export const metadata = {
  title: 'Legal & Compliance | PT Amal Ichwan Arindo',
  description: 'P3MI license information. BP2MI registration. Indonesian manpower law compliance. Ethical recruitment standards.',
}

export default function Legal() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Legal & Compliance</h1>
          <p className="text-xl text-primary-foreground/90">
            Our legal framework, regulatory compliance, and commitment to ethical recruitment standards.
          </p>
        </div>
      </section>

      {/* P3MI License */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">P3MI License</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">What is P3MI?</h3>
              <p className="text-foreground/70 mb-4">
                P3MI stands for "Perusahaan Penyedia Jasa Pekerja Indonesia" (Private Indonesian Overseas Placement Service). This is the official classification for private companies licensed by the Indonesian government to recruit and place Indonesian workers for overseas employment.
              </p>
              <p className="text-foreground/70">
                P3MI agencies operate under strict government supervision and must comply with all Indonesian labor laws and international conventions on migrant worker protection.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">PT Amal Ichwan Arindo Status</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold">Officially Licensed P3MI</p>
                    <p className="text-sm text-foreground/70">Licensed by Indonesian government ministry responsible for overseas placement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold">Active & Current</p>
                    <p className="text-sm text-foreground/70">License maintained through continuous compliance and renewal</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold">Subject to Inspection</p>
                    <p className="text-sm text-foreground/70">Regular government audits and compliance checks</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BP2MI Registration */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">BP2MI Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">About BP2MI</h3>
              <p className="text-foreground/70 mb-4">
                BP2MI (Badan Pelaksana Penempatan Pekerja Indonesia) is the official government agency responsible for implementing overseas worker placement policies and protecting Indonesian migrant workers.
              </p>
              <p className="text-foreground/70 mb-4">
                All P3MI agencies must be registered with BP2MI. This registration ensures:
              </p>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Compliance with international labor standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Adherence to worker protection guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Transparent recruitment practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Regular oversight and monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded border border-border">
              <h3 className="text-xl font-bold mb-4">PT Amal Ichwan Arindo Status</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold">Registered with BP2MI</p>
                    <p className="text-sm text-foreground/70">Listed as approved P3MI agency</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold">Meets International Standards</p>
                    <p className="text-sm text-foreground/70">Complies with ILO conventions and protocols</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold">Subject to Oversight</p>
                    <p className="text-sm text-foreground/70">Regular audits by BP2MI and related agencies</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesian Labor Law Compliance */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Indonesian Labor Law Compliance</h2>
          <p className="text-foreground/70 mb-8">
            PT Amal Ichwan Arindo operates in full compliance with all relevant Indonesian labor laws and regulations governing overseas worker placement:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Law No. 18 of 2017',
                description:
                  'Regarding Protection of Indonesian Migrant Workers. Establishes rights, protections, and obligations for migrant workers and placement agencies.',
              },
              {
                title: 'BP2MI Regulations',
                description:
                  'Board regulations on recruitment procedures, worker selection, contracts, documentation, and placement standards.',
              },
              {
                title: 'Labor Code Compliance',
                description:
                  'Adherence to Indonesian labor code provisions regarding wages, working conditions, contracts, and worker rights.',
              },
              {
                title: 'Government Decrees',
                description:
                  'Compliance with all government decrees and ministerial regulations on overseas worker placement and protection.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Recruitment Commitment */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Ethical Recruitment Commitment</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Worker Protection',
                description:
                  'Every placement is designed with worker safety, rights, and welfare as top priority. We ensure fair contracts, appropriate wages, and safe working conditions.',
              },
              {
                title: 'No Forced Labor',
                description:
                  'Absolute prohibition on any forms of forced labor, human trafficking, or exploitative practices. Workers maintain full freedom of movement and choice.',
              },
              {
                title: 'Transparent Communication',
                description:
                  'Clear and honest communication with workers and employers. No deception about job conditions, wages, location, or any employment terms.',
              },
              {
                title: 'Fair Wage Practices',
                description:
                  'Wages are fair, competitive, and paid regularly. Wage agreements are clear, written, and understood by workers before contract signing.',
              },
              {
                title: 'Safe Working Conditions',
                description:
                  'Commitment to safe, healthy, and hygienic working environments. Regular monitoring and support for worker wellbeing.',
              },
              {
                title: 'No Discrimination',
                description:
                  'Zero tolerance for discrimination based on gender, age, ethnicity, religion, or any other characteristic. Equal treatment for all workers.',
              },
              {
                title: 'Document Security',
                description:
                  'Workers maintain control of their own documents. No withholding of passports or personal documents as a control mechanism.',
              },
              {
                title: 'Grievance Mechanisms',
                description:
                  'Workers have access to fair, confidential grievance procedures. Issues can be reported and addressed without fear of retaliation.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-border">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Standards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">International Standards Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                standard: 'ILO Conventions',
                description:
                  'Compliance with International Labor Organization conventions on migrant workers, forced labor, and discrimination.',
              },
              {
                standard: 'UN Protocols',
                description:
                  'Adherence to UN protocols on human trafficking and protection of all migrant workers.',
              },
              {
                standard: 'Destination Country Laws',
                description:
                  'Full compliance with labor laws and regulations of all destination countries for worker placements.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border p-8 rounded text-center">
                <h3 className="text-lg font-bold mb-3">{item.standard}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Verify Our Credentials</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            To verify PT Amal Ichwan Arindo's legal status and registrations, contact BP2MI or the Indonesian Ministry responsible for overseas worker placement. Our agency information is available in official government registries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Contact Us With Questions
          </a>
        </div>
      </section>
    </>
  )
}
