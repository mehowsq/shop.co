import { useState } from "react";
import CartItem from "~/components/Cart/CartItem";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Gradient Graphic T-shirt",
      price: 145,
      initialQuantity: 2,
      image: "/images/product-1.png",
      size: "Large",
      color: "Black",
    },
    {
      id: "2",
      name: "CHECKERED SHIRT",
      price: 180,
      initialQuantity: 5,
      image: "/images/product-1.png",
      size: "Medium",
      color: "Green",
    },
    {
      id: "3",
      name: "SKINNY FIT JEANS",
      price: 240,
      initialQuantity: 12,
      image: "/images/product-1.png",
      size: "Large",
      color: "White",
    },
  ]);

  // Funkcja usuwająca element z koszyka
  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Separator className="my-6" />
      <p className="pb-8  font-integralCF text-3xl md:text-4xl">YOUR CART</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Lewa kolumna - Lista produktów */}
        <div>
          <div className="space-y-4 rounded-2xl border-2 border-solid px-[24px] py-[20px]">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} onRemove={handleRemoveItem} />
            ))}
          </div>
        </div>

        {/* Prawa kolumna - Podsumowanie zamówienia */}
        <div className="rounded-2xl border-2 border-solid p-6 ">
          <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>
          <div className="mb-4 space-y-4 border-b pb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.initialQuantity,
                  0,
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%)</span>
              <span className="text-red-500">
                -$
                {(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.initialQuantity,
                    0,
                  ) * 0.2
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$15.00</span>
            </div>
          </div>
          <div className="mb-6 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>
              $
              {(
                cartItems.reduce(
                  (total, item) => total + item.price * item.initialQuantity,
                  0,
                ) *
                  0.8 +
                15
              ).toFixed(2)}
            </span>
          </div>
          <Button className="font-satoshi h-[60px] w-full rounded-full text-base ">
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
