import ProductsCarousel from "~/components/Product/products-carousel";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import PageContainer from "../PageContainer";

export default function ProductsSection() {
  return (
    <PageContainer>
      <div className="pt-12">
        <p className="pb-8 text-center font-integralCF text-3xl md:text-5xl">
          NEW ARRIVALS
        </p>
        <ProductsCarousel />
        <div className="px-4 pt-6 md:flex md:justify-center">
          <Button
            variant="outline"
            className="h-11 w-full rounded-full md:w-[218px]"
          >
            View All
          </Button>
        </div>
        <Separator className="my-10" />
      </div>

      <div>
        <p className="pb-8 text-center font-integralCF text-3xl md:text-5xl">
          TOP SELLING
        </p>
        <ProductsCarousel />
        <div className="md: flex px-4 pb-12 pt-6 md:justify-center">
          <Button
            variant="outline"
            className="h-11 w-full rounded-full md:w-[218px]"
          >
            View All
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
