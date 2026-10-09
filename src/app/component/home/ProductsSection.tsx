import Container from "@/component/ui/Container";
import ProductGrid from "@/component/products/ProductGrid";

export default function ProductsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-brand-50/20 via-white to-slate-50/50 border-t border-slate-200/70">
      <Container>
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
            Medical Specialities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Products
          </h2>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-accent-600" />
            <div className="h-1.5 w-4 rounded-full bg-brand-600" />
          </div>
        </div>
        <ProductGrid />
      </Container>
    </section>
  );
}
