import { useState } from "react";
import AddButton from "../add-button";
import ColorSelector from "../color-selector";
import SizeSelector from "../size-selector";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ProductDetailsDescription() {
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow">
        <p className="font-integralCF text-2xl leading-9 text-black md:text-4xl">
          One Life Graphic T-shirt
        </p>
        <div className="flex gap-3">
          <img src="/images/rating-stars-big.svg" className="py-4" />
        </div>
        <p className="pb-5 font-satoshiBlack text-3xl font-bold text-black">
          $260
        </p>
        <p className="font-satoshiLight text-sm md:text-base">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <Separator className="my-6" />
        <p className="font-satoshi pb-4 text-sm">Select Colors</p>
        <ColorSelector />
        <Separator className="my-6" />
        <p className="font-satoshi pb-4 text-sm">Choose Size</p>
        <SizeSelector />
        <Separator className="my-6" />
      </div>
      <div className="mt-auto">
        <div className="grid grid-cols-3 gap-3">
          <AddButton
            count={count}
            onCountChange={handleCountChange}
            minCount={0}
            maxCount={10}
          />
          <Button className="col-span-2 h-[44px] w-full rounded-full font-satoshiLight text-base md:h-[52px]">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
