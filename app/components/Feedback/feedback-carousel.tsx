import FeedbackCard from "~/components/Feedback/feedback-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function FeedbackCarousel() {
  return (
    <Carousel className="pb-12">
      <CarouselContent>
        <CarouselItem className="md:basis-auto">
          <FeedbackCard />
        </CarouselItem>
        <CarouselItem className="md:basis-auto">
          <FeedbackCard />
        </CarouselItem>
        <CarouselItem className="md:basis-auto">
          <FeedbackCard />
        </CarouselItem>
        <CarouselItem className="md:basis-auto">
          <FeedbackCard />
        </CarouselItem>
        <CarouselItem className="md:basis-auto">
          <FeedbackCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
