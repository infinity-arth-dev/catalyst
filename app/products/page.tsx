"use client";

import Image from "next/image";
import Container from "@/component/ui/Container";
import AnimatedSection from "@/component/ui/AnimatedSection";
import NetworkBackgroundCanvas from "../component/ui/NetworkBackgroundCanvas";
import ProductCard from "./ProductCard";

import { PRODUCT_SEGMENTS } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Top Banner — Full-width Horizontal Strip with Products Image */}
      <section className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-brand-950">
        <Image
          src="/products/products-banner.jpg"
          alt="Certified Medical Supply & Distribution"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay to ensure text legibility while displaying the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-brand-950/80 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#00AEEF] animate-ping" />
            <div className="text-xs font-mono tracking-widest text-white flex items-center gap-2">
              <span>SUPPLY</span> • <span>DISTRIBUTION</span> • <span>INNOVATION</span>
            </div>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00AEEF]">Our</span>{" "}
              <span className="text-[#E8502A]">Products</span>
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Heading & Products Grid with High-Tech Biomedical Background Animation */}
      <section className="pt-16 pb-20 sm:pb-28 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
        {/* Active Biomedical Network Constellation Canvas */}
        <NetworkBackgroundCanvas className="absolute inset-0 z-0 pointer-events-none opacity-85" nodeCount={50} maxDistance={160} />
        <div className="absolute top-10 -left-28 w-[500px] h-[500px] rounded-full bg-[#00AEEF]/20 blur-3xl pointer-events-none animate-bio-breathing" />
        <div className="absolute bottom-10 -right-28 w-[500px] h-[500px] rounded-full bg-[#E8502A]/18 blur-3xl pointer-events-none animate-bio-breathing" />

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <span className="text-xs uppercase font-bold tracking-wider text-[#E8502A] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-xs">
              Products
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="text-[#00AEEF]">Medical</span>{" "}
              <span className="text-[#E8502A]">Products</span>
            </h2>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
            <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our comprehensive healthcare portfolio spanning orthopedics,
              neurology, ophthalmology, dental, ENT, DVT management, hospital supply,
              and oncology — powered by global partners.
            </p>
          </AnimatedSection>

          {/* GRID OF SMALL CARDS */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {PRODUCT_SEGMENTS.map((segment, index) => (
              <AnimatedSection
                key={segment.id}
                animation="fade-up"
                delay={index * 60}
                className="h-full flex flex-col"
              >
                <ProductCard segment={segment} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}