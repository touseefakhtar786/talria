import { useState } from 'react'
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, User } from 'lucide-react'

interface AirwaySizeDetail {
  size: string
  label: string
  colorName: string
  colorHex: string
  patientWeight: string
  patientGroup: string
  gastricVent: string
  maxEttConduit: string
  scaleMultiplier: number
}

const airwaySizes: AirwaySizeDetail[] = [
  {
    size: 'Size 1',
    label: '1',
    colorName: 'Pink',
    colorHex: '#ec4899',
    patientWeight: '2 – 5 kg',
    patientGroup: 'Neonates & Small Infants',
    gastricVent: 'N/A',
    maxEttConduit: '3.5 mm ID',
    scaleMultiplier: 0.65,
  },
  {
    size: 'Size 1.5',
    label: '1.5',
    colorName: 'Light Blue',
    colorHex: '#38bdf8',
    patientWeight: '5 – 12 kg',
    patientGroup: 'Infants',
    gastricVent: '10 Fr',
    maxEttConduit: '4.0 mm ID',
    scaleMultiplier: 0.72,
  },
  {
    size: 'Size 2',
    label: '2',
    colorName: 'Light Green',
    colorHex: '#86efac',
    patientWeight: '10 – 25 kg',
    patientGroup: 'Small Paediatric',
    gastricVent: '12 Fr',
    maxEttConduit: '5.0 mm ID',
    scaleMultiplier: 0.8,
  },
  {
    size: 'Size 2.5',
    label: '2.5',
    colorName: 'White',
    colorHex: '#f8fafc',
    patientWeight: '25 – 35 kg',
    patientGroup: 'Large Paediatric',
    gastricVent: '12 Fr',
    maxEttConduit: '5.5 mm ID',
    scaleMultiplier: 0.88,
  },
  {
    size: 'Size 3',
    label: '3',
    colorName: 'Yellow',
    colorHex: '#facc15',
    patientWeight: '30 – 60 kg',
    patientGroup: 'Small Adult',
    gastricVent: '12 Fr',
    maxEttConduit: '6.0 mm ID',
    scaleMultiplier: 0.95,
  },
  {
    size: 'Size 4',
    label: '4',
    colorName: 'Medium Green',
    colorHex: '#22c55e',
    patientWeight: '50 – 90 kg',
    patientGroup: 'Medium Adult (Standard)',
    gastricVent: '12 Fr',
    maxEttConduit: '7.0 mm ID',
    scaleMultiplier: 1.05,
  },
  {
    size: 'Size 5',
    label: '5',
    colorName: 'Orange',
    colorHex: '#f97316',
    patientWeight: '90+ kg',
    patientGroup: 'Large Adult',
    gastricVent: '14 Fr',
    maxEttConduit: '8.0 mm ID',
    scaleMultiplier: 1.15,
  },
]

export default function AirwaySizingMatrixGraphic() {
  const [selectedSize, setSelectedSize] = useState<AirwaySizeDetail>(airwaySizes[5]) // Default to Size 4 Medium Adult

  return (
    <div className="card-glass rounded-3xl p-6 sm:p-10 border border-sky-900/50 bg-[#071324] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-sky-900/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Standardized International Color Coding</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            i-gel® Neonatal to Adult Sizing System
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Color-coded 15mm ISO connector collars for instant clinical identification across emergency bags and crash carts.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/50">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>7 Clinically Calibrated Sizes</span>
        </div>
      </div>

      {/* Sizing Visual Rack */}
      <div className="pt-6 pb-8 overflow-x-auto">
        <div className="min-w-[680px] grid grid-cols-7 gap-3">
          {airwaySizes.map((item) => {
            const isSelected = selectedSize.size === item.size
            return (
              <button
                key={item.size}
                type="button"
                onClick={() => setSelectedSize(item)}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-sky-900/50 border-sky-400 shadow-lg shadow-sky-950/60 scale-105'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {/* Color-coded collar chip */}
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full border border-black/40 shadow-sm"
                    style={{ backgroundColor: item.colorHex }}
                  />
                  <span className="text-[11px] font-bold text-white">{item.size}</span>
                </div>

                {/* SVG Silhouette of the device scaled */}
                <div className="w-16 h-28 flex items-center justify-center">
                  <svg
                    viewBox="0 0 60 110"
                    className="w-full h-full drop-shadow"
                    style={{ transform: `scale(${item.scaleMultiplier})` }}
                  >
                    {/* Color-coded 15mm Ring */}
                    <rect x="20" y="5" width="20" height="14" rx="2" fill={item.colorHex} stroke="#000000" strokeWidth="0.5" />
                    {/* Clear Elastomer Stem */}
                    <path d="M 23,19 Q 23,45 20,65 L 40,65 Q 37,45 37,19 Z" fill="#38bdf8" fillOpacity="0.4" stroke="#7dd3fc" strokeWidth="1" />
                    {/* Bite block */}
                    <rect x="25" y="30" width="10" height="20" rx="1" fill="#0284c7" fillOpacity="0.5" />
                    {/* Gel Cuff Bowl */}
                    <path d="M 12,65 C 10,85 18,105 30,105 C 42,105 50,85 48,65 Z" fill="#10b981" fillOpacity="0.5" stroke="#34d399" strokeWidth="1.2" />
                    {/* Inner laryngeal aperture */}
                    <ellipse cx="30" cy="85" rx="7" ry="12" fill="#064e3b" />
                  </svg>
                </div>

                {/* Patient Weight */}
                <div>
                  <span className="text-[10px] font-mono text-sky-300 font-bold block">
                    {item.patientWeight}
                  </span>
                  <span className="text-[9px] text-slate-400 block mt-0.5 line-clamp-1">
                    {item.colorName}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Size Detail Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1f36] to-[#071322] border border-sky-800/60 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-lg border border-white/20"
              style={{
                backgroundColor: selectedSize.colorHex,
                color: selectedSize.colorHex === '#f8fafc' || selectedSize.colorHex === '#facc15' || selectedSize.colorHex === '#86efac' ? '#0f172a' : '#ffffff',
              }}
            >
              {selectedSize.label}
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-sky-400 font-mono">Selected Airway</span>
              <h4 className="text-xl font-bold text-white">{selectedSize.size} ({selectedSize.colorName})</h4>
              <span className="text-xs text-slate-300">{selectedSize.patientGroup}</span>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Recommended Weight</span>
              <span className="text-white font-bold font-mono text-sm">{selectedSize.patientWeight}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Gastric Vent Tube</span>
              <span className="text-purple-300 font-bold font-mono text-sm">{selectedSize.gastricVent}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Max ETT Conduit</span>
              <span className="text-emerald-300 font-bold font-mono text-sm">{selectedSize.maxEttConduit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
