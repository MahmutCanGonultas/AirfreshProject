'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsSection() {
  const t = useTranslations('products');
  const locale = useLocale();
  const products = [
    {
      id: 1,
      name: "A-200",
      image: "/images/A-200.jpg",
      description: "200 m²'ye kadar alanlarda etkili, kompakt ve verimli kokulandırma çözümü.",
    },
    {
      id: 2,
      name: "A-400",
      image: "/images/A-400.jpg",
      description: "400 m²'ye kadar geniş alanlarda homojen ve kalıcı koku yayılımı sağlar.",
    },
    {
      id: 3,
      name: "A-500",
      image: "/images/A-500.jpg",
      description: "500 m²'ye kadar profesyonel mekanlar için güçlü ve dengeli kokulandırma.",
    },
    {
      id: 4,
      name: "A-900",
      image: "/images/A-900.png",
      description: "900 m²'ye kadar büyük alanlar için yüksek performanslı koku sistemi.",
    }
  ];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Premium Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-accent-50/30"></div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(3, 45, 100, 0.15) 1px, transparent 0),
              radial-gradient(circle at 2px 2px, rgba(213, 104, 3, 0.1) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px, 60px 60px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        ></div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-100/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-100/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 relative">
            <span className="relative px-6 py-3 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xl">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {t('subtitle')}
          </p>
          <div className="relative inline-block">
            <div className="h-1.5 w-32 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-full"></div>
            <div className="absolute inset-0 h-1.5 w-32 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-full blur-sm opacity-50"></div>
          </div>
        </div>

        {/* Products Grid - Enhanced - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-600 via-accent-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Image Section - Enhanced */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Multi-layer gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Area badge - Enhanced */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-accent-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-accent-200/50 transform group-hover:scale-110 transition-transform duration-300">
                      {product.name === "A-200" ? "200 m²" : 
                       product.name === "A-400" ? "400 m²" :
                       product.name === "A-500" ? "500 m²" : "900 m²"}
                    </span>
                  </div>
                  
                  {/* Number badge - Enhanced */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/30">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                  </div>
                  
                  {/* Decorative corners - Enhanced */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-500/30 via-accent-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/40 rounded-full animate-float"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '3s'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Content Section - Enhanced */}
                <div className="p-6 md:p-7 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-accent-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="relative">
                      <div className="h-1 w-16 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-full"></div>
                      <div className="absolute inset-0 h-1 w-16 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-full blur-sm opacity-50"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* CTA Button - Enhanced */}
                  <Link
                    href={`/${locale}/products/${product.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white font-bold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn text-sm"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative z-10">{t('viewDetails')}</span>
                    <svg 
                      className="relative z-10 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Bottom accent line - Enhanced */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
