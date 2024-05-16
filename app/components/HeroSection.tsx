import { Button } from "~/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-light-white pt-10">
      <div className="px-4">
        <p className="font-integralCF text-4xl leading-9 text-black">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
        <p className="font-satoshi pb-10 pt-5 text-sm font-extralight text-[#00000099]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button className="font-satoshi h-[3.25rem] w-full rounded-full text-base">
          Shop Now
        </Button>
        <div className="flex flex-wrap justify-center  pt-[22px]">
          <div>
            <p className="font-satoshiBlack text-2xl ">200+</p>
            <p className="font-satoshi text-xs opacity-60">
              International Brands
            </p>
          </div>
          <div className="mx-[27.5px] w-[1px] bg-black opacity-10"></div>
          <div>
            <p className="font-satoshiBlack text-2xl ">2000+</p>
            <p className="font-satoshi text-xs opacity-60">
              High-Quality Products
            </p>
          </div>
          <div>
            <p className="font-satoshiBlack text-2xl ">30,000+</p>
            <p className="font-satoshiLight text-xs opacity-60">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <img src="/images/hero-image.jpg" alt="" />
    </div>
  );
}
