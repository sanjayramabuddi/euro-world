import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euro World",
  description: "All your ISO Certification done here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en";
  return (
    <html lang={locale} className={`${inter.className}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
