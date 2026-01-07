'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function GallerySection() {
  const t = useTranslations('gallery');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/WebSitesi Görseller/A-500/1.jpg",
      category: "Luxury",
      title: "A-500 Koleksiyonu"
    },
    {
      id: 2,
      src: "/images/WebSitesi Görseller/A-500/2.jpg",
      category: "Luxury",
      title: "Premium Tasarım"
    },
    {
      id: 3,
      src: "/images/WebSitesi Görseller/A-900/1.jpg",
      category: "Exclusive",
      title: "A-900 Exclusive"
    },
    {
      id: 4,
      src: "/images/WebSitesi Görseller/A-900/2.jpg",
      category: "Exclusive",
      title: "Özel Koleksiyon"
    },
    {
      id: 5,
      src: "/images/WebSitesi Görseller/A-400/beyaz1.jpg",
      category: "Elite",
      title: "A-400 Elite"
    },
    {
      id: 6,
      src: "/images/WebSitesi Görseller/A-200/beyaz1.jpg",
      category: "Premium",
      title: "A-200 Premium"
    },
    {
      id: 7,
      src: "/images/WebSitesi Görseller/A-500/3.png",
      category: "Luxury",
      title: "Zarif Tasarım"
    },
    {
      id: 8,
      src: "/images/WebSitesi Görseller/A-900/3.png",
      category: "Exclusive",
      title: "Lüks Detaylar"
    }
  ];

  return (
    <section className="py-20 md:py-24 premium-gradient-bg relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 premium-pattern-2 opacity-35"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-50/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unique header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">{t('badge')}</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('title')}
          </h2>
        </div>

        {/* Unique asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => {
            // Create unique layout pattern
            const isLarge = index === 0 || index === 3;
            const isTall = index === 2 || index === 5;
            
            return (
              <div
                key={image.id}
                className={`group relative overflow-hidden cursor-pointer ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                } ${isTall ? 'md:row-span-2' : ''}`}
                onClick={() => setSelectedImage(image.src)}
              >
                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 transition-all duration-300 z-10 pointer-events-none"></div>
                
                <div className={`relative ${
                  isLarge ? 'aspect-square md:aspect-auto md:h-full' : 
                  isTall ? 'aspect-square md:aspect-auto md:h-full' : 
                  'aspect-square'
                } min-h-[200px]`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-primary-600 text-white text-[10px] font-bold uppercase tracking-wider">
                        {image.category}
                      </span>
                      <div className="w-6 h-6 border-2 border-white/50 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm">{image.title}</h3>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 transition-colors"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/0 group-hover:border-white/50 transition-colors"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal - Unique style */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] border-2 border-white/20">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="object-contain max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
