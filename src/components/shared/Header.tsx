import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/images/logo.svg";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src={Logo}
            width={98}
            height={38}
            alt="Eventus Maximus
          			"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between full hidden max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Link href="/api/sign-in">login</Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
