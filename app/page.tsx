import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import { promoBannerProducts, promoConfig } from "@/components/promo-data";

export default function Home() {
  return (
    <>
      <Hero />
      
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
