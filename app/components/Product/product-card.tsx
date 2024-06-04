export default function ProductCard() {
  return (
    <div>
      <div className="h-[200px] w-[200px] md:h-[298px] md:w-[295px]">
        <img
          src="/images/product-1.png"
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <div className="pt-[10px]">
        <p className="font-satoshiBold text-base font-black">
          T-shirt with Tape Details
        </p>
        <div className="flex gap-3">
          <img src="/images/icon-rating.svg" alt="Rating Stars" />
          <p className="font-satoshiLight text-xs font-bold">4.5/5</p>
        </div>
        <p className="font-satoshi font-bold text-black">$120</p>
      </div>
    </div>
  );
}
