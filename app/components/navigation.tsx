import { MenubarDemo } from "~/components/menu";
import SearchBar from "~/components/search";

export default function Navigation() {
  return (
    <div className=" bottom-[50%] flex justify-between px-4 py-6 md:px-24">
      <div className="flex items-center gap-4 ">
        <img
          src="/images/menu-burger-icon.svg"
          alt="Menu Icon"
          className="inline md:hidden"
        />
        <p className="font-integralCF text-2xl">SHOP.CO</p>
      </div>
      {/* <MenubarDemo /> */}
      <SearchBar />

      <div className="flex justify-end gap-3">
        <img
          src="/images/search-icon.svg"
          alt="Search icon"
          className="inline md:hidden"
        />
        <img src="/images/cart-icon.svg" alt="Cart icon" />
        <img src="/images/profile-icon.svg" alt="Profile icon" />
      </div>
    </div>
  );
}
