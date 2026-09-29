import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  Award,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  CheckCircle2,
  Globe,
  Building2,
  FileText,
  Layers,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  Zap,
} from 'lucide-react'
import { airwayProducts } from '@/data/products'
import { directors, companyDetails } from '@/data/directors'
import { clinicalStudies, intellectualProperty } from '@/data/clinicalEvidence'
import SizingCalculator from '@/components/SizingCalculator'
import ContactForm from '@/components/ContactForm'
import IgelAnatomyGraphic from '@/components/graphics/IgelAnatomyGraphic'
import CuffComparisonGraphic from '@/components/graphics/CuffComparisonGraphic'
import GlobalDistributionGraphic from '@/components/graphics/GlobalDistributionGraphic'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'human' | 'vet'>('all')

  const igel = airwayProducts[0]
  const vgel = airwayProducts[1]

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section with Clinical Photography Showcase */}
      <section className="relative overflow-hidden pt-8 sm:pt-16 pb-16 lg:pb-24">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-sky-600/15 via-teal-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Accreditation Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-950/80 text-sky-300 border border-sky-800/60 shadow-lg shadow-sky-950/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>TALRIA LIMITED DMCC &bull; DUBAI, UAE</span>
              </div>

              {/* Main Slogan & Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.12]">
                  “Just breathing can be such a luxury at times.”
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gradient leading-snug">
                  The Breakthrough in Non-Inflatable Supraglottic Airway Management
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Home to the intellectual property and clinical biomechanics developed by renowned consultant anaesthetist{' '}
                <strong className="text-white font-semibold">Dr. Muhammed Aslam Nasir</strong> (Macewen Medal Recipient).
                Powering <strong className="text-sky-300 font-semibold">i-gel®</strong> in human emergency medicine and{' '}
                <strong className="text-emerald-300 font-semibold">v-gel®</strong> in species-specific veterinary anaesthesia across 100+ countries.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/igel"
                  className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-lg shadow-sky-900/50 flex items-center gap-2 transition-all duration-200"
                >
                  <span>Discover i-gel® (Human)</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/vgel"
                  className="px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 shadow-md flex items-center gap-2 transition-all duration-200"
                >
                  <span>Explore v-gel® (Veterinary)</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/leadership"
                  className="px-6 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  Executive Directors &rarr;
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-sky-800/50 shadow-2xl group">
                <img
                  src="/images/hero-operating-theatre.jpg"
                  alt="Modern operating theatre anaesthesia"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/40 to-transparent" />

                {/* Floating Highlights on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/90 text-sky-300 border border-sky-700/60 backdrop-blur-md flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    Routine & Emergency Resuscitation
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 backdrop-blur-md">
                    100+ Countries
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0b162c]/90 border border-sky-800/60 backdrop-blur-md space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Anatomical Thermoplastic Seal</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">Sub-5s Placement</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Zero inflatable cuff. Zero mucosal capillary ischemia. Licensed globally to Intersurgical Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#0b1528]/80 border border-sky-900/40 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono">100+</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Countries Deployed</p>
              <span className="text-[11px] text-slate-400">Routine & emergency care</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#0b1528]/80 border border-sky-900/40 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">50M+</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Procedures Worldwide</p>
              <span className="text-[11px] text-slate-400">Human & veterinary patients</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#0b1528]/80 border border-sky-900/40 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">0 PSI</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Cuff Inflation Trauma</p>
              <span className="text-[11px] text-slate-400">Pressure-neutral soft gel seal</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#0b1528]/80 border border-sky-900/40 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">2016</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Macewen Medal</p>
              <span className="text-[11px] text-slate-400">Awarded to Dr. M.A. Nasir (DAS)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Photography In Action Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
              Clinical Environments & Frontline Practice
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Where Dr. Nasir's Airway Inventions Protect Lives
            </h3>
          </div>
          <span className="text-xs text-slate-400">Human Emergency Medicine & Veterinary Surgery</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group relative rounded-2xl overflow-hidden border border-sky-900/50 aspect-[4/3] shadow-lg">
            <img
              src="/images/hero-operating-theatre.jpg"
              alt="Hospital Operating Theatre"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-bold text-white block">Operating Theatres</span>
              <span className="text-[10px] text-sky-300">Routine & urgent elective general anaesthesia</span>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden border border-sky-900/50 aspect-[4/3] shadow-lg">
            <img
              src="/images/emergency-resuscitation.jpg"
              alt="Emergency Paramedic Resuscitation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-bold text-white block">Emergency & Paramedic Resuscitation</span>
              <span className="text-[10px] text-emerald-300">JAMA AIRWAYS-2 trial gold standard</span>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden border border-sky-900/50 aspect-[4/3] shadow-lg">
            <img
              src="/images/veterinary-surgery.jpg"
              alt="Veterinary Surgical Suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-bold text-white block">Veterinary Operating Suites</span>
              <span className="text-[10px] text-teal-300">Tracheal rupture prevention with v-gel®</span>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden border border-sky-900/50 aspect-[4/3] shadow-lg">
            <img
              src="/images/biomedical-lab.jpg"
              alt="Biomedical Materials Laboratory"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-bold text-white block">Biomedical Engineering</span>
              <span className="text-[10px] text-amber-300">Precision SEBS thermoplastic molding & QA</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Clinical & Industrial Need Section: Comparative Cuff Graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CuffComparisonGraphic />
      </section>

      {/* Flagship Technologies: i-gel® vs v-gel® with Dedicated Photo Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 text-sky-400 border border-sky-800/60 mb-2">
            <Layers className="w-3.5 h-3.5" />
            Dual Biomedical Portfolios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered for Human Critical Care & Veterinary Precision
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Two revolutionary applications of Dr. Nasir’s patented supraglottic technology, each customized for anatomical physiology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* i-gel Card with Photo Banner */}
          <div className="card-glass card-glass-hover rounded-3xl overflow-hidden border border-sky-900/60 flex flex-col justify-between relative">
            <div className="relative h-52 overflow-hidden border-b border-sky-900/40">
              <img
                src="/images/hero-operating-theatre.jpg"
                alt="i-gel human anaesthesia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081326] via-[#081326]/40 to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/80 text-white backdrop-blur-md">
                  {igel.badge}
                </span>
                <span className="text-xs text-white/90 font-mono bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  Licensed to Intersurgical
                </span>
              </div>
              <div className="absolute bottom-3 left-4">
                <h3 className="text-2xl font-extrabold text-white">{igel.name}</h3>
                <span className="text-xs text-sky-300 font-medium">Human Anaesthesia & Resuscitation</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-sm font-medium text-sky-300">
                {igel.tagline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {igel.shortDescription}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5">
                {igel.keyInnovations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200">
                      <strong className="text-white">{item.title}:</strong> {item.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sizing badges */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Sizes Available (Human Neonatal to Bariatric):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {igel.sizingGuide.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-slate-700/60"
                    >
                      {s.size.split(' ')[0]} {s.size.split(' ')[1]} ({s.patientWeight})
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Typical Seal Pressure</span>
                  <span className="text-sm font-bold text-sky-400 font-mono">&gt; 30 - 35 cmH2O</span>
                </div>
                <Link
                  to="/igel"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-md shadow-sky-900/40"
                >
                  <span>Full i-gel® Technical Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* v-gel Card with Photo Banner */}
          <div className="card-glass card-glass-hover rounded-3xl overflow-hidden border border-teal-900/60 flex flex-col justify-between relative">
            <div className="relative h-52 overflow-hidden border-b border-teal-900/40">
              <img
                src="/images/veterinary-surgery.jpg"
                alt="v-gel veterinary anaesthesia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071520] via-[#071520]/40 to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/80 text-white backdrop-blur-md">
                  {vgel.badge}
                </span>
                <span className="text-xs text-white/90 font-mono bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  Partner: Docsinnovent
                </span>
              </div>
              <div className="absolute bottom-3 left-4">
                <h3 className="text-2xl font-extrabold text-white">{vgel.name}</h3>
                <span className="text-xs text-teal-300 font-medium">Species-Specific Veterinary Anaesthesia</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-sm font-medium text-teal-300">
                {vgel.tagline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {vgel.shortDescription}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5">
                {vgel.keyInnovations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200">
                      <strong className="text-white">{item.title}:</strong> {item.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sizing badges */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Species-Specific Variants (3D Anatomic Scan Fitted):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-teal-950/60 text-teal-300 border border-teal-800/60">
                    Feline C1 - C6 (0.8 - 7.0+ kg)
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                    Rabbit R1 - R5 (0.6 - 5.5 kg)
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-sky-950/60 text-sky-300 border border-sky-800/60">
                    Canine D1 - D6 (1.5 - 35+ kg)
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-950/60 text-amber-300 border border-amber-800/60">
                    Equine Foals & Specialized
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Autoclave Reusability</span>
                  <span className="text-sm font-bold text-teal-400 font-mono">Up to 40+ cycles (134°C)</span>
                </div>
                <Link
                  to="/vgel"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors shadow-md shadow-teal-900/40"
                >
                  <span>Full v-gel® Veterinary Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Anatomical Vector Graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IgelAnatomyGraphic />
      </section>

      {/* Interactive Airway Sizing & Clinical Guide Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SizingCalculator />
      </section>

      {/* Executive Leadership & Board of Directors with Real Portraits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 text-sky-400 border border-sky-800/60 mb-2">
            <Users className="w-3.5 h-3.5" />
            Executive Leadership & Board
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Visionaries Behind TALRIA LIMITED DMCC
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A cohesive leadership team combining world-class clinical invention, precision biomedical engineering, multinational licensing, and corporate governance.
          </p>
        </div>

        {/* Dr. Nasir Spotlight Card with Photo */}
        {directors.length > 0 && (
          <div className="mb-10 card-glass rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden bg-gradient-to-br from-[#0c1a32] via-[#0b172a] to-[#070e1b]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Managing Director & Chief Inventor
                  </span>
                  <span className="text-xs text-slate-400 font-mono">MBBS, FRCA &bull; Consultant Anaesthetist</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {directors[0].name}
                </h3>

                <blockquote className="italic text-sky-300 text-base sm:text-lg border-l-2 border-sky-400 pl-4 py-1">
                  "{directors[0].quote}"
                </blockquote>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {directors[0].bio}
                </p>

                <div className="pt-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Distinctions & Milestones:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {directors[0].achievements.slice(0, 4).map((ach, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#081222] p-6 rounded-2xl border border-sky-800/40 text-center space-y-4">
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl mx-auto group">
                  <img
                    src={directors[0].imageUrl}
                    alt={directors[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{directors[0].name}</h4>
                  <p className="text-xs text-sky-400 font-medium">President, Docsinnovent Ltd</p>
                  <p className="text-xs text-slate-400">MD, TALRIA LIMITED DMCC</p>
                </div>
                <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-800/40 text-left">
                  <span className="text-[11px] font-semibold text-amber-300 block mb-1">Macewen Medalist (2016)</span>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Bestowed by the Difficult Airway Society (DAS) for transformative contributions to airway safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4 Directors Grid with Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directors.slice(1).map((dir) => (
            <div
              key={dir.id}
              className="card-glass card-glass-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Director Portrait Header */}
                <div className="relative h-44 overflow-hidden border-b border-slate-800">
                  <img
                    src={dir.imageUrl}
                    alt={dir.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a32] via-[#0c1a32]/30 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/90 text-sky-300 border border-sky-800/60 backdrop-blur-sm">
                    Director
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-0.5">{dir.name}</h4>
                  <p className="text-xs font-semibold text-sky-400 mb-2">{dir.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {dir.bio}
                  </p>

                  <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Leadership Scope:
                    </span>
                    {dir.keyFocus.slice(0, 2).map((focus, idx) => (
                      <div key={idx} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400" />
                        <span className="line-clamp-1">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 text-right">
                <Link
                  to="/leadership"
                  className="text-xs font-medium text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>View Executive Profile</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Distribution Graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalDistributionGraphic />
      </section>

      {/* Clinical Evidence & Guidelines Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-12 border border-sky-900/40 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800/60 mb-2">
                <FileText className="w-3.5 h-3.5" />
                Clinical Trials & International Guidelines
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Backed by Multi-Center Trials & Resuscitation Protocols
              </h2>
            </div>
            <Link
              to="/clinical-evidence"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2 shrink-0 transition-colors"
            >
              <span>Explore All Clinical Studies</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {clinicalStudies.slice(0, 3).map((study) => (
              <div key={study.id} className="p-5 rounded-2xl bg-[#091325]/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/40 block w-fit mb-2">
                    {study.journal} &bull; {study.year}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {study.title}
                  </h4>
                  <p className="text-xs text-slate-400 mb-3 line-clamp-3">
                    {study.summary}
                  </p>
                </div>
                <div className="p-3 bg-sky-950/40 rounded-xl border border-sky-900/30">
                  <span className="text-[10px] font-semibold uppercase text-emerald-400 block mb-0.5">Key Finding</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {study.keyFinding}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Licensing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </div>
  )
}
