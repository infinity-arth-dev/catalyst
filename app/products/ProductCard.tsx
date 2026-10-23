"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProductCategoryDetail } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ segment }: { segment: ProductCategoryDetail }) {
  return (
    <Link
      href={`/products/${segment.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs card-lift-glow transition-all duration-500"
    >
      {/* Top accent gradient bar on hover */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={segment.image}
          alt={segment.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Shimmer sweep effect on card hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent pointer-events-none" />

        {/* Tagline pill with subtle pulse */}
        {segment.tagline && (
          <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-brand-800 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/60 shadow-xs">
            Medical Segment
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="text-xl sm:text-2xl font-black text-brand-600 tracking-tight group-hover:text-brand-500 transition-colors">
          {segment.name}
        </h3>

        {/* Divider matching logo palette */}
        <div className="mt-2.5 mb-3 flex items-center gap-1.5">
          <div className="h-1 w-10 rounded-full bg-brand-600 group-hover:w-14 transition-all duration-300" />
          <div className="h-1 w-2.5 rounded-full bg-accent-600" />
        </div>

        {segment.tagline && (
          <p className="text-sm font-bold text-brand-700 leading-snug">
            {segment.tagline}
          </p>
        )}

        {segment.summary && (
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {segment.summary}
          </p>
        )}

        {/* Partner count badge */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-100 text-brand-700 px-3 py-1 rounded-full font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {segment.items.length} {segment.items.length === 1 ? "Partner" : "Partners"}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm font-bold text-brand-600 group-hover:text-accent-600 transition-colors">
            View Details
          </span>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-600 text-white group-hover:bg-accent-600 transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
