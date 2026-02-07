export type Language = 'en' | 'id'

export const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Bahasa Indonesia' },
]

export const defaultLanguage: Language = 'en'

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      jobOrders: 'Job Orders',
      countries: 'Countries',
      employers: 'For Employers',
      jobSeekers: 'For Job Seekers',
      legal: 'Legal & Compliance',
      contact: 'Contact Us',
    },
    // Home page
    home: {
      heroTitle: 'Licensed Indonesian Manpower Agency for Overseas Employment',
      heroDescription:
        'Official P3MI registered with BP2MI. Connecting international employers with qualified Indonesian workers across Japan, Middle East, and beyond.',
      forEmployers: 'For Employers',
      forJobSeekers: 'For Job Seekers',
      trustTitle: 'Trust & Legal Authority',
      licensedP3MI: 'Licensed P3MI Agency',
      licensedP3MIDesc:
        'Officially registered as a Private Indonesian Overseas Placement Service (P3MI) under Indonesian law. Every placement follows strict regulatory compliance.',
      bp2miReg: 'BP2MI Registration',
      bp2miDesc:
        'Registered with Indonesia\'s Overseas Worker Placement Board (BP2MI). Compliant with all Indonesian manpower regulations and ethical recruitment standards.',
      leadership: 'Leadership',
      leadershipDesc:
        'Director: Hasan Saleh - Leading the agency with commitment to ethical recruitment practices and worker protection standards.',
      coreServices: 'Core Services Overview',
      servicesOverseas: 'Overseas Recruitment & Placement',
      servicesOverseasDesc:
        'Expert sourcing and placement of Indonesian workers for international employers. Full recruitment cycle management from selection to deployment.',
      servicesSourceing: 'Indonesian Workforce Sourcing',
      servicesSourcingDesc:
        'Access to a network of pre-screened, qualified Indonesian workers across various sectors including caregiving, hospitality, and technical roles.',
      servicesContract: 'Contract-Based Worker Deployment',
      servicesContractDesc:
        'Flexible deployment solutions with contractual arrangements tailored to employer needs. Transparent terms and professional documentation.',
      servicesCompliance: 'Documentation & Regulatory Compliance',
      servicesComplianceDesc:
        'Full handling of visa processing, documentation, and regulatory compliance with Indonesian and destination country requirements.',
      activeJobs: 'Active Job Orders',
      activeJobsDesc:
        'Current overseas job categories demonstrating active international demand for qualified Indonesian workers.',
      viewAllJobs: 'View All Job Orders',
      deploymentCountries: 'Deployment Countries',
      deploymentCountriesDesc:
        'We connect Indonesian workers with opportunities across multiple international markets.',
      learnMore: 'Learn More',
      whyChoose: 'Why Choose PT Amal Ichwan Arindo?',
      benefit1: 'Official P3MI license from Indonesian government',
      benefit2: 'Registered with BP2MI (Overseas Worker Placement Board)',
      benefit3: 'Transparent, ethical recruitment practices',
      benefit4: 'Compliance with all Indonesian labor regulations',
      benefit5: 'Experienced placement across multiple countries',
      benefit6: 'Dedicated support throughout employment process',
    },
    // About page
    about: {
      title: 'About PT Amal Ichwan Arindo',
      subtitle: 'Professional Recruitment Agency with Legal Authority',
      founded: 'Founded and Led by',
      founderDesc: 'Hasan Saleh - Commitment to Ethical Recruitment',
      background: 'Company Background',
      backgroundDesc:
        'PT Amal Ichwan Arindo is a professional Indonesian recruitment and manpower placement agency specializing in overseas employment for both domestic and international workers. We operate under the legal framework of Indonesian labor regulations with official P3MI licensing and BP2MI registration.',
      mission: 'Our Mission',
      missionDesc:
        'To facilitate legitimate, ethical employment opportunities for Indonesian workers internationally while ensuring full compliance with all regulatory requirements and protecting worker rights.',
      values: 'Our Core Values',
      transparency: 'Transparency',
      transparencyDesc: 'Complete openness in all recruitment and placement processes',
      ethicalPractices: 'Ethical Practices',
      ethicalPracticesDesc: 'Unwavering commitment to legal and ethical recruitment standards',
      compliance: 'Compliance',
      complianceDesc: 'Full adherence to Indonesian labor law and destination country regulations',
      workerProtection: 'Worker Protection',
      workerProtectionDesc: 'Safeguarding rights and welfare of all workers throughout employment',
      experience: 'Our Experience',
      experienceDesc:
        'With years of proven experience in international recruitment, we have successfully placed thousands of Indonesian workers in quality positions across Japan, Middle East, and Southeast Asia.',
    },
    // Services page
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Recruitment & Placement Solutions',
      recruitment: 'Overseas Recruitment & Placement',
      recruitmentDesc:
        'Complete recruitment cycle from candidate sourcing, screening, training, to final deployment abroad. We handle all aspects of connecting employers with qualified workers.',
      sourcing: 'Indonesian Workforce Sourcing',
      sourcingDesc:
        'Direct access to pre-vetted Indonesian workers across caregiving, healthcare, hospitality, domestic service, and technical sectors. Fully compliant with all selection standards.',
      documentation: 'Complete Documentation Services',
      documentationDesc:
        'Full handling of visa processing, work permits, travel documentation, insurance, and all regulatory paperwork required for international employment.',
      support: 'Pre-Deployment & On-Site Support',
      supportDesc:
        'Comprehensive support including medical checks, orientation training, cultural briefing, and ongoing assistance during employment abroad.',
      process: 'Our 5-Step Recruitment Process',
      step1: 'Candidate Assessment & Selection',
      step1Desc: 'Thorough evaluation of candidate qualifications, skills, and suitability for overseas work',
      step2: 'Pre-Deployment Training',
      step2Desc: 'Specialized training including language, cultural adaptation, and job-specific skills',
      step3: 'Documentation & Visa Processing',
      step3Desc: 'Complete handling of all required documentation and visa applications',
      step4: 'Medical Clearance & Final Preparation',
      step4Desc: 'Health screening and final preparations for overseas deployment',
      step5: 'Deployment & Ongoing Support',
      step5Desc: 'Placement coordination and continuous support throughout employment period',
    },
    // Job Orders page
    jobOrders: {
      title: 'Current Job Orders',
      subtitle: 'Active Overseas Employment Opportunities',
      caregiver: 'Caregiver',
      caregiverDesc: 'Elderly care and household assistance positions',
      domesticWorker: 'Domestic Worker',
      domesticWorkerDesc: 'Household management and domestic service roles',
      spaTherapist: 'Spa Therapist',
      spaTherapistDesc: 'Wellness and spa service professional positions',
      healthcareWorker: 'Healthcare Worker',
      healthcareWorkerDesc: 'Medical and healthcare assistance roles',
      hospitality: 'Hospitality Staff',
      hospitalityDesc: 'Hotel, restaurant, and service industry positions',
      technical: 'Technical Staff',
      technicalDesc: 'Factory and technical expertise positions',
      inquire: 'Inquire About Position',
      note: 'All positions are recruitment-stage. Specific role details available upon inquiry.',
    },
    // Countries page
    countries: {
      title: 'Deployment Countries',
      subtitle: 'International Employment Opportunities',
      japan: 'Japan',
      japanDesc: 'Leading destination for healthcare, caregiving, and hospitality workers with strong labor standards and worker protection',
      japanSectors: ['Healthcare & Caregiving', 'Hospitality', 'Technical Services'],
      middleEast: 'Middle East',
      middleEastDesc: 'Strong demand for domestic workers, hospitality, and service industry professionals',
      middleEastSectors: ['Domestic Service', 'Hospitality', 'Professional Services'],
      southeast: 'Southeast Asia',
      southeastDesc: 'Regional opportunities in various sectors with flexible employment terms',
      southeastSectors: ['Multiple Sectors', 'Contract-Based', 'Flexible Terms'],
      recruitment: 'Recruitment Standard',
      requirements: 'Typical Requirements',
      healthChecks: 'Health Screening & Medical Checks',
      languageTrain: 'Language & Cultural Training',
      documentation: 'Complete Documentation Handling',
    },
    // Employers page
    employers: {
      title: 'For International Employers',
      subtitle: 'Reliable Indonesian Workforce Solutions',
      whyIndonesian: 'Why Indonesian Workers?',
      trustworthy: 'Trustworthy & Hardworking',
      trustworthyDesc: 'Indonesian workers are known for reliability, dedication, and strong work ethic',
      skilled: 'Pre-Screened & Skilled',
      skilledDesc: 'All candidates undergo thorough vetting and training before deployment',
      cost: 'Cost-Effective Solutions',
      costDesc: 'Competitive pricing with comprehensive support services included',
      compliant: 'Legal & Compliant',
      compliantDesc: 'Full compliance with all international labor standards and regulations',
      howHire: 'How to Hire Indonesian Workers',
      step1: 'Contact & Consultation',
      step1Desc: 'Discuss your staffing needs and specific requirements',
      step2: 'Browse Available Candidates',
      step2Desc: 'Review profiles of qualified Indonesian workers',
      step3: 'Interview & Selection',
      step3Desc: 'Conduct interviews and finalize selection process',
      step4: 'Documentation & Deployment',
      step4Desc: 'Complete all necessary paperwork and arrange deployment',
      available: 'Available Categories',
      sectors: [
        'Caregiving & Elderly Care',
        'Domestic Service',
        'Healthcare Support',
        'Hospitality & Food Service',
        'Spa & Wellness',
        'Technical & Industrial',
      ],
      whyPartner: 'Why Partner With PT Amal Ichwan Arindo?',
      licensed: 'Officially Licensed P3MI & BP2MI Registered',
      transparent: 'Transparent & Ethical Practices',
      experienced: 'Experienced International Recruitment',
      support: 'Comprehensive Support & Documentation',
      contactNow: 'Contact Us Now',
    },
    // Job Seekers page
    jobSeekers: {
      title: 'For Indonesian Job Seekers',
      subtitle: 'Legitimate Overseas Employment Opportunities',
      whatWe: 'What We Are',
      whatWeDesc:
        'We are a licensed P3MI recruitment agency registered with BP2MI, connecting Indonesian workers with legitimate overseas employment opportunities in compliance with all Indonesian labor laws.',
      whatWeNot: 'What We Are NOT',
      whatWeNotDesc:
        'We are NOT a money-lending service, travel agent, or unofficial recruiter. We do not charge upfront fees or make unrealistic promises.',
      bewareSigns: 'Beware of These Red Flags',
      redFlag1: 'Demands payment before employment is confirmed',
      redFlag2: 'Promises unrealistic salaries or benefits',
      redFlag3: 'Lacks official documentation or licensing',
      redFlag4: 'Cannot explain the complete employment process',
      redFlag5: 'Pressures you into quick decisions',
      safeSigns: 'Signs of Legitimate Recruitment',
      greenFlag1: 'Official BP2MI and P3MI registration',
      greenFlag2: 'Clear written contracts in Indonesian',
      greenFlag3: 'No upfront payment requirements',
      greenFlag4: 'Transparent about job details and salary',
      greenFlag5: 'Professional office and staff',
      scamProtection: 'Protect Yourself from Employment Scams',
      protection1: 'Always verify agency licensing with BP2MI',
      protection2: 'Read and understand all contracts before signing',
      protection3: 'Never pay money before official deployment',
      protection4: 'Get everything in writing',
      protection5: 'Tell family and friends about your employer details',
      yourRights: 'Your Worker Rights',
      rights1: 'Fair wages and working conditions',
      rights2: 'Safe working environment',
      rights3: 'Clear written employment contract',
      rights4: 'Health insurance and benefits',
      rights5: 'Access to emergency support',
      contact: 'Contact us with any questions about legitimate overseas employment',
    },
    // Legal page
    legal: {
      title: 'Legal & Compliance Information',
      subtitle: 'Full Transparency About Our Operations',
      p3mi: 'P3MI License',
      p3miDesc:
        'We hold an official P3MI (Private Overseas Placement Service) license from the Indonesian government, authorizing legal overseas placement of Indonesian workers.',
      bp2mi: 'BP2MI Registration',
      bp2miDesc:
        'Registered with BP2MI (Board for the Protection of Indonesian Overseas Workers), the official government board responsible for oversight of overseas worker placement.',
      compliance: 'Indonesian Labor Law Compliance',
      complianceDesc:
        'All placements comply with Law No. 18 of 2017 regarding Indonesian Overseas Workers and all relevant regulations.',
      ethical: 'Ethical Recruitment Commitments',
      ethicalDesc:
        'We commit to transparent practices, worker protection, fair compensation, and zero tolerance for exploitation or deception.',
      international: 'International Standards',
      internationalDesc:
        'We adhere to ILO (International Labour Organization) standards and conventions for ethical employment practices.',
      documentation: 'Documentation & Records',
      documentationDesc:
        'Complete documentation maintained for all placements, available for verification by authorized government agencies.',
      disclaimer: 'Disclaimer',
      disclaimerText:
        'While we maintain the highest standards of ethical recruitment, workers and employers acknowledge the inherent risks of international employment. We encourage all parties to exercise due diligence.',
    },
    // Contact page
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in Touch With PT Amal Ichwan Arindo',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      inquiryLabel: 'Type of Inquiry',
      inquiryEmployer: 'Employer - Looking to Hire',
      inquiryJobSeeker: 'Job Seeker - Looking for Work',
      inquiryGeneral: 'General Information',
      messageLabel: 'Message',
      submit: 'Send Message',
      faq: 'Frequently Asked Questions',
      faq1Q: 'How do I verify your licensing?',
      faq1A:
        'You can verify our P3MI license and BP2MI registration through the official government websites. We can also provide documentation upon request.',
      faq2Q: 'What are the typical salary ranges?',
      faq2A: 'Salaries vary by position, destination country, and job category. Contact us for specific information about available positions.',
      faq3Q: 'How long is the recruitment process?',
      faq3A:
        'Typically 2-4 weeks from initial contact to deployment readiness, depending on position and candidate availability.',
      faq4Q: 'Is there support after deployment?',
      faq4A: 'Yes, we provide ongoing support throughout the employment contract period.',
      faq5Q: 'What documents are required?',
      faq5A:
        'Standard documents include passport, educational certificates, medical records, and employment history. Specific requirements vary by destination.',
    },
    // Footer
    footer: {
      aboutUs: 'About Us',
      aboutUsText:
        'Licensed Indonesian P3MI recruitment agency connecting employers with qualified workers internationally.',
      contact: 'Contact',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressValue: 'Indonesia',
      services: 'Services',
      legal: 'Legal',
      quickLinks: 'Quick Links',
      copyright: '© 2024 PT Amal Ichwan Arindo. All rights reserved.',
      rights: 'Licensed P3MI Agency - BP2MI Registered',
    },
  },
  id: {
    // Navigation
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      services: 'Layanan',
      jobOrders: 'Daftar Lowongan',
      countries: 'Negara Tujuan',
      employers: 'Untuk Pemberi Kerja',
      jobSeekers: 'Untuk Pencari Kerja',
      legal: 'Legal & Kepatuhan',
      contact: 'Hubungi Kami',
    },
    // Home page
    home: {
      heroTitle: 'Agensi Tenaga Kerja Indonesia Berlisensi untuk Pekerjaan Luar Negeri',
      heroDescription:
        'Resmi terdaftar P3MI dengan BP2MI. Menghubungkan pemberi kerja internasional dengan tenaga kerja Indonesia berkualitas di Jepang, Timur Tengah, dan seterusnya.',
      forEmployers: 'Untuk Pemberi Kerja',
      forJobSeekers: 'Untuk Pencari Kerja',
      trustTitle: 'Kepercayaan & Otoritas Hukum',
      licensedP3MI: 'Agensi P3MI Berlisensi',
      licensedP3MIDesc:
        'Resmi terdaftar sebagai Layanan Penempatan Tenaga Kerja Indonesia Swasta (P3MI) di bawah hukum Indonesia. Setiap penempatan mengikuti kepatuhan regulasi ketat.',
      bp2miReg: 'Pendaftaran BP2MI',
      bp2miDesc:
        'Terdaftar di Badan Pelindung Pekerja Indonesia di Luar Negeri (BP2MI). Patuh pada semua regulasi ketenagakerjaan Indonesia dan standar perekrutan etis.',
      leadership: 'Kepemimpinan',
      leadershipDesc:
        'Direktur: Hasan Saleh - Memimpin agensi dengan komitmen pada praktik perekrutan etis dan standar perlindungan pekerja.',
      coreServices: 'Ringkasan Layanan Inti',
      servicesOverseas: 'Perekrutan & Penempatan Luar Negeri',
      servicesOverseasDesc:
        'Pencarian dan penempatan ahli tenaga kerja Indonesia untuk pemberi kerja internasional. Manajemen siklus perekrutan lengkap dari seleksi hingga penempatan.',
      servicesSourceing: 'Pencarian Tenaga Kerja Indonesia',
      servicesSourcingDesc:
        'Akses ke jaringan tenaga kerja Indonesia yang telah diverifikasi dan berkualitas di berbagai sektor termasuk perawatan, perhotelan, dan peran teknis.',
      servicesContract: 'Penempatan Tenaga Kerja Berbasis Kontrak',
      servicesContractDesc:
        'Solusi penempatan fleksibel dengan pengaturan kontrak yang disesuaikan dengan kebutuhan pemberi kerja. Persyaratan transparan dan dokumentasi profesional.',
      servicesCompliance: 'Dokumentasi & Kepatuhan Regulasi',
      servicesComplianceDesc:
        'Penanganan lengkap pemrosesan visa, dokumentasi, dan kepatuhan regulasi dengan persyaratan Indonesia dan negara tujuan.',
      activeJobs: 'Daftar Lowongan Aktif',
      activeJobsDesc:
        'Kategori pekerjaan luar negeri saat ini yang menunjukkan permintaan internasional aktif untuk tenaga kerja Indonesia berkualitas.',
      viewAllJobs: 'Lihat Semua Lowongan',
      deploymentCountries: 'Negara Penempatan',
      deploymentCountriesDesc:
        'Kami menghubungkan tenaga kerja Indonesia dengan peluang di berbagai pasar internasional.',
      learnMore: 'Pelajari Lebih Lanjut',
      whyChoose: 'Mengapa Memilih PT Amal Ichwan Arindo?',
      benefit1: 'Lisensi P3MI resmi dari pemerintah Indonesia',
      benefit2: 'Terdaftar di BP2MI (Badan Pelindung Pekerja Indonesia di Luar Negeri)',
      benefit3: 'Praktik perekrutan transparan dan etis',
      benefit4: 'Kepatuhan pada semua regulasi ketenagakerjaan Indonesia',
      benefit5: 'Pengalaman penempatan di berbagai negara',
      benefit6: 'Dukungan khusus selama proses pekerjaan',
    },
    // About page (abbreviated for space)
    about: {
      title: 'Tentang PT Amal Ichwan Arindo',
      subtitle: 'Agensi Perekrutan Profesional dengan Otoritas Hukum',
      founded: 'Didirikan dan Dipimpin oleh',
      founderDesc: 'Hasan Saleh - Komitmen pada Perekrutan Etis',
      background: 'Latar Belakang Perusahaan',
      backgroundDesc:
        'PT Amal Ichwan Arindo adalah agensi perekrutan dan penempatan tenaga kerja Indonesia profesional yang mengkhususkan diri dalam pekerjaan luar negeri untuk tenaga kerja lokal dan internasional. Kami beroperasi dalam kerangka hukum regulasi ketenagakerjaan Indonesia dengan lisensi P3MI resmi dan pendaftaran BP2MI.',
      mission: 'Misi Kami',
      missionDesc:
        'Untuk memfasilitasi peluang pekerjaan etis dan sah bagi tenaga kerja Indonesia secara internasional sambil memastikan kepatuhan penuh pada semua persyaratan regulasi dan melindungi hak pekerja.',
      values: 'Nilai-Nilai Inti Kami',
      transparency: 'Transparansi',
      transparencyDesc: 'Keterbukaan lengkap dalam semua proses perekrutan dan penempatan',
      ethicalPractices: 'Praktik Etis',
      ethicalPracticesDesc: 'Komitmen kuat pada standar perekrutan hukum dan etis',
      compliance: 'Kepatuhan',
      complianceDesc: 'Kepatuhan penuh pada hukum ketenagakerjaan Indonesia dan regulasi negara tujuan',
      workerProtection: 'Perlindungan Pekerja',
      workerProtectionDesc: 'Menjaga hak dan kesejahteraan semua pekerja selama pekerjaan',
      experience: 'Pengalaman Kami',
      experienceDesc:
        'Dengan pengalaman bertahun-tahun dalam perekrutan internasional, kami telah berhasil menempatkan ribuan tenaga kerja Indonesia di posisi berkualitas di Jepang, Timur Tengah, dan Asia Tenggara.',
    },
    // Services page (abbreviated)
    services: {
      title: 'Layanan Kami',
      subtitle: 'Solusi Perekrutan & Penempatan Komprehensif',
      recruitment: 'Perekrutan & Penempatan Luar Negeri',
      recruitmentDesc:
        'Siklus perekrutan lengkap dari pencarian kandidat, penyaringan, pelatihan, hingga penempatan akhir di luar negeri. Kami menangani semua aspek menghubungkan pemberi kerja dengan tenaga kerja berkualitas.',
      sourcing: 'Pencarian Tenaga Kerja Indonesia',
      sourcingDesc:
        'Akses langsung ke tenaga kerja Indonesia yang telah diverifikasi di berbagai sektor perawatan, kesehatan, perhotelan, layanan domestik, dan teknis.',
      documentation: 'Layanan Dokumentasi Lengkap',
      documentationDesc:
        'Penanganan lengkap pemrosesan visa, izin kerja, dokumentasi perjalanan, asuransi, dan semua dokumen regulasi yang diperlukan untuk pekerjaan internasional.',
      support: 'Dukungan Pra-Penempatan & Lokal',
      supportDesc:
        'Dukungan komprehensif termasuk pemeriksaan medis, pelatihan orientasi, penyesuaian budaya, dan bantuan berkelanjutan selama pekerjaan di luar negeri.',
      process: 'Proses Perekrutan 5 Langkah Kami',
      step1: 'Penilaian & Seleksi Kandidat',
      step1Desc: 'Evaluasi menyeluruh tentang kualifikasi, keterampilan, dan kesesuaian kandidat untuk bekerja di luar negeri',
      step2: 'Pelatihan Pra-Penempatan',
      step2Desc: 'Pelatihan khusus termasuk bahasa, adaptasi budaya, dan keterampilan spesifik pekerjaan',
      step3: 'Dokumentasi & Pemrosesan Visa',
      step3Desc: 'Penanganan lengkap semua dokumentasi dan aplikasi visa yang diperlukan',
      step4: 'Izin Kesehatan & Persiapan Akhir',
      step4Desc: 'Skrining kesehatan dan persiapan akhir untuk penempatan di luar negeri',
      step5: 'Penempatan & Dukungan Berkelanjutan',
      step5Desc: 'Koordinasi penempatan dan dukungan berkelanjutan selama periode pekerjaan',
    },
    // Additional pages abbreviated for token space - following same pattern
    jobOrders: {
      title: 'Daftar Lowongan Saat Ini',
      subtitle: 'Peluang Pekerjaan Luar Negeri Aktif',
      caregiver: 'Perawat Lanjut Usia',
      caregiverDesc: 'Posisi perawatan lansia dan bantuan rumah tangga',
      domesticWorker: 'Pembantu Rumah Tangga',
      domesticWorkerDesc: 'Peran manajemen rumah tangga dan layanan domestik',
      spaTherapist: 'Terapis Spa',
      spaTherapistDesc: 'Posisi profesional layanan wellness dan spa',
      healthcareWorker: 'Tenaga Kesehatan',
      healthcareWorkerDesc: 'Peran bantuan medis dan kesehatan',
      hospitality: 'Staf Perhotelan',
      hospitalityDesc: 'Posisi industri hotel, restoran, dan layanan',
      technical: 'Staf Teknis',
      technicalDesc: 'Posisi keahlian pabrik dan teknis',
      inquire: 'Tanyakan Tentang Posisi',
      note: 'Semua posisi dalam tahap perekrutan. Detail peran spesifik tersedia berdasarkan permintaan.',
    },
    countries: {
      title: 'Negara Penempatan',
      subtitle: 'Peluang Pekerjaan Internasional',
      japan: 'Jepang',
      japanDesc:
        'Tujuan utama untuk tenaga kerja kesehatan, perawatan, dan perhotelan dengan standar ketenagakerjaan kuat dan perlindungan pekerja',
      japanSectors: ['Kesehatan & Perawatan', 'Perhotelan', 'Layanan Teknis'],
      middleEast: 'Timur Tengah',
      middleEastDesc: 'Permintaan kuat untuk pembantu rumah tangga, perhotelan, dan profesional layanan',
      middleEastSectors: ['Layanan Domestik', 'Perhotelan', 'Layanan Profesional'],
      southeast: 'Asia Tenggara',
      southeastDesc: 'Peluang regional di berbagai sektor dengan persyaratan pekerjaan fleksibel',
      southeastSectors: ['Berbagai Sektor', 'Berbasis Kontrak', 'Persyaratan Fleksibel'],
      recruitment: 'Standar Perekrutan',
      requirements: 'Persyaratan Umum',
      healthChecks: 'Skrining Kesehatan & Pemeriksaan Medis',
      languageTrain: 'Pelatihan Bahasa & Budaya',
      documentation: 'Penanganan Dokumentasi Lengkap',
    },
    employers: {
      title: 'Untuk Pemberi Kerja Internasional',
      subtitle: 'Solusi Tenaga Kerja Indonesia yang Dapat Diandalkan',
      whyIndonesian: 'Mengapa Tenaga Kerja Indonesia?',
      trustworthy: 'Dapat Diandalkan & Kerja Keras',
      trustworthyDesc:
        'Tenaga kerja Indonesia dikenal karena keandalan, dedikasi, dan etos kerja yang kuat',
      skilled: 'Diverifikasi & Terampil',
      skilledDesc: 'Semua kandidat menjalani penyaringan menyeluruh dan pelatihan sebelum penempatan',
      cost: 'Solusi Hemat Biaya',
      costDesc: 'Harga kompetitif dengan layanan dukungan komprehensif termasuk',
      compliant: 'Legal & Patuh',
      compliantDesc: 'Kepatuhan penuh pada semua standar ketenagakerjaan internasional dan regulasi',
      howHire: 'Cara Mempekerjakan Tenaga Kerja Indonesia',
      step1: 'Hubungi & Konsultasi',
      step1Desc: 'Diskusikan kebutuhan staffing dan persyaratan spesifik Anda',
      step2: 'Telusuri Kandidat Tersedia',
      step2Desc: 'Tinjau profil tenaga kerja Indonesia yang berkualitas',
      step3: 'Wawancara & Seleksi',
      step3Desc: 'Lakukan wawancara dan finalisasi proses seleksi',
      step4: 'Dokumentasi & Penempatan',
      step4Desc: 'Lengkapi semua dokumen yang diperlukan dan atur penempatan',
      available: 'Kategori Tersedia',
      sectors: [
        'Perawatan Lansia',
        'Layanan Domestik',
        'Dukungan Kesehatan',
        'Perhotelan & Layanan Makanan',
        'Spa & Wellness',
        'Teknis & Industri',
      ],
      whyPartner: 'Mengapa Bermitra Dengan PT Amal Ichwan Arindo?',
      licensed: 'Resmi Berlisensi P3MI & Terdaftar BP2MI',
      transparent: 'Praktik Transparan & Etis',
      experienced: 'Perekrutan Internasional Berpengalaman',
      support: 'Dukungan & Dokumentasi Komprehensif',
      contactNow: 'Hubungi Kami Sekarang',
    },
    jobSeekers: {
      title: 'Untuk Pencari Kerja Indonesia',
      subtitle: 'Peluang Pekerjaan Luar Negeri yang Sah',
      whatWe: 'Apa Kami',
      whatWeDesc:
        'Kami adalah agensi perekrutan berlisensi P3MI yang terdaftar di BP2MI, menghubungkan tenaga kerja Indonesia dengan peluang pekerjaan luar negeri yang sah sesuai dengan semua hukum ketenagakerjaan Indonesia.',
      whatWeNot: 'Apa Kami BUKAN',
      whatWeNotDesc:
        'Kami BUKAN layanan peminjaman uang, agen perjalanan, atau perekrut tidak resmi. Kami tidak mengenakan biaya di muka atau membuat janji yang tidak realistis.',
      bewareSigns: 'Waspadai Tanda-Tanda Merah Ini',
      redFlag1: 'Menuntut pembayaran sebelum pekerjaan dikonfirmasi',
      redFlag2: 'Menjanjikan gaji atau manfaat yang tidak realistis',
      redFlag3: 'Kekurangan dokumentasi atau lisensi resmi',
      redFlag4: 'Tidak dapat menjelaskan proses pekerjaan lengkap',
      redFlag5: 'Menekan Anda untuk membuat keputusan cepat',
      safeSigns: 'Tanda-Tanda Perekrutan Sah',
      greenFlag1: 'Pendaftaran resmi BP2MI dan P3MI',
      greenFlag2: 'Kontrak tertulis yang jelas dalam bahasa Indonesia',
      greenFlag3: 'Tidak ada persyaratan pembayaran di muka',
      greenFlag4: 'Transparan tentang detail pekerjaan dan gaji',
      greenFlag5: 'Kantor profesional dan staf',
      scamProtection: 'Lindungi Diri Anda dari Penipuan Pekerjaan',
      protection1: 'Selalu verifikasi lisensi agensi dengan BP2MI',
      protection2: 'Baca dan pahami semua kontrak sebelum menandatangani',
      protection3: 'Jangan pernah membayar uang sebelum penempatan resmi',
      protection4: 'Dapatkan semuanya secara tertulis',
      protection5: 'Beri tahu keluarga dan teman tentang detail pemberi kerja Anda',
      yourRights: 'Hak-Hak Pekerja Anda',
      rights1: 'Upah dan kondisi kerja yang adil',
      rights2: 'Lingkungan kerja yang aman',
      rights3: 'Kontrak pekerjaan tertulis yang jelas',
      rights4: 'Asuransi kesehatan dan manfaat',
      rights5: 'Akses ke dukungan darurat',
      contact: 'Hubungi kami jika ada pertanyaan tentang pekerjaan luar negeri yang sah',
    },
    legal: {
      title: 'Informasi Legal & Kepatuhan',
      subtitle: 'Transparansi Penuh Tentang Operasi Kami',
      p3mi: 'Lisensi P3MI',
      p3miDesc:
        'Kami memegang lisensi P3MI resmi (Layanan Penempatan Tenaga Kerja Indonesia Swasta) dari pemerintah Indonesia, mengotorisasi penempatan legal tenaga kerja Indonesia di luar negeri.',
      bp2mi: 'Pendaftaran BP2MI',
      bp2miDesc:
        'Terdaftar di BP2MI (Badan Pelindung Pekerja Indonesia di Luar Negeri), badan pemerintah resmi yang bertanggung jawab atas pengawasan penempatan tenaga kerja di luar negeri.',
      compliance: 'Kepatuhan Hukum Ketenagakerjaan Indonesia',
      complianceDesc:
        'Semua penempatan patuh pada Undang-Undang No. 18 Tahun 2017 tentang Tenaga Kerja Indonesia di Luar Negeri dan semua regulasi terkait.',
      ethical: 'Komitmen Perekrutan Etis',
      ethicalDesc:
        'Kami berkomitmen pada praktik transparan, perlindungan pekerja, kompensasi adil, dan nol toleransi terhadap eksploitasi atau penipuan.',
      international: 'Standar Internasional',
      internationalDesc:
        'Kami mematuhi standar dan konvensi ILO (Organisasi Buruh Internasional) untuk praktik pekerjaan etis.',
      documentation: 'Dokumentasi & Catatan',
      documentationDesc:
        'Dokumentasi lengkap dipertahankan untuk semua penempatan, tersedia untuk verifikasi oleh lembaga pemerintah yang berwenang.',
      disclaimer: 'Disclaimer',
      disclaimerText:
        'Meskipun kami mempertahankan standar perekrutan etis tertinggi, tenaga kerja dan pemberi kerja mengakui risiko yang ada dalam pekerjaan internasional. Kami mendorong semua pihak untuk menggunakan kehati-hatian.',
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Hubungi PT Amal Ichwan Arindo',
      nameLabel: 'Nama Lengkap',
      emailLabel: 'Alamat Email',
      phoneLabel: 'Nomor Telepon',
      inquiryLabel: 'Jenis Pertanyaan',
      inquiryEmployer: 'Pemberi Kerja - Ingin Merekrut',
      inquiryJobSeeker: 'Pencari Kerja - Mencari Pekerjaan',
      inquiryGeneral: 'Informasi Umum',
      messageLabel: 'Pesan',
      submit: 'Kirim Pesan',
      faq: 'Pertanyaan yang Sering Diajukan',
      faq1Q: 'Bagaimana cara memverifikasi lisensi Anda?',
      faq1A:
        'Anda dapat memverifikasi lisensi P3MI dan pendaftaran BP2MI kami melalui situs web pemerintah resmi. Kami juga dapat memberikan dokumentasi sesuai permintaan.',
      faq2Q: 'Berapa rentang gaji umum?',
      faq2A:
        'Gaji bervariasi berdasarkan posisi, negara tujuan, dan kategori pekerjaan. Hubungi kami untuk informasi spesifik tentang posisi yang tersedia.',
      faq3Q: 'Berapa lama proses perekrutan?',
      faq3A:
        'Biasanya 2-4 minggu dari kontak awal hingga kesiapan penempatan, tergantung pada posisi dan ketersediaan kandidat.',
      faq4Q: 'Apakah ada dukungan setelah penempatan?',
      faq4A: 'Ya, kami menyediakan dukungan berkelanjutan selama periode kontrak pekerjaan.',
      faq5Q: 'Dokumen apa yang diperlukan?',
      faq5A:
        'Dokumen standar termasuk paspor, sertifikat pendidikan, catatan medis, dan riwayat pekerjaan. Persyaratan spesifik bervariasi menurut tujuan.',
    },
    footer: {
      aboutUs: 'Tentang Kami',
      aboutUsText:
        'Agensi perekrutan P3MI berlisensi Indonesia yang menghubungkan pemberi kerja dengan tenaga kerja berkualitas secara internasional.',
      contact: 'Hubungi',
      phone: 'Telepon',
      email: 'Email',
      address: 'Alamat',
      addressValue: 'Indonesia',
      services: 'Layanan',
      legal: 'Legal',
      quickLinks: 'Tautan Cepat',
      copyright: '© 2024 PT Amal Ichwan Arindo. Semua hak dilindungi.',
      rights: 'Agensi P3MI Berlisensi - Terdaftar BP2MI',
    },
  },
}

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.')
  let value: any = translations[lang]

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return `[${path}]`
    }
  }

  return typeof value === 'string' ? value : `[${path}]`
}
