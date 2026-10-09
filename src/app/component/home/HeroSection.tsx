import Link from "next/link";
import Image from "next/image";
import Container from "@/component/ui/Container";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/25 to-white border-b border-slate-200/80">
      {/* Subtle ambient brand glows using logo colours */}
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-accent-600/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid min-h-[540px] items-center lg:grid-cols-12 gap-10 lg:gap-14 py-12 lg:py-20">
          {/* Left Visual Area — High-Tech Biomedical Lab Showcase */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Outer decorative brand gradient backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-brand-100/30 to-accent-600/20 blur-xl opacity-75" />

              {/* Main Image Card Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white ring-1 ring-slate-200/80 group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/hero-biomedical-lab.jpg"
                    alt="Catalyst Biomedical Laboratory & Medical Diagnostic Solutions"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Top-Left Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-md border border-brand-100 backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-600 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600" />
                  </span>
                  <span className="text-xs font-bold tracking-wide text-brand-900 uppercase">
                    Biomedical Excellence
                  </span>
                </div>

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl bg-white/95 p-3.5 shadow-lg border border-slate-100 backdrop-blur-md flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 leading-snug">
                      Certified Healthcare Solutions &amp; Quality Medical Equipments Distribution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Banner Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center items-start lg:pl-4">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-3.5 py-1 text-xs font-semibold text-brand-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
              <span>Leading Biomedical Partner</span>
            </div>

            {/* Brand Title */}
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-600 tracking-tight leading-tight">
              Catalyst Biomedical
            </span>

            {/* Main Headline */}
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-wide uppercase leading-tight">
              BRINGING QUALITY TO LIFE
            </h1>

            {/* Accent divider matching logo palette */}
            <div className="mt-4 flex items-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-accent-600" />
              <div className="h-1.5 w-4 rounded-full bg-brand-600" />
            </div>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Importing and distributing high quality brand name medical products to healthcare providers across India.
            </p>

            {/* Call-to-actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-7 py-3.5 font-bold text-white shadow-md shadow-accent-600/25 hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-600/30 transition-all duration-200 active:scale-95"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 bg-white px-7 py-3.5 font-bold text-brand-600 hover:bg-brand-50 hover:border-brand-700 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>Learn More</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="mt-10 pt-6 border-t border-slate-200/70 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Pan-India Network</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                <span>Global Brands</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
