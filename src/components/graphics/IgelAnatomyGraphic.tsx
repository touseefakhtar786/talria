import { useState } from 'react'
import { Sparkles, CheckCircle2, Info, ChevronRight, Layers, Eye } from 'lucide-react'

interface PartInfo {
  id: string
  name: string
  label: string
  color: string
  x: number
  y: number
  description: string
  clinicalSignificance: string
  specs: string
}

const igelParts: PartInfo[] = [
  {
    id: 'connector',
    name: '15mm Standard ISO Connector',
    label: '1',
    color: '#38bdf8',
    x: 170,
    y: 75,
    description: 'Universal 15mm male connector conforming to ISO 5356-1, color-coded by device size to provide immediate visual identification across surgical and emergency settings.',
    clinicalSignificance: 'Ensures immediate connection to standard manual resuscitator bags, anaesthesia breathing circuits, catheter mounts, and viral/bacterial breathing filters.',
    specs: 'ISO 5356-1 Standard | Color-coded collar | Low dead-space',
  },
  {
    id: 'biteblock',
    name: 'Integral Bite Block',
    label: '2',
    color: '#0ea5e9',
    x: 230,
    y: 140,
    description: 'Reinforced thermoplastic channel wall engineered to withstand jaw clenching during emergence from anaesthesia or unexpected patient arousal.',
    clinicalSignificance: 'Eliminates the risk of airway occlusion from teeth clenching and protects internal fiberscope optical conduits without needing a separate Guedel airway.',
    specs: 'Compressive resistance > 450 N | Integrated depth guide markings',
  },
  {
    id: 'buccal',
    name: 'Buccal Cavity Stabiliser',
    label: '3',
    color: '#14b8a6',
    x: 310,
    y: 200,
    description: 'Broad lateral curvature designed to fit snugly within the human oropharyngeal cavity, matching the curvature of the hard and soft palates.',
    clinicalSignificance: 'Provides inherent rotational stability, preventing axial twisting, lateral displacement, and malpositioning during patient repositioning or head movement.',
    specs: 'Curvilinear oropharyngeal fit | Anti-rotational geometry',
  },
  {
    id: 'gastric',
    name: 'Integral Gastric Vent Channel',
    label: '4',
    color: '#a855f7',
    x: 395,
    y: 230,
    description: 'Dedicated isolated tract running parallel to the primary ventilation lumen, exiting at the distal tip directly into the upper esophageal sphincter.',
    clinicalSignificance: 'Allows continuous passive venting of stomach gases, diagnostic confirmation of correct perilaryngeal placement, and suctioning of regurgitated gastric contents (accommodates 10–14 Fr gastric tubes).',
    specs: 'Accommodates 10-14 Fr gastric tubes | Continuous esophageal vent',
  },
  {
    id: 'epiglottic',
    name: 'Epiglottic Rest & Protective Ridge',
    label: '5',
    color: '#f59e0b',
    x: 440,
    y: 275,
    description: 'Anatomic shelf positioned directly below the bowl entrance designed to cradle the patient’s epiglottis during rapid insertion.',
    clinicalSignificance: 'Prevents the epiglottis from folding downwards over the laryngeal inlet, eliminating one of the most common causes of supraglottic airway obstruction.',
    specs: 'Anatomical ledge | Down-folding protection',
  },
  {
    id: 'gelseal',
    name: 'Non-Inflatable Anatomical Gel Seal',
    label: '6',
    color: '#10b981',
    x: 520,
    y: 310,
    description: 'The core breakthrough invented by Dr. Muhammed Aslam Nasir: molded from soft medical-grade thermoplastic elastomer (SEBS) accurately mirroring perilaryngeal anatomy without air inflation.',
    clinicalSignificance: 'Creates an airtight seal (>30 cmH2O) matching aryepiglottic folds, pyriform fossae, and thyroid cartilage with zero cuff pressure, eliminating mucosal ischemia, nerve damage, and post-op sore throat.',
    specs: 'Medical-grade SEBS | Pressure-neutral contact (<20 cmH2O) | Oropharyngeal seal >30 cmH2O',
  },
]

export default function IgelAnatomyGraphic() {
  const [selectedPart, setSelectedPart] = useState<PartInfo>(igelParts[5])
  const [activeTab, setActiveTab] = useState<'device' | 'crosssection'>('device')

  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-sky-900/50 bg-[#081222]/90 backdrop-blur-xl relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-900/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Biomedical Schematic</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            i-gel® Anatomical Architecture & Seal Biomechanics
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Click on any numbered anatomical marker or feature tag to inspect its engineering and clinical significance.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 bg-slate-900/90 rounded-xl border border-sky-900/60 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('device')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'device'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Device Anatomy</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('crosssection')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'crosssection'
                ? 'bg-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Cross-Section</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* SVG Graphic Canvas */}
        <div className="lg:col-span-7 bg-[#050b14] rounded-2xl p-4 sm:p-6 border border-sky-900/50 shadow-inner relative flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
            <span>PATENT: US 7,464,710 B2</span>
            <span>SCALE: ANATOMICAL 1:1 MODEL</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              NON-INFLATABLE SEBS
            </span>
          </div>

          {activeTab === 'device' ? (
            /* Main Device Schematic */
            <div className="relative w-full aspect-[16/10] max-h-[380px]">
              <svg
                viewBox="0 0 700 420"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Linear Gradients for 3D elastomer rendering */}
                  <linearGradient id="elastomerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#0284c7" stopOpacity="0.25" />
                    <stop offset="80%" stopColor="#0f766e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
                  </linearGradient>

                  <linearGradient id="lumenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="gastricGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </linearGradient>

                  <linearGradient id="gelBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                  </linearGradient>

                  {/* Filter for medical glow effect */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Subtle anatomical pharyngeal contour background */}
                <path
                  d="M 60,30 Q 200,60 300,120 T 580,330 T 660,390"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="60"
                  strokeLinecap="round"
                  opacity="0.3"
                />

                {/* 15mm ISO Connector (Proximal End) */}
                <g className="cursor-pointer" onClick={() => setSelectedPart(igelParts[0])}>
                  <rect
                    x="110"
                    y="50"
                    width="65"
                    height="50"
                    rx="6"
                    fill="url(#connectorGrad)"
                    stroke="#7dd3fc"
                    strokeWidth="1.5"
                  />
                  {/* Flange ring */}
                  <rect
                    x="165"
                    y="42"
                    width="12"
                    height="66"
                    rx="4"
                    fill="#38bdf8"
                    stroke="#bae6fd"
                    strokeWidth="1.5"
                  />
                  <text x="142" y="79" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    15mm ISO
                  </text>
                </g>

                {/* Main Airway Stem / Elastomer Body with Integral Bite Block */}
                <g className="cursor-pointer" onClick={() => setSelectedPart(igelParts[1])}>
                  {/* Main tube outline */}
                  <path
                    d="M 177,65 Q 260,95 330,155 T 460,255 L 485,275 Q 360,205 300,155 T 177,85 Z"
                    fill="url(#elastomerGrad)"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    opacity="0.9"
                  />

                  {/* Bite block cross-ribs */}
                  <line x1="210" y1="95" x2="218" y2="120" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="225" y1="105" x2="233" y2="130" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="240" y1="115" x2="248" y2="140" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="255" y1="125" x2="263" y2="150" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Depth guide markings */}
                  <text x="215" y="85" fill="#94a3b8" fontSize="8" fontFamily="monospace">9cm</text>
                  <text x="250" y="105" fill="#94a3b8" fontSize="8" fontFamily="monospace">11cm</text>
                  <text x="285" y="125" fill="#94a3b8" fontSize="8" fontFamily="monospace">13cm</text>
                </g>

                {/* Primary Airway Lumen (Cyan stream inside body) */}
                <path
                  d="M 177,75 Q 260,105 320,160 T 450,260"
                  fill="none"
                  stroke="url(#lumenGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Gastric Vent Channel (Purple distinct line running along stem) */}
                <g className="cursor-pointer" onClick={() => setSelectedPart(igelParts[3])}>
                  <path
                    d="M 177,60 Q 265,85 340,150 T 520,310 T 575,345"
                    fill="none"
                    stroke="url(#gastricGrad)"
                    strokeWidth="4"
                    strokeDasharray="4 2"
                    strokeLinecap="round"
                  />
                  {/* Gastric opening at tip */}
                  <circle cx="575" cy="345" r="4.5" fill="#c084fc" stroke="#ffffff" strokeWidth="1.5" />
                </g>

                {/* Buccal Cavity Stabiliser Wings */}
                <g className="cursor-pointer" onClick={() => setSelectedPart(igelParts[2])}>
                  {/* Lateral stabilising wing (upper) */}
                  <path
                    d="M 280,120 Q 320,110 360,160 Q 315,160 280,120 Z"
                    fill="#14b8a6"
                    opacity="0.45"
                    stroke="#2dd4bf"
                    strokeWidth="1.5"
                  />
                  {/* Lateral stabilising wing (lower) */}
                  <path
                    d="M 270,170 Q 310,215 370,225 Q 340,195 270,170 Z"
                    fill="#14b8a6"
                    opacity="0.45"
                    stroke="#2dd4bf"
                    strokeWidth="1.5"
                  />
                </g>

                {/* The Anatomical Non-Inflatable Gel Bowl (Distal End - SEBS Cuff) */}
                <g className="cursor-pointer" onClick={() => setSelectedPart(igelParts[5])}>
                  {/* Outer perilaryngeal bowl shape mirroring larynx */}
                  <path
                    d="M 430,220 C 470,200 540,225 580,270 C 610,305 605,350 560,365 C 510,380 470,335 440,290 Z"
                    fill="url(#gelBowlGrad)"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    filter="url(#glow)"
                  />

                  {/* Inner bowl depression for vocal cords / glottis */}
                  <ellipse
                    cx="520"
                    cy="300"
                    rx="38"
                    ry="24"
                    transform="rotate(35 520 300)"
                    fill="#042f2e"
                    stroke="#2dd4bf"
                    strokeWidth="1.5"
                  />

                  {/* Epiglottic Rest Ridge */}
                  <path
                    d="M 470,265 Q 495,275 505,295"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedPart(igelParts[4])
                    }}
                  />

                  {/* Airway outlet grille into trachea */}
                  <line x1="515" y1="290" x2="535" y2="305" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="510" y1="300" x2="530" y2="315" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Hotspot Markers (1 to 6) */}
                {igelParts.map((part) => {
                  const isSelected = selectedPart.id === part.id
                  return (
                    <g
                      key={part.id}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={() => setSelectedPart(part)}
                    >
                      {/* Outer pulse when selected */}
                      {isSelected && (
                        <circle
                          cx={part.x}
                          cy={part.y}
                          r="18"
                          fill={part.color}
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}
                      <circle
                        cx={part.x}
                        cy={part.y}
                        r={isSelected ? '14' : '11'}
                        fill={isSelected ? part.color : '#0f172a'}
                        stroke={part.color}
                        strokeWidth="2.5"
                        className="transition-all"
                      />
                      <text
                        x={part.x}
                        y={part.y + 4}
                        fill={isSelected ? '#050b14' : '#ffffff'}
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        {part.label}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          ) : (
            /* Cross-Section Anatomy View */
            <div className="relative w-full aspect-[16/10] max-h-[380px]">
              <svg
                viewBox="0 0 700 420"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="tissueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#450a0a" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Human Pharynx / Larynx Anatomical Silhouette */}
                <path
                  d="M 50,40 C 220,50 360,100 440,210 C 500,290 530,370 540,410 L 480,410 C 470,360 440,310 390,250 C 330,170 210,120 50,110 Z"
                  fill="url(#tissueGrad)"
                  stroke="#991b1b"
                  strokeWidth="1.5"
                />

                {/* Trachea & Esophagus pathways */}
                <path d="M 440,270 L 480,410" stroke="#0ea5e9" strokeWidth="24" strokeLinecap="round" opacity="0.15" />
                <path d="M 530,310 L 560,410" stroke="#a855f7" strokeWidth="18" strokeLinecap="round" opacity="0.15" />

                {/* Tracheal Rings */}
                <line x1="445" y1="330" x2="475" y2="330" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="450" y1="355" x2="480" y2="355" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="455" y1="380" x2="485" y2="380" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

                {/* i-gel Seated in Perilaryngeal Space */}
                <path
                  d="M 90,80 Q 250,90 350,180 T 470,300 C 490,285 520,295 530,325 C 505,345 470,335 440,300 Z"
                  fill="#10b981"
                  fillOpacity="0.35"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />

                {/* Airway Gas Flow Arrows */}
                <path d="M 90,80 Q 240,95 340,180 T 455,340" fill="none" stroke="#38bdf8" strokeWidth="4" strokeDasharray="6 4" />
                <polygon points="458,350 450,335 464,337" fill="#38bdf8" />

                {/* Gastric Tube passage */}
                <path d="M 90,65 Q 250,80 360,175 T 545,360" fill="none" stroke="#c084fc" strokeWidth="3" strokeDasharray="4 2" />

                {/* Anatomical Annotations */}
                <g>
                  <text x="320" y="55" fill="#cbd5e1" fontSize="12" fontWeight="bold">Epiglottis cradled in rest</text>
                  <line x1="380" y1="65" x2="400" y2="190" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />

                  <text x="560" y="270" fill="#a7f3d0" fontSize="12" fontWeight="bold">Anatomical Gel Seal</text>
                  <text x="560" y="285" fill="#6ee7b7" fontSize="10">Pressure &lt; 20 cmH2O</text>
                  <line x1="550" y1="275" x2="510" y2="305" stroke="#10b981" strokeWidth="1" />

                  <text x="560" y="375" fill="#e9d5ff" fontSize="11" fontWeight="bold">Esophageal Entry</text>
                  <text x="560" y="390" fill="#c084fc" fontSize="9">Gastric Tube Venting</text>

                  <text x="350" y="390" fill="#7dd3fc" fontSize="12" fontWeight="bold">Glottic Inlet</text>
                  <text x="350" y="405" fill="#38bdf8" fontSize="10">Direct Conduit to Trachea</text>
                </g>
              </svg>
            </div>
          )}

          {/* Quick part tags bar */}
          <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-1.5 mt-3 pt-3 border-t border-slate-800">
            {igelParts.map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => setSelectedPart(part)}
                className={`px-2 py-1.5 rounded-lg text-[10px] font-semibold text-center truncate transition-all ${
                  selectedPart.id === part.id
                    ? 'bg-sky-500/30 text-white border border-sky-400'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {part.label}. {part.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Anatomical Detail Panel */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1c36] to-[#071324] border border-sky-800/60 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5"
                style={{ backgroundColor: selectedPart.color }}
              >
                <span>Part {selectedPart.label}</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                DR. NASIR PATENT SPECIFICATION
              </span>
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-white">
                {selectedPart.name}
              </h4>
              <p className="text-xs text-sky-300 font-mono mt-0.5">
                {selectedPart.specs}
              </p>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">
              {selectedPart.description}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-sky-900/60 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Clinical & Biomechanical Advantage:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedPart.clinicalSignificance}
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-slate-400 block text-[11px]">Insertion Speed</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">&lt; 5 Seconds</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">No cuff inflation required</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-slate-400 block text-[11px]">Oropharyngeal Seal</span>
              <span className="text-lg font-bold text-sky-400 font-mono">&gt; 30 cmH2O</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Positive pressure ventilation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
