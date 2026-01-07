'use client';

import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

const sectorIds = ['beauty', 'fuel', 'stores', 'clinics', 'gyms', 'restaurants', 'hotels', 'hospitals', 'factories', 'education'];

const sectorImages: Record<string, string> = {
  beauty: '/images/Sektorler/GüzellikMerkezi.png',
  fuel: '/images/Sektorler/Akaryakit.png',
  stores: '/images/Sektorler/Magazalar.png',
  clinics: '/images/Sektorler/Klinikler.png',
  gyms: '/images/Sektorler/SporSalonlari.png',
  restaurants: '/images/Sektorler/Restoranlar.png',
  hotels: '/images/Sektorler/Oteller.png',
  hospitals: '/images/Sektorler/Hastanaler.png',
  factories: '/images/Sektorler/Fabrikalar.png',
  education: '/images/Sektorler/EgitimKurumlari.png'
};

export default function SectorDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations('sectors');
  const sectorId = params.id as string;

  if (!sectorIds.includes(sectorId)) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sektör Bulunamadı</h1>
        <Link href={`/${locale}/sectors`} className="text-accent-600 hover:text-accent-700">
          Sektörlere Dön
        </Link>
      </div>
    );
  }

  const titleKey = `${sectorId}.title` as const;
  const detailKey = `${sectorId}.detail` as const;

  // Özel içerik için - Güzellik Merkezleri
  const beautyContent = sectorId === 'beauty' ? {
    paragraphs: [
      "Güzellik merkezleri, sadece bakım ve rahatlık alanları değil, aynı zamanda duyulara hitap eden özel mekanlardır. Kokular, bu sürecin en önemli unsurlarından biridir. Doğru ölçülen bir ortam kokusu, müşterilerin streslerinin azaltmasına ve mekânda daha uzun süre keyifle vakit geçirmesine yardımcı olur.",
      "Aromaterapik esanslar, huzur veren çiçek notaları veya ferahlatıcı bitkisel kokular, güzelliğin hem sakinleştirici hem de yenileyici bir atmosfer yaratır. Ayrıca, hoş bir koku algısı, müşteri açısından genişletici markanın akılda kalıcılığını sağlar ve tekrar ziyaretleri teşvik eder.",
      "Airfresh olarak, güzellik merkezlerine özel koku çözümlerimizle muhteşem bir deneyim sunmanıza yardımcı oluyoruz. Çünkü güzellik, sadece görünen değil, hissedilen bir olgudur!"
    ]
  } : null;

  // Özel içerik için - Akaryakıt İstasyonları
  const fuelContent = sectorId === 'fuel' ? {
    paragraphs: [
      "Akaryakıt istasyonları, genellikle hızlı ziyaret edilen noktalar olsa da, doğru ortam kokulandırmasıyla müşteri deneyimi önemli ölçüde iyileştirilebilir. Yakıt ve motor yağı gibi ağır kokuların baskın olduğu bu alanlarda, hoş ve ferahlatıcı bir koku kullanımı, müşteri konforunu artırarak mekânda daha olumlu bir algı oluşturur.",
      "Hafif narenciye, taze çam veya deniz esintisi gibi kokular, yakıt kokusunu maskeleyerek ferah bir atmosfer yaratır ve müşterilerin istasyona olan bağlılığını artırır. Ayrıca, bekleme alanlarında kullanılan özel koku çözümleri, ziyaretçilerin istasyon içinde daha rahat hissetmelerine yardımcı olur ve markanızın prestijini güçlendirir.",
      "Airfresh olarak, akaryakıt istasyonlarına özel koku çözümlerimizle müşteri deneyimini en üst seviyeye taşımanıza yardımcı oluyoruz. Çünkü her ziyaret, kalıcı bir izlenim bırakmalıdır!"
    ]
  } : null;

  // Özel içerik için - Mağazalar
  const storesContent = sectorId === 'stores' ? {
    paragraphs: [
      "Mağazalar, müşterilerin yalnızca alışveriş yaptığı değil, aynı zamanda markayla duygusal bir bağ kurduğu alanlardır. Koku, bu deneyimi güçlendiren en önemli unsurlardan biridir. Doğru koku seçimi, müşterilerin mağazada daha uzun süre kalmasını sağlarken, olumlu duygular uyandırarak satın alma kararlarını da etkiler.",
      "Lüks bir butik için sofistike çiçek notaları, spor mağazaları için enerjik narenciye esansları veya çocuk mağazaları için vanilya gibi sıcak kokular, markanızın kimliğini güçlendirmeye yardımcı olur. Araştırmalar, hoş bir kokunun müşterilerde mağazaya dair olumlu bir izlenim bıraktığını ve tekrar ziyaret oranlarını artırdığını göstermektedir.",
      "Airfresh olarak, mağazanızın atmosferini güçlendiren özel koku çözümlerimizle müşteri deneyimini en üst seviyeye taşıyoruz. Çünkü alışveriş, sadece bir ihtiyaç değil, duyulara hitap eden bir yolculuktur!"
    ]
  } : null;

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        {sectorId === 'beauty' && (
          <>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          </>
        )}
        {sectorId === 'fuel' && (
          <>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
          </>
        )}
        {sectorId === 'stores' && (
          <>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8 pt-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href={`/${locale}`} className="hover:text-accent-600 transition-colors">
                Anasayfa
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href={`/${locale}/sectors`} className="hover:text-accent-600 transition-colors">
                Sektörler
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium">{t(titleKey)}</li>
          </ol>
        </nav>

        {/* Hero Section with Image */}
        <div className="mb-16">
          <div className="relative h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-8 group">
            <Image
              src={sectorImages[sectorId]}
              alt={t(titleKey)}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
                  {t(titleKey)}
                </h1>
                <div className="h-2 w-32 bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Enhanced Design */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="space-y-8">
                {((beautyContent ? beautyContent.paragraphs : null) || (fuelContent ? fuelContent.paragraphs : null) || (storesContent ? storesContent.paragraphs : null) || t(detailKey).split('\n\n')).map((paragraph: string, index: number) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent-500 to-accent-400 rounded-full opacity-0 lg:opacity-100"></div>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl pl-0 lg:pl-6">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Key Points */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl shadow-xl border border-accent-100 p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Neden Airfresh?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Özel Koku Çözümleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Profesyonel Ekip</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Uzun Süreli Etki</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Kaliteli Hizmet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section - Enhanced */}
        <div className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Size Özel Çözüm İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {t(titleKey)} sektörüne özel koku çözümlerimiz hakkında detaylı bilgi almak ve teklif almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-accent-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <span>Teklif Alınız</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/sectors`}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Sektörlere Dön</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

