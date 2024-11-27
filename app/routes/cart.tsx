import CartItem from "~/components/Cart/CartItem";
import { Separator } from "~/components/ui/separator";

export default function Cart() {
  const cartItems = [
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Separator className="my-6" />
      <p className="pb-8  font-integralCF text-3xl md:text-4xl">YOUR CART</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Lewa kolumna - Lista produktów */}
        <div>
          <div className="space-y-4 rounded-2xl  border-2 border-solid px-[24px] py-[20px]">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Prawa kolumna - Podsumowanie zamówienia */}
        <div className="rounded-2xl border-2 border-solid p-6 ">
          <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

          <div className="mb-4 space-y-4 border-b pb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$259.98</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%)</span>
              <span className="text-red-500">-$51.99</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$15.00</span>
            </div>
          </div>

          <div className="mb-6 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>$222.99</span>
          </div>

          <button className="w-full rounded-2xl bg-black py-3 text-white transition-colors hover:bg-gray-800">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
