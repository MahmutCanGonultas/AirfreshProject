'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function BlogSection() {
  const t = useTranslations('blog');
  const locale = useLocale();

  const blogPosts = [
    {
      id: 1,
      title: t('post1.title'),
      excerpt: t('post1.excerpt'),
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=400&fit=crop",
      date: locale === 'tr' ? "15 Mart 2024" : "March 15, 2024",
      category: t('post1.category'),
      gradient: "from-primary-900/90 to-primary-800/90"
    },
    {
      id: 2,
      title: t('post2.title'),
      excerpt: t('post2.excerpt'),
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=400&fit=crop",
      date: locale === 'tr' ? "10 Mart 2024" : "March 10, 2024",
      category: t('post2.category'),
      gradient: "from-accent-600/90 to-accent-700/90"
    },
    {
      id: 3,
      title: t('post3.title'),
      excerpt: t('post3.excerpt'),
      image: "https://images.unsplash.com/photo-1595425970377-c97073c49a0a?w=600&h=400&fit=crop",
      date: locale === 'tr' ? "5 Mart 2024" : "March 5, 2024",
      category: t('post3.category'),
      gradient: "from-primary-800/90 to-primary-700/90"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 relative">
      {/* Premium background pattern */}
      <div className="absolute inset-0 premium-pattern-1 opacity-30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unique header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary-900 font-semibold">{t('badge')}</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Unique blog layout - alternating design with gradients */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group grid md:grid-cols-2 gap-6 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="absolute -inset-2 border-2 border-gray-200/80 group-hover:border-primary-300 transition-all rounded-lg"></div>
                <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${post.gradient} rounded-lg`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-900 text-[10px] font-bold uppercase tracking-wider rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
                    <div className="w-8 h-px bg-primary-900/30"></div>
                    <span>{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-900 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Read more */}
                  <Link
                    href={`/${locale}/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary-900 hover:text-accent-600 uppercase tracking-wider group/link"
                  >
                    {t('readMore')}
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all button - Unique style */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/blog`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-semibold rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>{t('viewAll')}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
