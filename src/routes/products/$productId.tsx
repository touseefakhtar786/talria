import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
  Camera,
} from 'lucide-react'
import airwayProducts from '../../data/products'
import IgelAnatomyGraphic from '@/components/graphics/IgelAnatomyGraphic'
import VgelSpeciesGraphic from '@/components/graphics/VgelSpeciesGraphic'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetailComponent,
  loader: async ({ params }) => {
    // Match either numeric ID (1, 2) or slug ('i-gel', 'v-gel')
    const product = airwayProducts.find(
      (p) => p.id.toString() === params.productId || p.slug.toLowerCase() === params.productId.toLowerCase(),
    )
    if (!product) {
      throw new Error(`Airway technology not found: ${params.productId}`)
    }
    return product
  },
})

function ProductDetailComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
      >
        &larr; Back to TALRIA LIMITED DMCC Overview
      </Link>

      {/* Main Product Card */}
      <div className="card-glass rounded-3xl overflow-hidden border border-sky-900/50">
        {/* Photo Banner */}
        <div className="relative h-64 sm:h-80 overflow-hidden border-b border-sky-900/40">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081224] via-[#081224]/50 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/80 text-white backdrop-blur-md">
              {product.category}
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/60 text-slate-200 border border-slate-700/60 backdrop-blur-md">
              {product.badge}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-sky-200 font-medium mt-1">
              {product.tagline}
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-8">
          <p className="text-slate-300 text-base leading-relaxed max-w-4xl">
            {product.description}
          </p>

          {/* Specifications Grid */}
          <div className="border-t border-slate-800 pt-8">
            <h2 className="text-xl font-bold text-white mb-4">Device Engineering Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Cuff Seal Technology</span>
                <span className="text-white font-semibold">{product.specifications.cuffType}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Biomaterial Formulation</span>
                <span className="text-white font-semibold">{product.specifications.material}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Oropharyngeal Seal Pressure</span>
                <span className="text-sky-300 font-bold font-mono">{product.specifications.sealPressure}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Suction & Esophageal Protection</span>
                <span className="text-white font-semibold">{product.specifications.gastricAccess}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Intubation & Optical Conduit</span>
                <span className="text-white font-semibold">{product.specifications.intubationConduit}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block mb-1">Global Regulatory Status</span>
                <span className="text-emerald-300 font-semibold">{product.specifications.regulatoryClearances}</span>
              </div>
            </div>
          </div>

          {/* Clinical Benefits */}
          <div className="border-t border-slate-800 pt-8">
            <h2 className="text-xl font-bold text-white mb-4">Demonstrated Clinical Advantages</h2>
            <div className="space-y-2.5">
              {product.clinicalBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photographic Gallery */}
          {product.galleryImages && product.galleryImages.length > 0 && (
            <div className="border-t border-slate-800 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Camera className="w-4 h-4 text-sky-400" />
                <h2 className="text-xl font-bold text-white">Clinical Deployment Gallery</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {product.galleryImages.map((img, idx) => (
                  <div key={idx} className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-black/60 text-sky-300 border border-sky-800/60 backdrop-blur-sm">
                        {img.tag}
                      </span>
                    </div>
                    <div className="p-3.5">
                      <p className="text-xs text-slate-300 leading-snug">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="border-t border-slate-800 pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Inventor: <strong className="text-slate-200">{product.inventor}</strong> &bull; Commercial Partner: <strong className="text-slate-200">{product.licensingPartner}</strong>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to={product.slug === 'i-gel' ? '/igel' : '/vgel'}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Full Clinical Page &rarr;
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-md transition-colors"
              >
                Inquire / Licensing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Vector Graphic matching product */}
      {product.slug === 'i-gel' ? (
        <IgelAnatomyGraphic />
      ) : (
        <VgelSpeciesGraphic />
      )}
    </div>
  )
}
