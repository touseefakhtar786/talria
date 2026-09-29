import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Award,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Microscope,
  Cpu,
  ChevronRight,
  Sparkles,
  Activity,
} from 'lucide-react'
import { clinicalStudies, intellectualProperty } from '@/data/clinicalEvidence'
import MacewenMedalGraphic from '@/components/graphics/MacewenMedalGraphic'
import PatentBlueprintGraphic from '@/components/graphics/PatentBlueprintGraphic'

export const Route = createFileRoute('/clinical-evidence')({
  component: ClinicalEvidencePage,
})

function ClinicalEvidencePage() {
  return (
    <div className="space-y-20 pb-20 pt-6 sm:pt-10">
      {/* Header Banner with Clinical Research Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-sky-900/60 relative overflow-hidden bg-gradient-to-br from-[#0c1830] via-[#081224] to-[#050b16]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Award className="w-3.5 h-3.5" />
                Empirical Validation & Intellectual Property
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Clinical Evidence & Patents
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed font-light">
                The inventions of Dr. Muhammed Aslam Nasir are among the most rigorously investigated supraglottic technologies in medical history, validated by multi-center trials in JAMA, endorsed by European & American resuscitation councils, and protected across multinational patent registries.
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-sky-950/80 text-sky-300 border border-sky-800/60 font-mono">
                  JAMA AIRWAYS-2 Trial
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono">
                  DAS Guidelines Algorithm
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-mono">
                  10+ Global Patents
                </span>
              </div>
            </div>

            {/* Photo Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-sky-700/50 shadow-2xl group aspect-[4/3]">
                <img
                  src="/images/clinical-research.jpg"
                  alt="Clinical Research and Medical Device Trial Data"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-bold text-white block">Peer-Reviewed Evidence Base</span>
                  <span className="text-[10px] text-sky-300">Over 200+ publications across anaesthesia journals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macewen Medal Graphic Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MacewenMedalGraphic />
      </section>

      {/* Patent Blueprint Graphic Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PatentBlueprintGraphic />
      </section>

      {/* Landmark Clinical Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
            Peer-Reviewed Literature
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
            Landmark Clinical Trials & Guidelines
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Over 200+ independent studies validate the safety, seal pressure, and rapid insertion of Dr. Nasir’s airway architectures.
          </p>
        </div>

        <div className="space-y-6">
          {clinicalStudies.map((study) => (
            <div
              key={study.id}
              className="card-glass rounded-2xl p-6 sm:p-8 border border-sky-900/40 hover:border-sky-700/60 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-950 text-sky-300 border border-sky-800/60">
                    {study.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {study.journal} &bull; {study.year}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">{study.doiOrCitation}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {study.title}
              </h3>
              <p className="text-xs text-slate-400 mb-3 font-mono">Authors: {study.authors}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{study.summary}</p>

              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200">
                  <strong className="text-emerald-300">Key Clinical Finding:</strong> {study.keyFinding}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Patent Portfolio Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
            Intellectual Property Protection
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
            Global Patent Portfolio
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            TALRIA LIMITED DMCC holds and manages foundational patents covering non-inflatable anatomical airway geometry, dual-lumen suction systems, and species-matched veterinary seals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intellectualProperty.map((patent, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded font-mono text-xs font-bold bg-sky-950 text-sky-300 border border-sky-800/60">
                    {patent.patentNumber}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">{patent.status}</span>
                </div>
                <span className="text-xs text-slate-400 block mb-2">{patent.jurisdiction}</span>
                <h4 className="text-base font-bold text-white mb-2">{patent.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{patent.abstract}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col gap-1">
                <div>Inventor: <strong className="text-slate-200">{patent.inventor}</strong></div>
                <div>Assignee: <strong className="text-slate-200">{patent.assignee}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Licensing & OEM Collaboration Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-950 via-[#0a1832] to-teal-950 border border-sky-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Intellectual Property & Licensing Inquiries</h3>
            <p className="text-sm text-slate-300">
              For technology transfer agreements, patent licensing, or regional manufacturing rights, please contact our legal and business development team.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors shrink-0"
          >
            Contact Licensing &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
