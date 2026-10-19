import HeroSection from "./component/home/HeroSection";
import AboutSection from "./component/home/AboutSection";
import ServicesSection from "./component/home/ServicesSection";
import ProductsSection from "./component/home/ProductsSection";
import PartnersSection from "./component/home/PartnersSection";
import GetInTouchSection from "./component/home/GetInTouchSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PartnersSection />
      <GetInTouchSection />
    </>
  );
}
