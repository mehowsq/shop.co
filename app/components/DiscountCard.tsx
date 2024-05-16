import { X } from "lucide-react";
import { useState } from "react";
export default function DiscountCard() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <div className="flex  h-8 items-center justify-center bg-black">
      <h1 className="font-satoshi text-xs text-white">
        Sign up and get 20% off to your first order.{" "}
        <span className="font-satoshi font-medium underline">Sign Up Now</span>
      </h1>
      <button
        className="md:visible invisible text-white hover:text-gray-300"
        onClick={handleClose}
      >
        <X className="h-5 w-5 " />
      </button>
    </div>
  );
}
