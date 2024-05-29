import type { MetaFunction } from "@remix-run/node";
import BrandsCard from "~/components/brands-card";
import DiscountCard from "~/components/discount-card";
import FeedbackSection from "~/components/Feedback/feedback-section";

import ProductsSection from "~/components/Product/products-section";
import Navigation from "~/components/navigation";
import ProductCategorySection from "~/components/product-category-section";
import HeroSection from "~/components/hero-section";
import Newsletter from "~/components/Newsletter/newsletter";

export const meta: MetaFunction = () => {
  return [
    { title: "SHOP.CO" },
    { name: "description", content: "Welcome to SHOP.CO" },
  ];
};

export default function Index() {
  return (
    <>
      <DiscountCard />
      <Navigation />
      <HeroSection />
      <BrandsCard />
      <ProductsSection />
      <ProductCategorySection />
      <FeedbackSection />
      <Newsletter />
    </>
  );
}

// 1. uspójnić nazwenictwo plików
// 2. Zamiast tworzyc nowy komponent lepiej "budować z klocków" --> SearchInput (do naprawy) + newsletter input
// 3. Skontruować w sumie jeden komponent, który będzie miał {children}(albo icon) i zamiast w kadym wrzucac ikonkę czy coś to lepiej przekazywac mu dany komponent
// 4. responsywność strony (chodzi o menubar bo sie zepsul)
// 5. Gwiazdki - research
