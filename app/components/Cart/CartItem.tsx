import { X } from "lucide-react";
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
  onRemove: (id: string) => void; // Funkcja usuwająca produkt
}

export default function CartItem({
  id,
  name,
  price,
  initialQuantity,
  image,
  size,
  color,
  onRemove,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="flex items-center space-x-4 border-b pb-4">
      {/* Obrazek produktu */}
      <img
        src={image}
        alt={name}
        className="h-[124px] w-[124px] rounded-lg object-cover"
      />

      {/* Szczegóły produktu */}
      <div className="flex-1">
        {/* Górny wiersz: Nazwa i ikona kosza */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <X
            className="cursor-pointer text-red-500 hover:text-red-700"
            size={20}
            onClick={() => onRemove(id)} // Wywołanie usuwania
          />
        </div>

        {/* Opcjonalne szczegóły produktu */}
        {size && <p className="text-sm text-gray-500">Size: {size}</p>}
        {color && <p className="text-sm text-gray-500">Color: {color}</p>}

        {/* Dolny wiersz: Cena i przycisk AddButton */}
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
