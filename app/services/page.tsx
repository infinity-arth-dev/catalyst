import type { Metadata } from "next";
import Image from "next/image";
import Container from "../component/ui/Container";
import AnimatedSection from "../component/ui/AnimatedSection";
import { services } from "../data/services";
import { CheckCircle2, Sparkles, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Catalyst Biomedicals",
  description:
    "Explore our medical distribution, logistics, patient care, and biomedical equipment testing services.",
};

const serviceIcons = [
  // 1. Innovative Solutions
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.439v-2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v2.25m4.5 0h-4.5m10.5-8.25a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
  ),
  // 2. Network and Logistics
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.808H16.5M3.75 14.25h16.5m-16.5 0V6a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v8.25" />
    </svg>
  ),
  // 3. Patient Care Program
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  // 4. Equipment Testing and Repair
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m9.25-11.396v5.714a2.25 2.25 0 00.659 1.591L19 14.5M3 19.5h18M6.75 19.5a2.25 2.25 0 002.25-2.25v-2.25m6 4.5a2.25 2.25 0 01-2.25-2.25v-2.25" />
    </svg>
  ),
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-brand-950/80 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-600 animate-ping" />
            <div className="text-xs font-mono tracking-widest text-brand-100 flex items-center gap-2">
              <span>CONSULTANT</span> • <span>SUPPORT</span> • <span>ASSISTANCE</span>
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
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600 bg-accent-50 px-3.5 py-1.5 rounded-full border border-accent-100">
              Healthcare Solutions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight leading-tight">
              Our Services
            </h2>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </AnimatedSection>

          {/* 2x2 Grid of Elevated Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 100}
              >
                <div className="group relative flex flex-col items-center text-center rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  {/* Top border glow visible on hover */}
                  <div className="absolute top-0 inset-x-10 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Subtle corner watermark number */}
                  <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors select-none">
                    0{index + 1}
                  </span>

                  {/* Icon in stylish glowing container */}
                  <div className="relative w-20 h-20 rounded-2xl border-2 border-brand-100 bg-brand-50/80 text-brand-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-600/30 transition-all duration-300">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-accent-600 mb-4 group-hover:text-accent-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Exact detailed Description */}
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
                    {service.description}
                  </p>

                  {/* Highlights Key Takeaways */}
                  {service.highlights && service.highlights.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-100 w-full text-left space-y-2.5 max-w-xl">
                      {service.highlights.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom decorative line that expands on hover */}
                  <div className="mt-8 h-1 w-12 rounded-full bg-slate-200 group-hover:w-28 group-hover:bg-brand-600 transition-all duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quick Pillars Banner */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-16 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-brand-600">24/7</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Support &amp; Service</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-accent-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-accent-600">100%</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Quality Assurance</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-brand-600">Pan-India</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Logistics Network</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-accent-400 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="block text-2xl font-black text-accent-600">Certified</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Trained Specialists</span>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
