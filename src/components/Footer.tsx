import { Link } from '@tanstack/react-router'
import { Activity, ShieldCheck, Award, MapPin, Mail, Globe, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-sky-950 text-slate-400">
      {/* Top Banner highlighting Macewen Medal & Clinical Legacy */}
      <div className="border-b border-sky-900/30 bg-gradient-to-r from-sky-950/40 via-slate-900/40 to-teal-950/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Difficult Airway Society (DAS UK) Macewen Medal (2016)
              </p>
              <p className="text-xs text-slate-400">
                Awarded to Dr. Muhammed Aslam Nasir for distinguished and lasting contributions to airway management.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 bg-sky-950/80 px-3 py-1.5 rounded-md border border-sky-800/40">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              DMCC Free Zone, Dubai, UAE
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-700/50">
              <Globe className="w-4 h-4 text-sky-400" />
              Global IP Holding & Licensing
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Seat */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-600 to-teal-400 p-0.5">
                <div className="w-full h-full bg-[#0b1528] rounded-[6px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TALRIA LIMITED <span className="text-sky-400 font-normal">DMCC</span>
              </span>
            </div>
            <p className="text-xs italic text-sky-300/90 font-medium">
              &ldquo;Just breathing can be such a luxury at times.&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              TALRIA LIMITED DMCC is the global intellectual property, biomedical engineering, and licensing enterprise founded on the pioneering airway inventions of Dr. Muhammed Aslam Nasir. From human critical care to species-specific veterinary anaesthesia, our technologies protect airway patency and eliminate tissue trauma worldwide.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Dubai Multi Commodities Centre (DMCC), Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transfer of Incorporation from Isle of Man</span>
              </div>
            </div>
          </div>

          {/* Airway Technologies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Airway Innovations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/igel" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span>i-gel® Human Airway</span>
                </Link>
              </li>
              <li>
                <Link to="/vgel" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span>v-gel® Veterinary Airway</span>
                </Link>
              </li>
              <li>
                <Link to="/clinical-evidence" className="hover:text-sky-400 transition-colors">
                  Clinical Evidence & Studies
                </Link>
              </li>
              <li>
                <Link to="/clinical-evidence" className="hover:text-sky-400 transition-colors">
                  Global Patent Portfolio
                </Link>
              </li>
              <li>
                <Link to="/igel" className="hover:text-sky-400 transition-colors">
                  Non-Inflatable Seal Physics
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Directors */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Board of Directors
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/leadership" className="hover:text-sky-400 transition-colors">
                  Dr. Muhammed Aslam Nasir <span className="text-xs text-sky-500 block">MD & Inventor</span>
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-sky-400 transition-colors">
                  Talha Nasir <span className="text-xs text-slate-500 block">COO</span>
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-sky-400 transition-colors">
                  Mr. Tuaha Nasir <span className="text-xs text-slate-500 block">Business Development</span>
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-sky-400 transition-colors">
                  Mr. Adam Nasir <span className="text-xs text-slate-500 block">Business Development</span>
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-sky-400 transition-colors">
                  Mr. Danyal Nasir <span className="text-xs text-slate-500 block">Financial Director</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Alliances */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Commercial Partners
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
                <span className="text-slate-300">Intersurgical Ltd</span>
                <span className="text-sky-400 font-mono text-[11px]">i-gel® Global</span>
              </li>
              <li className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
                <span className="text-slate-300">Docsinnovent Ltd</span>
                <span className="text-emerald-400 font-mono text-[11px]">v-gel® Global</span>
              </li>
              <li className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
                <span className="text-slate-300">Difficult Airway Society</span>
                <span className="text-amber-400 font-mono text-[11px]">DAS Guidelines</span>
              </li>
              <li className="flex items-center justify-between text-xs py-1">
                <span className="text-slate-300">Light4Life Charity</span>
                <span className="text-rose-400 font-mono text-[11px]">Humanitarian</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block text-xs font-medium text-sky-400 hover:text-sky-300 underline underline-offset-4"
                >
                  Contact Licensing Team &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Regulatory & Clinical Notice:</strong> i-gel® is a registered trademark licensed to Intersurgical Ltd for human clinical use. v-gel® is a registered trademark of Docsinnovent Ltd for veterinary clinical use. Information on this website is intended for medical healthcare professionals, biomedical engineers, and institutional partners. Always refer to relevant product Instructions For Use (IFU) for specific clinical contraindications and placement instructions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} TALRIA LIMITED DMCC. All rights reserved. Registered in Dubai Multi Commodities Centre (DMCC).
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="hover:text-slate-300">Headquarters</Link>
              <Link to="/clinical-evidence" className="hover:text-slate-300">Patents</Link>
              <Link to="/leadership" className="hover:text-slate-300">Governance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
