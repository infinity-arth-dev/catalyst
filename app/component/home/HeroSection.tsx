import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import { ArrowRight, ShieldCheck, Award, Sparkles, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50/80 via-white to-accent-50/50 border-b border-slate-200/80 py-16 lg:py-24">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-brand-600/10 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent-600/10 blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-brand-100/30 blur-3xl pointer-events-none animate-pulse-glow" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7">
            {/* Live Status Pill with Pulsing Beacon */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 shadow-sm border border-brand-200/80 mb-6 animate-fade-in-down">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-600" />
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-800">
                Leading Biomedical Partner in India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight animate-fade-in-up">
              <span className="text-brand-600">
                Catalyst
              </span>{" "}
              <span className="text-accent-600">
                Biomedicals
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-xl sm:text-2xl font-extrabold tracking-wide text-brand-600 uppercase flex items-center gap-2 animate-fade-in-up [animation-delay:150ms]">
              <Sparkles className="w-5 h-5 text-accent-600 animate-spin-slow" />
              <span>Bringing Quality to Life</span>
            </p>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-in-up [animation-delay:250ms]">
              Importing and distributing high-quality, globally certified brand-name medical products, precision instruments, and vital clinical devices to healthcare providers across India.
            </p>

            {/* Quick Feature Badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-700 animate-fade-in-up [animation-delay:350ms]">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Certified Medical Supply</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
                <Activity className="w-4 h-4 text-accent-600" />
                <span>24/7 Clinical Support</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
                <Award className="w-4 h-4 text-brand-600" />
                <span>Global Brand Network</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up [animation-delay:450ms]">
              <Link
                href="/products"
                className="btn-shimmer inline-flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white shadow-md shadow-brand-600/30 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white/90 backdrop-blur-sm px-6 py-3.5 font-bold text-slate-800 hover:border-brand-600 hover:text-brand-600 hover:bg-white hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* Image & Interactive Badges Column */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glowing Gradient Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-accent-600/15 to-brand-100/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-2xl transition-all duration-500 group-hover:shadow-brand-900/15">
                <Image
                  src="/images/hero-biomedical-lab.jpg"
                  alt="Catalyst Biomedical Laboratory & Healthcare Equipment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badge with Gentle Float Animation */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-lg border border-slate-100 backdrop-blur-md animate-float">
                  <span className="flex h-2 w-2 rounded-full bg-accent-600" />
                  <span className="text-[11px] font-bold text-slate-900 tracking-wide">
                    ISO &amp; CE Certified
                  </span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl border border-slate-100 backdrop-blur-md animate-float-reverse">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-extrabold text-brand-700">
                      Zero Margin of Error
                    </span>
                    <span className="text-sm font-bold text-slate-900 leading-tight">
                      Highest Industry Clinical Standards
                    </span>
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