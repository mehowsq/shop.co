import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="bg-black  h-8 flex justify-center items-center">
        <h1 className="text-white font-satoshi text-xs">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline font-bold">Sign Up Now</span>
        </h1>
      </div>

      <div className="flex justify-between px-4 py-6">
        <div className="flex gap-3">
          <img src="/images/menu-burger-icon.svg" alt="Menu icon" />
          <p className="font-integralCF text-2xl">SHOP.CO</p>
        </div>
        <div className="flex gap-3 justify-end">
          <img src="/images/search-icon.svg" alt="Search icon" />
          <img src="/images/cart-icon.svg" alt="Cart icon" />
          <img src="/images/profile-icon.svg" alt="Profile icon" />
        </div>
      </div>
    </div>
  );
}
