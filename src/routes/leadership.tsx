import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Building2,
  Briefcase,
  FileCheck,
  Quote,
  Heart,
  Globe,
  MapPin,
} from 'lucide-react'
import { directors, companyDetails } from '@/data/directors'
import MacewenMedalGraphic from '@/components/graphics/MacewenMedalGraphic'

export const Route = createFileRoute('/leadership')({
  component: LeadershipPage,
})

function LeadershipPage() {
  const drNasir = directors[0]
  const otherDirectors = directors.slice(1)

  return (
    <div className="space-y-20 pb-20 pt-6 sm:pt-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-sky-900/60 relative overflow-hidden bg-gradient-to-br from-[#0c1a34] via-[#081326] to-[#050b16]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Users className="w-3.5 h-3.5" />
              Corporate Governance & Scientific Leadership
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Board of Directors
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-light">
              TALRIA LIMITED DMCC brings together world-class clinical invention, precision biomedical engineering, multinational licensing, and corporate financial stewardship to power the next generation of patient safety.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                DMCC Registered Entity
              </span>
              <span>&bull;</span>
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Muhammed Aslam Nasir Profile in Depth with Real Portrait */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-12 border border-amber-500/30 bg-gradient-to-br from-[#0f1d38] via-[#0a1529] to-[#060e1b] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Managing Director & Chief Inventor
                </span>
                <span className="text-xs font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                  MBBS, FRCA &bull; Consultant anesthesiologist
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  {drNasir.name}
                </h2>
                <p className="text-base text-sky-300 font-medium">
                  Inventor of i-gel® (Human) & v-gel® (Veterinary) &bull; President, Docsinnovent Ltd
                </p>
              </div>

              <blockquote className="italic text-slate-200 text-base sm:text-lg border-l-4 border-amber-400 pl-4 py-1.5 bg-amber-950/20 rounded-r-xl">
                "{drNasir.quote}"
              </blockquote>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>{drNasir.bio}</p>
                <p>
                  As an NHS consultant anaesthesiologist, Dr. Nasir witnessed first-hand the clinical complications caused by inflatable balloon cuffs—including tracheal tear injuries, mucosal ischemia, recurrent nerve damage, and post-operative throat pain. His revolutionary discovery that a non-inflatable anatomical thermoplastic elastomer (SEBS) could naturally mirror the human larynx led to the birth of the <strong>i-gel®</strong>, now used in over 100 countries and manufactured globally by <strong>Intersurgical Ltd</strong>.
                </p>
                <p>
                  Recognizing the high mortality and tracheal tears suffered by companion animals (especially cats and rabbits) under general anaesthesia, Dr. Nasir subsequently invented and patented the <strong>v-gel®</strong>, founding <strong>Docsinnovent Ltd</strong> to deliver the world's first species-specific supraglottic devices.
                </p>
              </div>

              {/* Key Distinctions */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3">
                  Distinctions, Honors & Philanthropy
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                  {drNasir.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Card with Doctor Portrait Photo */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#081224] p-6 rounded-2xl border border-sky-800/40 text-center space-y-4">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl mx-auto group">
                  <img
                    src={drNasir.imageUrl}
                    alt={drNasir.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{drNasir.name}</h3>
                  <p className="text-xs text-sky-400 font-medium mt-0.5">Managing Director & Chief Inventor</p>
                  <p className="text-xs text-slate-400">TALRIA LIMITED DMCC</p>
                </div>

                <div className="p-4 bg-amber-950/40 rounded-xl border border-amber-800/50 text-left">
                  <span className="text-xs font-bold text-amber-300 block mb-1">
                    Macewen Medal (DAS UK, 2016)
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Awarded by the Difficult Airway Society in Great Britain for lasting, profound contributions to airway management and patient safety.
                  </p>
                </div>

                <div className="p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 text-left flex items-start gap-3">
                  <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-rose-300 block mb-0.5">
                      Light4Life Charity
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Founder of Light4Life, spearheading humanitarian medical relief, disaster assistance, and educational philanthropy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macewen Medal Graphic Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MacewenMedalGraphic />
      </section>

      {/* The Executive Directors Grid with Authentic Portraits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
            Executive Leadership Team
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
            Directors of TALRIA LIMITED DMCC
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Guiding technical execution, commercial growth, international partnerships, and fiscal governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherDirectors.map((dir) => (
            <div
              key={dir.id}
              className="card-glass rounded-3xl overflow-hidden border border-sky-900/40 flex flex-col justify-between"
            >
              {/* Photo Header */}
              <div className="relative h-56 overflow-hidden border-b border-sky-900/40">
                <img
                  src={dir.imageUrl}
                  alt={dir.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081326] via-[#081326]/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-sky-950/90 text-sky-300 border border-sky-800/60 backdrop-blur-sm">
                    Director
                  </span>
                </div>
                <div className="absolute bottom-3 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">{dir.name}</h3>
                  <p className="text-xs font-semibold text-sky-400">{dir.title}</p>
                  <span className="text-[11px] text-slate-300 font-mono">{dir.credentials}</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <blockquote className="italic text-xs text-slate-300 border-l-2 border-teal-400 pl-3 py-1">
                  "{dir.quote}"
                </blockquote>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {dir.bio}
                </p>

                {/* Scope of Responsibility */}
                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Areas of Focus:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {dir.keyFocus.map((focus, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements banner */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400 block mb-1.5">
                    Key Milestones:
                  </span>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {dir.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Seat Showcase: DMCC Dubai Global Headquarters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl overflow-hidden border border-sky-900/50 bg-[#081222]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[300px]">
              <img
                src="/images/dubai-dmcc-hq.jpg"
                alt="Dubai DMCC Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#081222]/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081222] via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1.5 w-fit">
                  <Building2 className="w-3.5 h-3.5" />
                  DMCC Free Zone, Dubai, UAE
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                  Corporate Registration & Seat
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {companyDetails.legalName}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Transferred Incorporation from Isle of Man to Dubai Multi Commodities Centre (DMCC)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 uppercase font-semibold text-[10px] block">Corporate Status</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">Active &amp; Registered</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 uppercase font-semibold text-[10px] block">Jurisdiction</span>
                  <span className="text-white font-semibold">Dubai Free Zone, UAE</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 uppercase font-semibold text-[10px] block">Human Airway Licensing</span>
                  <span className="text-sky-300 font-semibold">Intersurgical Ltd (i-gel®)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 uppercase font-semibold text-[10px] block">Veterinary Innovation</span>
                  <span className="text-teal-300 font-semibold">Docsinnovent Ltd (v-gel®)</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                TALRIA LIMITED DMCC manages global patent annuities, intellectual property licensing covenants, and research commercialization from its corporate seat in Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950 via-[#0a1a36] to-teal-950 border border-sky-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Connect with the Directors</h3>
            <p className="text-sm text-slate-300">
              For executive discussions on multinational IP licensing, healthcare system partnerships, or research ventures.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors shrink-0"
          >
            Direct Director Inquiries &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
