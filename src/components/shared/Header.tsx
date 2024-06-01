import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="w-full">
			<div className="wrapper flex items-center justify-between">
				<Link
					href="/"
					className="w-36 "
				>
					<Image
						src="/assets/images/logo.svg"
						width={128}
						height={38}
						alt="Evento Logo"
					/>
				</Link>
                <div className="flex w-32 justify-end gap-3">
                </div>
			</div>
		</header>
	);
};

export default Header;
