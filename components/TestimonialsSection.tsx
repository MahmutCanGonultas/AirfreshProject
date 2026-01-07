"use client";

import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      role: "İş Kadını",
      image: "/images/WebSitesi Görseller/A-500/6.png",
      rating: 5,
      text: "A-500 koleksiyonunu kullanmaya başladığımdan beri her gün bana özel hissettiriyor. Kalitesi ve dayanıklılığı gerçekten etkileyici. Kesinlikle tavsiye ederim!",
      product: "A-500 Luxury Edition",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      role: "Yönetici",
      image: "/images/WebSitesi Görseller/A-400/siyah1.jpg",
      rating: 5,
      text: "A-400 Elite Series'i iş toplantılarında kullanıyorum. Profesyonel ve sofistike bir koku. Müşterilerim bile dikkat çektiğini söylüyor. Harika bir yatırım!",
      product: "A-400 Elite Series",
    },
    {
      id: 3,
      name: "Zeynep Kaya",
      role: "Sanatçı",
      image: "/images/WebSitesi Görseller/A-200/beyaz2.png",
      rating: 5,
      text: "A-200 Premium Collection benim için bir tutku. Her notası mükemmel dengelenmiş. Özel günlerimde mutlaka bunu tercih ediyorum. Çok memnunum!",
      product: "A-200 Premium Collection",
    },
    {
      id: 4,
      name: "Can Öztürk",
      role: "Girişimci",
      image: "/images/WebSitesi Görseller/A-900/2.jpg",
      rating: 5,
      text: "A-900 Exclusive gerçekten özel bir parfüm. Sınırlı sayıda üretilmesi ve kalitesi beni çok etkiledi. Lüks bir deneyim yaşamak isteyenlere kesinlikle öneririm.",
      product: "A-900 Exclusive",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unique header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary-400 font-semibold">
              Müşteri Deneyimleri
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        {/* Unique testimonial layout - split design */}
        <div className="relative">
          <div className="overflow-hidden rounded-sm">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left - Image with unique frame */}
                    <div className="relative">
                      <div className="absolute -inset-4 border-2 border-accent-600/40 rotate-3 rounded-lg"></div>
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 shadow-xl">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        {/* Decorative corner */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-400"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-400"></div>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-gold-500 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-base md:text-lg text-white leading-relaxed relative pl-6">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700"></div>
                        <p className="italic">&quot;{testimonial.text}&quot;</p>
                      </blockquote>

                      {/* Author info */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-400 mb-2">
                              {testimonial.role}
                            </p>
                            <p className="text-xs text-primary-400 uppercase tracking-wider">
                              {testimonial.product}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unique navigation dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary-500"
                    : "w-1 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats - Unique horizontal layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
          {[
            { number: "10K+", label: "Mutlu Müşteri" },
            { number: "4.9", label: "Ortalama Puan" },
            { number: "500+", label: "Ürün Çeşidi" },
            { number: "98%", label: "Memnuniyet" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
