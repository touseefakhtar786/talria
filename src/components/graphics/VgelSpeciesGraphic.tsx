import { useState } from 'react'
import { Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Heart, Info } from 'lucide-react'

interface SpeciesData {
  id: string
  name: string
  badge: string
  sizes: string
  anatomyFocus: string
  traumaPrevented: string
  color: string
  photoUrl: string
  diagramType: 'cat' | 'rabbit' | 'canine' | 'foal'
}

const speciesList: SpeciesData[] = [
  {
    id: 'feline',
    name: 'Feline (Cats)',
    badge: 'v-gel® Advanced Cat (C1 - C6)',
    sizes: '6 Color-coded Sizes (1kg to 9+kg)',
    anatomyFocus: 'Perilaryngeal seal conforming over delicate feline arytenoid cartilages without entering the trachea.',
    traumaPrevented: 'Eliminates tracheal rupture and subcutaneous emphysema caused by over-pressurized endotracheal tube cuffs, especially during dental repositioning.',
    color: '#06b6d4',
    photoUrl: '/images/veterinary-cat.jpg',
    diagramType: 'cat',
  },
  {
    id: 'rabbit',
    name: 'Rabbits (Lagomorphs)',
    badge: 'v-gel® Advanced Rabbit (R1 - R6)',
    sizes: '6 Color-coded Sizes (0.6kg to 5+kg)',
    anatomyFocus: 'Bypasses the enormous lingual torus and long narrow oral cavity to cap the tiny vocal aperture directly.',
    traumaPrevented: 'Overcomes the 1.3%+ anaesthetic mortality in rabbits from blind intubation trauma, vocal cord hematoma, and fatal laryngospasm.',
    color: '#10b981',
    photoUrl: '/images/veterinary-rabbit.jpg',
    diagramType: 'rabbit',
  },
  {
    id: 'canine',
    name: 'Canine (Dogs)',
    badge: 'v-gel® Canine Series (D1 - D6)',
    sizes: '6 Sizes across Small to Large Breeds',
    anatomyFocus: 'Particularly lifesaving for brachycephalic breeds (French Bulldogs, Pugs) with elongated soft palates and hypoplastic tracheas.',
    traumaPrevented: 'Prevents upper airway occlusion upon extubation, providing smooth emergence and immediate airway patency.',
    color: '#3b82f6',
    photoUrl: '/images/veterinary-canine.jpg',
    diagramType: 'canine',
  },
  {
    id: 'equine',
    name: 'Foal & Equine Resuscitation',
    badge: 'v-gel® Foal Airway',
    sizes: 'Specialized Neonate & Foal Sizes',
    anatomyFocus: 'Rapid supra-glottic seal for emergency resuscitation in newborn foals and short field surgical procedures.',
    traumaPrevented: 'Enables rapid emergency positive pressure ventilation in recumbent foals without damaging vocal cords.',
    color: '#f59e0b',
    photoUrl: '/images/veterinary-surgery.jpg',
    diagramType: 'foal',
  },
]

export default function VgelSpeciesGraphic() {
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesData>(speciesList[0])

  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-teal-900/50 bg-[#071520] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-teal-900/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Species-Specific 3D Anatomical Modeling</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            v-gel® Species-Specific Veterinary Airway Biomechanics
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Reverse-engineered from micro-CT and MRI scans of animal perilaryngeal anatomy to prevent tracheal trauma.
          </p>
        </div>

        {/* Species Select Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-teal-900/50">
          {speciesList.map((species) => (
            <button
              key={species.id}
              type="button"
              onClick={() => setSelectedSpecies(species)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSpecies.id === species.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {species.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* Visual Graphic & Diagram */}
        <div className="lg:col-span-7 bg-[#040e16] rounded-2xl p-4 sm:p-6 border border-teal-900/40 relative flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
            <span>SPECIES: {selectedSpecies.name.toUpperCase()}</span>
            <span>CT-RECONSTRUCTED BOWL</span>
            <span className="text-teal-400 font-semibold">{selectedSpecies.sizes}</span>
          </div>

          {/* SVG Anatomical Diagram for Selected Species */}
          <div className="relative w-full aspect-[16/10] max-h-[360px]">
            <svg
              viewBox="0 0 650 380"
              className="w-full h-full drop-shadow-2xl"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="vgelStemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.8" />
                </linearGradient>

                <linearGradient id="vgelBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Anatomy Silhouette */}
              {selectedSpecies.diagramType === 'cat' && (
                <g>
                  {/* Feline Pharynx & delicate Trachea */}
                  <path
                    d="M 60,80 Q 200,90 320,130 T 480,240 L 600,280 L 590,320 L 460,280 T 260,170 Q 150,150 60,140 Z"
                    fill="#1e293b"
                    opacity="0.4"
                  />
                  {/* Fragile Dorsal Tracheal Membrane (vulnerable to rupture by balloons) */}
                  <path
                    d="M 470,250 L 590,290"
                    stroke="#f43f5e"
                    strokeWidth="3"
                    strokeDasharray="4 2"
                  />
                  <text x="540" y="240" fill="#fda4af" fontSize="10" fontWeight="bold">
                    Thin Feline Dorsal Membrane
                  </text>
                  <text x="540" y="252" fill="#f43f5e" fontSize="8">
                    [Zero balloon pressure applied here]
                  </text>
                </g>
              )}

              {selectedSpecies.diagramType === 'rabbit' && (
                <g>
                  {/* Rabbit Narrow Oropharynx & Enormous Lingual Torus */}
                  <ellipse cx="280" cy="180" rx="60" ry="35" fill="#334155" opacity="0.6" />
                  <text x="280" y="185" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontWeight="bold">
                    Enormous Lingual Torus
                  </text>

                  {/* Narrow glottis */}
                  <path d="M 420,190 L 560,250" stroke="#10b981" strokeWidth="12" strokeLinecap="round" opacity="0.2" />
                  <text x="460" y="170" fill="#a7f3d0" fontSize="10" fontWeight="bold">
                    Narrow Vocal Aperture (&lt; 2mm)
                  </text>
                </g>
              )}

              {selectedSpecies.diagramType === 'canine' && (
                <g>
                  {/* Elongated soft palate & canine larynx */}
                  <path d="M 100,100 Q 250,110 380,180 T 560,300" fill="none" stroke="#1e293b" strokeWidth="40" strokeLinecap="round" opacity="0.4" />
                  <text x="350" y="130" fill="#93c5fd" fontSize="11" fontWeight="bold">
                    Canine Laryngeal Cartilage & Soft Palate
                  </text>
                </g>
              )}

              {selectedSpecies.diagramType === 'foal' && (
                <g>
                  <path d="M 80,90 Q 260,110 400,190 T 580,310" fill="none" stroke="#1e293b" strokeWidth="50" strokeLinecap="round" opacity="0.4" />
                  <text x="360" y="125" fill="#fde68a" fontSize="11" fontWeight="bold">
                    Neonate Equine Pharynx
                  </text>
                </g>
              )}

              {/* The v-gel Device Rendering */}
              {/* Connector (15mm standard) */}
              <rect x="70" y="90" width="55" height="42" rx="5" fill="#0d9488" stroke="#5eead4" strokeWidth="1.5" />
              <text x="97" y="115" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                15mm ISO
              </text>

              {/* Main Stem with Suture Stabilization Wings */}
              <path
                d="M 125,100 Q 220,115 320,165 T 460,250 L 440,280 Q 300,195 200,150 T 125,122 Z"
                fill="url(#vgelStemGrad)"
                stroke="#2dd4bf"
                strokeWidth="2"
              />

              {/* Suture Tie Wings (to secure device around muzzle) */}
              <ellipse cx="190" cy="98" rx="8" ry="18" fill="#14b8a6" stroke="#99f6e4" strokeWidth="1.5" transform="rotate(-15 190 98)" />
              <ellipse cx="180" cy="155" rx="8" ry="18" fill="#14b8a6" stroke="#99f6e4" strokeWidth="1.5" transform="rotate(-15 180 155)" />
              <text x="190" y="75" fill="#a7f3d0" fontSize="9" fontWeight="bold">Suture / Tie Wings</text>

              {/* Species-Molded Bowl capping the Larynx */}
              <path
                d="M 420,220 C 460,205 520,225 560,260 C 585,290 575,325 530,340 C 480,355 440,310 420,270 Z"
                fill="url(#vgelBowlGrad)"
                stroke="#10b981"
                strokeWidth="2.5"
              />

              {/* Central Glottic Opening */}
              <ellipse cx="495" cy="280" rx="30" ry="18" fill="#042f2e" stroke="#5eead4" strokeWidth="1.5" transform="rotate(30 495 280)" />

              {/* Airway Conduit Stream into Lungs */}
              <path d="M 125,111 Q 250,130 360,185 T 510,310" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="5 3" />
              <polygon points="515,315 505,305 518,302" fill="#ffffff" />

              {/* Seal Callout */}
              <g>
                <text x="440" y="365" fill="#6ee7b7" fontSize="11" fontWeight="bold">
                  Species-Specific Anatomic Seal
                </text>
                <text x="440" y="377" fill="#cbd5e1" fontSize="9">
                  Does not penetrate tracheal rings
                </text>
              </g>
            </svg>
          </div>

          {/* Device Features Footer */}
          <div className="w-full flex flex-wrap items-center justify-between text-xs text-slate-300 pt-3 border-t border-slate-800 gap-2">
            <span className="flex items-center gap-1.5 text-teal-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Low Dead-Space Connector
            </span>
            <span className="flex items-center gap-1.5 text-teal-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Integrated Capnography Port
            </span>
            <span className="flex items-center gap-1.5 text-teal-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Autoclavable or Single-Use
            </span>
          </div>
        </div>

        {/* Selected Species Information Panel */}
        <div className="lg:col-span-5 space-y-4">
          {/* Patient Photo Card */}
          <div className="relative rounded-2xl overflow-hidden border border-teal-800/50 shadow-lg aspect-[16/9] group">
            <img
              src={selectedSpecies.photoUrl}
              alt={selectedSpecies.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07131e] via-[#07131e]/50 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <div>
                <span className="text-white font-bold text-base block">{selectedSpecies.name}</span>
                <span className="text-teal-300 text-xs font-mono">{selectedSpecies.badge}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal-500/30 text-teal-200 border border-teal-400/50 backdrop-blur-sm">
                Docsinnovent Partnered
              </span>
            </div>
          </div>

          {/* Clinical Insights */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c232f] to-[#071520] border border-teal-800/60 space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              Anatomical Alignment
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedSpecies.anatomyFocus}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-teal-900/60 space-y-1">
              <span className="text-[11px] font-bold text-teal-300 block">
                Complication Prevented:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedSpecies.traumaPrevented}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
