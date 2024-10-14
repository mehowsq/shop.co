import { Separator } from "~/components/ui/separator";
import Navigation from "~/components/navigation";
import ProductDetailsDescription from "~/components/Product/product-details-description";
import ProductDetailsPreview from "~/components/Product/product-details-preview";
import Footer from "~/components/footer";

export default function Products() {
  return (
    <>
      <Navigation />
      <div className="p-4 md:px-24">
        <Separator className="my-6" />
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <ProductDetailsPreview />
          </div>
          <div className="lg:w-1/2">
            <ProductDetailsDescription />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
