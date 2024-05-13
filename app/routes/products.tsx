import ProductsCarousel from "~/components/Product/ProductsCarousel";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function ProductsSection() {
  return (
    <div>
      <div className="pt-12">
        <p className="font-integralCF text-center text-3xl pb-8">
          NEW ARRIVALS
        </p>
        <ProductsCarousel />
        <div className="px-4 pt-6 ">
          <Button variant="outline" className="rounded-full w-full h-11">
            View All
          </Button>
        </div>
        <Separator className="my-10" />
      </div>

      <div>
        <p className="font-integralCF text-center text-3xl pb-8">TOP SELLING</p>
        <ProductsCarousel />
        <div className="px-4 pt-6 pb-12">
          <Button variant="outline" className="rounded-full w-full h-11">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
