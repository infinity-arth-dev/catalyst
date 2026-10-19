import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import ServiceList from "../../services/ServiceList";

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-brand-50/40 via-white to-accent-50/30 py-16 sm:py-24 border-t border-slate-200/70 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

      <Container className="relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-600 bg-accent-50 px-3.5 py-1.5 rounded-full border border-accent-100">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
            Our Services
          </h2>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-brand-600" />
            <div className="h-1.5 w-4 rounded-full bg-accent-600" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <ServiceList />
        </AnimatedSection>
      </Container>
    </section>
  );
}
