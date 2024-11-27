import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import ProductDetailsDescription from "~/components/Product/product-details-description";
import ProductDetailsPreview from "~/components/Product/product-details-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import FeedbackCard from "~/components/Feedback/feedback-card";
import ProductsCarousel from "~/components/Product/products-carousel";
import { Button } from "~/components/ui/button";

export default function Products() {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const totalReviews = 20;

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 6, totalReviews));
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow p-4 md:px-24">
        <Separator className="my-6" />
        <div className="flex h-full flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <ProductDetailsPreview />
          </div>
          <div className="flex lg:w-1/2">
            <ProductDetailsDescription />
          </div>
        </div>
      </div>

      <Tabs defaultValue="ratingAndReviews" className="flex flex-col">
        <TabsList>
          <TabsTrigger value="productDetails">Product Details</TabsTrigger>
          <TabsTrigger value="ratingAndReviews">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
        </TabsList>
        <div className="min-h-[800px]">
          <TabsContent value="productDetails">
            <div>PRODUCT DETAILS HERE</div>
          </TabsContent>
          <TabsContent value="ratingAndReviews">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
              {[...Array(visibleReviews)].map((_, index) => (
                <div key={index}>
                  <FeedbackCard />
                </div>
              ))}
            </div>
            {visibleReviews < totalReviews && (
              <div className="mt-6 flex justify-center">
                <Button
                  variant="outline"
                  className="rounded-full font-satoshiMedium"
                  onClick={loadMoreReviews}
                >
                  Load more Reviews
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="faq">
            <div>FAQ INFO HERE.</div>
          </TabsContent>
        </div>
      </Tabs>
      <div className="pb-20">
        <p className="pb-8 text-center font-integralCF text-3xl md:text-5xl">
          You might also like
        </p>
        <ProductsCarousel />
      </div>
    </div>
  );
}
