import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductCategoryCardProps {
  category: ProductCategory;
  index?: number;
}

export default function ProductCategoryCard({ category, index = 0 }: ProductCategoryCardProps) {
  // Normalize display names per blueprint
  const displayName =
    category.name === "DVT"
      ? "DVT Management"
      : category.name === "Onco"
      ? "Oncology"
      : category.name === "Hospital Supply"
      ? "Hospital Supplies"
      : category.name;

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xs hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 border border-[#DCE6EE] hover:border-brand-400 h-full"
      style={{
        transitionDelay: `${index * 40}ms`,
      }}
    >
      {/* Top subtle brand indicator bar on hover matching logo */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Specialty Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {category.image ? (
          <Image
            src={category.image}
            alt={displayName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-400 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-50 text-brand-600 font-bold text-2xl">
            {displayName.charAt(0)}
          </div>
        )}

        {/* Navy gradient overlays bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/30 to-transparent pointer-events-none" />

        {/* Floating Specialty Title over bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-100 block mb-0.5 drop-shadow-sm">
            Clinical Specialty
          </span>
          <h3 className="font-extrabold text-white text-base sm:text-lg leading-tight drop-shadow-md">
            {displayName}
          </h3>
        </div>
      </div>

      {/* Bottom Info Bar with Arrow Interaction using blue color theme */}
      <div className="flex items-center justify-between p-4 flex-1 bg-white">
        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-700 group-hover:text-brand-600 transition-colors">
          <span>Explore Specialty</span>
        </div>

        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-200 shadow-2xs"
          aria-label={`View ${displayName} details`}
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
