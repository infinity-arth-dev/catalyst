"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, Handshake, Sparkles } from "lucide-react";

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

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 240;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(currentIndex, partners.length - 1));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Blueprint marquee auto-scroll effect: pause on hover & when tab is hidden
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 240;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="partners" className="relative py-16 sm:py-24 bg-white border-t border-[#DCE6EE] overflow-hidden">
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

        <AnimatedSection animation="scale-in" delay={150}>
          <div
            className="relative flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Prev Button */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous partners"
              className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE6EE] bg-white text-slate-700 shadow-2xs transition-all duration-200 hover:border-[#00AEEF] hover:text-[#00AEEF] hover:bg-[#EAF5F8] disabled:opacity-20 disabled:cursor-not-allowed z-10 mr-3 cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable Container with Partner Logo Cards */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex w-full gap-5 overflow-x-auto py-4 px-1 scroll-smooth snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              {partners.map((p, idx) => (
                <div
                  key={p.name}
                  className="group flex-none w-[190px] sm:w-[210px] md:w-[220px] h-24 sm:h-26 rounded-2xl border border-[#DCE6EE] bg-white p-4 shadow-2xs hover:shadow-lg hover:border-[#00AEEF]/60 hover:-translate-y-1 transition-all duration-300 snap-start flex items-center justify-center cursor-pointer select-none relative overflow-hidden"
                  onClick={() => scrollToIndex(idx)}
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

            {/* Next Button */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next partners"
              className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE6EE] bg-white text-slate-700 shadow-2xs transition-all duration-200 hover:border-[#00AEEF] hover:text-[#00AEEF] hover:bg-[#EAF5F8] disabled:opacity-20 disabled:cursor-not-allowed z-10 ml-3 cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-7">
            {partners.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to partner ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-7 bg-gradient-to-r from-brand-600 to-accent-600"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400 hover:w-2.5"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
