'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      {/* Premium Background Layers */}
      <div className="absolute inset-0">
        {/* Geometric pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}
        ></div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent-400/5 to-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {/* Brand Section - Unique Design */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                {/* Logo */}
                <Link href={`/${locale}`} className="inline-block mb-4 group">
                  <div className="relative">
                    <Image
                      src="/images/airfreshLogo.png"
                      alt="Airfresh Logo"
                      width={180}
                      height={60}
                      className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600/10 to-primary-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  </div>
                </Link>
                
                <p className="text-gray-200 font-semibold text-base md:text-lg mb-6 max-w-md leading-relaxed">
                  {locale === 'tr' ? 'İşletmenize Değer Katan Kokular' : 'Scents That Add Value to Your Business'}
                </p>
                
                <p className="text-gray-400 max-w-md leading-relaxed mb-8 text-sm md:text-base">
                  {t('description')}
                </p>
                
                {/* Social Media - Unique Design */}
                <div className="flex items-center gap-4">
                  {[
                    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                    { name: 'Instagram', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.255 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                    { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group relative w-11 h-11 bg-gray-800/60 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg border border-gray-700/50 hover:border-accent-500/50"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                      <span className="sr-only">{social.name}</span>
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links - Fixed & Enhanced */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                {t('quickLinks')}
                <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/', label: tNav('home') },
                  { href: '/about', label: tNav('about') },
                  { href: '/products', label: tNav('products') },
                  { href: '/sectors', label: tNav('sectors') },
                  { href: '/blog', label: tNav('blog') },
                  { href: '/faq', label: tNav('faq') },
                  { href: '/contact', label: tNav('contact') }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={`/${locale}${link.href}`} 
                      className="group flex items-center gap-2.5 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-150"></div>
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Enhanced */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                {t('contact')}
                <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-gradient-to-r from-accent-600 to-accent-500 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <a href="mailto:bilgi@airfresh.com.tr" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                    <div className="w-9 h-9 bg-gradient-to-br from-accent-600/20 to-accent-700/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-accent-600 group-hover:to-accent-700 transition-all duration-300 border border-gray-700/50 group-hover:border-accent-500/50">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm pt-1.5 block">bilgi@airfresh.com.tr</span>
                      <span className="text-xs text-gray-500 block mt-1">AİRFRESH KOKU SİSTEMLERİ TİCARET LİMİTED ŞİRKETİ</span>
                    </div>
                  </a>
                </li>
                <li className="group">
                  <a href="tel:+905301428511" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                    <div className="w-9 h-9 bg-gradient-to-br from-accent-600/20 to-accent-700/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-accent-600 group-hover:to-accent-700 transition-all duration-300 border border-gray-700/50 group-hover:border-accent-500/50">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm pt-1.5">+90 530 142 85 11</span>
                  </a>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 text-gray-400">
                    <div className="w-9 h-9 bg-gradient-to-br from-accent-600/20 to-accent-700/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-700/50">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-sm pt-1.5">
                      <p>Adalet Mah. Manas Blv.</p>
                      <p>Folkart Towers NO: 47 B</p>
                      <p>İç Kapı No: 3509</p>
                      <p className="mt-1">Bayraklı / İzmir</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Unique Design */}
        <div className="border-t border-gray-800/30 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="w-1 h-1 bg-accent-600 rounded-full"></span>
              <span>Airfresh</span>
              <span className="w-1 h-1 bg-accent-600 rounded-full"></span>
              <span>{t('rights')}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-accent-400 transition-colors relative group">
                Gizlilik Politikası
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-accent-400 transition-colors relative group">
                Kullanım Şartları
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
