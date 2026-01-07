'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert(t('form.success'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent-50 rounded-full border border-accent-200">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-accent-700 text-sm font-semibold uppercase tracking-wider">
              {locale === 'tr' ? 'İletişim' : 'Contact'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {locale === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {locale === 'tr' 
              ? 'Size en iyi kokulandırma çözümlerini sunmak için buradayız! Ürünlerimiz veya hizmetlerimiz hakkında bilgi almak, teklif istemek ya da sorularınızı paylaşmak için bizimle iletişime geçin.'
              : 'We are here to offer you the best scenting solutions! Contact us to get information about our products or services, request a quote or share your questions.'}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent-500 rounded-full"></div>
            <div className="h-1 w-2 bg-accent-500 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t('sendMessage')}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder={t('form.phonePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 shadow-xl"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {t('contactInfo')}
                </h2>
              </div>
              
              {/* Company Name */}
              <div className="mb-6 p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl border border-accent-100">
                <p className="text-sm font-semibold text-accent-700 uppercase tracking-wide mb-1">
                  {locale === 'tr' ? 'Şirket' : 'Company'}
                </p>
                <p className="text-base font-bold text-gray-900">AİRFRESH KOKU SİSTEMLERİ TİCARET LİMİTED ŞİRKETİ</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{t('info.phone')}</h3>
                    <a href="tel:+905301428511" className="text-lg text-gray-700 hover:text-accent-600 transition-colors font-medium">
                      +90 530 142 85 11
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{t('info.email')}</h3>
                    <a href="mailto:bilgi@airfresh.com.tr" className="text-lg text-gray-700 hover:text-accent-600 transition-colors font-medium">
                      bilgi@airfresh.com.tr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{t('info.address')}</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {locale === 'tr' ? (
                        <>
                          Adalet Mah. Manas Blv.<br />
                          Folkart Towers NO: 47 B<br />
                          İç Kapı No: 3509<br />
                          Bayraklı / İzmir
                        </>
                      ) : (
                        <>
                          Adalet Mah. Manas Blvd.<br />
                          Folkart Towers NO: 47 B<br />
                          Interior Door No: 3509<br />
                          Bayraklı / İzmir
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-accent-600 to-accent-500">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {locale === 'tr' ? 'Konumumuz' : 'Our Location'}
              </h3>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.5!2d27.1943!3d38.4627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI3JzQ1LjciTiAyN8KwMTEnMzkuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

