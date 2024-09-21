import { Separator } from "~/components/ui/separator";
import Navigation from "~/components/navigation";
import ProductDetailsDescription from "~/components/Product/product-details-description";
import ProductDetailsPreview from "~/components/Product/product-details-preview";
import Footer from "~/components/footer";

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-grow p-4 md:px-24">
        <Separator className="my-6" />
        <div className="flex h-full flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <ProductDetailsPreview />
          </div>
          <div className="flex lg:w-1/2">
            <ProductDetailsDescription />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
