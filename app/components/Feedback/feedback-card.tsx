import { Card, CardContent } from "~/components/ui/card";

export default function FeedbackCard() {
  return (
    <div className="px-4 pt-6 md:w-[400px]">
      <Card className="rounded-3xl">
        <CardContent className="p-6">
          <img src="/images/icon-5-stars.svg" alt="Rating Stars" />
          <div className="flex flex-row gap-1.5 pb-3">
            <p className="font-bold">Sarah M.</p>
            <img src="/images/verified-user-icon.svg" alt="Verified User" />
          </div>
          <p className="text-sm font-extralight text-[#00000099]">
            &quot;I&apos;m blown away by the quality and style of the clothes I
            received from Shop.co. From casual wear to elegant dresses, every
            piece I&apos;ve bought has exceeded my expectations.”
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
