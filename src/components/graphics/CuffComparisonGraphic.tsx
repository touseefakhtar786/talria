import { useState } from 'react'
import { AlertTriangle, CheckCircle2, HeartPulse, Activity, Zap, ShieldCheck } from 'lucide-react'

export default function CuffComparisonGraphic() {
  const [inflatablePressure, setInflatablePressure] = useState<number>(85) // cmH2O

  // Calculate perfusion status based on pressure
  const isCapillaryBlocked = inflatablePressure > 40

  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-slate-800 bg-[#081120] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
          <Activity className="w-3.5 h-3.5" />
          <span>The Core Clinical Paradigm Shift</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Inflatable Balloon Cuff vs. Non-Inflatable Anatomical Gel Seal
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          Dr. Muhammed Aslam Nasir recognized that conventional airway cuffs create hydrostatic pressures far exceeding mucosal capillary perfusion pressure, causing ischemic tissue trauma.
        </p>
      </div>

      {/* Side by side comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Traditional Inflatable Cuff */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#1a0f14] via-[#140b10] to-[#0d070b] border border-rose-900/60 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-950 text-rose-300 border border-rose-800/80 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Conventional Inflatable Cuff (1st Gen LMA)
              </span>
              <span className="text-xs font-mono text-rose-400 font-bold">HIGH MORBIDITY RISK</span>
            </div>
            <h4 className="text-xl font-bold text-white">Balloon Compression and Distension</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard supraglottic airways rely on air inflation through a pilot balloon. In clinical practice, overinflation occurs in over 80% of routine cases, creating pressures reaching 80–120 cmH2O.
            </p>
          </div>

          {/* SVG Diagram: Inflatable Cuff compressing capillaries */}
          <div className="bg-[#0b0508] rounded-xl p-4 border border-rose-900/40 relative">
            <div className="text-[10px] text-slate-400 font-mono mb-2 flex justify-between">
              <span>MUCOSAL TISSUE CROSS-SECTION</span>
              <span className="text-rose-400 font-bold">CAPILLARY PERFUSION: {isCapillaryBlocked ? 'ISCHEMIC SHUTDOWN' : 'PARTIAL'}</span>
            </div>

            <svg viewBox="0 0 400 180" className="w-full h-auto">
              <defs>
                <linearGradient id="cuffGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#be123c" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Laryngeal Mucosal Epithelium */}
              <rect x="20" y="20" width="360" height="35" rx="6" fill="#3f1319" stroke="#881337" strokeWidth="1.5" />
              <text x="200" y="42" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle">
                Laryngeal Mucosa & Nerve Fibres (Lingual / Hypoglossal)
              </text>

              {/* Capillary Vessels - Flattened / Occluded under pressure */}
              <g>
                <path d="M 40,38 Q 120,44 200,38 T 360,38" fill="none" stroke="#e11d48" strokeWidth={isCapillaryBlocked ? "1" : "3"} strokeDasharray={isCapillaryBlocked ? "3 3" : "none"} />
                {isCapillaryBlocked && (
                  <text x="200" y="52" fill="#f43f5e" fontSize="9" textAnchor="middle" fontWeight="bold">
                    [Capillaries collapsed: &gt; 40 cmH2O mucosal ischemia]
                  </text>
                )}
              </g>

              {/* High Pressure Arrows pushing against tissue */}
              <g stroke="#f43f5e" strokeWidth="2" strokeLinecap="round">
                <line x1="80" y1="85" x2="80" y2="60" />
                <polygon points="77,65 80,58 83,65" fill="#f43f5e" />

                <line x1="160" y1="85" x2="160" y2="60" />
                <polygon points="157,65 160,58 163,65" fill="#f43f5e" />

                <line x1="240" y1="85" x2="240" y2="60" />
                <polygon points="237,65 240,58 243,65" fill="#f43f5e" />

                <line x1="320" y1="85" x2="320" y2="60" />
                <polygon points="317,65 320,58 323,65" fill="#f43f5e" />
              </g>

              {/* The Inflatable Balloon Cuff */}
              <path
                d="M 40,150 C 40,80 360,80 360,150 Z"
                fill="url(#cuffGrad)"
                stroke="#f43f5e"
                strokeWidth="2.5"
              />
              <text x="200" y="125" fill="#ffffff" fontSize="12" fontWeight="extrabold" textAnchor="middle">
                INFLATABLE CUFF ({inflatablePressure} cmH2O)
              </text>
              <text x="200" y="142" fill="#fecdd3" fontSize="9" textAnchor="middle">
                Traumatic expansion against cartilaginous rings
              </text>
            </svg>

            {/* Interactive Cuff Pressure Slider */}
            <div className="mt-4 pt-3 border-t border-rose-950/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Simulate Balloon Pressure:</span>
                <span className="font-mono font-bold text-rose-400 text-sm">{inflatablePressure} cmH2O</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                value={inflatablePressure}
                onChange={(e) => setInflatablePressure(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>30 cmH2O (Min)</span>
                <span className="text-amber-400">40 cmH2O (Capillary Threshold)</span>
                <span>120 cmH2O (Max)</span>
              </div>
            </div>
          </div>

          {/* Clinical Penalties List */}
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 text-rose-300">
              <span className="text-rose-500 font-bold">&bull;</span>
              <span><strong>Microvascular Ischemia:</strong> Capillary perfusion halts when pressure exceeds 30–40 cmH2O.</span>
            </div>
            <div className="flex items-start gap-2 text-rose-300">
              <span className="text-rose-500 font-bold">&bull;</span>
              <span><strong>Post-Operative Sore Throat:</strong> Documented in 30–55% of patients emerging from inflatable LMA.</span>
            </div>
            <div className="flex items-start gap-2 text-rose-300">
              <span className="text-rose-500 font-bold">&bull;</span>
              <span><strong>Nerve Palsies & Dysphagia:</strong> Direct compression of hypoglossal, lingual, and recurrent laryngeal nerves.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Dr. Nasir's Anatomical Non-Inflatable Gel Seal */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#0c2423] via-[#091a1a] to-[#061213] border border-emerald-500/60 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/60 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Dr. Nasir Innovation: i-gel® & v-gel®
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">PHYSIOLOGICAL SAFETY</span>
            </div>
            <h4 className="text-xl font-bold text-white">Pressure-Neutral Anatomic Gel Seal</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dr. Nasir eliminated the cuff entirely. Engineered from medical-grade SEBS thermoplastic elastomer, the seal mirrors human and veterinary anatomy, generating an airtight seal without mechanical tissue stress.
            </p>
          </div>

          {/* SVG Diagram: Anatomical Gel Seal preserving blood flow */}
          <div className="bg-[#040e0e] rounded-xl p-4 border border-emerald-900/40 relative">
            <div className="text-[10px] text-slate-400 font-mono mb-2 flex justify-between">
              <span>MUCOSAL TISSUE CROSS-SECTION</span>
              <span className="text-emerald-400 font-bold">CAPILLARY PERFUSION: Least compression</span>
            </div>

            <svg viewBox="0 0 400 180" className="w-full h-auto">
              <defs>
                <linearGradient id="gelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Laryngeal Mucosal Epithelium */}
              <rect x="20" y="20" width="360" height="35" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
              <text x="200" y="42" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
                Laryngeal Mucosa & Normal Microcirculation
              </text>

              {/* Gentle Anatomical Contours - Low Pressure Contact */}
              <g stroke="#34d399" strokeWidth="1" strokeDasharray="3 3">
                <line x1="80" y1="75" x2="80" y2="60" />
                <line x1="160" y1="75" x2="160" y2="60" />
                <line x1="240" y1="75" x2="240" y2="60" />
                <line x1="320" y1="75" x2="320" y2="60" />
              </g>

              {/* Dr Nasir's Anatomical SEBS Gel Seal */}
              <path
                d="M 40,150 C 70,85 140,82 200,82 C 260,82 330,85 360,150 Z"
                fill="url(#gelGrad)"
                stroke="#10b981"
                strokeWidth="2.5"
              />
              <text x="200" y="125" fill="#ffffff" fontSize="12" fontWeight="extrabold" textAnchor="middle">
                ANATOMICAL GEL SEAL (&lt; 20 cmH2O)
              </text>
              <text x="200" y="142" fill="#a7f3d0" fontSize="9" textAnchor="middle">
                Natural contour seal &bull; Zero pilot balloon &bull; Zero mucosal compression
              </text>
            </svg>

            {/* Static safe reading indicator */}
            <div className="mt-4 pt-3 border-t border-emerald-950/80 flex items-center justify-between text-xs">
              <span className="text-slate-300">Mucosal Contact Pressure:</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">&lt; 20 cmH2O (Physiological Safe Zone)</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full w-1/4" />
            </div>
          </div>

          {/* Clinical Advantages List */}
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Intact Capillary Perfusion:</strong> Mucosal blood flow is 100% maintained throughout surgery.</span>
            </div>
            <div className="flex items-start gap-2 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Insertion with-in 5 Second:</strong> No syringe, no manometer check, no cuff inflation calculations.</span>
            </div>
            <div className="flex items-start gap-2 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Superior laryngeal Seal:</strong> Consistently delivers &gt;30 cmH2O seal pressure for ventilation.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
