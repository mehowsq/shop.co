import ProductCategoryCard from "~/components/product-category-card";

export default function ProductCategorySection() {
  return (
    <div className="px-4 md:px-[100px]">
      <div className="rounded-3xl bg-light-white py-10 ">
        <p className="pb-8 text-center font-integralCF text-4xl md:text-5xl">
          BROWSE BY DRESS STYLE
        </p>

        <div className="grid grid-cols-3 gap-x-5 gap-y-6 px-16">
          <div className="col-span-1 ">
            <ProductCategoryCard
              title="Casual"
              image="/images/person-image.png"
            />
          </div>
          <div className="col-span-2 ">
            <ProductCategoryCard
              title="Formal"
              image="/images/person-image.png"
            />
          </div>

          <div className="col-span-2 ">
            <ProductCategoryCard
              title="Party"
              image="/images/person-image.png"
            />
          </div>
          <div className="col-span-1 ">
            <ProductCategoryCard title="Gym" image="/images/person-image.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
