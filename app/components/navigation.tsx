// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "~/components/ui/menubar";

export default function Navigation() {
  return (
    <div>
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
      {/* <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar> */}
    </div>
  );
}
