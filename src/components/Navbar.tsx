import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Activity, Menu, X, Shield, Users, FileText, ChevronRight, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'i-gel® Human Airway', href: '/igel' },
    { name: 'v-gel® Veterinary Airway', href: '/vgel' },
    { name: 'Leadership & Directors', href: '/leadership' },
    { name: 'Clinical Evidence & IP', href: '/clinical-evidence' },
    { name: 'Contact & Licensing', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#070d19]/90 backdrop-blur-md border-b border-sky-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-teal-500 to-emerald-400 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b1528] rounded-[10px] flex items-center justify-center">
                <Activity className="w-6 h-6 text-sky-400 group-hover:text-emerald-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  TALRIA <span className="text-sky-400 font-medium">LIMITED</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-sky-950 text-sky-300 border border-sky-800/60 rounded">
                  DMCC
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wide">
                Airway Innovations &bull; Dr. Muhammed Aslam Nasir
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
                activeProps={{
                  className: 'px-3.5 py-2 rounded-lg text-sm font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/50',
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-md shadow-sky-900/40 transition-all duration-200"
            >
              <span>Partner & Inquire</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a1222] border-b border-sky-900/40 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              activeProps={{
                className: 'block px-3 py-2.5 rounded-lg text-base font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/50',
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-teal-600 shadow-md"
            >
              <span>Partner & Inquire</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
