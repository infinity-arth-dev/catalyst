import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import ProductGrid from "../../products/ProductGrid";

import DnaBackgroundCanvas from "../../component/ui/DnaBackgroundCanvas";

export default function ProductsSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-brand-950 via-[#001724] to-brand-950 border-t border-brand-800/40">
      {/* Dynamic 3D DNA Double Helix & Molecular Particle Canvas */}
      <DnaBackgroundCanvas
        className="opacity-80"
        strandColorA="#00AEEF"
        strandColorB="#E8502A"
        particleCount={50}
      />

      {/* Ambient glowing radial light accents for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-600/10 blur-3xl pointer-events-none animate-float" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-transparent to-brand-950/80 pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-white bg-brand-950/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 shadow-lg">
            Medical Specialities
          </span>
          <h2 className="mt-3.5 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Our Products
          </h2>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-white shadow-sm" />
            <div className="h-1.5 w-4 rounded-full bg-accent-500 shadow-sm" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <ProductGrid />
        </AnimatedSection>
      </Container>
    </section>
  );
}
