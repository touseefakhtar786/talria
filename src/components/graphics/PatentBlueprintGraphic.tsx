import { Cpu, FileCheck, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react'

export default function PatentBlueprintGraphic() {
  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-sky-900/60 bg-[#06101e] relative overflow-hidden font-sans">
      {/* Blueprint Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient CAD glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-800/40 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SPECIFICATION & IP BLUEPRINT</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Dr. Muhammed Aslam Nasir Patent Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            The foundational engineering disclosures protecting the non-inflatable anatomical perilaryngeal airway seal.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-sky-950/80 px-3.5 py-2 rounded-xl border border-sky-800/60 text-sky-300">
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <span>PORTFOLIO: 10+ GLOBAL PATENTS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 relative z-10">
        {/* CAD Blueprint Drawing Canvas */}
        <div className="lg:col-span-7 bg-[#040913] rounded-2xl p-5 border border-sky-900/60 shadow-2xl relative">
          {/* Engineering Drawing Borders */}
          <div className="border border-sky-700/40 p-4 rounded-xl relative">
            {/* Top Drawing Title */}
            <div className="flex justify-between items-center text-[10px] font-mono text-sky-400/80 mb-2 border-b border-sky-900/60 pb-2">
              <span>FIG. 3A &bull; LONGITUDINAL SECTIONAL VIEW</span>
              <span>PATENT NO: US 7,464,710 B2</span>
              <span>DR. M. A. NASIR</span>
            </div>

            {/* Blueprint SVG Schematic */}
            <svg viewBox="0 0 500 240" className="w-full h-auto">
              {/* Construction Dimension Grid Lines */}
              <g stroke="#0369a1" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4">
                <line x1="50" y1="20" x2="50" y2="220" />
                <line x1="150" y1="20" x2="150" y2="220" />
                <line x1="280" y1="20" x2="280" y2="220" />
                <line x1="420" y1="20" x2="420" y2="220" />
                <line x1="20" y1="70" x2="480" y2="70" />
                <line x1="20" y1="130" x2="480" y2="130" />
                <line x1="20" y1="180" x2="480" y2="180" />
              </g>

              {/* Dimensional Callipers */}
              <g stroke="#38bdf8" strokeWidth="1" opacity="0.7">
                <line x1="70" y1="45" x2="150" y2="45" />
                <polyline points="75,42 70,45 75,48" fill="none" />
                <polyline points="145,42 150,45 145,48" fill="none" />
                <text x="110" y="40" fill="#7dd3fc" fontSize="8" textAnchor="middle" fontFamily="monospace">15.0 mm OD</text>
              </g>

              {/* Device Outline (Blueprint White/Cyan ink) */}
              {/* Proximal Connector */}
              <rect x="70" y="55" width="40" height="40" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Main Stem with Airway Lumen and Gastric Channel */}
              <path
                d="M 110,65 Q 180,85 240,120 T 360,160 L 340,185 Q 220,140 160,105 T 110,85 Z"
                fill="#0ea5e9"
                fillOpacity="0.1"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />

              {/* Airway Central Lumen */}
              <path d="M 110,75 Q 180,95 230,125 T 350,170" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 2" />

              {/* Gastric Vent Lumen */}
              <path d="M 110,60 Q 190,80 250,115 T 410,195" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Anatomical Perilaryngeal Non-Inflatable Molded Seal */}
              <path
                d="M 330,140 C 360,130 410,145 440,170 C 460,190 450,215 415,220 C 375,225 345,190 330,165 Z"
                fill="#10b981"
                fillOpacity="0.25"
                stroke="#34d399"
                strokeWidth="2"
              />

              {/* Lead-in pointer annotations */}
              <g stroke="#38bdf8" strokeWidth="0.8">
                {/* Gastric channel lead */}
                <line x1="280" y1="80" x2="230" y2="105" />
                <circle cx="230" cy="105" r="2" fill="#38bdf8" />
                <text x="285" y="82" fill="#e2e8f0" fontSize="8" fontFamily="monospace">14 (Gastric Lumen)</text>

                {/* Gel seal lead */}
                <line x1="420" y1="120" x2="390" y2="155" />
                <circle cx="390" cy="155" r="2" fill="#10b981" />
                <text x="425" y="122" fill="#a7f3d0" fontSize="8" fontFamily="monospace">22 (SEBS Gel Seal)</text>

                {/* Epiglottic rest lead */}
                <line x1="330" y1="100" x2="350" y2="145" />
                <circle cx="350" cy="145" r="2" fill="#facc15" />
                <text x="290" y="98" fill="#fef08a" fontSize="8" fontFamily="monospace">18 (Epiglottic Rest)</text>
              </g>

              {/* Engineering Title Block (Lower Right) */}
              <g transform="translate(330, 185)">
                <rect x="0" y="0" width="140" height="42" fill="#0b1528" stroke="#38bdf8" strokeWidth="1" />
                <line x1="0" y1="14" x2="140" y2="14" stroke="#0284c7" strokeWidth="0.5" />
                <line x1="0" y1="28" x2="140" y2="28" stroke="#0284c7" strokeWidth="0.5" />
                <text x="5" y="10" fill="#94a3b8" fontSize="7" fontFamily="monospace">ASSIGNEE: TALRIA LIMITED DMCC</text>
                <text x="5" y="24" fill="#38bdf8" fontSize="7" fontFamily="monospace">INVENTOR: DR. M. A. NASIR</text>
                <text x="5" y="38" fill="#34d399" fontSize="7" fontFamily="monospace">STATUS: GRANTED & VALID</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Patent Summary & Registry Detail */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-[#091629] border border-sky-800/60 space-y-3">
            <span className="text-xs font-mono font-bold text-amber-400 block uppercase">
              Primary Patent Registration
            </span>
            <h4 className="text-lg font-bold text-white">
              Nasir Laryngeal Airway (NLA / i-gel®)
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">US Patent:</span>
                <span className="font-mono text-sky-300 font-semibold">US 7,464,710 B2</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">European Patent:</span>
                <span className="font-mono text-sky-300 font-semibold">EP 1,450,893 B1</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">WIPO International:</span>
                <span className="font-mono text-sky-300 font-semibold">WO 2004/004815 A1</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Veterinary Extension:</span>
                <span className="font-mono text-teal-300 font-semibold">US 8,820,326 B2 (v-gel)</span>
              </div>
            </div>
          </div>

          {/* Core Inventions Protected */}
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Anatomically pre-formed non-inflatable cuff mirroring perilaryngeal cartilage.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Integral gastric channel running alongside ventilation lumen with esophageal outlet.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Integrated bite block protecting internal airway and fiberscope conduits.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
