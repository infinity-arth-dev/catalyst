import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import AnimatedSection from "@/component/ui/AnimatedSection";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us | Catalyst Biomedicals",
  description:
    "Over 15 Years of Experience in this Field, Patient Centric Approach, and Quality is our Business.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ── Top Hero Banner — Full-width Photographic Strip with Why Choose Us Image ── */}
      <section className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-brand-950">
        <Image
          src="/images/why-choose-us-banner.jpg"
          alt="Why Choose Catalyst Biomedicals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay to ensure text legibility while displaying the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-brand-950/80 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg animate-float">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00AEEF]/30 text-[#00AEEF] border border-[#00AEEF]/30">
              <Award className="w-4 h-4 text-[#00AEEF]" />
            </div>
            <span className="text-xs font-mono tracking-widest text-white uppercase">
              EXCELLENCE • TRUST • INTEGRITY
            </span>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00AEEF]">Why Choose</span>{" "}
              <span className="text-[#E8502A]">Us</span>
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Pillars Section (Exact Content with Premium UI) ── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

        <Container className="relative z-10">
          {/* Section Introduction */}
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8502A] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-xs">
              The Catalyst Advantage
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="text-[#00AEEF]">Our Core</span>{" "}
              <span className="text-[#E8502A]">Commitments</span>
            </h2>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Dedicated to delivering world-class medical equipment, proven clinical value, and exceptional service across India.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
            {/* Top Row: 2 Parallel Elevated Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* ══════════════════════════════════════════════════════
                  CARD 1: Over 15 Years of Experience in this Field
                 ══════════════════════════════════════════════════════ */}
              <AnimatedSection animation="fade-right" delay={100}>
                <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-11 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  {/* Top Border Accent Line */}
                  <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Corner Watermark */}
                  <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors select-none">
                    01
                  </span>

                  {/* Glowing Icon Frame */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 text-[#00AEEF] flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                    <Clock className="w-8 h-8" />
                  </div>

                  {/* Subtitle Badge */}
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-bold bg-brand-50 text-[#00AEEF] border border-brand-100">
                      <Sparkles className="w-3 h-3 text-[#00AEEF]" />
                      <span>Domain Expertise</span>
                    </span>
                  </div>

                  {/* Exact Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#00AEEF] mb-4 group-hover:text-cyan-600 transition-colors leading-snug">
                    Over 15 Years of Experience in this Field
                  </h3>

                  {/* Exact Paragraph */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
                    Providing comprehensive solution through dedicated and experienced team.
                    We have team members who have worked in this field for more than 15 years.
                    As a leader we pose an overall experience of more than 10 years working
                    with the most trusted and bigger brands in the industry.
                  </p>

                  {/* Bottom Trust Feature Line */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#00AEEF]">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                    <span>Trusted Industry Leadership</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* ══════════════════════════════════════════════════════
                  CARD 2: Patient Centric Approach
                 ══════════════════════════════════════════════════════ */}
              <AnimatedSection animation="fade-left" delay={200}>
                <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-11 shadow-md hover:shadow-2xl hover:shadow-accent-900/10 hover:border-accent-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  {/* Top Border Accent Line */}
                  <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-[#E8502A] opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Corner Watermark */}
                  <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-accent-50 transition-colors select-none">
                    02
                  </span>

                  {/* Glowing Icon Frame */}
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 text-[#E8502A] flex items-center justify-center mb-6 group-hover:bg-[#E8502A] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                    <HeartHandshake className="w-8 h-8" />
                  </div>

                  {/* Subtitle Badge */}
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-bold bg-orange-50 text-[#E8502A] border border-orange-100">
                      <Sparkles className="w-3 h-3 text-[#E8502A]" />
                      <span>Healthcare Partnership</span>
                    </span>
                  </div>

                  {/* Exact Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#E8502A] mb-4 group-hover:text-orange-600 transition-colors leading-snug">
                    Patient Centric Approach
                  </h3>

                  {/* Exact Paragraph */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
                    It&apos;s a way healthcare systems can establish a partnership among
                    practioners, patients and their families to align decisions with
                    patient&apos;s wants, need and preferences. The focus would always be in
                    benefiting the patient by providing the best and world class products in
                    the hands of the healthcare practitioners.
                  </p>

                  {/* Bottom Trust Feature Line */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#E8502A]">
                    <CheckCircle2 className="w-4 h-4 text-[#E8502A] shrink-0" />
                    <span>Empowering Medical Practitioners</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 3: Quality is our Business (Full-Width Highlight)
               ══════════════════════════════════════════════════════ */}
            <AnimatedSection animation="scale-in" delay={150}>
              <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-[#00AEEF]/50 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden text-center card-lift-glow">
                {/* Top Accent Gradient Border */}
                <div className="absolute top-0 inset-x-12 h-1.5 rounded-b-full bg-gradient-to-r from-[#00AEEF] via-[#E8502A] to-[#00AEEF] opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Watermark */}
                <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors select-none">
                  03
                </span>

                {/* Centered Glowing Icon Frame */}
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-50 to-orange-50 border border-brand-100 text-[#00AEEF] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300 shadow-sm">
                  <ShieldCheck className="w-10 h-10" />
                </div>

                {/* Subtitle Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs uppercase tracking-wider font-bold bg-orange-50 text-[#E8502A] border border-orange-100">
                    <Sparkles className="w-3 h-3 text-[#E8502A]" />
                    <span>Uncompromising Standard</span>
                  </span>
                </div>

                {/* Exact Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00AEEF] mb-4 group-hover:text-[#E8502A] transition-colors">
                  Quality is our Business
                </h3>

                {/* Decorative Divider */}
                <div className="mx-auto mb-6 flex items-center justify-center gap-1.5">
                  <div className="h-1.5 w-14 rounded-full bg-[#00AEEF]" />
                  <div className="h-1.5 w-3.5 rounded-full bg-[#E8502A]" />
                </div>

                {/* Exact Paragraph */}
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Our products and services confirm the highest standards with zero margin of
                  error. We believe in partnering with high quality products and globally certified brands.
                </p>

                {/* Trust Badges Strip */}
                <div className="mt-8 pt-6 border-t border-slate-100 max-w-xl mx-auto flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    <span>Zero Margin of Error</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <span>Certified Global Brands</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    <span>Pan-India Distribution</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </div>
  );
}
