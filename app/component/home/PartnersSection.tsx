"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, Handshake } from "lucide-react";

const partners = [
  {
    name: "ADAPTIVE",
    image: "/partners/adaptive.jpg",
  },
  {
    name: "Smith+Nephew",
    image: "/partners/smithnephew-img.jpg",
  },
  {
    name: "VSY BIOTECHNOLOGY",
    image: "/partners/vsybio.jpg",
  },
  {
    name: "Rusan",
    image: "/partners/rusan.jpg",
  },
  {
    name: "Nuvigen",
    image: "/partners/nuvigen.jpg",
  },
  {
    name: "Dentsply Sirona",
    image: "/partners/dentsply.jpg",
  },
  {
    name: "CardinalHealth",
    image: "/partners/cardinalhealth.jpg",
  },
  {
    name: "LivaNova",
    image: "/partners/livanova.jpg",
  },
  {
    name: "ChemoTech",
    image: "/partners/chemotech.jpg",
  },
  {
    name: "BioLine",
    image: "/partners/bioline.jpg",
  },
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

  // Auto-scroll effect: advances every 2.8s, loops back when reaching the end
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
      }
    }, 2800);

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
    <section className="relative py-16 sm:py-24 bg-white border-t border-slate-200/70 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2 animate-pulse-glow" />

      <Container>
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Handshake className="w-3.5 h-3.5 text-accent-600" />
            <span>Trusted Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
            Our Global Partners
          </h2>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-brand-600" />
            <div className="h-1.5 w-4 rounded-full bg-accent-600" />
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
              className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50 hover:shadow-lg disabled:opacity-20 disabled:cursor-not-allowed z-10 mr-3 cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable Container with Logo Cards */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex w-full gap-5 overflow-x-auto py-5 px-1 scroll-smooth snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              {partners.map((p, idx) => (
                <div
                  key={p.name}
                  className="group flex-none w-[200px] sm:w-[220px] md:w-[230px] h-24 sm:h-28 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:shadow-xl hover:shadow-brand-900/10 hover:border-brand-500 hover:-translate-y-1.5 transition-all duration-300 snap-start flex items-center justify-center cursor-pointer select-none relative overflow-hidden"
                  onClick={() => scrollToIndex(idx)}
                >
                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-0 inset-x-8 h-1 rounded-b-full bg-gradient-to-r from-brand-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="240px"
                      className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-110"
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
              className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50 hover:shadow-lg disabled:opacity-20 disabled:cursor-not-allowed z-10 ml-3 cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {partners.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to partner ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-8 bg-brand-600 shadow-xs shadow-brand-600/40"
                    : "w-2 bg-slate-300 hover:bg-slate-400 hover:w-3"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
