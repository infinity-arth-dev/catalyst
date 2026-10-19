import { notFound } from "next/navigation";
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
      <ProductComponent />
    </div>
  );
}
