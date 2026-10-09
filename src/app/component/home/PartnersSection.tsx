"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/component/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <Container>
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
            Trusted Collaborations
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Partners
          </h2>
          {/* Centered accent divider matching logo palette */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-accent-600" />
            <div className="h-1.5 w-4 rounded-full bg-brand-600" />
          </div>
        </div>

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
            className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50/40 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed z-10 mr-3 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container with Logo Cards */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex w-full gap-5 overflow-x-auto py-4 px-1 scroll-smooth snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {partners.map((p, idx) => (
              <div
                key={p.name}
                className="group flex-none w-[200px] sm:w-[220px] md:w-[230px] h-24 sm:h-28 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:shadow-lg hover:shadow-brand-900/5 hover:border-brand-600 hover:-translate-y-1 transition-all duration-300 snap-start flex items-center justify-center cursor-pointer select-none relative overflow-hidden"
                onClick={() => scrollToIndex(idx)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="240px"
                    className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-105"
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
            className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50/40 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed z-10 ml-3 cursor-pointer active:scale-95"
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
                  ? "w-8 bg-brand-600 shadow-xs shadow-brand-600/30"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
