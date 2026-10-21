"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  HeartHandshake,
  Headphones,
} from "lucide-react";

export default function AboutSection() {
  const credibilityStats = [
    {
      value: "2015",
      title: "Established",
      desc: "Founded in Pune, Maharashtra",
      icon: Award,
    },
    {
      value: "8+",
      title: "Clinical Specialties",
      desc: "Orthopedics, Neuro, Dental & more",
      icon: Layers,
    },
    {
      value: "Tier-1",
      title: "Trusted Manufacturer Partnerships",
      desc: "Globally certified medical OEMs",
      icon: HeartHandshake,
    },
    {
      value: "24/7",
      title: "Customer-Focused Support",
      desc: "Specialized biomedical assistance",
      icon: Headphones,
    },
  ];

  return (
    <section id="credibility" className="relative bg-white text-slate-800 pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
      {/* ── Section 03: Company Credibility Highlights ── */}
      <Container className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-200/80">
            Healthcare Expertise · Reliable Partnerships
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-600 tracking-tight">
            Built on Scientific Trust &amp; Precision
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-16 rounded-full bg-brand-600" />
            <div className="h-1.5 w-4 rounded-full bg-accent-600" />
          </div>
        </div>

        {/* 4 Factual Credibility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="group relative rounded-2xl bg-[#F4F7FA] border border-[#DCE6EE] p-6 shadow-2xs hover:bg-white hover:border-brand-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-brand-600 tracking-tight group-hover:text-brand-500 transition-colors">
                    {stat.value}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-600 border border-[#DCE6EE] shadow-2xs group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-800 leading-snug">
                  {stat.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500 leading-relaxed">
                  {stat.desc}
                </p>
                {/* Bottom accent hover line matching logo palette */}
                <div className="absolute bottom-0 inset-x-8 h-1 rounded-t-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </Container>

      {/* ── Section 04: Brand Story Split ── */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedSection animation="fade-right" className="w-full max-w-md">
              <div className="relative group">
                {/* Outer decorative halo */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-brand-100/30 to-brand-800/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden border border-[#DCE6EE] bg-white shadow-2xl transition-all duration-500 group-hover:shadow-brand-900/15">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/about-biomedical-team.jpg"
                      alt="Catalyst Biomedicals Professional Healthcare Team"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Established Badge */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl border border-[#DCE6EE] backdrop-blur-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-200/50 shadow-2xs">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-500">
                        Established
                      </span>
                      <span className="text-base font-black text-brand-700 leading-tight">
                        Since 2015
                      </span>
                    </div>
                  </div>

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-brand-900/90 px-3.5 py-1.5 shadow-lg border border-white/20 text-white backdrop-blur-md text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                    <span>Trusted Quality</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Editorial Company Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatedSection animation="fade-left" delay={150}>
              {/* Sub-heading badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-extrabold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                <span>Our Heritage &amp; Mission</span>
              </div>

              {/* Title using blue color theme */}
              <h2 className="text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
                Connecting Healthcare with Innovation
              </h2>

              {/* Decorative accent divider matching logo palette */}
              <div className="mt-3.5 flex items-center gap-1.5">
                <div className="h-1.5 w-16 rounded-full bg-brand-600" />
                <div className="h-1.5 w-4 rounded-full bg-accent-600" />
              </div>

              {/* Content paragraphs */}
              <div className="mt-6 space-y-4">
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  <strong className="text-brand-700 font-bold">Catalyst Biomedicals</strong> was established in 2015, with the view to import and distribute high-quality brand-name medical products. Our intention, and ongoing commitment, is to provide the healthcare industry with the highest possible level of service, while simultaneously contributing to the building of clinical integrity across India.
                </p>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  As the name &quot;Catalyst&quot; refers to agents facilitating smooth reactions, we serve as an essential bridge between our customers and innovative medical technologies across the globe, advancing clinical care for patients.
                </p>
              </div>

              {/* Bullet highlights with blue theme */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#DCE6EE]">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Global Brand Partnerships</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Pan-India Distribution</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Regulated Cold-Chain Logistics</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>24/7 Clinical Support</span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="btn-shimmer inline-flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white hover:bg-brand-700 transition-all duration-300 shadow-md shadow-brand-600/25 group text-sm sm:text-base hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-6 py-3.5 font-bold text-brand-700 hover:border-brand-600 hover:text-brand-600 transition-all text-sm sm:text-base shadow-2xs"
                >
                  <span>Contact Our Specialists</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
