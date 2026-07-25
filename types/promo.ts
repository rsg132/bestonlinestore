export interface PromoBannerProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  vendor: string;
  discount?: number;
}

export interface PromoConfig {
  title: string;
  subtitle: string;
  discount: string;
  featuredText: string;
  freeShipping: boolean;
  backgroundColor: string;
}
