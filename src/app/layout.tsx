import type { Metadata } from "next";
import "./globals.css";
import { inter, bakbak_one} from "./ui/fonts";
import PromoBar from "./ui/promoBar";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Smart Connect",
  description: "Cell phone store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PromoBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
