import { useState } from 'react'
import { Globe, MapPin, Building2, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react'

interface RegionHub {
  id: string
  name: string
  role: string
  details: string
  x: number
  y: number
  color: string
}

const hubs: RegionHub[] = [
  {
    id: 'dubai',
    name: 'TALRIA LIMITED DMCC (Global Corporate Seat)',
    role: 'Global IP & Corporate Governance',
    details: 'Dubai Multi Commodities Centre, Dubai, UAE',
    x: 620,
    y: 195,
    color: '#f59e0b',
  },
  {
    id: 'uk',
    name: 'Intersurgical Ltd & Docsinnovent Ltd',
    role: 'Global Manufacturing & Licensing Alliances',
    details: 'Wokingham, Berkshire & London, United Kingdom',
    x: 485,
    y: 135,
    color: '#0ea5e9',
  },
  {
    id: 'northamerica',
    name: 'North American Clinical & EMS Adoption',
    role: 'Hospital Networks, AHA Protocols & Veterinary Groups',
    details: 'Major US & Canadian medical centres and military trauma care',
    x: 230,
    y: 155,
    color: '#10b981',
  },
  {
    id: 'europe',
    name: 'European Resuscitation Council (ERC) Networks',
    role: 'Standard of Care in Routine & Emergency Anaesthesia',
    details: 'NHS England, SAMU France, German Red Cross, Nordic trauma systems',
    x: 520,
    y: 145,
    color: '#38bdf8',
  },
  {
    id: 'apac',
    name: 'Asia-Pacific Healthcare & Veterinary Alliances',
    role: 'Hospital Adoption & Veterinary Teaching Clinics',
    details: 'Japan, Australia, South Korea, Singapore & Southeast Asia',
    x: 810,
    y: 240,
    color: '#14b8a6',
  },
]

export default function GlobalDistributionGraphic() {
  const [activeHub, setActiveHub] = useState<RegionHub>(hubs[0])

  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-sky-900/50 bg-[#071224] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-900/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>Multinational Commercial Reach</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Global Adoption Across 100+ Healthcare Jurisdictions
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            From premier university operating theatres to frontline paramedic response in extreme environments.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/60 px-3.5 py-1.5 rounded-lg border border-amber-700/50">
          <Building2 className="w-4 h-4 shrink-0" />
          <span>Headquartered in DMCC Dubai, UAE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* World Map Vector Graphic */}
        <div className="lg:col-span-8 bg-[#040a16] rounded-2xl p-4 sm:p-6 border border-sky-900/50 shadow-inner relative flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
            <span>NETWORK: GLOBAL DISTRIBUTION</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              100+ COUNTRIES ACTIVE
            </span>
          </div>

          <div className="relative w-full aspect-[16/9] max-h-[360px]">
            <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-xl">
              {/* World Map Continents Simplified Outline */}
              <g fill="#112240" stroke="#1e3a5f" strokeWidth="1" opacity="0.65">
                {/* North America */}
                <path d="M 120,80 Q 200,60 300,90 T 310,180 T 260,250 T 220,220 T 170,180 Z" />
                {/* South America */}
                <path d="M 270,270 Q 340,310 320,410 T 270,470 T 240,370 Z" />
                {/* Europe */}
                <path d="M 460,90 Q 560,80 580,140 T 520,180 T 470,140 Z" />
                {/* Africa */}
                <path d="M 470,190 Q 560,190 570,270 T 540,390 T 470,350 T 450,260 Z" />
                {/* Asia */}
                <path d="M 580,80 Q 750,70 850,150 T 820,270 T 700,240 T 600,160 Z" />
                {/* Australia */}
                <path d="M 780,330 Q 870,330 880,410 T 790,430 T 760,370 Z" />
              </g>

              {/* Connecting Arcs from Dubai HQ */}
              <g stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" fill="none">
                {/* Dubai to UK */}
                <path d="M 620,195 Q 550,140 485,135" />
                {/* Dubai to North America */}
                <path d="M 620,195 Q 400,100 230,155" />
                {/* Dubai to Europe */}
                <path d="M 620,195 Q 570,160 520,145" />
                {/* Dubai to APAC */}
                <path d="M 620,195 Q 720,200 810,240" />
              </g>

              {/* Hub Marker Pins */}
              {hubs.map((hub) => {
                const isSelected = activeHub.id === hub.id
                return (
                  <g
                    key={hub.id}
                    className="cursor-pointer"
                    onClick={() => setActiveHub(hub)}
                  >
                    {isSelected && (
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="16"
                        fill={hub.color}
                        opacity="0.25"
                        className="animate-ping"
                      />
                    )}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isSelected ? '9' : '6'}
                      fill={hub.color}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x={hub.x}
                      y={hub.y - 12}
                      fill="#ffffff"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="drop-shadow"
                    >
                      {hub.name.split(' ')[0]}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Quick Hub Buttons */}
          <div className="w-full flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800">
            {hubs.map((hub) => (
              <button
                key={hub.id}
                type="button"
                onClick={() => setActiveHub(hub)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeHub.id === hub.id
                    ? 'bg-sky-500/30 text-white border border-sky-400'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {hub.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Hub Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1f38] to-[#071324] border border-sky-800/60 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeHub.color }}
              />
              <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                {activeHub.role}
              </span>
            </div>

            <h4 className="text-lg font-bold text-white leading-snug">
              {activeHub.name}
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeHub.details}
            </p>

            <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Authorized Regulatory Channels</span>
              </div>
              <div className="flex items-center gap-2 text-sky-300 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>CE Mark &bull; US FDA 510(k) Cleared</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-2xl font-extrabold text-sky-400 font-mono block">100+</span>
            <span className="text-xs text-slate-300">Countries with active routine clinical use</span>
          </div>
        </div>
      </div>
    </div>
  )
}
