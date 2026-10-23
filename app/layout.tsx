import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import ScrollToTop from "@/component/ui/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Catalyst Biomedicals | Import and distribute medical products",
    template: "%s | Catalyst Biomedicals",
  },
  description:
    "Catalyst Biomedicals was established in 2015, with the view to import and distribute high quality brand name medical related products. Our intention, and ongoing commitment, is to provide the industry with the highest possible level of service, while simultaneously contributing to the building of the integrity of the industry. As the name 'Catalyst' refers to the agents facilitating smooth reactions. We offer a bridge between our customers and innovative products across the globe and help patients.",
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
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
