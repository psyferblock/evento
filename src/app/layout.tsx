import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

import "./globals.css";

const workSans = Work_Sans({
	subsets: ["latin"],
	variable: "--font-Work_Sans",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Eventus Maxuimus",
	description: "Eventus Maximus is an event app for ze peeps and ze places",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={workSans.variable}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
