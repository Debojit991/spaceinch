import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";
import FloatingContact from "./components/FloatingContact";
import QuotePopup from "./components/QuotePopup";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "SpaceInch Interior Design",
  description: "Designing your dream spaces, one room at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans`}>
        {children}
        <BackToTop />
        <FloatingContact />
        <QuotePopup />
      </body>
    </html>
  );
}
