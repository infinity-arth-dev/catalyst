import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, LayoutGrid } from "lucide-react";
import Container from "@/component/ui/Container";
import { PRODUCT_COMPONENTS, productSlugs } from "../components";

// Pre-render all product routes at build time
export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

// Disables instant prerendering warning for dynamic URL params access in Next.js 16
export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

// SEO metadata per product
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCT_COMPONENTS[slug];
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Products | Catalyst Biomedicals`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCT_COMPONENTS[slug];
  if (!product) notFound();

  const ProductComponent = product.Component;

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── Clean Light Breadcrumb Bar with Back to Products ── */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 py-2.5 sm:py-3 transition-colors">
        <Container className="flex items-center justify-between gap-4">
          <Link
            href="/products"
            id="back-to-products-top"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-brand-600 bg-white hover:bg-brand-50 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 hover:border-brand-300 transition-all duration-200 shadow-2xs hover:shadow-xs group hover:-translate-x-0.5"
          >
            <ArrowLeft className="w-4 h-4 text-brand-600 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Products</span>
          </Link>
        </Container>
      </div>

      {/* ── Main Product Detail Content ── */}
      <ProductComponent />

      {/* ── Bottom Section with Clear Back to Products CTA ── */}
      <section className="bg-slate-50 border-t border-slate-200/90 py-12 sm:py-16">
        <Container>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm card-lift-glow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-[#00AEEF] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                <LayoutGrid className="w-3.5 h-3.5" />
                Catalyst Healthcare Portfolio
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2 tracking-tight">
                <span className="text-[#00AEEF]">Explore More </span>
                <span className="text-[#E8502A]">Medical Specialties</span>
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
                Looking for other biomedical solutions? Browse our complete portfolio of certified clinical equipment, surgical instruments, and hospital consumables.
              </p>
            </div>
            <Link
              href="/products"
              id="back-to-products-bottom"
              className="inline-flex items-center gap-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-x-1 shrink-0 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to All Products</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
