import type { Metadata } from "next";
import { Lora, Open_Sans } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
    title: "Bartender",
    description:
        "A complete Bartending guide for aspirants who want to become a Rockstar Bartender",
};

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-lora",
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${openSans.variable} antialiased text-gray-800 relative w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
