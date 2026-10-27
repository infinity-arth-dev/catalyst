"use client";

import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import { Handshake } from "lucide-react";

const partners = [
  { name: "ADAPTIVE", image: "/partners/adaptive.jpg" },
  { name: "Smith+Nephew", image: "/partners/smithnephew-img.jpg" },
  { name: "VSY BIOTECHNOLOGY", image: "/partners/vsybio.jpg" },
  { name: "Rusan", image: "/partners/rusan.jpg" },
  { name: "Nuvigen", image: "/partners/nuvigen.jpg" },
  { name: "Dentsply Sirona", image: "/partners/dentsply.jpg" },
  { name: "CardinalHealth", image: "/partners/cardinalhealth.jpg" },
  { name: "LivaNova", image: "/partners/livanova.jpg" },
  { name: "ChemoTech", image: "/partners/chemotech.jpg" },
  { name: "BioLine", image: "/partners/bioline.jpg" },
];

// Duplicate partners for seamless, continuous infinite loop
const marqueePartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-16 sm:py-24 bg-white border-t border-[#DCE6EE] overflow-hidden">
      <style>{`
        @keyframes smoothSlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .partner-marquee-track {
          display: flex;
          width: max-content;
          animation: smoothSlide 26s linear infinite;
          will-change: transform;
        }

        .partner-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>

      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <Container>
        {/* Blueprint Section 07 Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#E8502A] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
            <Handshake className="w-3.5 h-3.5 text-[#E8502A] animate-spin-slow" />
            <span>Global OEM Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            <span className="text-[#00AEEF]">Working with Trusted</span>{" "}
            <span className="text-[#E8502A]">Technology Partners</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Collaborating with world-leading medical device innovators to deliver validated healthcare excellence across India.
          </p>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
            <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
          </div>
        </AnimatedSection>
      </Container>

      {/* Auto Sliding Marquee UI */}
      <AnimatedSection animation="scale-in" delay={150}>
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Subtle edge fade overlays for smooth aesthetic */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Continuous Moving Track */}
          <div className="partner-marquee-track flex gap-5">
            {marqueePartners.map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="group flex-none w-[190px] sm:w-[210px] md:w-[220px] h-24 sm:h-26 rounded-2xl border border-[#DCE6EE] bg-white p-4 shadow-2xs hover:shadow-lg hover:border-[#00AEEF]/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer select-none relative overflow-hidden"
              >
                {/* Subtle top indicator on hover matching logo */}
                <div className="absolute top-0 inset-x-8 h-1 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="220px"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
