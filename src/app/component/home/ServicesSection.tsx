import Container from "@/component/ui/Container";
import ServiceList from "@/component/services/ServiceList";

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 py-16 sm:py-24 border-t border-slate-200/70">
      <Container>
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Services
          </h2>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-accent-600" />
            <div className="h-1.5 w-4 rounded-full bg-brand-600" />
          </div>
        </div>
        <ServiceList />
      </Container>
    </section>
  );
}
