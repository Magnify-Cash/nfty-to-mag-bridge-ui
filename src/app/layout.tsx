import Chakra from "../Chakra";
import "./globals.css";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
}
