
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import StoreProvider from "@/app/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John",
  description: "John Profile",
};

export default function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className} suppressHydrationWarning={true}>
    <StoreProvider>
      {children}
    </StoreProvider>
    </body>
    </html>
  );
}
