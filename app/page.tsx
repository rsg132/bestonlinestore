import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySidebar from "@/components/CategorySidebar";
import SubcategoryGrid from "@/components/SubcategoryGrid";
import { promoBannerProducts, promoConfig } from "@/components/promo-data";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Categories Section with Sidebar */}
      <section className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Sidebar - Hidden on mobile, visible from sm */}
            <div className="hidden sm:block">
              <CategorySidebar selectedCategory="electronics" />
            </div>
            {/* Grid Content */}
            <SubcategoryGrid selectedCategoryId="electronics" />
          </div>
        </div>
      </section>

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
