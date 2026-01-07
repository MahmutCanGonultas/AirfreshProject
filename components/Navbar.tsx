'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSectorsDropdown, setShowSectorsDropdown] = useState(false);

  const products = [
    { id: 1, name: 'A-200', image: '/images/A-200.jpg', area: '200 m²' },
    { id: 2, name: 'A-400', image: '/images/A-400.jpg', area: '400 m²' },
    { id: 3, name: 'A-500', image: '/images/A-500.jpg', area: '500 m²' },
    { id: 4, name: 'A-900', image: '/images/A-900.png', area: '900 m²' },
  ];

  const sectors = [
    { id: 'beauty', name: 'Güzellik Merkezleri', image: '/images/Sektorler/GüzellikMerkezi.png' },
    { id: 'fuel', name: 'Akaryakıt İstasyonları', image: '/images/Sektorler/Akaryakit.png' },
    { id: 'stores', name: 'Mağazalar', image: '/images/Sektorler/Magazalar.png' },
    { id: 'clinics', name: 'Klinikler', image: '/images/Sektorler/Klinikler.png' },
    { id: 'gyms', name: 'Spor Salonları', image: '/images/Sektorler/SporSalonlari.png' },
    { id: 'restaurants', name: 'Restoranlar', image: '/images/Sektorler/Restoranlar.png' },
    { id: 'hotels', name: 'Oteller', image: '/images/Sektorler/Oteller.png' },
    { id: 'hospitals', name: 'Hastaneler', image: '/images/Sektorler/Hastanaler.png' },
    { id: 'factories', name: 'Fabrikalar', image: '/images/Sektorler/Fabrikalar.png' },
    { id: 'education', name: 'Eğitim Kurumları', image: '/images/Sektorler/EgitimKurumlari.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showProductsDropdown && !target.closest('[data-dropdown="products"]') && !target.closest('[data-dropdown-trigger="products"]')) {
        setShowProductsDropdown(false);
      }
      if (showSectorsDropdown && !target.closest('[data-dropdown="sectors"]') && !target.closest('[data-dropdown-trigger="sectors"]')) {
        setShowSectorsDropdown(false);
      }
    };
    
    if (showProductsDropdown || showSectorsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showProductsDropdown, showSectorsDropdown]);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const navLinks = [
    { href: '/', label: t('home'), hasDropdown: false },
    { href: '/about', label: t('about'), hasDropdown: false },
    { href: '/products', label: t('products'), hasDropdown: true },
    { href: '/sectors', label: t('sectors'), hasDropdown: true },
    { href: '/blog', label: t('blog'), hasDropdown: false },
    { href: '/faq', label: t('faq'), hasDropdown: false },
    { href: '/contact', label: t('contact'), hasDropdown: false },
  ];

  return (
    <>
      {/* Products Dropdown - Outside navbar for proper rendering */}
      {showProductsDropdown && (
        <div 
          data-dropdown="products"
          className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 hidden lg:block"
          style={{ 
            width: '600px',
            top: isScrolled ? '80px' : '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '90vw'
          }}
          onMouseEnter={() => setShowProductsDropdown(true)}
          onMouseLeave={() => setShowProductsDropdown(false)}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-600 to-accent-500 px-6 py-4">
            <h3 className="text-white font-bold text-lg">Ürünlerimiz</h3>
          </div>
          
          {/* Products Grid */}
          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/${locale}/products/${product.id}`}
                  onClick={() => setShowProductsDropdown(false)}
                  className="group/product flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 shadow-md group-hover/product:shadow-xl transition-shadow">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover/product:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover/product:text-accent-600 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500">{product.area}</p>
                </Link>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href={`/${locale}/products`}
                onClick={() => setShowProductsDropdown(false)}
                className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold rounded-lg hover:from-accent-700 hover:to-accent-600 transition-all duration-300 transform hover:scale-105"
              >
                Tüm Ürünleri Gör
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sectors Dropdown - Outside navbar for proper rendering */}
      {showSectorsDropdown && (
        <div 
          data-dropdown="sectors"
          className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 hidden lg:block"
          style={{ 
            width: '800px',
            top: isScrolled ? '80px' : '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '90vw'
          }}
          onMouseEnter={() => setShowSectorsDropdown(true)}
          onMouseLeave={() => setShowSectorsDropdown(false)}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-600 to-accent-500 px-6 py-4">
            <h3 className="text-white font-bold text-lg">Sektörlerimiz</h3>
          </div>
          
          {/* Sectors Grid */}
          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {sectors.map((sector) => (
                <Link
                  key={sector.id}
                  href={`/${locale}/sectors/${sector.id}`}
                  onClick={() => setShowSectorsDropdown(false)}
                  className="group/sector flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 shadow-md group-hover/sector:shadow-xl transition-shadow">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover group-hover/sector:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/sector:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs mb-1 group-hover/sector:text-accent-600 transition-colors px-1 leading-tight">
                    {sector.name}
                  </h4>
                </Link>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href={`/${locale}/sectors`}
                onClick={() => setShowSectorsDropdown(false)}
                className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold rounded-lg hover:from-accent-700 hover:to-accent-600 transition-all duration-300 transform hover:scale-105"
              >
                Tüm Sektörleri Gör
              </Link>
            </div>
          </div>
        </div>
      )}

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 shadow-lg' 
            : 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900'
        }`}
        style={{ overflow: 'visible' }}
      >
        <div className="border-b border-primary-600/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300" style={{ overflow: 'visible' }}>
            <div className="relative flex items-center h-20 lg:h-24">
            {/* Logo - En Sola */}
            <Link 
              href={`/${locale}`} 
              className="flex items-center group -ml-2 -my-1 z-10"
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
                const isProducts = link.href === '/products';
                const isSectors = link.href === '/sectors';
                const showProducts = isProducts;
                const showSectors = isSectors;
                
                return (
                  <div
                    key={link.href}
                    className="relative"
                    data-dropdown-trigger={isProducts ? 'products' : (isSectors ? 'sectors' : undefined)}
                    onMouseEnter={() => {
                      if (showProducts) setShowProductsDropdown(true);
                      if (showSectors) setShowSectorsDropdown(true);
                    }}
                    onMouseLeave={(e) => {
                      if (showProducts) {
                        // Check if mouse is moving to dropdown
                        const relatedTarget = e.relatedTarget as HTMLElement;
                        if (!relatedTarget?.closest('[data-dropdown="products"]')) {
                          // Small delay to allow smooth transition to dropdown
                          setTimeout(() => {
                            const dropdown = document.querySelector('[data-dropdown="products"]');
                            if (dropdown && !dropdown.matches(':hover')) {
                              setShowProductsDropdown(false);
                            }
                          }, 200);
                        }
                      }
                      if (showSectors) {
                        // Check if mouse is moving to dropdown
                        const relatedTarget = e.relatedTarget as HTMLElement;
                        if (!relatedTarget?.closest('[data-dropdown="sectors"]')) {
                          // Small delay to allow smooth transition to dropdown
                          setTimeout(() => {
                            const dropdown = document.querySelector('[data-dropdown="sectors"]');
                            if (dropdown && !dropdown.matches(':hover')) {
                              setShowSectorsDropdown(false);
                            }
                          }, 200);
                        }
                      }
                    }}
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={() => {
                        if (!showProducts) {
                          setShowProductsDropdown(false);
                        }
                        if (!showSectors) {
                          setShowSectorsDropdown(false);
                        }
                      }}
                      className={`group relative text-sm xl:text-base font-medium transition-all duration-300 py-2 whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? 'text-accent-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10 inline-block transition-all duration-300 group-hover:text-white group-hover:translate-y-[-2px]">
                        {link.label || link.href}
                      </span>
                      {/* Dropdown indicator icon */}
                      {link.hasDropdown && (
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-2px]"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {/* Animated underline */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-400 transition-all duration-300 ease-out ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  </div>
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
              className="lg:hidden p-2 text-gray-300 hover:text-white ml-auto z-20"
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
                        className={`group relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 overflow-hidden flex items-center justify-between ${
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
                        {/* Dropdown indicator icon for mobile */}
                        {link.hasDropdown && (
                          <svg 
                            className="w-4 h-4 relative z-10"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                        {/* Left border accent */}
                        <span className={`absolute left-0 top-0 bottom-0 w-1 bg-accent-400 transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top'
                        }`}></span>
                      </Link>
                    );
                  })}
                  
                  {/* Mobile Language Switcher */}
                  <div className="mt-4 pt-4 border-t border-primary-600/30">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0 bg-primary-800/60 backdrop-blur-sm border border-primary-500/40 rounded-lg p-1 shadow-lg w-full">
                        <Link
                          href={`/tr`}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex-1 px-4 py-2 text-sm font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 ${
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
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex-1 px-4 py-2 text-sm font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 ${
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
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
