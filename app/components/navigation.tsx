export default function Navigation() {
  return (
    <div>
      <div className="flex  h-8 items-center justify-center bg-black">
        <h1 className="font-satoshi text-xs text-white">
          Sign up and get 20% off to your first order.{" "}
          <span className="font-bold underline">Sign Up Now</span>
        </h1>
      </div>
      <div className="flex justify-between px-4 py-6">
        <div className="flex gap-3">
          <img src="/images/menu-burger-icon.svg" alt="Menu icon" />
          <p className="font-integralCF text-2xl">SHOP.CO</p>
        </div>
        <div className="flex justify-end gap-3">
          <img src="/images/search-icon.svg" alt="Search icon" />
          <img src="/images/cart-icon.svg" alt="Cart icon" />
          <img src="/images/profile-icon.svg" alt="Profile icon" />
        </div>
      </div>
    </div>
  );
}
