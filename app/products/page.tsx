"use client";

import Image from "next/image";
import Container from "@/component/ui/Container";
import AnimatedSection from "@/component/ui/AnimatedSection";
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
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-600 animate-ping" />
            <div className="text-xs font-mono tracking-widest text-brand-100 flex items-center gap-2">
              <span>SUPPLY</span> • <span>DISTRIBUTION</span> • <span>INNOVATION</span>
            </div>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
              Products
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Heading */}
      <section className="pt-16 pb-10 bg-white relative overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-0 right-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up" className="text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600 bg-accent-50 px-3.5 py-1.5 rounded-full border border-accent-100">
              Healthcare Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight leading-tight">
              Our Products
            </h2>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
            <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our comprehensive healthcare portfolio spanning orthopedics,
              neurology, ophthalmology, dental, ENT, DVT management, hospital supply,
              and oncology — powered by global partners.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* GRID OF SMALL CARDS */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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