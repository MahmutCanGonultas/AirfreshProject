'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function SectorsPage() {
  const t = useTranslations('sectors');
  const locale = useLocale();
  
  const sectors = [
    {
      id: 'beauty',
      image: '/images/Sektorler/GüzellikMerkezi.png',
      titleKey: 'beauty.title',
      descriptionKey: 'beauty.description',
      color: 'from-pink-500/20 to-purple-500/20'
    },
    {
      id: 'fuel',
      image: '/images/Sektorler/Akaryakit.png',
      titleKey: 'fuel.title',
      descriptionKey: 'fuel.description',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'stores',
      image: '/images/Sektorler/Magazalar.png',
      titleKey: 'stores.title',
      descriptionKey: 'stores.description',
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 'clinics',
      image: '/images/Sektorler/Klinikler.png',
      titleKey: 'clinics.title',
      descriptionKey: 'clinics.description',
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'gyms',
      image: '/images/Sektorler/SporSalonlari.png',
      titleKey: 'gyms.title',
      descriptionKey: 'gyms.description',
      color: 'from-red-500/20 to-rose-500/20'
    },
    {
      id: 'restaurants',
      image: '/images/Sektorler/Restoranlar.png',
      titleKey: 'restaurants.title',
      descriptionKey: 'restaurants.description',
      color: 'from-yellow-500/20 to-amber-500/20'
    },
    {
      id: 'hotels',
      image: '/images/Sektorler/Oteller.png',
      titleKey: 'hotels.title',
      descriptionKey: 'hotels.description',
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      id: 'hospitals',
      image: '/images/Sektorler/Hastanaler.png',
      titleKey: 'hospitals.title',
      descriptionKey: 'hospitals.description',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'factories',
      image: '/images/Sektorler/Fabrikalar.png',
      titleKey: 'factories.title',
      descriptionKey: 'factories.description',
      color: 'from-slate-500/20 to-gray-500/20'
    },
    {
      id: 'education',
      image: '/images/Sektorler/EgitimKurumlari.png',
      titleKey: 'education.title',
      descriptionKey: 'education.description',
      color: 'from-violet-500/20 to-purple-500/20'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Minimalist */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent-50 rounded-full border border-accent-200">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-accent-700 text-sm font-semibold uppercase tracking-wider">
              {t('badge')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent-500 rounded-full"></div>
            <div className="h-1 w-2 bg-accent-500 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent-500 rounded-full"></div>
          </div>
        </div>

        {/* Sectors Grid - Modern Overlay Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-[1.02]"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={sector.image}
                  alt={t(sector.titleKey)}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-125"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dynamic Gradient Overlay - Much darker for better text visibility */}
                <div className={`absolute inset-0 bg-gradient-to-t ${sector.color} via-black/75 to-black/50 transition-opacity duration-700 group-hover:via-black/80 group-hover:to-black/60 opacity-100`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content Overlay - Centered */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-8 z-10">
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 border border-white/30">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Title - Centered, moves up slightly on hover */}
                <div className="text-center transform transition-all duration-700 group-hover:-translate-y-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 drop-shadow-2xl tracking-tight">
                    {t(sector.titleKey)}
                  </h2>
                  {/* Accent line under title */}
                  <div className="h-1.5 w-20 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full mx-auto"></div>
                </div>

                {/* Description - Hidden by default, shows on hover */}
                <div className="overflow-hidden mt-6 max-w-md">
                  <p className="text-white text-base md:text-lg font-medium leading-relaxed text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200 line-clamp-4 drop-shadow-xl">
                    {t(sector.descriptionKey)}
                  </p>
                </div>

                {/* Detaya Git Button - Hidden by default, shows on hover */}
                <div className="mt-6 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-400">
                  <Link
                    href={`/${locale}/sectors/${sector.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-sm text-gray-900 font-bold rounded-xl shadow-xl hover:bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Detaya Git</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-white font-semibold text-lg">
              Size özel çözüm için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

