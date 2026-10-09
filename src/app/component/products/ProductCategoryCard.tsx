import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductCategoryCardProps {
  category: ProductCategory;
  index?: number;
}

export default function ProductCategoryCard({ category }: ProductCategoryCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1.5 border border-slate-200/90 hover:border-brand-400">
      {/* Top Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-50 text-brand-600 font-bold text-2xl">
            {category.name.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Card Content & Action Button */}
      <div className="p-5 flex flex-col items-center text-center flex-1 justify-between bg-white gap-4">
        <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
          {category.name}
        </h3>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-600 hover:bg-brand-700 shadow-xs transition-all duration-200 active:scale-95"
        >
          <span>View More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
