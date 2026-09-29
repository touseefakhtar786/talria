import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowRight,
  FileText,
  AlertTriangle,
  Flame,
  Award,
  Heart,
} from 'lucide-react'
import { airwayProducts } from '@/data/products'
import SizingCalculator from '@/components/SizingCalculator'
import VgelSpeciesGraphic from '@/components/graphics/VgelSpeciesGraphic'

export const Route = createFileRoute('/vgel')({
  component: VgelPage,
})

function VgelPage() {
  const vgel = airwayProducts[1]

  return (
    <div className="space-y-20 pb-20 pt-6 sm:pt-10">
      {/* Header Banner with Veterinary Surgery Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-teal-900/60 relative overflow-hidden bg-gradient-to-br from-[#0a232e] via-[#081822] to-[#050e14]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                World First &bull; Species-Specific Veterinary Airway
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                v-gel® & v-gel® Advanced
              </h1>

              <p className="text-xl text-teal-200 font-medium">
                Revolutionizing Veterinary Anaesthesia for Cats, Rabbits, Dogs & Foals
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                Invented by <strong className="text-white">Dr. Muhammed Aslam Nasir</strong> and commercialized with <strong className="text-white">Docsinnovent Ltd</strong>, v-gel® is the first veterinary airway device reverse-engineered from high-resolution 3D CT and MRI scans of species-specific animal anatomy. It eliminates traumatic tracheal tears and provides effortless positive-pressure ventilation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-lg shadow-teal-950 flex items-center gap-2 transition-all"
                >
                  <span>Veterinary Clinic & Distributor Inquiries</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-400">
                  Developed in partnership with <strong className="text-slate-200">Docsinnovent Ltd</strong>
                </span>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-teal-700/50 shadow-2xl group aspect-[4/3]">
                <img
                  src="/images/veterinary-surgery.jpg"
                  alt="Veterinary surgery with v-gel anaesthesia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e16] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-bold text-white block">Veterinary Operating Suite</span>
                  <span className="text-[10px] text-teal-300">Eliminating tracheal tears in feline & small animal surgery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Species-Specific Vector Graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VgelSpeciesGraphic />
      </section>

      {/* The Tracheal Trauma Crisis in Small Animals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 border border-rose-900/40 bg-gradient-to-br from-[#1a0f18] via-[#100b14] to-[#08070d]">
          <div className="flex items-center gap-3 text-rose-400 mb-4">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">The Urgent Need in Veterinary Practice</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Unlike humans, animals have delicate tracheal architecture. In cats, the dorsal tracheal membrane is thin and fragile; in rabbits, the larynx is deep in a narrow oral cavity with a prominent lingual torus. Overinflating a standard human endotracheal tube cuff inside a small animal routinely causes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-rose-400 font-bold block">Tracheal Rupture</span>
              <p className="text-slate-400">
                Pneumomediastinum and subcutaneous emphysema caused by over-pressurized cuffs, particularly when animals are turned during dental procedures.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-rose-400 font-bold block">Laryngeal Trauma in Rabbits</span>
              <p className="text-slate-400">
                Lagomorph blind intubation attempts cause glottic edema, laryngospasm, and mortality rates that can exceed 1.3%.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-rose-400 font-bold block">Staff Waste Gas Exposure</span>
              <p className="text-slate-400">
                Ill-fitting masks allow volatile anaesthetic vapor (Isoflurane/Sevoflurane) to escape into veterinary surgery rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Species-Specific Clinical Photo Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 font-mono">
            Species Anatomical Solutions
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
            Engineered Specifically for Every Companion Animal
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            One size does not fit all. Dr. Nasir designed custom 3D pharyngeal bowls matching the specific skeletal and cartilage structure of each species.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feline */}
          <div className="card-glass rounded-2xl overflow-hidden border border-teal-900/50 flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/veterinary-cat.jpg"
                alt="Feline patient under veterinary care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071520] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-teal-950/90 text-teal-300 border border-teal-800/60 backdrop-blur-sm">
                Feline Series (C1 - C6)
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">v-gel® Advanced Feline</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Molded to bridge the feline piriform fossae and seal the upper esophageal sphincter. Insertion takes less than 4 seconds without a laryngoscope, eliminating post-operative coughing or laryngeal spasm.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Sizes C1 through C6 (0.8 kg to 7+ kg)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Safe for dental cleanings & MRI</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Rabbit */}
          <div className="card-glass rounded-2xl overflow-hidden border border-emerald-900/50 flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/veterinary-rabbit.jpg"
                alt="Rabbit patient in veterinary clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071520] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-800/60 backdrop-blur-sm">
                Rabbit Series (R1 - R5)
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">v-gel® Rabbit (Lagomorph)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designed specifically around the pronounced lagomorph posterior tongue. The device glides smoothly over the lingual torus and rests directly over the laryngeal entrance without any force.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sizes R1 through R5 (0.6 kg to 5.5 kg)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Reduces rabbit anaesthesia mortality to near-zero</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Canine */}
          <div className="card-glass rounded-2xl overflow-hidden border border-sky-900/50 flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/veterinary-canine.jpg"
                alt="Canine patient receiving anaesthetic care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071520] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-sky-950/90 text-sky-300 border border-sky-800/60 backdrop-blur-sm">
                Canine Series (D1 - D6)
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">v-gel® Canine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Accommodates the expansive canine epiglottis with dorsal suction channel access. Especially revolutionary for brachycephalic breeds (Pugs, Bulldogs) who suffer severe post-extubation airway collapse.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Sizes D1 through D6 (1.5 kg to 35+ kg)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Life-saving support during brachycephalic recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Autoclave Reusability & Economic Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-10 border border-teal-800/40 bg-gradient-to-r from-[#091a28] to-[#07131e]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" />
                Autoclave Validated & Economical
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Steam Sterilizable Up to 134°C for 40+ Clinical Cycles
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Crafted from advanced biocompatible medical silicone elastomer, v-gel® is fully validated for repeated steam autoclave sterilization. Veterinary clinics achieve a dramatically lower per-patient airway cost compared to single-use ET tubes, while saving lives and avoiding environmental plastics waste.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300 pt-2">
                <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">Autoclave Cycle: 121°C - 134°C</span>
                <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">Validated 40+ Uses per Device</span>
                <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">Latex & Phthalate Free</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-[#040d16] rounded-2xl border border-teal-800/50 text-center space-y-3">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Average Cost Reduction</span>
              <div className="text-4xl font-extrabold text-teal-400 font-mono">60% - 75%</div>
              <p className="text-xs text-slate-400">
                Lower recurring surgical airway expenditure across 100 veterinary procedures compared to disposable cuffed tubes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SizingCalculator />
      </section>

      {/* Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-950 via-[#0a202e] to-sky-950 border border-teal-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Equip Your Veterinary Practice or Distribute v-gel®</h3>
            <p className="text-sm text-slate-300">
              TALRIA LIMITED DMCC and Docsinnovent Ltd partner with veterinary teaching hospitals, clinic networks, and global veterinary distributors.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-md transition-colors shrink-0"
          >
            Contact Veterinary Licensing &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
