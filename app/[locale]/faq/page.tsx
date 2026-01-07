'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const faqData = [
  {
    question: "Profesyonel ortam kokulandırma nedir?",
    answer: "Profesyonel ortam kokulandırma, mekanlarda hoş ve kalıcı bir koku oluşturmak için özel cihazlar ve kaliteli esanslar kullanılarak yapılan bir işlemdir. İş yerleri, oteller, mağazalar, hastaneler ve daha birçok alanda uygulanabilir."
  },
  {
    question: "Airfresh'in sunduğu hizmetler nelerdir?",
    answer: "Airfresh olarak, işletmeler ve bireysel kullanıcılar için profesyonel kokulandırma çözümleri sunuyoruz. Hizmetlerimiz arasında koku cihazları kiralama ve satışı, esans seçenekleri ve kurulum & bakım hizmetleri bulunmaktadır."
  },
  {
    question: "Hangi alanlar için uygundur?",
    answer: "Mağazalar, oteller, ofisler, restoranlar, hastaneler, spor salonları, alışveriş merkezleri, otoparklar, spa & wellness merkezleri gibi birçok alanda kullanılabilir."
  },
  {
    question: "Profesyonel koku sistemlerin avantajları nelerdir?",
    answer: "Müşteri ve çalışanlar için daha hoş bir ortam sağlar. Marka kimliğinize uygun kokular ile müşteri deneyimini geliştirir. Kötü kokuları maskelemeden yok eder. Uzun süre etkili olup, maliyet açısından avantaj sunar."
  },
  {
    question: "Airfresh koku cihazları nasıl çalışır?",
    answer: "Cihazlarımız, gelişmiş soğuk difüzyon teknolojisi ile esansları ultra ince partiküller halinde yayarak geniş alanlara homojen şekilde dağıtır."
  },
  {
    question: "Cihazların kapsama alanı nedir?",
    answer: "Cihazlarımız modeline bağlı olarak 200 m²'den 900 m²'ye kadar farklı alanlara uygun cihazlarımız bulunmaktadır."
  },
  {
    question: "Koku cihazları nasıl monte edilir?",
    answer: "Cihazlarımız taşınabilir, duvara monte edilebilir veya havalandırma sistemine entegre edilebilir. Kurulum ekibimiz, ihtiyacınıza göre en uygun çözümü sunar."
  },
  {
    question: "Koku cihazlarının bakımı nasıl yapılır?",
    answer: "Cihazlarımız düşük bakım gerektirir. Düzenli esans değişimi ve periyodik temizlik ile uzun ömürlü kullanım sağlanır."
  },
  {
    question: "Esanslar sağlığa zararlı mı?",
    answer: "Hayır, tüm esanslarımız IFRA (Uluslararası Koku Derneği) standartlarına uygun olup, insan sağlığına zarar vermeyen içeriklerden üretilmektedir."
  },
  {
    question: "Kendi markam için özel bir koku tasarlayabilir misiniz?",
    answer: "Evet! Markanıza özel, benzersiz bir koku tasarlayarak marka kimliğinizi güçlendirebiliriz."
  },
  {
    question: "Nasıl sipariş verebilirim?",
    answer: "Web sitemiz, telefon veya e-posta yoluyla sipariş oluşturabilirsiniz."
  },
  {
    question: "Abonelik sistemi var mı?",
    answer: "Evet, düzenli esans ve bakım hizmeti sağlayan abonelik sistemimiz bulunmaktadır."
  },
  {
    question: "Deneme amaçlı bir cihaz alabilir miyim?",
    answer: "Bazı ürünlerimiz için deneme hizmeti sunuyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Cihazların garantisi var mı?",
    answer: "Evet, tüm cihazlarımız üretim hatalarına karşı 1 yıl garanti kapsamındadır."
  },
  {
    question: "İade ve değişim poliikası nedir?",
    answer: "Ürünlerimizde memnuniyet garantisi sunuyoruz. Kullanılmamış ve ambalajı açılmamış ürünleri belirli süre içinde iade veya değişim yapabilirsiniz."
  }
];

export default function FAQPage() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ data with translations
  const faqDataTranslated = locale === 'tr' ? faqData : [
    {
      question: "What is professional ambient scenting?",
      answer: "Professional ambient scenting is a process performed using special devices and quality essences to create a pleasant and lasting scent in spaces. It can be applied in workplaces, hotels, stores, hospitals and many other areas."
    },
    {
      question: "What services does Airfresh offer?",
      answer: "As Airfresh, we offer professional scenting solutions for businesses and individual users. Our services include scent device rental and sales, essence options and installation & maintenance services."
    },
    {
      question: "What areas is it suitable for?",
      answer: "It can be used in many areas such as stores, hotels, offices, restaurants, hospitals, gyms, shopping centers, parking lots, spa & wellness centers."
    },
    {
      question: "What are the advantages of professional scent systems?",
      answer: "Provides a more pleasant environment for customers and employees. Improves customer experience with scents suitable for your brand identity. Eliminates bad odors without masking. Long-lasting and cost-effective."
    },
    {
      question: "How do Airfresh scent devices work?",
      answer: "Our devices distribute essences in ultra-fine particles using advanced cold diffusion technology, spreading homogeneously over large areas."
    },
    {
      question: "What is the coverage area of the devices?",
      answer: "Our devices are suitable for different areas from 200 m² to 900 m² depending on the model."
    },
    {
      question: "How are scent devices mounted?",
      answer: "Our devices can be portable, wall-mounted or integrated into the ventilation system. Our installation team offers the most suitable solution according to your needs."
    },
    {
      question: "How is the maintenance of scent devices done?",
      answer: "Our devices require low maintenance. Long-lasting use is ensured with regular essence changes and periodic cleaning."
    },
    {
      question: "Are essences harmful to health?",
      answer: "No, all our essences comply with IFRA (International Fragrance Association) standards and are produced from ingredients that do not harm human health."
    },
    {
      question: "Can you design a special scent for my brand?",
      answer: "Yes! We can strengthen your brand identity by designing a unique scent special to your brand."
    },
    {
      question: "How can I place an order?",
      answer: "You can place orders through our website, phone or email."
    },
    {
      question: "Is there a subscription system?",
      answer: "Yes, we have a subscription system that provides regular essence and maintenance services."
    },
    {
      question: "Can I get a device for trial?",
      answer: "We offer trial services for some of our products. You can contact us for detailed information."
    },
    {
      question: "Do the devices have a warranty?",
      answer: "Yes, all our devices are covered by a 1-year warranty against manufacturing defects."
    },
    {
      question: "What is the return and exchange policy?",
      answer: "We offer a satisfaction guarantee on our products. You can return or exchange unused and unopened products within a certain period."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-accent-100/20 to-primary-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Image Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/airfreshSoru.png"
                alt="S.S.S."
                fill
                className="object-contain bg-gradient-to-br from-accent-50 to-primary-50 p-8"
                priority
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-accent-200/30 rounded-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side - Header Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-50 rounded-full border border-accent-200">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-accent-700 text-sm font-semibold uppercase tracking-wider">
                {locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              {t('faq')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              {locale === 'tr' ? (
                <>Merak ettikleriniz için hazırladığımız <span className="text-accent-600 font-semibold">soru-cevaplar</span></>
              ) : (
                <>Question and <span className="text-accent-600 font-semibold">answers</span> we prepared for your questions</>
              )}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-16 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"></div>
              <div className="h-2 w-2 bg-accent-500 rounded-full"></div>
              <div className="h-2 w-16 bg-gradient-to-l from-accent-500 to-accent-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* FAQ Grid - Modern Card Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {(locale === 'tr' ? faqData : faqDataTranslated).map((faq, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
                openIndex === index 
                  ? 'border-accent-500 shadow-xl' 
                  : 'border-gray-100 hover:border-accent-200'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-accent-50/0 to-primary-50/0 group-hover:from-accent-50/50 group-hover:to-primary-50/30 transition-all duration-500 ${
                openIndex === index ? 'from-accent-50/50 to-primary-50/30' : ''
              }`}></div>

              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 md:p-8 relative z-10"
              >
                {/* Question Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                    openIndex === index ? 'scale-110 rotate-6' : ''
                  }`}>
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-accent-600 transition-colors duration-300 flex-1 leading-snug">
                    {faq.question}
                  </h3>
                </div>

                {/* Answer Preview / Full Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-16">
                    <div className="h-px bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Toggle Icon */}
                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transform transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-accent-500 text-white rotate-180' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-accent-100 group-hover:text-accent-600'
                }`}>
                  <svg 
                    className="w-5 h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 transform transition-all duration-500 ${
                  openIndex === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === 'tr' ? 'Sorunuz mu var?' : 'Have a question?'}
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {locale === 'tr' 
                ? 'Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmaktan mutluluk duyarız.'
                : "If you couldn't find the answer you're looking for, don't hesitate to contact us. We'd be happy to help you."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-accent-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              <span>{locale === 'tr' ? 'İletişime Geçin' : 'Contact Us'}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

