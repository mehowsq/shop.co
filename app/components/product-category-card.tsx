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
      <div className={`flex h-[289px] rounded-3xl bg-[url('${image}')]`}>
        <p className="pl-6 pt-4 font-satoshiBlack text-2xl ">{title}</p>
      </div>
    </div>
  );
}
