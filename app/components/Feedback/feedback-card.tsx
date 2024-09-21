import { Card, CardContent } from "~/components/ui/card";

export default function FeedbackCard() {
  return (
    <Card className="h-full w-full rounded-3xl">
      <CardContent className="flex h-full flex-col justify-between p-4">
        <div>
          <img
            src="/images/icon-5-stars.svg"
            alt="Rating Stars"
            className="mb-2"
          />
          <div className="flex flex-row items-center gap-1.5 pb-3">
            <p className="font-bold">Sarah M.</p>
            <img src="/images/verified-user-icon.svg" alt="Verified User" />
          </div>
          <p className="text-sm font-extralight text-[#00000099]">
            &quot;I&apos;m blown away by the quality and style of the clothes I
            received from Shop.co. From casual wear to elegant dresses, every
            piece I&apos;ve bought has exceeded my expectations.&quot;
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
