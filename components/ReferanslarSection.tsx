'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ReferanslarSection() {
  const t = useTranslations('referanslar');
  const [isPaused, setIsPaused] = useState(false);

  // Referans logoları - gerçek logoları buraya ekleyebilirsiniz
  const referanslar = [
    {
      id: 1,
      name: "Luxury Brands",
      logo: "/images/referanslar/luxury-brands.png",
      placeholder: "LB"
    },
    {
      id: 2,
      name: "Premium Fragrances",
      logo: "/images/referanslar/premium-fragrances.png",
      placeholder: "PF"
    },
    {
      id: 3,
      name: "Elite Collection",
      logo: "/images/referanslar/elite-collection.png",
      placeholder: "EC"
    },
    {
      id: 4,
      name: "Royal Essence",
      logo: "/images/referanslar/royal-essence.png",
      placeholder: "RE"
    },
    {
      id: 5,
      name: "Noble Scents",
      logo: "/images/referanslar/noble-scents.png",
      placeholder: "NS"
    },
    {
      id: 6,
      name: "Exclusive Aromas",
      logo: "/images/referanslar/exclusive-aromas.png",
      placeholder: "EA"
    },
    {
      id: 7,
      name: "Luxury Parfums",
      logo: "/images/referanslar/luxury-parfums.png",
      placeholder: "LP"
    },
    {
      id: 8,
      name: "Premium Scents",
      logo: "/images/referanslar/premium-scents.png",
      placeholder: "PS"
    }
  ];

  // Logoları iki kez ekleyerek sürekli döngü sağlıyoruz
  const duplicatedReferanslar = [...referanslar, ...referanslar];

  return (
    <section 
      className="py-16 md:py-20 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 md:gap-12"
              style={{
                animation: isPaused ? 'none' : 'scroll 30s linear infinite',
              }}
            >
              {duplicatedReferanslar.map((referans, index) => (
                <div
                  key={`${referans.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center hover:border-primary-300 hover:shadow-lg transition-all duration-300 premium-card">
                    {/* Logo varsa göster, yoksa placeholder */}
                    {referans.logo && referans.logo.startsWith('/images/') ? (
                      <img
                        src={referans.logo}
                        alt={referans.name}
                        className="max-w-24 max-h-24 md:max-w-32 md:max-h-32 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          // Logo yüklenemezse placeholder göster
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full items-center justify-center text-xl md:text-2xl font-bold text-gray-400 group-hover:text-primary-600 transition-colors ${
                        referans.logo && referans.logo.startsWith('/images/') ? 'hidden' : 'flex'
                      }`}
                    >
                      {referans.placeholder}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

