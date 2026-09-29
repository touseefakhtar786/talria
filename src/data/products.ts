export interface AirwaySize {
  size: string
  patientWeight: string
  colorCode: string
  description: string
  gastricVentSize?: string
  endotrachealTubeConduit?: string
}

export interface AirwayGalleryImage {
  url: string
  caption: string
  tag: string
}

export interface AirwayProduct {
  id: number
  slug: string
  name: string
  badge: string
  category: 'Human Medicine' | 'Veterinary Medicine'
  tagline: string
  heroSummary: string
  shortDescription: string
  description: string
  heroImage: string
  galleryImages: AirwayGalleryImage[]
  inventor: string
  licensingPartner: string
  clinicalIndications: string[]
  keyInnovations: {
    title: string
    description: string
  }[]
  sizingGuide: AirwaySize[]
  clinicalBenefits: string[]
  specifications: {
    material: string
    cuffType: string
    sealPressure: string
    gastricAccess: string
    sterilization: string
    intubationConduit: string
    regulatoryClearances: string
  }
}

export const airwayProducts: AirwayProduct[] = [
  {
    id: 1,
    slug: 'i-gel',
    name: 'i-gel® Supraglottic Airway',
    badge: 'Human Clinical Benchmark',
    category: 'Human Medicine',
    tagline: 'The 2nd Generation Supraglottic Airway with Non-Inflatable Perilaryngeal Anatomy Seal',
    heroSummary:
      'Engineered by consultant anesthesiologist Dr. Muhammed Aslam Nasir, i-gel® represents one of the greatest advances in modern anaesthesia and emergency resuscitation, replacing cuff inflation with an anatomically mirrored thermoplastic elastomer seal.',
    shortDescription:
      'The gold-standard non-inflatable supraglottic airway device used in routine anaesthesia, difficult airway algorithms, and emergency resuscitation worldwide.',
    heroImage: '/images/hero-operating-theatre.jpg',
    galleryImages: [
      {
        url: '/images/hero-operating-theatre.jpg',
        caption: 'Routine elective and urgent general anaesthesia in hospital operating suites across 100+ countries',
        tag: 'Operating Theatre',
      },
      {
        url: '/images/emergency-resuscitation.jpg',
        caption: 'Pre-hospital emergency resuscitation and out-of-hospital cardiac arrest (OHCA) airway management',
        tag: 'Paramedic / EMS',
      },
      {
        url: '/images/biomedical-lab.jpg',
        caption: 'Precision tooling and thermoplastic elastomer (SEBS) material formulation and QA testing',
        tag: 'Biomedical Engineering',
      },
    ],
    description:
      'Invented by Dr. Muhammed Aslam Nasir and licensed globally to Intersurgical Ltd, i-gel® is constructed from a soft, medical-grade thermoplastic elastomer (SEBS) accurately designed to mirror human perilaryngeal anatomy. The unique non-inflatable cuff creates an airtight, pressure-neutral seal without the mucosal compression, ischemic injury, or nerve palsies associated with conventional inflatable laryngeal masks. Featuring an integral gastric channel for suction and venting, an epiglottic rest, a buccal cavity stabiliser, and an integral bite block, i-gel provides immediate airway control in under 5 seconds with typical seal pressures exceeding 30 cmH2O.',
    inventor: 'Dr. Muhammed Aslam Nasir (MBBS, FRCA)',
    licensingPartner: 'Intersurgical Ltd (Global Manufacturing & Distribution Partner)',
    clinicalIndications: [
      'Routine and emergency general anaesthesia in spontaneous or mechanically ventilated patients',
      'Difficult airway resuscitation (Difficult Airway Society - DAS Guidelines Algorithm)',
      'Pre-hospital emergency airway management and cardiac arrest resuscitation (ERC & AHA endorsed)',
      'Conduit for rescue fiberoptic and bougie-guided endotracheal intubation',
      'Mass-casualty and tactical combat casualty care where speed and reliability are paramount',
    ],
    keyInnovations: [
      {
        title: 'Anatomical Non-Inflatable Cuff',
        description:
          'Molded from medical-grade thermoplastic elastomer to conform naturally to the larynx, supraglottis, and piriform fossae without requiring air inflation.',
      },
      {
        title: 'Integral Gastric Channel',
        description:
          'Separate esophageal tract allowing early diagnostic verification of tube placement, gastric suction, and venting of regurgitated stomach contents.',
      },
      {
        title: 'Integral Bite Block & Buccal Stabiliser',
        description:
          'Protects airway patency against clenching while the widened lateral wings conform to the oropharyngeal curve, preventing rotation or accidental displacement.',
      },
      {
        title: 'Direct Intubation Conduit',
        description:
          'Engineered inner lumen diameter facilitates fiberoptic-guided or blind passage of cuffed endotracheal tubes without removing the airway.',
      },
    ],
    sizingGuide: [
      {
        size: 'Size 1 (Neonatal)',
        patientWeight: '2 - 5 kg',
        colorCode: 'Pink',
        description: 'Neonates and small infants requiring non-cuff perilaryngeal control',
        gastricVentSize: 'N/A',
        endotrachealTubeConduit: '3.5 mm max ID',
      },
      {
        size: 'Size 1.5 (Infant)',
        patientWeight: '5 - 12 kg',
        colorCode: 'Light Blue',
        description: 'Infants undergoing elective or urgent pediatric procedures',
        gastricVentSize: '10 Fr',
        endotrachealTubeConduit: '4.0 mm max ID',
      },
      {
        size: 'Size 2 (Small Pediatric)',
        patientWeight: '10 - 25 kg',
        colorCode: 'Gray',
        description: 'Pediatric patients with intermediate airway requirements',
        gastricVentSize: '12 Fr',
        endotrachealTubeConduit: '5.0 mm max ID',
      },
      {
        size: 'Size 2.5 (Large Pediatric)',
        patientWeight: '25 - 35 kg',
        colorCode: 'White',
        description: 'Older children approaching adult perilaryngeal dimensions',
        gastricVentSize: '12 Fr',
        endotrachealTubeConduit: '5.5 mm max ID',
      },
      {
        size: 'Size 3 (Small Adult)',
        patientWeight: '30 - 60 kg',
        colorCode: 'Yellow',
        description: 'Small adults and adolescents in surgery or resuscitation',
        gastricVentSize: '12 Fr',
        endotrachealTubeConduit: '6.0 mm max ID',
      },
      {
        size: 'Size 4 (Medium Adult)',
        patientWeight: '50 - 90 kg',
        colorCode: 'Green',
        description: 'Standard adult size, the most widely deployed in OR and EMS',
        gastricVentSize: '12 Fr',
        endotrachealTubeConduit: '7.0 mm max ID',
      },
      {
        size: 'Size 5 (Large Adult)',
        patientWeight: '90+ kg',
        colorCode: 'Orange',
        description: 'Large or bariatric adult patients requiring high seal pressures',
        gastricVentSize: '14 Fr',
        endotrachealTubeConduit: '8.0 mm max ID',
      },
    ],
    clinicalBenefits: [
      'Rapid insertion time: Achieved in under 5 seconds by trained practitioners',
      'No cuff inflation pressure check required: Zero risk of postoperative nerve trauma or ischemic sore throat',
      'High oropharyngeal leak pressure: Regularly exceeds 30 cmH2O for safe positive-pressure ventilation',
      'First-pass insertion success rates exceeding 96-98% across clinical trials',
      'Significant reduction in laryngospasm and coughing on emergence compared to endotracheal tubes',
    ],
    specifications: {
      material: 'Medical-Grade Thermoplastic Elastomer (SEBS) + Polypropylene connector',
      cuffType: 'Anatomically molded non-inflatable soft gel cuff',
      sealPressure: '30 to 35 cmH2O typical oropharyngeal leak pressure',
      gastricAccess: 'Integrated dorsal conduit with distal esophageal port',
      sterilization: 'Supplied sterile for single-patient use (pyrogen-free, DEHP & latex free)',
      intubationConduit: 'Full-length lumen sized for standard ET tubes & Aintree catheters',
      regulatoryClearances: 'US FDA 510(k), CE Mark (MDR Class IIa), Health Canada, PMDA, TGA',
    },
  },
  {
    id: 2,
    slug: 'v-gel',
    name: 'v-gel® & v-gel® Advanced Veterinary Airway',
    badge: 'Veterinary Innovation Pioneer',
    category: 'Veterinary Medicine',
    tagline: 'The World’s First Species-Specific Supraglottic Airway Devices for Veterinary Medicine',
    heroSummary:
      'Co-developed and patented by Dr. Muhammed Aslam Nasir with Docsinnovent Ltd, v-gel® revolutionizes veterinary anaesthesia for felines, rabbits, canines, and horses by eliminating tracheal tears and cuff-induced necrosis.',
    shortDescription:
      'Species-specific anatomically contoured supraglottic airway device preventing tracheal trauma and delivering safe positive-pressure ventilation in veterinary anaesthesia.',
    heroImage: '/images/veterinary-surgery.jpg',
    galleryImages: [
      {
        url: '/images/veterinary-surgery.jpg',
        caption: 'Small animal general anaesthesia and dental surgical procedures without tracheal trauma',
        tag: 'Veterinary Surgery',
      },
      {
        url: '/images/veterinary-cat.jpg',
        caption: 'v-gel® Advanced Cat eliminating dorsal tracheal tears during feline dental procedures',
        tag: 'Feline Care',
      },
      {
        url: '/images/veterinary-rabbit.jpg',
        caption: 'Safe lagomorph anaesthetic management overcoming difficult blind intubation and glottic spasm',
        tag: 'Lagomorph Care',
      },
      {
        url: '/images/veterinary-canine.jpg',
        caption: 'Canine airway management for brachycephalic and routine companion animal surgery',
        tag: 'Canine Care',
      },
    ],
    description:
      'For decades, veterinary anaesthesia relied on human endotracheal tubes adapted for animals, causing tragic tracheal ruptures, subglottic stenosis, and high mortality—especially in cats and rabbits whose delicate mucosal linings cannot tolerate high-pressure inflatable balloons. Invented by Dr. Muhammed Aslam Nasir, v-gel® is the first device engineered from CT and MRI scans of species-specific animal pharyngolaryngeal structures. It cradles the larynx, forms an airtight supraglottic seal, seals the proximal esophagus, and integrates gastric/monitoring access. With v-gel advanced, veterinary practitioners achieve immediate airway placement without laryngoscopy, eliminating post-operative cough and morbidity.',
    inventor: 'Dr. Muhammed Aslam Nasir (President, Docsinnovent Ltd / Talria DMCC)',
    licensingPartner: 'Docsinnovent Ltd (Global Veterinary Distribution & Commercialization)',
    clinicalIndications: [
      'Feline routine surgical anaesthesia (spays, castrations, dental procedures, imaging)',
      'High-risk lagomorph (Rabbit) anaesthesia where intubation trauma carries up to 1.39% mortality',
      'Canine surgical airway management and brachycephalic airway recovery',
      'Equine and foal resuscitation and inhalational anaesthesia transitions',
      'Closed-circuit inhalant delivery (Sevoflurane/Isoflurane) with near-zero environmental pollution',
    ],
    keyInnovations: [
      {
        title: 'Species-Specific Anatomical Bowl',
        description:
          'Reverse-engineered from 3D CT reconstructions of feline, rabbit, and canine airways to mate seamlessly with the epiglottis, arytenoids, and pharynx.',
      },
      {
        title: 'Esophageal Sealing Plug',
        description:
          'Distal tip gently occludes the upper esophageal sphincter to guard against gastric insufflation and passive regurgitation.',
      },
      {
        title: 'Low Dead Space & Low Airway Resistance',
        description:
          'Super-wide internal airway channel decreases work of breathing in spontaneous ventilation while minimizing apparatus dead space.',
      },
      {
        title: 'Autoclavable & Reusable Engineering',
        description:
          'Crafted from biocompatible medical silicone elastomer capable of withstanding dozens of autoclave sterilization cycles for cost-effective clinical adoption.',
      },
    ],
    sizingGuide: [
      {
        size: 'v-gel Cat C1 to C6',
        patientWeight: '0.8 kg to 7.0+ kg',
        colorCode: 'Teal & Purple series',
        description: 'Species-specific for kittens through giant feline breeds (Maine Coon, etc.)',
        gastricVentSize: 'Integral channel on C3-C6',
        endotrachealTubeConduit: 'Direct laryngeal airway coupling',
      },
      {
        size: 'v-gel Rabbit R1 to R6',
        patientWeight: '0.6 kg to 5.5+ kg',
        colorCode: 'Emerald series',
        description: 'Specially contoured for lagomorphs with high posterior tongue vault',
        gastricVentSize: 'Esophageal seal design',
        endotrachealTubeConduit: 'Direct airway conduit',
      },
      {
        size: 'v-gel Dog D1 to D6',
        patientWeight: '1.5 kg to 30.0+ kg',
        colorCode: 'Cobalt Blue series',
        description: 'Engineered for canine laryngeal anatomy, including brachycephalic variants',
        gastricVentSize: 'Gastric suction conduit',
        endotrachealTubeConduit: 'Direct airway coupling',
      },
      {
        size: 'v-gel Equine / Foal',
        patientWeight: 'Foals & specialized veterinary research',
        colorCode: 'Specialized Medical Gold',
        description: 'High-volume tidal air passage for specialized equine procedures',
        gastricVentSize: 'Large bore gastric port',
        endotrachealTubeConduit: 'Equine ventilation coupling',
      },
    ],
    clinicalBenefits: [
      'Eliminates tracheal rupture and tracheal necrosis caused by overinflated ET tube cuffs',
      'Insertion accomplished in under 8-10 seconds without stylets or difficult laryngoscopy',
      'Zero veterinary operating theater gas leakage (Isoflurane / Sevoflurane) protecting clinic staff',
      'Smooth, stress-free recovery with no post-operative coughing or laryngeal edema',
      'Validated in over 40+ peer-reviewed veterinary clinical studies across North America, Europe, and Asia',
    ],
    specifications: {
      material: 'Biocompatible Medical-Grade Silicone Elastomer & High-Impact Polypropylene',
      cuffType: 'Species-specific pharyngolaryngeal anatomical gel cushion',
      sealPressure: '16 to 22 cmH2O leak pressure (ideal for animal positive pressure ventilation)',
      gastricAccess: 'Upper esophageal isolation plug + suction access',
      sterilization: 'Steam autoclavable up to 134°C (reusable up to 40+ cycles) & single-use options',
      intubationConduit: 'Self-locating anatomical airway channel with integrated capnography port',
      regulatoryClearances: 'Veterinary CE standards, global veterinary medical device registrations',
    },
  },
]

export default airwayProducts
