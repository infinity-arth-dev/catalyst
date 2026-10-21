"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Activity,
  Globe2,
  BadgeCheck,
  PhoneCall,
  ChevronDown,
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
      {/* ── Background Biomedical DNA Animation with Light Clinical Overlay ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-biomedical-lab.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center animate-subtle-zoom opacity-15 mix-blend-multiply"
        >
          <source src="/videos/dna-background-video.mp4" type="video/mp4" />
        </video>

        {/* Light Clinical Soft Gradients matching logo and clinical white blueprint */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-[#EAF5F8]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAF5F8] via-transparent to-white/70" />

        {/* Ambient Cyan/Orange Glows matching logo colors */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#00AEEF]/10 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E8502A]/8 blur-3xl pointer-events-none animate-float-slow" />
      </div>

      {/* ── Main Content Container ── */}
      <Container className="relative z-10 flex-1 flex items-center py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column: Storytelling, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Blueprint Eyebrow: MEDICAL TECHNOLOGY · HEALTHCARE SOLUTIONS */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d8f2fd]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#00AEEF]/30 text-[#00AEEF] text-xs font-bold tracking-widest uppercase shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]" />
                </span>
                <span>Medical Technology · Healthcare Solutions</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-emerald-700 text-xs font-bold backdrop-blur-md shadow-2xs">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Estd. 2015 · India</span>
              </div>
            </div>

            {/* Blueprint Headline: Advancing Healthcare Through Trusted Medical Innovation */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-slate-900 animate-fade-in-up">
              Advancing Healthcare Through{" "}
              <span className="text-[#00AEEF] inline-block">
                Trusted Medical
              </span>{" "}
              Innovation.
            </h1>

            {/* Minimal Brand Tagline */}
            <p className="mt-3.5 text-base sm:text-lg font-bold tracking-wide text-[#00AEEF] uppercase flex items-center gap-2 animate-fade-in-up [animation-delay:150ms]">
              <Sparkles className="w-4 h-4 text-accent-500 animate-spin-slow shrink-0" />
              <span>Bringing Quality to Life</span>
            </p>

            {/* Blueprint Supporting Copy */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-in-up [animation-delay:250ms]">
              Discover medical technologies, specialised products and dependable service support designed around the rigorous needs of healthcare professionals across India.
            </p>

            {/* 3 Trusted Value Props Cards (Preserved with Live ECG Visualizer) */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 animate-fade-in-up [animation-delay:350ms]">
              {/* Card 1: Certified Medical Supply */}
              <div className="group/card relative rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE6EE] p-3.5 shadow-sm hover:bg-white hover:border-[#00AEEF] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d8f2fd]/80 text-[#00AEEF] border border-[#00AEEF]/30 group-hover/card:scale-105 group-hover/card:bg-[#00AEEF] group-hover/card:text-white transition-all duration-300 shadow-2xs">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-slate-900 leading-snug group-hover/card:text-[#00AEEF] transition-colors">
                      Certified Supply
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      ISO &amp; CE Certified Products
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: 24/7 Clinical Support with Live ECG Line */}
              <div className="group/card relative rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE6EE] p-3.5 shadow-sm hover:bg-white hover:border-accent-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500 border border-accent-200 group-hover/card:scale-105 group-hover/card:bg-accent-500 group-hover/card:text-white transition-all duration-300 shadow-2xs">
                    <Activity className="h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-bold text-slate-900 leading-snug group-hover/card:text-accent-500 transition-colors">
                      24/7 Clinical Support
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      Biomedical Specialists On-Call
                    </p>
                    {/* Live ECG Line Micro-Visualizer */}
                    <div className="mt-1.5 h-3 flex items-center">
                      <svg
                        className="w-full h-3 text-accent-500 group-hover/card:text-accent-600 transition-colors"
                        viewBox="0 0 120 16"
                        fill="none"
                      >
                        <path
                          d="M0 8 H35 L40 2 L47 14 L53 4 L58 11 L62 8 H120"
                          stroke="currentColor"
                          strokeWidth="2"
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
              <div className="group/card relative rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE6EE] p-3.5 shadow-sm hover:bg-white hover:border-[#00AEEF] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d8f2fd]/80 text-[#00AEEF] border border-[#00AEEF]/30 group-hover/card:scale-105 group-hover/card:bg-[#00AEEF] group-hover/card:text-white transition-all duration-300 shadow-2xs">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-slate-900 leading-snug group-hover/card:text-[#00AEEF] transition-colors">
                      Global Brands
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-snug">
                      Tier-1 International Brands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dual CTAs: Explore Products & Talk to Our Team */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 animate-fade-in-up [animation-delay:450ms]">
              <Link
                href="/products"
                className="btn-shimmer inline-flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-white" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 bg-white px-6 py-3.5 font-bold text-brand-600 hover:bg-brand-50 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm group"
              >
                <span>Talk to Our Team</span>
                <ChevronRight className="w-4 h-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs font-bold text-slate-700 hover:border-accent-500 hover:text-accent-600 transition-all shadow-2xs group"
              >
                <PhoneCall className="w-3.5 h-3.5 text-accent-500 group-hover:animate-bounce" />
                <span>Hospital Inquiries Desk</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Biomedical Lab Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Soft Ambient Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00AEEF]/20 via-[#E8502A]/10 to-[#00AEEF]/10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Main Image Card with Minimal Scaling */}
              <div className="relative overflow-hidden rounded-3xl bg-white border border-[#DCE6EE] shadow-xl backdrop-blur-md transition-all duration-500 group-hover:border-[#00AEEF]/50 group-hover:-translate-y-1">
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

                  {/* Top Badge: ISO & CE Certified */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-lg border border-slate-100 backdrop-blur-md text-brand-700">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                    </span>
                    <span className="text-[11px] font-extrabold tracking-wide uppercase">
                      ISO &amp; CE Certified
                    </span>
                  </div>

                  {/* Bottom Quality Highlights */}
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
                        <HeartPulse className="w-3 h-3 text-accent-500 animate-pulse" />
                        24/7 Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Specialties Access Strip */}
                <div className="p-3 bg-slate-50/80 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
                      Clinical Specialties
                    </span>
                    <Link
                      href="/products"
                      className="text-[11px] font-bold text-[#00AEEF] hover:underline flex items-center gap-0.5"
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
                        className="text-[11px] font-semibold text-slate-700 bg-white hover:bg-[#00AEEF] hover:text-white border border-slate-200 hover:border-[#00AEEF] rounded-lg px-2.5 py-1 transition-all shadow-2xs"
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