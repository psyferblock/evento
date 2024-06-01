import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36 ">
          <Image
            src={Logo}
            width={98}
            height={38}
            alt="Eventus Maximus
			"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">login</Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
