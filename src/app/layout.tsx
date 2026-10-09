import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import { site } from "@/data/site";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Import and distribute medical products`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/images/tablogo.png",
    shortcut: "/images/tablogo.png",
    apple: "/images/tablogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
