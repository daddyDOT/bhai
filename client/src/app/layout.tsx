import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import { Providers } from "./utils/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akademski imenik",
  description: "Akademski imenik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-color-mode="light">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Subscribe />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
