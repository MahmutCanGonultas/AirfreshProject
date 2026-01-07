import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import MissionVision from '@/components/MissionVision';

export default function AboutPage() {
  const locale = useLocale();
  const features = [
    {
      icon: "/images/icon1.png",
      title: "Yenilikçi Çözümler",
      description: "Alanında öncü teknolojilerle geliştirilmiş modern kokulandırma sistemleri"
    },
    {
      icon: "/images/icon2.png",
      title: "Geniş Ürün Yelpazesi",
      description: "Çeşitli sektörlerdeki ihtiyaçları karşılayan kapsamlı ürün portföyü"
    },
    {
      icon: "/images/icon3.png",
      title: "Müşteri Odaklı",
      description: "Her projede özelleştirilmiş çözümler ve üstün müşteri memnuniyeti"
    },
    {
      icon: "/images/icon4.png",
      title: "Kalıcı Etki",
      description: "Unutulmaz anılar biriktirmeniz için etkili ve kalıcı koku deneyimi"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Premium Background Layers */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-accent-50/20"></div>
        
        {/* Premium pattern overlay */}
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
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(213, 104, 3, 0.08) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Subtle geometric lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(3, 45, 100, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(3, 45, 100, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(213, 104, 3, 0.08) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(213, 104, 3, 0.08) 75%)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="py-8 md:py-10 mb-8 md:mb-10">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-4 md:mb-5">
              <span className="px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                Hakkımızda
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
              Airfresh ile her nefeste{' '}
              <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                yenilenin
              </span>
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full mx-auto"></div>
          </div>

          {/* Main Content with Image */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-10">
            {/* Left - Text Content */}
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-semibold text-gray-900">
                Airfresh Profesyonel Koku Sistemleri alanında yenilikçi ve etkili çözümler sunmak amacıyla kurulmuştur.
              </p>
              <p>
                Misyonumuz, mekanlarınıza taze ve davetkar bir atmosfer kazandırarak, kullanıcı deneyimini zenginleştirmektir.
              </p>
              <p>
                Geniş ürün yelpazemiz, çeşitli sektörlerdeki ihtiyaçları karşılamak üzere tasarlanmış modern kokulandırma sistemlerini içermektedir. Otel, restoran, ofis gibi farklı mekanlarda, hem estetik hem de işlevselliği ön planda tutarak, her alanı daha çekici hale getiriyoruz.
              </p>
              <p className="text-xl font-semibold text-accent-600">
                Airfresh olarak kalıcı ve etkili kokularımız sayesinde, mekanlarınızda unutulmaz anılar biriktirmeniz için yanınızdayız.
              </p>
              <p>
                Müşteri memnuniyetini öncelikli hedefimiz olarak belirliyor, her bir projede sizin isteklerinizi dikkate alarak özelleştirilmiş çözümler sunuyoruz.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/about1.png"
                  alt="Airfresh Hakkımızda"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-tr-full"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-500/30 to-accent-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-primary-500/30 to-primary-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </section>

        {/* Features Section with Icons */}
        <section className="py-8 md:py-10 mb-8 md:mb-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              Neden{' '}
              <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                Airfresh?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
              Profesyonel kokulandırma çözümlerinde öncü
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-50 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                    <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-accent-100 group-hover:border-accent-300 transition-all duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-accent-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Products CTA Section */}
        <section className="py-8 md:py-10 mb-8 md:mb-10">
          <div className="text-center">
            <div className="inline-block relative group">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 text-lg">Ürünleri İncele</span>
                <svg 
                  className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <MissionVision />

        {/* CTA Section */}
        <section className="py-8 md:py-10 text-center">
          <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}
              ></div>
            </div>
            
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Airfresh ile her nefeste yenilenin!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Profesyonel kokulandırma çözümlerimizle işletmenize prestij katın
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-accent-600 font-bold rounded-xl hover:bg-accent-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
