'use client';

import { useTranslations } from 'next-intl';

export default function SignatureSection() {
  const t = useTranslations('signature');

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50/30 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 premium-pattern-1 opacity-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12">
          {/* Content */}
          <div className="w-full max-w-4xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              <span className="block">{t('title')}</span>
              <span className="block text-primary-600">{t('titleAccent')}</span>
            </h2>

            {/* Content */}
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                {t('paragraph1')}
              </p>
              <p className="text-base md:text-lg">
                {t('paragraph2')}
              </p>
              <p className="text-base md:text-lg">
                {t('paragraph3')}
              </p>
            </div>

            {/* Decorative accent */}
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-accent-600 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

