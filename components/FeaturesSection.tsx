'use client';

import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
  const t = useTranslations('features');
  
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: t('feature1.title'),
      description: t('feature1.description'),
      number: "01",
      gradient: "from-primary-900 to-primary-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: t('feature2.title'),
      description: t('feature2.description'),
      number: "02",
      gradient: "from-accent-600 to-accent-800"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('feature3.title'),
      description: t('feature3.description'),
      number: "03",
      gradient: "from-primary-800 to-primary-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('feature4.title'),
      description: t('feature4.description'),
      number: "04",
      gradient: "from-accent-700 to-accent-500"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50/30 relative overflow-hidden">
      {/* Unique background pattern */}
      <div className="absolute inset-0 premium-pattern-1 opacity-30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unique header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary-900 font-semibold">{t('badge')}</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('heading')}
          </h2>
        </div>

        {/* Unique zigzag layout with colored cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 ? 'lg:mt-0' : 'lg:-mt-8'
              }`}
            >
              {/* Decorative number background */}
              <div className="absolute -top-4 -left-4 text-7xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors z-0">
                {feature.number}
              </div>
              
              <div className={`relative bg-gradient-to-br ${feature.gradient} rounded-xl p-8 transition-all duration-300 group-hover:shadow-2xl premium-card group-hover:-translate-y-2 border-2 border-white/20`}>
                {/* Icon with unique style */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white rounded-xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/30">
                    {feature.icon}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
