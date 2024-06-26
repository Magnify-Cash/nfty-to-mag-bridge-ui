import { ReactNode } from "react";
import { Bai_Jamjuree } from "next/font/google";

import "./globals.css";
import { MainProvider } from "@/lib/providers/MainProvider";
import { MainLayout } from "@/components/Layout/MainLayout";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
