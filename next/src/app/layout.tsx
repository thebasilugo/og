import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dr. Roseline Ogundokun - Data Science Portfolio",
	description:
		"Portfolio website of Dr. Roseline Ogundokun, Data Scientist and Educator",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
