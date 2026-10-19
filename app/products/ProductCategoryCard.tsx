import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductCategoryCardProps {
  category: ProductCategory;
  index?: number;
}

export default function ProductCategoryCard({ category, index = 0 }: ProductCategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xs hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 hover:-translate-y-2 border border-slate-200/90 hover:border-brand-400 h-full"
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      {/* Top accent gradient bar on hover */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Top Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-50 text-brand-600 font-bold text-2xl">
            {category.name.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bottom Info Bar */}
      <div className="flex items-center justify-between p-5 flex-1 bg-white">
        <div>
          <h3 className="font-bold text-accent-600 text-base sm:text-lg group-hover:text-accent-500 transition-colors">
            {category.name}
          </h3>
          <span className="text-xs text-slate-500 font-medium group-hover:text-brand-600 transition-colors">
            Explore Category →
          </span>
        </div>
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300 shadow-xs"
          aria-label={`View ${category.name} details`}
        >
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
