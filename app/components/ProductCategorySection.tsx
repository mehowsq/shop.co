import ProductCategoryCard from "~/components/ProductCategoryCard";

export default function ProductCategorySection() {
  return (
    <div className="px-4">
      <div className="rounded-3xl bg-light-white pt-10">
        <p className="pb-8 text-center font-integralCF text-4xl">
          BROWSE BY DRESS STYLE
        </p>
        <div className=" flex flex-col items-center justify-center gap-6 pb-6">
          <ProductCategoryCard />
          <ProductCategoryCard />
          <ProductCategoryCard />
          <ProductCategoryCard />
        </div>
      </div>
    </div>
  );
}
