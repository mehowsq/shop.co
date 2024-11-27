import FeedbackCarousel from "~/components/Feedback/feedback-carousel";

export default function FeedbackSection() {
  return (
    <div className="md:px-24">
      <p className="px-4 pb-6 pt-12 text-left text-3xl md:text-4xl">
        OUR HAPPY CUSTOMERS
      </p>
      <FeedbackCarousel />
    </div>
  );
}
