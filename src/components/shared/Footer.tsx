import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="flex-between wrapper flex-center flex flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={100}
            alt="logo 
            "
          />
        </Link>
        <h1>2024 Eventus Maximux. All Rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
