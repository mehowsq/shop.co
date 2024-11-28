import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/menubar";
import { ChevronDown } from "lucide-react";
import { Link } from "@remix-run/react";
export function MenubarDemo() {
  return (
    <Menubar className="hidden md:flex">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/products">Shop</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>On Sale</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>New Arrivals</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Brands</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
