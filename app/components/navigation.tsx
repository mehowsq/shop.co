import { MenubarDemo } from "~/components/menu";
import SearchBar from "~/components/search";
import DiscountCard from "./discount-card";
import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <>
      <DiscountCard />
      <div className="bottom-[50%] z-50 flex items-center justify-between px-4 py-6 shadow-md md:px-24">
        <div className="flex items-center gap-4">
          <img
            src="/images/menu-burger-icon.svg"
            alt="Menu Icon"
            className="inline md:hidden"
          />
          <Link to="/" className="font-integralCF text-2xl md:text-[32px]">
            SHOP.CO
          </Link>
        </div>

        <MenubarDemo />
        <SearchBar />

        <div className="flex items-center gap-3 [&_img]:h-5 [&_img]:w-5">
          <img
            src="/images/search-icon.svg"
            alt="Search icon"
            className="inline md:hidden"
          />
          <Link to="/cart" className="font-integralCF text-2xl md:text-[32px]">
            <img src="/images/cart-icon.svg" alt="Cart icon" />
          </Link>

          <img src="/images/profile-icon.svg" alt="Profile icon" />
        </div>
      </div>
    </>
  );
}
