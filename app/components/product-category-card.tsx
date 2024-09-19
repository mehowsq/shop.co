interface ProductCategoryCardProps {
  image: string;
  title: string;
}

export default function ProductCategoryCard({
  image,
  title,
}: ProductCategoryCardProps) {
  return (
    <div className="w-full">
      <div
        className={`h-[190px] max-h-[400px] min-h-[150px] rounded-3xl md:h-[289px] bg-[url('${image}')]`}
      >
        <p className="pl-6 pt-4 font-satoshiBlack text-2xl ">{title}</p>
      </div>
    </div>
  );
}
