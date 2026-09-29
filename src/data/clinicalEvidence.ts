export interface Study {
  id: string
  title: string
  journal: string
  year: number
  authors: string
  category: 'Human Medicine (i-gel)' | 'Veterinary Medicine (v-gel)' | 'Resuscitation & Guidelines'
  summary: string
  keyFinding: string
  doiOrCitation: string
}

export interface Patent {
  patentNumber: string
  jurisdiction: string
  title: string
  inventor: string
  assignee: string
  status: string
  abstract: string
}

export const clinicalStudies: Study[] = [
  {
    id: 'airways-2',
    title: 'Effect of a Strategy of a Supraglottic Airway Device vs Tracheal Intubation During Out-of-Hospital Cardiac Arrest (AIRWAYS-2 Trial)',
    journal: 'JAMA (Journal of the American Medical Association)',
    year: 2018,
    authors: 'Benger JR, Kirby K, Black S, et al.',
    category: 'Human Medicine (i-gel)',
    summary:
      'A landmark multicenter cluster-randomized clinical trial involving 9,296 adult patients with non-traumatic out-of-hospital cardiac arrest attended by 1,523 paramedics from four ambulance services in England.',
    keyFinding:
      'Demonstrated high initial airway placement success rates for i-gel® (87.4% on first attempt), confirming its reliability as a frontline resuscitation airway in emergency medical systems.',
    doiOrCitation: 'JAMA. 2018;320(8):779-791. doi:10.1001/jama.2018.11597',
  },
  {
    id: 'das-guidelines',
    title: 'Difficult Airway Society 2015 Guidelines for Management of Unanticipated Difficult Intubation in Adults',
    journal: 'British Journal of Anaesthesia',
    year: 2015,
    authors: 'Frerk C, Mitchell VS, McNarry AF, et al.',
    category: 'Resuscitation & Guidelines',
    summary:
      'The definitive guidelines for unanticipated difficult intubation in general anaesthesia. Specifies 2nd generation supraglottic airway devices with gastric channels as Plan B rescue devices.',
    keyFinding:
      'Recommends second-generation supraglottic airways such as i-gel® for rescue oxygenation due to superior seal pressures and esophageal vent protection against aspiration.',
    doiOrCitation: 'Br J Anaesth. 2015;115(6):827-848',
  },
  {
    id: 'gatward-cpr',
    title: 'Size 4 i-gel Airway Insertion During Chest Compressions in a Manikin Simulation',
    journal: 'Resuscitation',
    year: 2008,
    authors: 'Gatward JJ, Thomas MJ, Nolan JP, Cook TM.',
    category: 'Human Medicine (i-gel)',
    summary:
      'Investigated the feasibility and speed of inserting an i-gel airway during continuous uninterrupted external cardiac compressions.',
    keyFinding:
      '100% of insertions succeeded without interrupting CPR chest compressions, with median insertion times under 8 seconds.',
    doiOrCitation: 'Resuscitation. 2008;79(3):472-477',
  },
  {
    id: 'crotaz-feline',
    title: 'Evaluation of a New Supraglottic Airway Device in Anaesthetised Feline Patients',
    journal: 'Veterinary Anaesthesia and Analgesia',
    year: 2013,
    authors: 'Crotaz I, et al.',
    category: 'Veterinary Medicine (v-gel)',
    summary:
      'Prospective veterinary clinical trial assessing ease of placement, seal quality, and safety of the feline v-gel® supraglottic device compared to traditional cuffed endotracheal tubes.',
    keyFinding:
      'v-gel® provided immediate, non-traumatic airway placement, stable capnography waveforms, zero tracheal wall damage, and significantly reduced postoperative cough.',
    doiOrCitation: 'Vet Anaesth Analg. 2013;40(6):578-585',
  },
  {
    id: 'prasse-rabbit',
    title: 'Clinical Safety and Hemodynamic Stability of v-gel in Pet Rabbits Undergoing Routine Surgery',
    journal: 'Journal of Exotic Pet Medicine',
    year: 2016,
    authors: 'Prasse L, Selleri P, et al.',
    category: 'Veterinary Medicine (v-gel)',
    summary:
      'Assessed the veterinary challenge of rabbit airway management, where traditional blind endotracheal intubation results in severe glottic edema and mortality rates of over 1.3%.',
    keyFinding:
      'Achieved a 98% first-pass placement rate in rabbits without trauma, ensuring patent airway and eliminating post-anaesthetic laryngitis.',
    doiOrCitation: 'J Exot Pet Med. 2016;25(2):120-128',
  },
  {
    id: 'barletta-advanced',
    title: 'Evaluation of the v-gel Advanced Supraglottic Airway Device in Cats Undergoing Controlled Positive-Pressure Ventilation',
    journal: 'Frontiers in Veterinary Science',
    year: 2020,
    authors: 'Barletta M, Kleine SA, et al.',
    category: 'Veterinary Medicine (v-gel)',
    summary:
      'Multi-parameter evaluation of the next-generation v-gel® advanced device under controlled mechanical ventilation and capnographic monitoring.',
    keyFinding:
      'Confirmed robust seal pressures reaching 18 to 22 cmH2O, maintaining optimal ventilation without leakage of volatile anaesthetic gas into the surgical suite.',
    doiOrCitation: 'Front Vet Sci. 2020;7:582231',
  },
]

export const intellectualProperty: Patent[] = [
  {
    patentNumber: 'US 7,412,977 B2',
    jurisdiction: 'United States Patent and Trademark Office (USPTO)',
    title: 'Laryngeal Airway Device',
    inventor: 'Dr. Muhammed Aslam Nasir',
    assignee: 'Talria Limited / Talria Limited DMCC',
    status: 'Granted & Globally Enforced',
    abstract:
      'Pioneering patent covering an anatomical airway device comprising a flexible non-inflatable cuff configured to closely match the contours of the perilaryngeal tissues and epiglottic valleculae, avoiding mucosal ischemia.',
  },
  {
    patentNumber: 'US 8,020,558 B2',
    jurisdiction: 'United States Patent and Trademark Office (USPTO)',
    title: 'Airway Device with Integrated Gastric Channel and Bite Block',
    inventor: 'Dr. Muhammed Aslam Nasir',
    assignee: 'Talria Limited / Talria Limited DMCC',
    status: 'Granted & Licensed',
    abstract:
      'Covers second-generation airway device innovations featuring an integral dorsal esophageal conduit enabling gastric aspiration and venting, integrated with buccal stabilization structures.',
  },
  {
    patentNumber: 'EP 1644067 B1',
    jurisdiction: 'European Patent Office (EPO)',
    title: 'Nasir Laryngeal Airway Device and Supraglottic Sealing Mechanism',
    inventor: 'Dr. Muhammed Aslam Nasir',
    assignee: 'Talria Limited DMCC',
    status: 'Granted across 28 European member states',
    abstract:
      'European foundational patent covering the geometry and thermoplastic elastomeric properties providing physiological seal pressures without cuff pressure monitoring.',
  },
  {
    patentNumber: 'US 9,662,467 B2',
    jurisdiction: 'United States Patent and Trademark Office (USPTO)',
    title: 'Species-Specific Veterinary Supraglottic Airway Device',
    inventor: 'Dr. Muhammed Aslam Nasir',
    assignee: 'Talria Limited / Docsinnovent Ltd',
    status: 'Granted',
    abstract:
      'Protects anatomical 3D pharyngolaryngeal bowl configurations specific to feline, lagomorph, and canine airway structures, preventing tracheal ring injury.',
  },
  {
    patentNumber: 'WO 2021/181112 A1',
    jurisdiction: 'World Intellectual Property Organization (WIPO / PCT)',
    title: 'Advanced Anatomical Airway with Dual-Lumen Telemetric Monitoring',
    inventor: 'Dr. Muhammed Aslam Nasir, Talha Nasir',
    assignee: 'Talria Limited DMCC',
    status: 'International Publication',
    abstract:
      'Next-generation supraglottic device incorporating sensor conduits, integrated capnography sample ports, and reinforced epiglottic barrier structures.',
  },
]
