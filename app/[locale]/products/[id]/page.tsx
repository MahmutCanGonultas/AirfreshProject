'use client';

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import ProductImageCarousel from '@/components/ProductImageCarousel';
import ProductFeatures from '@/components/ProductFeatures';

// Product data - will be moved to a data file later
const products = {
  1: {
    id: 1,
    name: "A-200",
    stockCode: "A-200",
    area: "200m²",
    description1: "Ortamınızın havasını değiştiren etkileyici kokularla unutulmaz bir atmosfer yaratın.",
    description2: "Profesyonel kokulandırma çözümlerimizle işletmenize prestij katın ve müşteri deneyimini üst seviyeye çıkarın.",
    images: [
      "/images/A-200/beyaz1.jpg",
      "/images/A-200/beyaz2.png",
      "/images/A-200/beyaz3.png",
      "/images/A-200/beyaz4.png",
      "/images/A-200/ikili.png",
      "/images/A-200/siyah1.jpg",
      "/images/A-200/siyah2.png"
    ],
    features: [
      "200 m²'ye kadar etkili alan kapsama",
      "Kompakt ve verimli tasarım",
      "Profesyonel kokulandırma teknolojisi",
      "Kolay kurulum ve bakım",
      "Uzun ömürlü performans",
      "Sessiz çalışma",
      "Enerji tasarruflu",
      "Modern ve şık görünüm"
    ]
  },
  2: {
    id: 2,
    name: "A-400",
    stockCode: "A-400",
    area: "400m²",
    description1: "Geniş alanlarda homojen ve kalıcı koku yayılımı sağlayan profesyonel kokulandırma sistemi.",
    description2: "İşletmenizin her köşesine eşit dağılan premium koku deneyimi ile müşterilerinize unutulmaz bir atmosfer sunun.",
    images: [
      "/images/A-400/beyaz1.jpg",
      "/images/A-400/beyaz2.png",
      "/images/A-400/beyaz3.png",
      "/images/A-400/beyaz4.jpg",
      "/images/A-400/siyah1.jpg",
      "/images/A-400/siyah2.png",
      "/images/A-400/siyah3.png",
      "/images/A-400/siyah4.jpg"
    ],
    features: [
      "400 m²'ye kadar geniş alan kapsama",
      "Homojen koku dağılımı",
      "Güçlü ve kalıcı performans",
      "Profesyonel kurulum desteği",
      "Yüksek verimlilik",
      "Sessiz ve güvenilir çalışma",
      "Düşük enerji tüketimi",
      "Premium tasarım ve kalite"
    ]
  },
  3: {
    id: 3,
    name: "A-500",
    stockCode: "A-500",
    area: "500m²",
    description1: "Profesyonel mekanlar için güçlü ve dengeli kokulandırma çözümü ile işletmenize değer katın.",
    description2: "Yüksek performanslı teknoloji ile büyük alanlarda etkili ve tutarlı koku yayılımı garantisi.",
    images: [
      "/images/A-500/1.jpg",
      "/images/A-500/2.jpg",
      "/images/A-500/3.png",
      "/images/A-500/5.png",
      "/images/A-500/6.png",
      "/images/A-500/7.png",
      "/images/A-500/8.png",
      "/images/A-500/9.png",
      "/images/A-500/10.png"
    ],
    features: [
      "500 m²'ye kadar büyük alan kapsama",
      "Güçlü ve dengeli koku yayılımı",
      "Profesyonel mekanlar için ideal",
      "Yüksek performans teknolojisi",
      "Dayanıklı ve uzun ömürlü",
      "Kolay bakım ve servis",
      "Enerji verimli sistem",
      "Kurumsal standartlarda kalite"
    ]
  },
  4: {
    id: 4,
    name: "A-900",
    stockCode: "A-900",
    area: "900m²",
    description1: "Büyük alanlar için yüksek performanslı koku sistemi ile işletmenizin her noktasına premium deneyim.",
    description2: "Endüstriyel standartlarda güçlü kokulandırma kapasitesi ile geniş mekanlarda mükemmel sonuçlar.",
    images: [
      "/images/A-900/1.jpg",
      "/images/A-900/2.jpg",
      "/images/A-900/3.png",
      "/images/A-900/4.png",
      "/images/A-900/5.png",
      "/images/A-900/6.png",
      "/images/A-900/7.png",
      "/images/A-900/8.png"
    ],
    features: [
      "900 m²'ye kadar çok geniş alan kapsama",
      "Endüstriyel seviye performans",
      "Yüksek kapasiteli koku sistemi",
      "Büyük mekanlar için optimize edilmiş",
      "Güçlü ve etkili yayılım",
      "Profesyonel kurulum ve destek",
      "Uzun vadeli güvenilirlik",
      "Premium kurumsal çözüm"
    ]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const productId = parseInt(params.id as string);
  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
        <Link href={`/${locale}/products`} className="text-primary-600 hover:text-primary-700">
          Ürünlere Dön
        </Link>
      </div>
    );
  }

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
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href={`/${locale}`} className="hover:text-primary-700 transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${locale}/products`} className="hover:text-primary-700 transition-colors">
                Ürünler
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - Image Carousel */}
          <ProductImageCarousel images={product.images} productName={product.name} />

          {/* Right - Product Info */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                {product.name}
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>{product.description1}</p>
              <p>{product.description2}</p>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Stok Kodu:</span>
                  <span className="text-gray-900 font-bold text-lg">{product.stockCode}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600 font-medium">Etki Alanı:</span>
                  <span className="text-gray-900 font-bold text-lg">{product.area}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Link
                href={`/${locale}/contact`}
                className="block w-full px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold rounded-xl hover:from-accent-700 hover:to-accent-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl text-center text-lg"
              >
                Teklif Al
              </Link>
              <a
                href="#ozellikler"
                className="block w-full px-8 py-4 bg-white text-accent-600 font-bold rounded-xl border-2 border-accent-600 hover:bg-accent-50 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl text-center text-lg"
              >
                Özelliklere Git
              </a>
            </div>
          </div>
        </div>

        {/* Features Section - Full Width */}
        <div className="mb-16">
          <ProductFeatures features={product.features} />
        </div>
      </div>
    </div>
  );
}
