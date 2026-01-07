'use client';

import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Section - Above Cards */}
        <div className="mb-8 md:mb-10">
          <div className="relative max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about2.png"
              alt="Airfresh Vizyon ve Misyon"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Subtle color overlay - kurumsal renklendirme */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/8 via-transparent to-primary-500/8 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-400/5 to-primary-400/5"></div>
            
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-500/25 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary-500/25 to-transparent rounded-tr-full"></div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Misyonumuz
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full mb-6"></div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Airfresh olarak, işletmeler için yenilikçi ve etkili kokulandırma çözümleri sunarak müşteri deneyimini en üst seviyeye çıkarmayı hedefliyoruz. Doğal ve kalıcı esanslarla, mekanlara prestij ve konfor katarken, markaların akılda kalıcılığını artırıyoruz.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold">
                  Vizyonumuz
                </h2>
              </div>
              <div className="h-1 w-16 bg-white/30 rounded-full mb-6"></div>
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Kurumsal kokulandırma alanında öncü bir marka olmayı ve işletmelere yenilikçi, sağlıklı ve etkili koku çözümleri sunarak sektörde fark yaratmayı amaçlıyoruz. Teknoloji ve kaliteyi birleştirerek, işletmelere değer katan lider bir marka olmak istiyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
