import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Building, Mail, Globe, ShieldCheck } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    inquiryType: 'Commercial Licensing & Distribution',
    productInterest: 'Both i-gel® and v-gel®',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const formPayload = new URLSearchParams()
      formPayload.append('form-name', 'talria-inquiry')
      Object.entries(formData).forEach(([key, val]) => {
        formPayload.append(key, val)
      })

      // In TanStack Start (SSR), POST to static skeleton file /__forms.html to bypass SSR catch-all
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formPayload.toString(),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          organization: '',
          country: '',
          inquiryType: 'Commercial Licensing & Distribution',
          productInterest: 'Both i-gel® and v-gel®',
          message: '',
        })
      } else {
        throw new Error(`Submission failed with status: ${res.status}`)
      }
    } catch (err: any) {
      console.error('Form submission error:', err)
      setStatus('error')
      setErrorMessage('Unable to submit inquiry at this moment. Please check your network or try again shortly.')
    }
  }

  return (
    <div className="card-glass rounded-2xl p-6 sm:p-10 border border-sky-800/40 relative shadow-2xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 text-sky-400 border border-sky-800/60 mb-3">
          <Building className="w-3.5 h-3.5" />
          DMCC Corporate & Institutional Inquiries
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Initiate Clinical or Commercial Partnership
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Connect directly with TALRIA LIMITED DMCC leadership regarding global IP licensing, veterinary clinical distribution, hospital group procurement, or academic research collaborations.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Inquiry Received Successfully</h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you for contacting TALRIA LIMITED DMCC. Our executive directors and licensing team will review your inquiry and respond promptly within 1-2 business days.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form
          name="talria-inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Netlify hidden fields */}
          <input type="hidden" name="form-name" value="talria-inquiry" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. / Prof. / Mr. / Ms. Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Professional Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="clinician@hospital.org or partner@corp.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Organization / Institution / Clinic
              </label>
              <input
                id="organization"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Royal College Hospital, VetCare Group, OEM Ltd"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Country / Jurisdiction
              </label>
              <input
                id="country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. United Kingdom, UAE, United States, Germany"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="inquiryType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Nature of Inquiry
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              >
                <option value="Commercial Licensing & Distribution">Commercial Licensing & Distribution</option>
                <option value="Hospital / EMS Institutional Procurement">Hospital / EMS Institutional Procurement</option>
                <option value="Veterinary Clinic / Practice Adoption">Veterinary Clinic / Practice Adoption</option>
                <option value="Clinical Trial & Academic Collaboration">Clinical Trial & Academic Collaboration</option>
                <option value="Technical & Intellectual Property Inquiries">Technical & Intellectual Property Inquiries</option>
                <option value="General Corporate Correspondence">General Corporate Correspondence</option>
              </select>
            </div>

            <div>
              <label htmlFor="productInterest" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Technology / Product Focus
              </label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              >
                <option value="Both i-gel® and v-gel®">Both i-gel® & v-gel®</option>
                <option value="i-gel® Human Supraglottic Airway">i-gel® (Human Clinical)</option>
                <option value="v-gel® Advanced Feline/Rabbit/Canine">v-gel® (Veterinary Species-Specific)</option>
                <option value="Next-Gen Airway Telemetry R&D">Next-Gen Airway Telemetry R&D</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Message & Technical Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details regarding your clinical setting, volume requirements, partnership interests, or technical queries..."
              className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
            />
          </div>

          {status === 'error' && (
            <div className="p-4 bg-rose-950/40 border border-rose-500/40 rounded-xl flex items-center gap-3 text-rose-300 text-xs">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Protected under DMCC Corporate Privacy Guidelines & Strict NDA.
            </span>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-lg shadow-sky-950/60 transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              {status === 'submitting' ? (
                <span>Transmitting Inquiry...</span>
              ) : (
                <>
                  <span>Transmit Official Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
