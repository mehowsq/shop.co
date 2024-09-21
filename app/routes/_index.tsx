import type { MetaFunction } from "@remix-run/node";
import BrandsCard from "~/components/brands-card";
import DiscountCard from "~/components/discount-card";
import FeedbackSection from "~/components/Feedback/feedback-section";

import ProductsSection from "~/components/Product/products-section";
import Navigation from "~/components/navigation";
import ProductCategorySection from "~/components/product-category-section";
import HeroSection from "~/components/hero-section";
import Newsletter from "~/components/Newsletter/Newsletter";
import Footer from "~/components/footer";
import Products from "./products";

export const meta: MetaFunction = () => {
  return [
    { title: "SHOP.CO" },
    { name: "description", content: "Welcome to SHOP.CO" },
  ];
};

export default function Index() {
  return (
    <>
      <Products />
      {/* <Navigation />
      <HeroSection />
      <BrandsCard />
      <ProductsSection />
      <ProductCategorySection />
      <FeedbackSection />
      <Footer /> */}
    </>
  );
}
