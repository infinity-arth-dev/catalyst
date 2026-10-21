"use client";

import Link from "next/link";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import ProductGrid from "../../products/ProductGrid";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#F4F7FA] border-t border-[#DCE6EE]">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-800/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200/80 text-brand-700 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-accent-600" />
            <span>Comprehensive Medical Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight leading-tight">
            Medical Specialties
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Discover precision medical devices, implants, and vital clinical supplies across 8 key therapeutic disciplines.
          </p>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-brand-600" />
            <div className="h-1.5 w-4 rounded-full bg-accent-600" />
          </div>
        </AnimatedSection>

        {/* 8-Card Responsive Grid */}
        <AnimatedSection animation="fade-up" delay={150}>
          <ProductGrid />
        </AnimatedSection>

        {/* View Full Catalogue CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-all shadow-md shadow-brand-600/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>View Complete Product Catalogue</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
