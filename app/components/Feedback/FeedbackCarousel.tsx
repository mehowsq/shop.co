import FeedbackCard from "~/components/Feedback/FeedbackCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

export default function FeedbackCarousel() {
  return (
    <Carousel className="pb-12">
      <CarouselContent>
        <CarouselItem>
          <FeedbackCard />
        </CarouselItem>
        <CarouselItem>
          <FeedbackCard />
        </CarouselItem>
        <CarouselItem>
          <FeedbackCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
