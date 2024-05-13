export default function ProductCard() {
  return (
    <div>
      <div className="w-[200px] h-[200px]">
        <img
          src="/images/product-1.png"
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="pt-[10px]">
        <p className="font-satoshiBold font-black text-base">
          T-shirt with Tape Details
        </p>
        <div className="flex gap-3">
          <img src="/images/icon-rating.svg" alt="Rating Stars" />
          <p className="font-satoshiLight font-bold text-xs">4.5/5</p>
        </div>
        <p className="font-satoshi font-bold text-black">$120</p>
      </div>
    </div>
  );
}
