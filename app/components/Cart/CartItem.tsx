import { useState } from "react";
import AddButton from "~/components/add-button";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  initialQuantity: number;
  image: string;
  size?: string;
  color?: string;
}

export default function CartItem({
  id,
  name,
  price,
  initialQuantity,
  image,
  size,
  color,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="flex items-center space-x-4 border-b pb-4">
      <img
        src={image}
        alt={name}
        className="h-[124px] w-[124px] rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        {size && <p className="text-sm text-gray-500">Size: {size}</p>}
        {color && <p className="text-sm text-gray-500">Color: {color}</p>}
        <div className="mt-2 flex items-center justify-between">
          <p className="font-satoshiMedium text-[24px]">${price}</p>
          <AddButton
            count={quantity}
            onCountChange={handleQuantityChange}
            minCount={0}
            maxCount={10}
          />
        </div>
      </div>
    </div>
  );
}
