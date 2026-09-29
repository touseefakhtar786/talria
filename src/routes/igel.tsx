import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Stethoscope,
  Sparkles,
  Layers,
  ArrowRight,
  FileText,
  AlertCircle,
  Award,
} from 'lucide-react'
import { airwayProducts } from '@/data/products'
import SizingCalculator from '@/components/SizingCalculator'
import IgelAnatomyGraphic from '@/components/graphics/IgelAnatomyGraphic'
import CuffComparisonGraphic from '@/components/graphics/CuffComparisonGraphic'
import AirwaySizingMatrixGraphic from '@/components/graphics/AirwaySizingMatrixGraphic'

export const Route = createFileRoute('/igel')({
  component: IgelPage,
})

function IgelPage() {
  const igel = airwayProducts[0]

  return (
    <div className="space-y-20 pb-20 pt-6 sm:pt-10">
      {/* Header Banner with Clinical Hero Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-sky-900/60 relative overflow-hidden bg-gradient-to-br from-[#0c1932] via-[#091426] to-[#060c18]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Human Clinical Benchmark &bull; 2nd Generation SGA
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                i-gel® Supraglottic Airway
              </h1>

              <p className="text-xl text-sky-200 font-medium">
                The World's First Non-Inflatable Anatomical Perilaryngeal Airway
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                Conceived, patented, and clinically developed by consultant anaesthetist <strong className="text-white">Dr. Muhammed Aslam Nasir</strong>, i-gel® revolutionized human anaesthesia and emergency resuscitation by eliminating inflatable cuffs in favor of an anatomical thermoplastic elastomer seal.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-lg shadow-sky-900/50 flex items-center gap-2 transition-all"
                >
                  <span>Request Clinical Evaluation</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-400">
                  Manufactured & marketed under global license by <strong className="text-slate-200">Intersurgical Ltd</strong>
                </span>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-sky-700/50 shadow-2xl group aspect-[4/3]">
                <img
                  src="/images/hero-operating-theatre.jpg"
                  alt="Operating theatre anaesthesia with i-gel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-bold text-white block">Routine Operating Theatre Standard</span>
                  <span className="text-[10px] text-sky-300">Over 50 million procedures performed safely</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Anatomical Architecture Vector Graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IgelAnatomyGraphic />
      </section>

      {/* Comparative Biomechanics: Balloon Cuff vs Gel Seal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CuffComparisonGraphic />
      </section>

      {/* Visual Clinical Sizing Matrix System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AirwaySizingMatrixGraphic />
      </section>

      {/* Clinical Indications & Photography Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
            Evidence-Based Resuscitation Protocols
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
            Clinical Applications Across Frontline Healthcare
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Endorsed by international guidelines (DAS, ERC, AHA) from hospital theatres to emergency combat casualty care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glass rounded-2xl overflow-hidden border border-sky-900/40 flex flex-col justify-between">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/hero-operating-theatre.jpg"
                alt="Operating Theatre Elective General Anaesthesia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081222] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-sky-950/90 text-sky-300 border border-sky-800/60 backdrop-blur-sm">
                General Anaesthesia
              </span>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-base font-bold text-white">Routine Surgical Anaesthesia</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provides smooth airway maintenance for spontaneous or mechanically ventilated adult and pediatric patients with minimal airway resistance and zero sore throat trauma.
              </p>
            </div>
            <div className="p-5 pt-0">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold block">
                Typical leak pressure: &gt; 30 cmH2O
              </span>
            </div>
          </div>

          <div className="card-glass rounded-2xl overflow-hidden border border-sky-900/40 flex flex-col justify-between">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/emergency-resuscitation.jpg"
                alt="Pre-Hospital Paramedic Cardiac Arrest Resuscitation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081222] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-800/60 backdrop-blur-sm">
                Emergency EMS
              </span>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-base font-bold text-white">Cardiac Arrest Resuscitation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Investigated in the landmark AIRWAYS-2 trial published in JAMA. Paramedics achieve insertion in under 5 seconds during active chest compressions without pausing CPR.
              </p>
            </div>
            <div className="p-5 pt-0">
              <span className="text-[11px] font-mono text-sky-400 font-semibold block">
                First-pass success: &gt; 96% in field trials
              </span>
            </div>
          </div>

          <div className="card-glass rounded-2xl overflow-hidden border border-sky-900/40 flex flex-col justify-between">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/biomedical-lab.jpg"
                alt="Difficult Airway Rescue & Intubation Conduit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081222] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-950/90 text-amber-300 border border-amber-800/60 backdrop-blur-sm">
                Difficult Airway
              </span>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-base font-bold text-white">Fiberoptic Intubation Conduit</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Featured in Difficult Airway Society (DAS) rescue algorithms. The wide central lumen accommodates flexible bronchoscopes and endotracheal tubes for definitive rescue intubation.
              </p>
            </div>
            <div className="p-5 pt-0">
              <span className="text-[11px] font-mono text-amber-300 font-semibold block">
                Accommodates up to 8.0 mm ID ETT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 border border-sky-900/50">
          <h3 className="text-2xl font-bold text-white mb-6">
            Comprehensive Engineering Specifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block">Biomaterial Composition</span>
              <span className="text-white font-semibold mt-1 block">{igel.specifications.material}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block">Cuff Mechanism</span>
              <span className="text-white font-semibold mt-1 block">{igel.specifications.cuffType}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block">Typical Oropharyngeal Seal Pressure</span>
              <span className="text-sky-400 font-mono font-bold mt-1 block">{igel.specifications.sealPressure}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block">Esophageal / Gastric Access</span>
              <span className="text-white font-semibold mt-1 block">{igel.specifications.gastricAccess}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block">Packaging & Sterilization</span>
              <span className="text-white font-semibold mt-1 block">{igel.specifications.sterilization}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block">Regulatory Clearances</span>
              <span className="text-emerald-400 font-semibold mt-1 block">{igel.specifications.regulatoryClearances}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 border border-sky-900/50 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Full Sizing & Compatibility Guide</h3>
              <p className="text-xs text-slate-400 mt-1">From Neonatal (2 kg) through Large Adult (90+ kg)</p>
            </div>
            <span className="text-xs font-mono text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800/60">
              7 Clinical Sizes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Size & Designation</th>
                  <th className="py-3 px-4">Patient Weight</th>
                  <th className="py-3 px-4">Color Code</th>
                  <th className="py-3 px-4">Gastric Catheter</th>
                  <th className="py-3 px-4">ET Tube Conduit</th>
                  <th className="py-3 px-4">Primary Clinical Indication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {igel.sizingGuide.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{item.size}</td>
                    <td className="py-3.5 px-4 font-mono text-sky-300">{item.patientWeight}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-800 border border-slate-700">
                        {item.colorCode}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-emerald-400">{item.gastricVentSize}</td>
                    <td className="py-3.5 px-4 font-mono text-teal-300">{item.endotrachealTubeConduit}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Sizing Selector embedded */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SizingCalculator />
      </section>

      {/* Clinical Evidence CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950 via-[#0a1a36] to-teal-950 border border-sky-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Looking for Peer-Reviewed Clinical Trials?</h3>
            <p className="text-sm text-slate-300">
              Read the AIRWAYS-2 JAMA trial, Difficult Airway Society guidelines, and Macewen Medal citation.
            </p>
          </div>
          <Link
            to="/clinical-evidence"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors shrink-0"
          >
            Review Clinical Trials &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
