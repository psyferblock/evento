import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";

import Logo from "/public/assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-between wrapper flex-center flex flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={128}
            alt="logo 
            "
          />
        </Link>
        <h1>2024 Eventus Maximux. All Rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
