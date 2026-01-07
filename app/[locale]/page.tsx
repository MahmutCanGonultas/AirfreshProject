import Hero from '@/components/Hero';
import ReferanslarSection from '@/components/ReferanslarSection';
import SignatureSection from '@/components/SignatureSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReferanslarSection />
      <SignatureSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogSection />
    </>
  );
}
