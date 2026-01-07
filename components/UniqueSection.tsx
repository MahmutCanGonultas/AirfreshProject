'use client';

import { useTranslations } from 'next-intl';

export default function UniqueSection() {
  const t = useTranslations('unique');

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('feature1.title'),
      description: t('feature1.description'),
      gradient: "from-primary-900 via-primary-800 to-primary-900"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: t('feature2.title'),
      description: t('feature2.description'),
      gradient: "from-accent-600 via-accent-700 to-accent-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: t('feature3.title'),
      description: t('feature3.description'),
      gradient: "from-primary-800 via-primary-700 to-primary-800"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/40 to-accent-50/30 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 premium-pattern-3 opacity-20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`premium-card bg-gradient-to-br ${feature.gradient} rounded-xl p-8 border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg border border-white/30">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
