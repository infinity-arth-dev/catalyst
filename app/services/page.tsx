import type { Metadata } from "next";
import Image from "next/image";
import Container from "../component/ui/Container";
import AnimatedSection from "../component/ui/AnimatedSection";
import ServicesBackgroundAnimation from "../component/home/ServicesBackgroundAnimation";
import { services } from "../data/services";
import {
  CheckCircle2,
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
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#00AEEF] animate-ping" />
            <div className="text-xs font-mono tracking-widest text-white flex items-center gap-2">
              <span>CONSULTANT</span> • <span>SUPPORT</span> • <span>ASSISTANCE</span>
            </div>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00AEEF]">Our</span>{" "}
              <span className="text-[#E8502A]">Services</span>
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Our Services Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        {/* ── Interactive Biomedical High-Tech Animated Background ── */}
        <ServicesBackgroundAnimation />

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-20">
            <span className="text-xs uppercase font-bold tracking-wider text-[#E8502A] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-xs">
              Services
            </span>
            {/* Title with Logo Color Theme: Cyan & Orange */}
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="text-[#00AEEF]">Our</span>{" "}
              <span className="text-[#E8502A]">Services</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
              Delivering precision medical technology evaluation, certified equipment calibration, emergency standby loaners, and cold-chain distribution across India.
            </p>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
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
                  <div className="group relative flex flex-col text-left rounded-3xl border border-[#DCE6EE] bg-white p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full justify-between">
                    {/* Top border glow on hover matching logo */}
                    <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <div>
                      {/* Clean Minimal Image Header */}
                      {service.image && (
                        <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 border border-slate-100 bg-slate-100">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent pointer-events-none" />

                          {/* Minimal Number Badge */}
                          <span className="absolute top-3 right-3 text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-700 shadow-xs border border-white/60">
                            0{index + 1}
                          </span>

                          {/* Minimal Icon Badge */}
                          <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shadow-md border border-white/60 group-hover:bg-[#00AEEF] group-hover:text-white transition-colors duration-300">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                        </div>
                      )}

                      {/* Service Title */}
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#00AEEF] transition-colors leading-snug mb-2.5">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      {service.highlights && service.highlights.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                          {service.highlights.slice(0, 3).map((point) => (
                            <div key={point} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Minimal bottom accent indicator */}
                    <div className="mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between">
                      <div className="h-0.5 w-8 rounded-full bg-slate-200 group-hover:w-14 group-hover:bg-slate-300 transition-all duration-300" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Quick Pillars Banner */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-16 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
              <span className="block text-2xl font-black text-slate-800">24/7</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 block">Support &amp; Service</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
              <span className="block text-2xl font-black text-slate-800">100%</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 block">Quality Calibration</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
              <span className="block text-2xl font-black text-slate-800">Pan-India</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 block">Logistics Network</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
              <span className="block text-2xl font-black text-slate-800">Standby</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 block">Loaner Fleet</span>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
