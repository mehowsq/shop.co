import FeedbackCard from "~/components/Feedback/feedback-card";
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
