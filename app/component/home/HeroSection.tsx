"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Activity,
  Globe2,
  BadgeCheck,
  PhoneCall,
  ChevronRight,
  HeartPulse,
} from "lucide-react";

export default function HeroSection() {
  const specialties = [
    { name: "Orthopedics", href: "/products/orthopedics" },
    { name: "Neurology", href: "/products/neurology" },
    { name: "Ophthalmology", href: "/products/ophthalmology" },
    { name: "Dental", href: "/products/dental" },
    { name: "ENT", href: "/products/ent" },
    { name: "DVT", href: "/products/dvt" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-[#F4F9FD] to-[#EAF5F8] text-slate-800">
      {/* ── Interactive Biomedical High-Tech Animated Background ── */}
      <HeroBackgroundAnimation />

      {/* ── Main Content Container ── */}
      <Container className="relative z-10 flex-1 flex items-center py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column: Storytelling, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Blueprint Eyebrow: MEDICAL TECHNOLOGY · HEALTHCARE SOLUTIONS */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d8f2fd]/90 backdrop-blur-md px-4 py-1.5 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold tracking-widest uppercase shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00AEEF]" />
                </span>
                <span>Medical Technology · Healthcare Solutions</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50/90 border border-orange-200/90 px-3.5 py-1 text-[#E8502A] text-xs font-bold backdrop-blur-md shadow-xs animate-pulse">
                <BadgeCheck className="w-3.5 h-3.5 text-[#E8502A]" />
                <span>Estd. 2015 · India</span>
              </div>
            </div>

            {/* Main Tagline Heading — No Black Color! Logo Colors: Cyan #00AEEF and Orange #E8502A */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.14] tracking-tight animate-fade-in-up">
              <span className="text-[#00AEEF] inline-block">Advancing Healthcare</span>{" "}
              <span className="text-brand-900">Through</span>{" "}
              <span className="bg-gradient-to-r from-[#00AEEF] via-[#29bbf4] to-[#E8502A] bg-clip-text text-transparent drop-shadow-xs">
                Trusted Medical Innovation.
              </span>
            </h1>

            {/* Minimal Brand Tagline in Logo Coral & Cyan */}
            <p className="mt-4 text-base sm:text-lg font-black tracking-wider uppercase flex items-center gap-2 animate-fade-in-up [animation-delay:150ms]">
              <Sparkles className="w-4 h-4 text-[#E8502A] animate-spin-slow shrink-0" />
              <span className="text-[#E8502A]">Bringing Quality</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF] animate-ping" />
              <span className="text-[#00AEEF]">To Life</span>
            </p>

            {/* Supporting Copy */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-in-up [animation-delay:250ms]">
              Discover medical technologies, specialised products and dependable service support designed around the rigorous needs of healthcare professionals across India.
            </p>

            {/* 3 Trusted Value Props Cards with Card Lift & Glow Animations */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 animate-fade-in-up [animation-delay:350ms]">
              {/* Card 1: Certified Medical Supply */}
              <div className="group/card relative rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE6EE] p-3.5 shadow-sm card-lift-glow">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d8f2fd]/90 text-[#00AEEF] border border-[#00AEEF]/40 group-hover/card:scale-110 group-hover/card:bg-[#00AEEF] group-hover/card:text-white transition-all duration-300 shadow-2xs">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-[#00AEEF] leading-snug group-hover/card:text-brand-700 transition-colors">
                      Certified Supply
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      ISO &amp; CE Certified Products
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: 24/7 Clinical Support with Live Animated Heartbeat ECG */}
              <div className="group/card relative rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE6EE] p-3.5 shadow-sm card-lift-glow hover:border-[#E8502A]">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#E8502A] border border-orange-200 group-hover/card:scale-110 group-hover/card:bg-[#E8502A] group-hover/card:text-white transition-all duration-300 shadow-2xs">
                    <Activity className="h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-extrabold text-[#E8502A] leading-snug group-hover/card:text-orange-600 transition-colors">
                      24/7 Clinical Support
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      Biomedical Specialists On-Call
                    </p>
                    {/* Live ECG Line Micro-Visualizer */}
                    <div className="mt-1.5 h-3 flex items-center">
                      <svg
                        className="w-full h-3 text-[#E8502A] group-hover/card:text-orange-600 transition-colors"
                        viewBox="0 0 120 16"
                        fill="none"
                      >
                        <path
                          d="M0 8 H35 L40 2 L47 14 L53 4 L58 11 L62 8 H120"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-ecg-line"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Global Brand Network */}
              <div className="group/card relative rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE6EE] p-3.5 shadow-sm card-lift-glow">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d8f2fd]/90 text-[#00AEEF] border border-[#00AEEF]/40 group-hover/card:scale-110 group-hover/card:bg-[#00AEEF] group-hover/card:text-white transition-all duration-300 shadow-2xs">
                    <Globe2 className="h-5 w-5 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-[#00AEEF] leading-snug group-hover/card:text-brand-700 transition-colors">
                      Global Brands
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      Tier-1 International Brands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dual CTAs with Visible Shimmer & Hover Lifts */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 animate-fade-in-up [animation-delay:450ms]">
              <Link
                href="/products"
                className="btn-shimmer inline-flex items-center gap-2.5 rounded-xl bg-[#00AEEF] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#00AEEF]/30 hover:bg-[#0092d0] hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-white" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#00AEEF] bg-white px-6 py-3.5 font-bold text-[#00AEEF] hover:bg-[#d8f2fd]/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-sm group"
              >
                <span>Talk to Our Team</span>
                <ChevronRight className="w-4 h-4 text-[#00AEEF] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          </div>

          {/* Right Column: Clean Biomedical Lab Visual Frame with Floating Animated Badges */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Soft Ambient Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00AEEF]/25 via-[#E8502A]/15 to-[#00AEEF]/15 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Top-Left Micro Badge */}
              <div className="absolute -top-3.5 -left-3.5 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-1.5 shadow-xl border border-[#00AEEF]/40 backdrop-blur-md animate-bio-breathing">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]" />
                </span>
                <span className="text-[11px] font-black tracking-wide text-brand-900">
                  <span className="text-[#00AEEF]">100% Validated</span> Precision
                </span>
              </div>

              {/* Main Image Card with Animated Border */}
              <div className="relative overflow-hidden rounded-3xl bg-white border border-[#DCE6EE] shadow-xl backdrop-blur-md transition-all duration-500 group-hover:border-[#00AEEF]/60 group-hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/hero-biomedical-lab.jpg"
                    alt="Catalyst Biomedical Laboratory & Healthcare Equipment"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge: ISO & CE Certified with Pulsing Ring */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-lg border border-slate-100 backdrop-blur-md text-brand-700">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                    </span>
                    <span className="text-[11px] font-extrabold tracking-wide uppercase text-[#00AEEF]">
                      ISO &amp; CE Certified
                    </span>
                  </div>

                  {/* Bottom Quality Highlights with Real-Time ECG Heartbeat */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl border border-slate-100 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d8f2fd]/80 text-[#00AEEF] border border-[#00AEEF]/30 shadow-2xs">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#00AEEF] block">
                          Zero Margin of Error
                        </span>
                        <span className="text-xs font-bold text-slate-800 leading-tight block">
                          Highest Clinical Standards
                        </span>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end pl-3 border-l border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Response</span>
                      <span className="text-xs font-black text-emerald-600 flex items-center gap-1">
                        <HeartPulse className="w-3.5 h-3.5 text-[#E8502A] animate-heartbeat" />
                        24/7 Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Specialties Access Strip */}
                <div className="p-3 bg-slate-50/80 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF] animate-ping" />
                      <span className="text-brand-900 font-bold">Clinical Specialties</span>
                    </span>
                    <Link
                      href="/products"
                      className="text-[11px] font-bold text-[#00AEEF] hover:text-[#E8502A] hover:underline flex items-center gap-0.5 transition-colors"
                    >
                      View All
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {specialties.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="text-[11px] font-semibold text-slate-700 bg-white hover:bg-[#00AEEF] hover:text-white border border-slate-200 hover:border-[#00AEEF] rounded-lg px-2.5 py-1 transition-all shadow-2xs hover:scale-105"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}