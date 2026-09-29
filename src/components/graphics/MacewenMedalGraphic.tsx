import { Award, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function MacewenMedalGraphic() {
  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-amber-500/40 bg-gradient-to-br from-[#1c1608] via-[#120f06] to-[#0a0a14] relative overflow-hidden">
      {/* Golden glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Rendered Golden Medallion SVG */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <defs>
                {/* Gold Medallion Gradients */}
                <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="30%" stopColor="#eab308" />
                  <stop offset="70%" stopColor="#ca8a04" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>

                <radialGradient id="goldFace" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fef9c3" />
                  <stop offset="45%" stopColor="#facc15" />
                  <stop offset="80%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#78350f" />
                </radialGradient>

                {/* Silk Ribbon */}
                <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>

              {/* Decorative Necklet Ribbon Top */}
              <polygon points="120,0 150,50 180,0" fill="url(#ribbonGrad)" stroke="#60a5fa" strokeWidth="1" />
              <polygon points="135,0 150,30 165,0" fill="#93c5fd" opacity="0.6" />

              {/* Outer Golden Flange with Teeth */}
              <circle cx="150" cy="155" r="128" fill="url(#goldRim)" stroke="#fef08a" strokeWidth="2" />

              {/* Beaded Border */}
              <circle cx="150" cy="155" r="118" fill="none" stroke="#78350f" strokeWidth="3" strokeDasharray="4 4" />

              {/* Main Medallion Face */}
              <circle cx="150" cy="155" r="112" fill="url(#goldFace)" stroke="#fef08a" strokeWidth="1.5" />

              {/* Embossed Laurel Wreath (Leaves) */}
              <g stroke="#78350f" fill="#ca8a04" strokeWidth="1" opacity="0.85">
                {/* Left laurel branch */}
                <path d="M 65,155 C 65,105 95,75 140,65 C 135,80 120,95 105,120 C 90,145 85,175 95,200 C 75,185 65,170 65,155 Z" />
                {/* Right laurel branch */}
                <path d="M 235,155 C 235,105 205,75 160,65 C 165,80 180,95 195,120 C 210,145 215,175 205,200 C 225,185 235,170 235,155 Z" />
              </g>

              {/* Sir William Macewen Profile Silhouette (Embossed Center) */}
              <g fill="#78350f" opacity="0.9">
                {/* Head, beard, collar silhouette */}
                <circle cx="150" cy="125" r="28" />
                {/* Nose / Brow */}
                <path d="M 160,118 L 174,126 L 164,134 L 170,145 L 140,155 L 130,135 Z" />
                {/* Distinguished Victorian Beard & Bust */}
                <path d="M 125,145 C 125,145 135,180 150,185 C 165,180 175,150 175,145 C 185,160 195,185 195,198 L 105,198 C 105,185 115,160 125,145 Z" />
              </g>

              {/* Outer Circular Inscription Text */}
              <text x="150" y="80" fill="#451a03" fontSize="8" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="serif">
                DIFFICULT AIRWAY SOCIETY
              </text>
              <text x="150" y="222" fill="#451a03" fontSize="8.5" fontWeight="900" textAnchor="middle" letterSpacing="2" fontFamily="serif">
                MACEWEN MEDAL &bull; 2016
              </text>

              {/* Dr Nasir Honoree Inscription */}
              <text x="150" y="242" fill="#78350f" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                DR. MUHAMMED ASLAM NASIR
              </text>
            </svg>
          </div>
          <span className="text-[11px] font-mono text-amber-300 mt-3 font-semibold">
            Official DAS UK Macewen Medal (Conferred 2016)
          </span>
        </div>

        {/* Citation & Historical Context */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Award className="w-4 h-4" />
            <span>Highest Distinction in Global Airway Management</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Macewen Medal
          </h3>

          <p className="text-slate-200 text-sm leading-relaxed">
            Named in honor of <strong className="text-amber-300">Sir William Macewen (1848–1924)</strong>, the Scottish surgeon who performed the world’s first recorded tracheal intubation for anaesthesia in 1878, the Macewen Medal is awarded by the <strong className="text-white">Difficult Airway Society (DAS, UK)</strong> to individuals who have made extraordinary, lasting contributions to airway clinical practice.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Citation for Dr. Muhammed Aslam Nasir (2016)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "Conferred for pioneering the non-inflatable supraglottic seal concept and inventing the i-gel®, transforming routine clinical anaesthesia and emergency resuscitation protocols across hospitals and paramedical services worldwide."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Awarding Body</span>
              <span className="text-white font-semibold">Difficult Airway Society (UK)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Clinical Impact</span>
              <span className="text-emerald-400 font-semibold">100+ Countries Adopted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
