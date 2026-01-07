'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/products', label: t('products') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 shadow-lg' 
        : 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900'
    }`}>
      {/* Main Navigation */}
      <nav className="border-b border-primary-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-20 lg:h-24">
            {/* Logo - En Sola */}
            <Link 
              href={`/${locale}`} 
              className="flex items-center group -ml-2 -my-1 z-20"
            >
              <Image
                src="/images/airfreshLogo.png"
                alt="Airfresh Logo"
                width={120}
                height={120}
                className="w-20 h-20 lg:w-28 lg:h-28 object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 gap-6 xl:gap-8 z-20">
              {navLinks.map((link) => {
                const isActive = pathname === `/${locale}${link.href}` || 
                                (link.href !== '/' && pathname.startsWith(`/${locale}${link.href}`));
                return (
                  <Link
                    key={link.href}
                    href={`/${locale}${link.href}`}
                    className={`group relative text-sm xl:text-base font-medium transition-all duration-300 py-2 whitespace-nowrap ${
                      isActive
                        ? 'text-accent-400'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 inline-block transition-all duration-300 group-hover:text-white group-hover:translate-y-[-2px]">
                      {link.label || link.href}
                    </span>
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-400 transition-all duration-300 ease-out ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher - En Sağda */}
            <div className="hidden lg:flex items-center ml-auto gap-2 z-20">
              <div className="flex items-center gap-0 bg-primary-800/60 backdrop-blur-sm border border-primary-500/40 rounded-lg p-1 shadow-lg">
                <Link
                  href={`/tr`}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-300 flex items-center gap-2 ${
                    locale === 'tr'
                      ? 'text-white bg-primary-600 shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-primary-700/60'
                  }`}
                >
                  <span className="text-lg">🇹🇷</span>
                  <span>TR</span>
                </Link>
                <Link
                  href={`/en`}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-300 flex items-center gap-2 ${
                    locale === 'en'
                      ? 'text-white bg-primary-600 shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-primary-700/60'
                  }`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>EN</span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white z-20 ml-auto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-700 border-t border-primary-600/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === `/${locale}${link.href}` || 
                                (link.href !== '/' && pathname.startsWith(`/${locale}${link.href}`));
                return (
                  <Link
                    key={link.href}
                    href={`/${locale}${link.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'text-white bg-primary-700'
                        : 'text-gray-300'
                    }`}
                  >
                    {/* Background animation on hover */}
                    <span className={`absolute inset-0 bg-primary-700 transition-transform duration-300 ease-out ${
                      isActive ? 'scale-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'
                    }`}></span>
                    {/* Text with smooth transition */}
                    <span className="relative z-10 inline-block transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                      {link.label}
                    </span>
                    {/* Left border accent */}
                    <span className={`absolute left-0 top-0 bottom-0 w-1 bg-accent-400 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top'
                    }`}></span>
                  </Link>
                );
              })}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2.5 bg-accent-600 text-white text-sm font-semibold rounded-lg mt-2 text-center"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
