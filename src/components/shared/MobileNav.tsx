import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import NavItems from "./NavItems";
import { Separator } from "../ui/separator";

import Logo from "@/public/assets/images/logo.svg";
import MenuSvg from "@/public/assets/icons/menu.svg";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={MenuSvg}
            width={50}
            alt="menu"
            height={50}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="flex flex-col bg-white md:hidden"
        >
          <Image src={Logo} height={50} width={50} alt="logo" />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
