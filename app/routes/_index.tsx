import type { MetaFunction } from "@remix-run/node";
import BrandsCard from "~/components/brands-card";
import FeedbackSection from "~/components/Feedback/feedback-section";
import ProductsSection from "~/components/Product/products-section";
import ProductCategorySection from "~/components/product-category-section";
import HeroSection from "~/components/hero-section";
import { Link } from "@remix-run/react/dist/components";

export const meta: MetaFunction = () => {
  return [
    { title: "SHOP.CO" },
    { name: "description", content: "Welcome to SHOP.CO" },
  ];
};

export default function Index() {
  return (
    <>
      <Link to="/products" className="...">
        Zobacz produkty
      </Link>
      <HeroSection />
      <BrandsCard />
      <ProductsSection />
      <ProductCategorySection />
      <FeedbackSection />
    </>
  );
}
