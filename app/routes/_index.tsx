import type { MetaFunction } from "@remix-run/node";
import BrandsCard from "~/components/BrandsCard";
import DiscountCard from "~/components/DiscountCard";
import FeedbackSection from "~/components/Feedback/FeedbackSection";
import HeroSection from "~/components/HeroSection";
import Newsletter from "~/components/Newsletter/Newsletter";
import ProductsSection from "~/components/Product/ProductsSection";
import ProductCategorySection from "~/components/ProductCategorySection";
import Navigation from "~/components/navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "SHOP.CO" },
    { name: "description", content: "Welcome to SHOP.CO" },
  ];
};

export default function Index() {
  return (
    <div>
      <DiscountCard />
      <Navigation />
      <HeroSection />
      <BrandsCard />
      <ProductsSection />
      <ProductCategorySection />
      <FeedbackSection />
      <Newsletter />
    </div>
  );
}
