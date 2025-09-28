import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/sections/NavigationBar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Dental Care - 70% Savings | EU Certified Dentists",
  description: "Experience world-class dental care with EU certified dentists. Save up to 70% on premium dental treatments including implants, veneers, and cosmetic dentistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-sans antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
