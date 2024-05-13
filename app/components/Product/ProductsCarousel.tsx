import ProductCard from "~/components/Product/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

export default function ProductsCarousel() {
  return (
    <Carousel>
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
        <CarouselItem className="basis-auto">
          <ProductCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
