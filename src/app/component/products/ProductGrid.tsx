import { productCategories } from "@/data/products";
import ProductCategoryCard from "./ProductCategoryCard";

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productCategories.map((c) => (
        <ProductCategoryCard key={c.slug} category={c} />
      ))}
    </div>
  );
}
