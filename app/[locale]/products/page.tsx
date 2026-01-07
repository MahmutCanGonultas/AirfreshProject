'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const t = useTranslations('products');
  const locale = useLocale();
  
  const products = [
    {
      id: 1,
      name: "A-200",
      image: "/images/A-200.jpg",
      area: "200 m²",
      description: "200 m²'ye kadar alanlarda etkili, kompakt ve verimli kokulandırma çözümü.",
      features: [
        "Kompakt ve verimli tasarım",
        "Sessiz çalışma"
      ]
    },
    {
      id: 2,
      name: "A-400",
      image: "/images/A-400.jpg",
      area: "400 m²",
      description: "400 m²'ye kadar geniş alanlarda homojen ve kalıcı koku yayılımı sağlar.",
      features: [
        "Homojen koku dağılımı",
        "Güçlü performans"
      ]
    },
    {
      id: 3,
      name: "A-500",
      image: "/images/A-500.jpg",
      area: "500 m²",
      description: "500 m²'ye kadar profesyonel mekanlar için güçlü ve dengeli kokulandırma.",
      features: [
        "Yüksek performans teknolojisi",
        "Dayanıklı yapı"
      ]
    },
    {
      id: 4,
      name: "A-900",
      image: "/images/A-900.png",
      area: "900 m²",
      description: "900 m²'ye kadar büyük alanlar için yüksek performanslı koku sistemi.",
      features: [
        "Endüstriyel seviye performans",
        "Premium çözüm"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Premium Background Layers */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-accent-50/20"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(3, 45, 100, 0.15) 1px, transparent 0),
              radial-gradient(circle at 2px 2px, rgba(213, 104, 3, 0.1) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px, 60px 60px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        ></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-3">
            <span className="px-5 py-2 bg-gradient-to-r from-accent-600 to-accent-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              {t('badge')}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-3">
            {t('subtitle')}
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full mx-auto"></div>
        </div>

        {/* Intro Section */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-100/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-100/30 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-relaxed">
                İşletmenize özel kokulandırma çözümlerini keşfedin!
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Profesyonel alanlara uygun, etkili ve kalıcı kokular sunan ürünlerimizle fark yaratın.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Image Section - Top */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent"></div>
                  
                  {/* Badge overlay on image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-accent-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                      {product.area}
                    </span>
                  </div>
                  
                  {/* Number badge */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'top-4 right-4' : 'bottom-4 right-4'
                  } w-10 h-10 bg-gradient-to-br from-accent-600 to-accent-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 right-0'
                  } w-24 h-24 bg-gradient-to-${
                    index % 2 === 0 ? 'br' : 'tr'
                  } from-accent-500/20 to-transparent rounded-${
                    index % 2 === 0 ? 'bl' : 'tl'
                  }-full`}></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-accent-600 transition-colors duration-300">
                      {product.name}
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/${locale}/products/${product.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white font-bold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn text-sm md:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">Detayları Gör</span>
                    <svg 
                      className="relative z-10 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
