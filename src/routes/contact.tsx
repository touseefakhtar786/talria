import { createFileRoute } from '@tanstack/react-router'
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Building2,
  Globe,
  Clock,
  CheckCircle2,
  FileCheck,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { companyDetails } from '@/data/directors'
import GlobalDistributionGraphic from '@/components/graphics/GlobalDistributionGraphic'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="space-y-20 pb-20 pt-6 sm:pt-10">
      {/* Header Banner with Dubai DMCC Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-3xl p-8 sm:p-14 border border-sky-900/60 relative overflow-hidden bg-gradient-to-br from-[#0c1830] via-[#081224] to-[#050b16]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Building2 className="w-3.5 h-3.5" />
                Global Headquarters & Commercial Affairs
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Contact TALRIA LIMITED DMCC
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Connect with our executive leadership and commercial team for OEM licensing agreements, regional distributor appointments, hospital network supply agreements, or clinical trial collaboration.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3.5 py-1.5 rounded-lg border border-emerald-800/60 w-fit">
                <ShieldCheck className="w-4 h-4" />
                <span>DMCC Free Zone, Dubai, UAE</span>
              </div>
            </div>

            {/* Photo of Dubai Headquarters */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-sky-700/50 shadow-2xl group aspect-[4/3]">
                <img
                  src="/images/dubai-dmcc-hq.jpg"
                  alt="Dubai DMCC Headquarters Skyline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-bold text-white block">Dubai Multi Commodities Centre</span>
                  <span className="text-[10px] text-amber-300">Registered Corporate Seat of TALRIA LIMITED DMCC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters and Inquiry Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Corporate Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-glass rounded-3xl p-8 border border-sky-900/40 space-y-6">
              <h3 className="text-xl font-bold text-white">Registered Corporate Seat</h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">{companyDetails.legalName}</strong>
                    <span>Dubai Multi Commodities Centre (DMCC)</span>
                    <br />
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Corporate Status</strong>
                    <span>Transfer of Incorporation from Isle of Man</span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Intellectual Property Management & Global Licensing
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <Globe className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Operational Reach</strong>
                    <span>Global representation across EMEA, Americas, and APAC</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Business Hours</strong>
                    <span>Monday – Friday: 09:00 – 18:00 (GST / UTC+4)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Partnerships Guidance */}
            <div className="card-glass rounded-3xl p-8 border border-teal-900/40 bg-gradient-to-br from-[#091b28] to-[#07131e] space-y-4">
              <h4 className="text-base font-bold text-white">Partnership Channels</h4>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Human Clinical (i-gel®):</strong> For worldwide human clinical distribution & procurement, we collaborate with licensed manufacturing partner <strong>Intersurgical Ltd</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Veterinary Clinical (v-gel®):</strong> For veterinary distribution, corporate clinic groups, and research adoption, inquiries are coordinated with <strong>Docsinnovent Ltd</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">IP & Next-Gen Sensors:</strong> Technology licensing and joint patent commercialization directly handled by TALRIA LIMITED DMCC.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Global Distribution Graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalDistributionGraphic />
      </section>
    </div>
  )
}
