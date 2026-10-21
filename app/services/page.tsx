import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../component/ui/Container";
import AnimatedSection from "../component/ui/AnimatedSection";
import { services } from "../data/services";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lightbulb,
  Gauge,
  ShieldAlert,
  Truck,
  Building2,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Catalyst Biomedicals",
  description:
    "Explore our medical distribution, logistics, biomedical equipment calibration, standby loaner fleet, and patient care services.",
};

const serviceIcons = [
  Lightbulb,
  Gauge,
  ShieldAlert,
  Truck,
  Building2,
  HeartHandshake,
];

export default function ServicesPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Top Banner — Full-width Horizontal Strip with Services Image */}
      <section className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-brand-950">
        <Image
          src="/images/services-banner.jpg"
          alt="Biomedical Healthcare Services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay to ensure text legibility while displaying the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/50 to-brand-950/85 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-600 animate-ping" />
            <div className="text-xs font-mono tracking-widest text-brand-100 flex items-center gap-2">
              <span>CALIBRATION</span> • <span>SUPPORT</span> • <span>LOANERS</span> • <span>LOGISTICS</span>
            </div>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
              Services
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Our Services Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-50/60 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-50/50 rounded-full blur-3xl pointer-events-none animate-float" />

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-20">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00AEEF] bg-[#d8f2fd]/70 px-3.5 py-1.5 rounded-full border border-[#00AEEF]/30">
              Healthcare Solutions
            </span>
            {/* Title with Blue Color Theme matching logo icon */}
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#00AEEF] tracking-tight leading-tight">
              Our Services
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
              Delivering precision medical technology evaluation, certified equipment calibration, emergency standby loaners, and cold-chain distribution across India.
            </p>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </AnimatedSection>

          {/* 3-Column / 2-Column Responsive Grid of Elevated Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length] || Lightbulb;
              return (
                <AnimatedSection
                  key={service.title}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <div className="group relative flex flex-col text-left rounded-3xl border border-[#DCE6EE] bg-white p-7 sm:p-8 shadow-sm hover:shadow-2xl hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full justify-between">
                    {/* Top border glow on hover matching logo */}
                    <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Watermark number */}
                    <span className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-slate-100 group-hover:text-[#d8f2fd] transition-colors select-none">
                      0{index + 1}
                    </span>

                    <div>
                      {/* Icon */}
                      <div className="relative w-14 h-14 rounded-2xl border border-[#00AEEF]/25 bg-[#d8f2fd]/60 text-[#00AEEF] flex items-center justify-center mb-6 shadow-2xs group-hover:bg-[#00AEEF] group-hover:text-white group-hover:border-[#00AEEF] group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Service Title using Blue Color Theme matching logo icon */}
                      <h3 className="text-lg sm:text-xl font-black text-[#00AEEF] mb-3 group-hover:text-[#00AEEF] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      {service.highlights && service.highlights.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                          {service.highlights.slice(0, 3).map((point) => (
                            <div key={point} className="flex items-start gap-2 text-xs font-semibold text-[#00AEEF]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AEEF] hover:opacity-80 transition-opacity"
                      >
                        <span>Enquire Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <div className="h-1 w-10 rounded-full bg-slate-200 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-accent-600 transition-all duration-300" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Quick Pillars Banner */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-16 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-brand-600">24/7</span>
              <span className="text-xs font-bold text-brand-800 mt-1 block">Support &amp; Service</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-brand-600">100%</span>
              <span className="text-xs font-bold text-brand-800 mt-1 block">Quality Calibration</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-brand-600">Pan-India</span>
              <span className="text-xs font-bold text-brand-800 mt-1 block">Logistics Network</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-brand-600">Standby</span>
              <span className="text-xs font-bold text-brand-800 mt-1 block">Loaner Fleet</span>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
