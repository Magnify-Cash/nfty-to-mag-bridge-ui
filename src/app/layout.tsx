import { ReactNode } from "react";
import { Bai_Jamjuree } from "next/font/google";

import "./globals.css";
import { MainProvider } from "@/lib/providers/MainProvider";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Metadata } from "next";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Magnify.Cash",
  description:
    "Lend and borrow any onchain asset—on your own terms. Connect your wallet and get started today!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
}
