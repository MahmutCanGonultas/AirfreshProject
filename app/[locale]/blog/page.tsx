import { useTranslations } from 'next-intl';
import BlogSection from '@/components/BlogSection';

export default function BlogPage() {
  const t = useTranslations('blog');
  
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-3 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <BlogSection />
      </div>
    </div>
  );
}

