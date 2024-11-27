import { ChevronRight, Slash } from "lucide-react";
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";
import PageContainer from "~/components/PageContainer";

export default function Cart() {
  return (
    <PageContainer>
      <div className="flex flex-col pt-6">
        <p className="pb-8  font-integralCF text-3xl md:text-5xl">YOUR CART</p>
      </div>
    </PageContainer>
  );
}
