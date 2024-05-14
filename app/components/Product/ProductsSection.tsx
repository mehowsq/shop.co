import ProductsCarousel from "~/components/Product/ProductsCarousel";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function ProductsSection() {
  return (
    <div>
      <div className="pt-12">
        <p className="pb-8 text-center font-integralCF text-3xl">
          NEW ARRIVALS
        </p>
        <ProductsCarousel />
        <div className="px-4 pt-6 ">
          <Button variant="outline" className="h-11 w-full rounded-full">
            View All
          </Button>
        </div>
        <Separator className="my-10" />
      </div>

      <div>
        <p className="pb-8 text-center font-integralCF text-3xl">TOP SELLING</p>
        <ProductsCarousel />
        <div className="px-4 pb-12 pt-6">
          <Button variant="outline" className="h-11 w-full rounded-full">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
