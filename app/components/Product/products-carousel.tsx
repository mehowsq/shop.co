import ProductCard from "~/components/Product/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function ProductsCarousel() {
  return (
    <Carousel className="md: flex justify-center">
      <CarouselContent className="px-4 pt-4">
        <CarouselItem className="basis-auto">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ProductCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
