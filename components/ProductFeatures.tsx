interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div id="ozellikler" className="w-full relative scroll-mt-24">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-accent-50/30 rounded-3xl"></div>
      
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100/50">
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1.5 w-20 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Ürün Özellikleri</h3>
            <div className="h-1.5 w-20 bg-gradient-to-l from-accent-600 to-accent-500 rounded-full"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-accent-200 to-transparent max-w-2xl mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 premium-card"
            >
              {/* Icon Container */}
              <div className="relative mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Decorative dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"></div>
              </div>

              {/* Feature Text */}
              <p className="text-gray-800 font-medium text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                {feature}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 to-accent-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

