import type { MetaFunction } from "@remix-run/node";
import BrandsCard from "~/components/BrandsCard";
import HeroSection from "~/components/HeroSection";
import Navigation from "~/components/navigation";
import ProductsSection from "~/routes/products";

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
    </div>
  );
}
