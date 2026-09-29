import { useState } from 'react'
import { Stethoscope, Sliders, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'

type Category = 'human' | 'cat' | 'rabbit' | 'dog'

interface CalculationResult {
  device: string
  size: string
  color: string
  colorBadgeClass: string
  weightRange: string
  sealPressure: string
  gastricVent: string
  intubationConduit: string
  clinicalTips: string
}

export default function SizingCalculator() {
  const [category, setCategory] = useState<Category>('human')
  const [weight, setWeight] = useState<number>(70)

  const getRecommendation = (): CalculationResult => {
    if (category === 'human') {
      if (weight < 5) {
        return {
          device: 'i-gel® Neonatal',
          size: 'Size 1',
          color: 'Pink',
          colorBadgeClass: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
          weightRange: '2 - 5 kg',
          sealPressure: '> 25 cmH2O',
          gastricVent: 'No gastric vent (specialized micro-lumen)',
          intubationConduit: 'Accepts up to 3.5 mm ID tracheal tube',
          clinicalTips: 'Ensure neutral head position; avoid over-extension in neonatal anatomy.',
        }
      } else if (weight <= 12) {
        return {
          device: 'i-gel® Infant',
          size: 'Size 1.5',
          color: 'Light Blue',
          colorBadgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          weightRange: '5 - 12 kg',
          sealPressure: '> 28 cmH2O',
          gastricVent: '10 Fr gastric catheter',
          intubationConduit: 'Accepts up to 4.0 mm ID tracheal tube',
          clinicalTips: 'Gently introduce along hard palate; verify chest rise and capnogram.',
        }
      } else if (weight <= 25) {
        return {
          device: 'i-gel® Small Pediatric',
          size: 'Size 2',
          color: 'Gray',
          colorBadgeClass: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
          weightRange: '10 - 25 kg',
          sealPressure: '> 30 cmH2O',
          gastricVent: '12 Fr gastric catheter',
          intubationConduit: 'Accepts up to 5.0 mm ID tracheal tube',
          clinicalTips: 'Apply water-soluble lubricant solely to the posterior surface of the cuff.',
        }
      } else if (weight <= 35) {
        return {
          device: 'i-gel® Large Pediatric',
          size: 'Size 2.5',
          color: 'White',
          colorBadgeClass: 'bg-white/20 text-white border-white/40',
          weightRange: '25 - 35 kg',
          sealPressure: '> 30 cmH2O',
          gastricVent: '12 Fr gastric catheter',
          intubationConduit: 'Accepts up to 5.5 mm ID tracheal tube',
          clinicalTips: 'Integral bite block should sit naturally between incisors.',
        }
      } else if (weight <= 60) {
        return {
          device: 'i-gel® Small Adult',
          size: 'Size 3',
          color: 'Yellow',
          colorBadgeClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
          weightRange: '30 - 60 kg',
          sealPressure: '> 30 - 35 cmH2O',
          gastricVent: '12 Fr gastric catheter',
          intubationConduit: 'Accepts up to 6.0 mm ID tracheal tube',
          clinicalTips: 'Standard selection for petite adult patients; excellent seal in spontaneous ventilation.',
        }
      } else if (weight <= 90) {
        return {
          device: 'i-gel® Medium Adult (Gold Standard)',
          size: 'Size 4',
          color: 'Green',
          colorBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          weightRange: '50 - 90 kg',
          sealPressure: '> 32 - 38 cmH2O',
          gastricVent: '12 Fr gastric catheter',
          intubationConduit: 'Accepts up to 7.0 mm ID tracheal tube',
          clinicalTips: 'Primary size deployed in emergency resuscitation and adult OR surgical procedures.',
        }
      } else {
        return {
          device: 'i-gel® Large Adult',
          size: 'Size 5',
          color: 'Orange',
          colorBadgeClass: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
          weightRange: '90+ kg (Bariatric compatible)',
          sealPressure: '> 35 - 40 cmH2O',
          gastricVent: '14 Fr gastric catheter',
          intubationConduit: 'Accepts up to 8.0 mm ID tracheal tube',
          clinicalTips: 'Provides elevated seal pressure necessary for elevated peak airway pressures.',
        }
      }
    } else if (category === 'cat') {
      if (weight <= 1.5) {
        return {
          device: 'v-gel® Advanced Feline',
          size: 'C1 (Kitten / Small Feline)',
          color: 'Purple C1',
          colorBadgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          weightRange: '0.8 - 1.5 kg',
          sealPressure: '16 - 20 cmH2O',
          gastricVent: 'Esophageal isolation tip',
          intubationConduit: 'Direct laryngeal bowl coupling',
          clinicalTips: 'Ensure tongue is gently drawn forward; zero risk of tracheal rupture.',
        }
      } else if (weight <= 2.5) {
        return {
          device: 'v-gel® Advanced Feline',
          size: 'C2 (Small Cat)',
          color: 'Teal C2',
          colorBadgeClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
          weightRange: '1.5 - 2.5 kg',
          sealPressure: '16 - 22 cmH2O',
          gastricVent: 'Esophageal isolation tip',
          intubationConduit: 'Direct laryngeal bowl coupling',
          clinicalTips: 'Lubricate posterior bowl only with Vet-Lube or water-soluble gel.',
        }
      } else if (weight <= 4.0) {
        return {
          device: 'v-gel® Advanced Feline (Most Common)',
          size: 'C3 (Average Adult Cat)',
          color: 'Cyan C3',
          colorBadgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          weightRange: '2.5 - 4.0 kg',
          sealPressure: '18 - 22 cmH2O',
          gastricVent: 'Integral upper esophageal seal',
          intubationConduit: 'Direct laryngeal bowl coupling',
          clinicalTips: 'Immediate placement in < 5 seconds; eliminates post-operative laryngeal spasm.',
        }
      } else if (weight <= 6.0) {
        return {
          device: 'v-gel® Advanced Feline',
          size: 'C4 (Medium-Large Cat)',
          color: 'Emerald C4',
          colorBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          weightRange: '4.0 - 6.0 kg',
          sealPressure: '18 - 22 cmH2O',
          gastricVent: 'Integral upper esophageal seal',
          intubationConduit: 'Direct laryngeal bowl coupling',
          clinicalTips: 'Ideal for domestic shorthairs and medium-breed felines.',
        }
      } else {
        return {
          device: 'v-gel® Advanced Feline',
          size: 'C5/C6 (Large / Giant Cat)',
          color: 'Navy/Amber C5-C6',
          colorBadgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
          weightRange: '6.0 kg and above (Maine Coon, British Shorthair, etc.)',
          sealPressure: '18 - 24 cmH2O',
          gastricVent: 'Integral esophageal seal',
          intubationConduit: 'Direct laryngeal bowl coupling',
          clinicalTips: 'Check symmetrical capnography plateau to verify perfect anatomical placement.',
        }
      }
    } else if (category === 'rabbit') {
      if (weight <= 1.2) {
        return {
          device: 'v-gel® Rabbit (Lagomorph Special)',
          size: 'R1 / R2 (Dwarf / Small Rabbit)',
          color: 'Light Green R1-R2',
          colorBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          weightRange: '0.6 - 1.2 kg',
          sealPressure: '15 - 18 cmH2O',
          gastricVent: 'Esophageal barrier design',
          intubationConduit: 'Direct rabbit pharynx match',
          clinicalTips: 'Rabbits have high posterior tongue vaults. Do not force; allow device to glide naturally.',
        }
      } else if (weight <= 2.5) {
        return {
          device: 'v-gel® Rabbit',
          size: 'R3 (Medium Pet Rabbit)',
          color: 'Teal R3',
          colorBadgeClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
          weightRange: '1.2 - 2.5 kg',
          sealPressure: '16 - 20 cmH2O',
          gastricVent: 'Esophageal barrier design',
          intubationConduit: 'Direct rabbit pharynx match',
          clinicalTips: 'Drastically reduces lagomorph anaesthetic mortality from blind intubation trauma.',
        }
      } else {
        return {
          device: 'v-gel® Rabbit',
          size: 'R4 / R5 (Large / Giant Rabbit)',
          color: 'Cobalt R4-R5',
          colorBadgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          weightRange: '2.5 - 5.5+ kg (Flemish Giant, French Lop)',
          sealPressure: '16 - 20 cmH2O',
          gastricVent: 'Esophageal barrier design',
          intubationConduit: 'Direct rabbit pharynx match',
          clinicalTips: 'Secure gently with the supplied head strap around rabbit ears and crown.',
        }
      }
    } else {
      // dog
      if (weight <= 4.0) {
        return {
          device: 'v-gel® Canine',
          size: 'D1 (Toy / Small Breed)',
          color: 'Blue D1',
          colorBadgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
          weightRange: '1.5 - 4.0 kg',
          sealPressure: '16 - 20 cmH2O',
          gastricVent: 'Integral dorsal conduit',
          intubationConduit: 'Direct canine bowl fit',
          clinicalTips: 'Check soft palate positioning; excellent for Yorkshire Terriers & Chihuahuas.',
        }
      } else if (weight <= 10.0) {
        return {
          device: 'v-gel® Canine',
          size: 'D2 / D3 (Small-Medium Dog)',
          color: 'Teal D2-D3',
          colorBadgeClass: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
          weightRange: '4.0 - 10.0 kg',
          sealPressure: '18 - 22 cmH2O',
          gastricVent: 'Integral dorsal conduit',
          intubationConduit: 'Direct canine bowl fit',
          clinicalTips: 'Superb for brachycephalic dogs (French Bulldogs, Pugs) during post-op recovery.',
        }
      } else if (weight <= 20.0) {
        return {
          device: 'v-gel® Canine',
          size: 'D4 (Medium Dog)',
          color: 'Indigo D4',
          colorBadgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
          weightRange: '10.0 - 20.0 kg',
          sealPressure: '18 - 24 cmH2O',
          gastricVent: 'Integral dorsal conduit',
          intubationConduit: 'Direct canine bowl fit',
          clinicalTips: 'Provides smooth inhalant transition without tracheal wall irritation.',
        }
      } else {
        return {
          device: 'v-gel® Canine',
          size: 'D5 / D6 (Large Canine)',
          color: 'Purple D5-D6',
          colorBadgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          weightRange: '20.0 - 40.0+ kg',
          sealPressure: '20 - 25 cmH2O',
          gastricVent: 'Dual suction conduit',
          intubationConduit: 'Direct canine bowl fit',
          clinicalTips: 'Ensure jaw is relaxed; inspect bite protection when lightening anaesthesia.',
        }
      }
    }
  }

  const result = getRecommendation()

  return (
    <div className="card-glass rounded-2xl p-6 lg:p-8 border border-sky-800/40 shadow-2xl relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-900/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 text-sky-400 border border-sky-800/60 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Clinical Sizing & Airway Selection Guide
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Interactive Airway Selector
          </h3>
          <p className="text-sm text-slate-400">
            Determine anatomical sizing, suction tube Fr, and airway parameters based on patient weight.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
        {/* Patient Domain Selection */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
            1. Select Patient Species / Domain
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setCategory('human')
                setWeight(70)
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                category === 'human'
                  ? 'bg-sky-950/80 border-sky-400 text-white shadow-md shadow-sky-950/50'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="block text-xs font-semibold text-sky-400">Human Clinical</span>
              <span className="text-sm font-bold">i-gel® Airway</span>
              <span className="block text-[11px] text-slate-400 mt-1">Adult & Paediatric</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCategory('cat')
                setWeight(3.5)
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                category === 'cat'
                  ? 'bg-teal-950/80 border-teal-400 text-white shadow-md shadow-teal-950/50'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="block text-xs font-semibold text-teal-400">Veterinary Feline</span>
              <span className="text-sm font-bold">v-gel® Cat</span>
              <span className="block text-[11px] text-slate-400 mt-1">C1 - C6 series</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCategory('rabbit')
                setWeight(2.0)
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                category === 'rabbit'
                  ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-md'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="block text-xs font-semibold text-emerald-400">Veterinary Lagomorph</span>
              <span className="text-sm font-bold">v-gel® Rabbit</span>
              <span className="block text-[11px] text-slate-400 mt-1">R1 - R5 series</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCategory('dog')
                setWeight(14.0)
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                category === 'dog'
                  ? 'bg-indigo-950/80 border-indigo-400 text-white shadow-md'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="block text-xs font-semibold text-indigo-400">Veterinary Canine</span>
              <span className="text-sm font-bold">v-gel® Dog</span>
              <span className="block text-[11px] text-slate-400 mt-1">D1 - D6 series</span>
            </button>
          </div>
        </div>

        {/* Weight Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              2. Patient Body Weight
            </label>
            <span className="text-lg font-bold text-sky-400 font-mono">
              {weight} kg <span className="text-xs text-slate-400 font-normal">({(weight * 2.20462).toFixed(1)} lbs)</span>
            </span>
          </div>

          <input
            type="range"
            min={category === 'human' ? 2 : category === 'cat' ? 0.8 : category === 'rabbit' ? 0.6 : 1.5}
            max={category === 'human' ? 120 : category === 'cat' ? 9.0 : category === 'rabbit' ? 6.0 : 45.0}
            step={category === 'human' ? 1 : 0.1}
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 my-4"
          />

          <div className="flex justify-between text-xs text-slate-500 font-mono">
            <span>Min: {category === 'human' ? '2 kg' : category === 'cat' ? '0.8 kg' : category === 'rabbit' ? '0.6 kg' : '1.5 kg'}</span>
            <span>Max: {category === 'human' ? '120+ kg' : category === 'cat' ? '9.0 kg' : category === 'rabbit' ? '6.0 kg' : '45+ kg'}</span>
          </div>

          {/* Fast-select presets */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="text-xs text-slate-400 mr-2 self-center">Presets:</span>
            {category === 'human' ? (
              <>
                <button type="button" onClick={() => setWeight(3)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">3kg (Neonatal)</button>
                <button type="button" onClick={() => setWeight(18)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">18kg (Pediatric)</button>
                <button type="button" onClick={() => setWeight(55)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">55kg (Sm Adult)</button>
                <button type="button" onClick={() => setWeight(75)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">75kg (Std Adult)</button>
                <button type="button" onClick={() => setWeight(105)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">105kg (Bariatric)</button>
              </>
            ) : category === 'cat' ? (
              <>
                <button type="button" onClick={() => setWeight(1.2)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">1.2kg Kitten</button>
                <button type="button" onClick={() => setWeight(3.5)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">3.5kg DSH</button>
                <button type="button" onClick={() => setWeight(6.5)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">6.5kg Large</button>
              </>
            ) : category === 'rabbit' ? (
              <>
                <button type="button" onClick={() => setWeight(0.9)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">0.9kg Dwarf</button>
                <button type="button" onClick={() => setWeight(2.0)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">2.0kg Standard</button>
                <button type="button" onClick={() => setWeight(4.5)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">4.5kg Lop</button>
              </>
            ) : (
              <>
                <button type="button" onClick={() => setWeight(3.0)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">3kg Toy</button>
                <button type="button" onClick={() => setWeight(8.0)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">8kg Pug</button>
                <button type="button" onClick={() => setWeight(16.0)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">16kg Beagle</button>
                <button type="button" onClick={() => setWeight(30.0)} className="px-2 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700">30kg Lab</button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Recommendation Results Card */}
      <div className="bg-[#0b172a] rounded-xl p-5 border border-sky-600/40 shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Recommended Clinical Solution
            </span>
            <h4 className="text-2xl font-bold text-white flex items-center gap-3 mt-0.5">
              <span>{result.device}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${result.colorBadgeClass}`}>
                {result.size}
              </span>
            </h4>
          </div>

          <div className="text-right sm:text-right">
            <span className="text-xs text-slate-400 block">Color Coding</span>
            <span className="text-sm font-bold text-slate-200">{result.color}</span>
          </div>
        </div>

        {/* Technical specs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-2">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Oropharyngeal Seal Pressure
            </span>
            <span className="text-base font-bold text-sky-300 font-mono mt-1 block">
              {result.sealPressure}
            </span>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Gastric / Suction Access
            </span>
            <span className="text-sm font-semibold text-emerald-300 mt-1 block">
              {result.gastricVent}
            </span>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              ET Tube / Optical Conduit
            </span>
            <span className="text-sm font-semibold text-teal-300 mt-1 block">
              {result.intubationConduit}
            </span>
          </div>
        </div>

        {/* Clinical Note */}
        <div className="mt-4 p-3 bg-sky-950/40 rounded-lg border border-sky-800/40 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300">
            <strong className="text-white">Clinical & Placement Guidance:</strong> {result.clinicalTips}
          </div>
        </div>
      </div>
    </div>
  )
}
