"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import ServicesBackgroundAnimation from "./ServicesBackgroundAnimation";
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
  "/images/services/service-1-innovative-solutions.jpg",
  "/images/services/service-2-calibration-testing.jpg",
  "/images/services/service-3-standby-loaner.jpg",
  "/images/services/service-4-cold-chain-logistics.jpg",
  "/images/services/service-5-turnkey-integration.jpg",
  "/images/services/service-6-patient-care.jpg",
];

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeService = services[selectedIndex] || services[0];
  const activeImage = serviceImages[selectedIndex] || serviceImages[0];

  return (
    <section className="relative bg-white py-20 sm:py-28 border-t border-[#DCE6EE] overflow-hidden">
      {/* ── Interactive Biomedical High-Tech Animated Background ── */}
      <ServicesBackgroundAnimation />

      <Container className="relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#E8502A] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E8502A] animate-spin-slow" />
            <span>Operational &amp; Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            <span className="text-[#00AEEF]">Our Specialized</span>{" "}
            <span className="text-[#E8502A]">Services</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            From breakthrough technology evaluation and clinical calibration to 24/7 emergency loaner units and cold-chain distribution.
          </p>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
            <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
          </div>
        </AnimatedSection>

        {/* Editorial Two-Column Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 6 Interactive Service Selector Rows with Image Thumbnails */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-2.5 mb-8">
              {services.map((item, idx) => {
                const Icon = serviceIcons[idx] || Lightbulb;
                const isSelected = selectedIndex === idx;
                const itemImg = serviceImages[idx] || serviceImages[0];

                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => setSelectedIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                      isSelected
                        ? "bg-brand-50/90 border-[#00AEEF] shadow-md -translate-y-0.5"
                        : "bg-[#F4F7FA] border-[#DCE6EE] hover:bg-white hover:border-[#00AEEF]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0 flex-1">
                        {/* Interactive Mini Image Thumbnail with Hover Zoom */}
                        <div className="relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-xl overflow-hidden border border-[#DCE6EE] group-hover:border-[#00AEEF] shadow-xs">
                          <Image
                            src={itemImg}
                            alt={item.title}
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                          />
                          {/* Image subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                          <div
                            className={`absolute inset-0 bg-[#00AEEF]/20 transition-opacity duration-300 ${
                              isSelected ? "opacity-30" : "opacity-0 group-hover:opacity-20"
                            }`}
                          />
                          {/* Mini icon badge */}
                          <div className="absolute top-1 left-1 flex h-5 w-5 items-center justify-center rounded-md bg-white/95 text-[#00AEEF] shadow-2xs">
                            <Icon className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Heading & Tag */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                              0{idx + 1}
                            </span>
                            {isSelected && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#E8502A] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                                Active Preview
                              </span>
                            )}
                          </div>
                          <h3
                            className={`text-sm sm:text-base leading-snug truncate transition-colors ${
                              isSelected ? "text-[#00AEEF] font-black" : "text-slate-800 group-hover:text-[#00AEEF] font-bold"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                          isSelected
                            ? "bg-[#00AEEF] text-white shadow-xs translate-x-0.5"
                            : "bg-white text-slate-400 group-hover:text-[#00AEEF] group-hover:bg-[#d8f2fd]/50 border border-slate-200"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Highlights on Selected Row */}
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-[#00AEEF]/25 animate-fade-in">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                        {item.highlights && (
                          <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {item.highlights.slice(0, 2).map((h, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-1.5 text-xs text-slate-600 font-medium"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{h}</span>
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
                className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-[#00AEEF] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#0092d0] transition-all shadow-md shadow-[#00AEEF]/25 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-[#00AEEF]/40 bg-white px-5 py-3.5 text-sm font-bold text-[#00AEEF] hover:bg-[#d8f2fd]/40 transition-all shadow-2xs"
              >
                <span>Request Service Support</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Resolution Showcase Visual with Rich Hover Effects */}
          <div className="lg:col-span-5">
            <div className="relative group/mainimg">
              {/* Soft Ambient Glow Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00AEEF]/25 via-[#E8502A]/15 to-[#00AEEF]/20 blur-xl opacity-75 group-hover/mainimg:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main Image Container Card with Hover Zoom & Glow */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-[#DCE6EE] group-hover/mainimg:border-[#00AEEF] bg-slate-900 shadow-xl card-lift-glow transition-all duration-500">
                <Image
                  key={activeImage}
                  src={activeImage}
                  alt={activeService.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover/mainimg:scale-110 group-hover/mainimg:brightness-105"
                />

                {/* Shimmer Light Reflection Sweep crossing on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/mainimg:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Dynamic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent pointer-events-none" />

                {/* Top-Right Floating Live Telemetry Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-lg border border-slate-100 backdrop-blur-md transition-transform duration-300 group-hover/mainimg:scale-105">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#00AEEF]">
                    Certified Service
                  </span>
                </div>

                {/* Top-Left Service Number Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/70 backdrop-blur-md px-3 py-1 text-white border border-white/20 text-xs font-mono font-bold">
                  <span className="text-[#E8502A]">0{selectedIndex + 1}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/70">06</span>
                </div>

                {/* Bottom Floating Service Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-slate-950/85 p-4 border border-white/15 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover/mainimg:border-[#00AEEF]/50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00AEEF] block mb-1">
                        Clinical Capability
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-white leading-snug drop-shadow-sm truncate">
                        {activeService.title}
                      </h4>
                    </div>

                    <Link
                      href="/services"
                      className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00AEEF] text-white hover:bg-[#E8502A] transition-colors shadow-md group/arrow"
                      aria-label="View Service Details"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/arrow:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Interactive Thumbnail Photo Gallery Strip Beneath Main Visual */}
              {/* <div className="mt-4 flex items-center justify-between gap-2 overflow-x-auto pb-1">
                {serviceImages.map((img, idx) => {
                  const isActive = selectedIndex === idx;
                  return (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      aria-label={`Preview service ${idx + 1}`}
                      className={`group/thumb relative flex-1 min-w-[50px] aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#00AEEF] ring-2 ring-[#00AEEF]/40 scale-105 shadow-md shadow-[#00AEEF]/20"
                          : "border-slate-200 hover:border-[#00AEEF]/60 opacity-60 hover:opacity-100 hover:scale-105"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Service thumbnail ${idx + 1}`}
                        fill
                        sizes="70px"
                        className="object-cover transition-transform duration-300 group-hover/thumb:scale-115"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-[#00AEEF]/25 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
