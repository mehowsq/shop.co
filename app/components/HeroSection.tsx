import { Button } from "~/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-light-white px-4 py-10">
      <p className="text-black font-integralCF text-4xl leading-9">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </p>
      <p className="font-satoshi text-sm pt-5 pb-10">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>

      <Button className="w-full rounded-full h-[3.25rem] font-satoshi text-base">
        Shop Now
      </Button>
      <div className="flex flex-wrap justify-center  pt-[22px]">
        <div>
          <p className="text-2xl font-satoshi ">200+</p>
          <p className="text-xs font-satoshi opacity-60">
            International Brands
          </p>
        </div>
        <div className="w-[1px] opacity-10 mx-[27.5px] bg-black"></div>
        <div>
          <p className="text-2xl font-satoshi ">2000+</p>
          <p className="text-xs font-satoshi opacity-60">
            High-Quality Products
          </p>
        </div>
        <div>
          <p className="text-2xl font-satoshi ">30,000+</p>
          <p className="text-xs font-satoshi opacity-60">Happy Customers</p>
        </div>
      </div>
      <img src="/images/hero-image.jpg" alt="" />
    </div>
  );
}
