"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import { services } from "../../data/services";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Wrench,
  Truck,
  HeartHandshake,
  Lightbulb,
  ShieldAlert,
  Building2,
  Gauge,
} from "lucide-react";

const serviceIcons = [
  Lightbulb,
  Gauge,
  ShieldAlert,
  Truck,
  Building2,
  HeartHandshake,
];

const serviceImages = [
  "/images/services-banner.jpg",
  "/images/hero-biomedical-lab.jpg",
  "/images/vision-biomedical.jpg",
  "/images/why-choose-us-banner.jpg",
  "/images/about-biomedical-team.jpg",
  "/images/mission-healthcare.jpg",
];

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeService = services[selectedIndex] || services[0];
  const activeImage = serviceImages[selectedIndex] || serviceImages[0];

  return (
    <section className="relative bg-white py-20 sm:py-28 border-t border-[#DCE6EE] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-800/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-600" />
            <span>Operational &amp; Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            From breakthrough technology evaluation and clinical calibration to 24/7 emergency loaner units and cold-chain distribution.
          </p>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-brand-600" />
            <div className="h-1.5 w-4 rounded-full bg-accent-600" />
          </div>
        </AnimatedSection>

        {/* Editorial Two-Column Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 6 Interactive Service Selector Rows with Blue Color Theme */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-2.5 mb-8">
              {services.map((item, idx) => {
                const Icon = serviceIcons[idx] || Lightbulb;
                const isSelected = selectedIndex === idx;

                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => setSelectedIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                      isSelected
                        ? "bg-brand-50/80 border-brand-500 shadow-md -translate-y-0.5"
                        : "bg-[#F4F7FA] border-[#DCE6EE] hover:bg-white hover:border-brand-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isSelected
                              ? "bg-[#00AEEF] text-white"
                              : "bg-white text-[#00AEEF] border border-[#00AEEF]/25"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          {/* Heading tab titles use blue theme matching logo icon */}
                          <h3
                            className={`text-sm sm:text-base transition-colors ${
                              isSelected ? "text-[#00AEEF] font-black" : "text-[#00AEEF]/80 hover:text-[#00AEEF] font-bold"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected
                            ? "translate-x-1 text-[#00AEEF]"
                            : "text-[#00AEEF]/40"
                        }`}
                      />
                    </div>

                    {/* Blue Underline and Key Highlights on Selected Row */}
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-[#00AEEF]/25 animate-fade-in">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                        {item.highlights && (
                          <ul className="mt-3 space-y-1.5">
                            {item.highlights.slice(0, 2).map((h, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs font-semibold text-[#00AEEF]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-700 transition-all shadow-md shadow-brand-600/25 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3.5 text-sm font-bold text-brand-700 hover:border-brand-600 hover:text-brand-600 transition-all shadow-2xs"
              >
                <span>Request Service Support</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Resolution Visual with 300ms Crossfade */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-brand-100/30 to-brand-800/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#DCE6EE] bg-slate-900 shadow-2xl transition-all duration-500">
                <Image
                  key={activeImage}
                  src={activeImage}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-opacity duration-300 ease-in-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Service Badge */}
                <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl bg-brand-950/90 p-4 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-100 block mb-0.5">
                        Clinical Capability
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {activeService.title}
                      </h4>
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-100 hover:underline shrink-0 pl-2"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
