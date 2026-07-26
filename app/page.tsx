import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import { promoBannerProducts, promoConfig } from "@/components/promo-data";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Categories Section - Responsive */}
      <CategoriesSection />

      <PromoBanner 
        title={promoConfig.title}
        subtitle={promoConfig.subtitle}
        discount={promoConfig.discount}
        featuredText={promoConfig.featuredText}
        freeShipping={promoConfig.freeShipping}
        backgroundColor={promoConfig.backgroundColor}
        products={promoBannerProducts}
      />
      <FeaturedProducts />
    </>
  );
}
