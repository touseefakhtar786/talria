export interface Director {
  id: string
  name: string
  title: string
  role: string
  credentials?: string
  bio: string
  keyFocus: string[]
  achievements: string[]
  quote: string
  initials: string
  imageUrl: string
}

export const directors: Director[] = [
  {
    id: 'dr-muhammed-aslam-nasir',
    name: 'Dr. Muhammed Aslam Nasir',
    title: 'Managing Director & Chief Inventor',
    role: 'Managing Director & Inventor',
    credentials: 'MBBS, FRCA, Consultant Anesthesiologist',
    bio: 'Dr. Muhammed Aslam Nasir is a world-renowned consultant anaesthesiologist, medical innovator, and the pioneering inventor behind the i-gel® human supraglottic airway device and the v-gel® species-specific veterinary airway system. With decades of frontline clinical experience in anaesthesia and critical care, Dr. Nasir revolutionized supraglottic airway management by discovering that an anatomically molded thermoplastic elastomer could replace traumatic inflatable balloons. In 2016, Dr. Nasir was awarded the prestigious Macewen Medal by the Difficult Airway Society (DAS, UK) for outstanding and lasting contribution to airway management. He also serves as President of Docsinnovent Ltd and is the founder of Light4Life, a philanthropic foundation providing emergency disaster relief and education.',
    keyFocus: [
      'Supraglottic airway biomechanics & anatomical modeling',
      'Clinical trial design & gold-standard resuscitation protocol advancement',
      'Medical device IP architecture and multinational patent portfolio development',
      'Global healthcare partnerships and humanitarian medical technology access',
    ],
    achievements: [
      'Awarded the Macewen Medal by the Difficult Airway Society (DAS, UK) in 2016',
      'Inventor of the Nasir Laryngeal Airway (i-gel®) licensed globally to Intersurgical',
      'Inventor of v-gel®, the world’s first species-specific veterinary supraglottic device',
      'Holds extensive patent families across USPTO, EPO, WIPO, and international registries',
      'Founder of Light4Life charitable foundation',
    ],
    quote:
      'Just breathing can be such a luxury at times. Our purpose was simple yet profound: design an airway that mirrors human and animal anatomy so naturally that inflation, pressure trauma, and tissue ischemia become obsolete.',
    initials: 'MN',
    imageUrl: '/images/director-dr-nasir.jpg',
  },
  {
    id: 'talha-nasir',
    name: 'Talha Nasir',
    title: 'COO',
    role: 'COO',
    credentials: 'BSc Marine Biology and Environmental Sciences',
    bio: 'Talha Nasir serves as Chief Operating Officer (COO) across TALRIA LIMITED DMCC’s medical and veterinary portfolios. With a scientific foundation in marine biology and environmental sciences, he directs operational execution, regulatory compliance, quality management, and sustainable biomedical development. Working closely with international manufacturing partners and clinical research teams, he oversees operational strategy to ensure every generation of supraglottic device complies strictly with international directives (MDR 2017/745, ISO 13485, and US FDA requirements), uniting rigorous biological insight with high-precision global operations.',
    keyFocus: [
      'Global operational strategy and cross-functional corporate execution',
      'Biocompatibility validations, environmental standards & sustainable materials',
      'ISO 13485 Quality Management Systems and MDR regulatory compliance',
      'Supply chain resilience and high-volume sterile medical manufacturing',
    ],
    achievements: [
      'Structured operational scaling and supply workflows for v-gel® advanced series',
      'Pioneered quality assurance protocols and sustainable environmental standards',
      'Co-directed operational scale-up for high-volume sterile medical device distribution',
    ],
    quote:
      'Operational excellence and biological insight ensure that breakthrough airway innovations transition seamlessly from design into trusted, sustainable clinical practice worldwide.',
    initials: 'TN',
    imageUrl: '/images/director-talah.jpg',
  },
  {
    id: 'mr-tuaha-nasir',
    name: 'Mr. Tuaha Nasir',
    title: 'Director of Business Development',
    role: 'Director of Business Development',
    credentials: 'Bsc in business management & economics',
    bio: 'Mr. Tuaha Nasir spearheads international business development, strategic licensing alliances, and commercial channel expansion for TALRIA LIMITED DMCC. Managing corporate relationships with multinational medical device distributors, contract manufacturing partners, and clinical purchasing syndicates, Tuaha has been instrumental in scaling the commercial footprint of Dr. Nasir’s airway technologies across Europe, North America, the Middle East, and Asia. He also directs cross-border trade operations and serves as a director in family commercial enterprises and charitable initiatives including Light4Life.',
    keyFocus: [
      'Multinational IP licensing structures and OEM manufacturer relations',
      'Global distributor network expansion across 100+ healthcare jurisdictions',
      'Government and emergency medical services (EMS) institutional procurement',
      'Cross-sector commercialization between human clinical and veterinary markets',
    ],
    achievements: [
      'Structured international commercial distribution pathways for airway technologies',
      'Expanded market penetration for clinical supraglottic devices across key emerging economies',
      'Trustee and Director for humanitarian healthcare outreach and emergency aid programs',
    ],
    quote:
      'Breakthrough healthcare technology only achieves its true purpose when made accessible to operating theaters and paramedics on every continent.',
    initials: 'TN',
    imageUrl: '/images/director-tuaha.jpg',
  },
  {
    id: 'mr-adam-nasir',
    name: 'Mr. Adam Nasir',
    title: 'Director of Business Development',
    role: 'Director of Business Development',
    credentials: 'BSc, Strategic Market Growth & Institutional Partnerships',
    bio: 'Mr. Adam Nasir leads market penetration strategies, clinical education initiatives, and veterinary institutional integration for TALRIA LIMITED DMCC. He focuses on building long-term alliances with veterinary teaching hospitals, university anaesthesia departments, private veterinary clinic groups, and military medical academies. Adam’s market-building expertise drives rapid clinical adoption by demonstrating how the transition from cuffed endotracheal tubes to non-inflatable supraglottic airways dramatically lowers patient morbidity and accelerates surgical turnover.',
    keyFocus: [
      'Veterinary hospital networks & corporate clinic group adoption',
      'Clinical evidence dissemination & anaesthesiology symposium representation',
      'Strategic growth in high-value Middle East, GCC, and North American healthcare sectors',
      'Direct-to-institution clinical trial feedback programs',
    ],
    achievements: [
      'Spearheaded veterinary educational workshops accelerating adoption of v-gel in companion animal surgery',
      'Developed clinical economic models demonstrating cost and safety improvements for hospital networks',
      'Orchestrated strategic presence at global veterinary and human anaesthesia congresses',
    ],
    quote:
      'When surgeons and veterinarians experience first-hand how fast and safe anatomical gel-seals are, standard clinical protocols change permanently.',
    initials: 'AN',
    imageUrl: '/images/director-adam.jpg',
  },
  {
    id: 'mr-danyal-nasir',
    name: 'Mr. Danyal Nasir',
    title: 'Financial Director',
    role: 'Financial Director',
    credentials: 'BSc, Corporate Finance & Treasury Management',
    bio: 'Mr. Danyal Nasir directs corporate finance, treasury operations, IP valuation, and fiscal governance for TALRIA LIMITED DMCC. Overseeing the enterprise’s financial architecture from the Dubai Multi Commodities Centre (DMCC) headquarters, Danyal coordinates cross-border royalty streams, investment allocation for clinical trials, tax-efficient IP asset stewardship, and compliance with UAE Free Zone and international statutory accounting standards. His stewardship provides the fiscal backbone that fuels continuous R&D and global patent protection.',
    keyFocus: [
      'Corporate financial strategy & DMCC statutory governance',
      'Intellectual property portfolio asset valuation and royalty optimization',
      'Capital allocation for clinical trials, regulatory submissions, and patent filings',
      'International commercial risk management and currency hedging',
    ],
    achievements: [
      'Successfully structured the transfer of incorporation of Talria Limited to DMCC Dubai',
      'Managed financial governance for global patent annuities and licensing royalty revenues',
      'Optimized operational capital allocation for advanced veterinary clinical studies',
    ],
    quote:
      'Sound fiscal management and robust corporate governance within DMCC provide the resilient platform required to protect and monetize world-class biomedical IP.',
    initials: 'DN',
    imageUrl: '/images/director-danyal.jpg',
  },
  {
    id: 'mr-touseef-akhtar',
    name: 'Mr. Touseef Akhtar',
    title: 'General Manager',
    role: 'Business Development',
    credentials: 'Master of Business Administration (MBA) in Healthcare; Executive Diploma in International Business Management',
    bio: `Mr. Touseef Akhtar directs strategic operations, commercial development, and R&D pipelines for TALRIA LIMITED DMCC from the company's headquarters in the Dubai Multi Commodities Centre (DMCC). Bringing extensive multi-sector experience in Pharma, healthcare and medical device innovation, Mr. Akhtar leads the enterprise's research initiatives, product engineering roadmaps, and global clinical validation strategies. Working in alignment with the firm's fiscal and corporate governance framework—overseen by Company Directors —Mr. Akhtar coordinates cross-border technology transfers, regulatory compliance protocols, and commercialization pathways for advanced medical technologies. His leadership bridges scientific innovation with rigorous operational execution, driving the continuous development and global market introduction of proprietary medical devices.`,
    keyFocus: [
      'Directing overarching business operations, budgeting frameworks, and organizational compliance to meet strict UAE Free Zone and international regulatory standards.',
      'Overseeing the commercial lifecycle and strategic value realization of proprietary medical technologies, clinical data assets, and global product innovations.',
      'Directing targeted investment into product pipelines, clinical validation phases, regulatory approval pathways, and international patent protection.',
    ],
    achievements: [
      'Successfully structured the transfer of incorporation of Talria Limited to DMCC Dubai',
      'Managed financial governance for global patent annuities and licensing royalty revenues',
      'Optimized operational capital allocation for advanced veterinary clinical studies',
    ],
    quote:
      'By aligning disciplined corporate compliance with visionary medical R&D, we transform advanced biomedical intellectual property into scalable global value.',
    initials: 'TA',
    imageUrl: '/images/director-touseef.jpg',
  },
]

export const companyDetails = {
  legalName: 'TALRIA LIMITED DMCC',
  formerName: 'Talria Limited (Isle of Man)',
  registrationType: 'Transfer of Incorporation (Dubai Multi Commodities Centre)',
  jurisdiction: 'DMCC Free Zone, Dubai, United Arab Emirates',
  coreCompetencies: [
    'Intellectual Property Development & Global Medical Device Licensing',
    'Supraglottic Airway Ergonomics & Biomechanical Engineering',
    'Human & Veterinary Anaesthesia Innovation',
    'Clinical Safety Systems & Emergency Resuscitation Technologies',
  ],
  flagshipTechnologies: [
    {
      name: 'i-gel® Supraglottic Airway',
      inventor: 'Dr. Muhammed Aslam Nasir',
      distributor: 'Intersurgical Ltd',
      status: 'Worldwide standard in 100+ countries',
    },
    {
      name: 'v-gel® Species-Specific Veterinary Airway',
      inventor: 'Dr. Muhammed Aslam Nasir',
      partner: 'Docsinnovent Ltd',
      status: 'Pioneering veterinary standard across North America, Europe & APAC',
    },
  ],
}
