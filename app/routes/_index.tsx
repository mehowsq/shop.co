import type { MetaFunction } from "@remix-run/node";
import BrandsCard from "~/components/BrandsCard";
import HeroSection from "~/components/HeroSection";
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
      <Navigation />
      <HeroSection />
      <BrandsCard />
      <ProductsSection />
      <ProductCategorySection />
    </div>
  );
}
