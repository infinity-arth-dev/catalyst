import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/component/ui/Container";
import PartnersSection from "@/component/home/PartnersSection";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  Stethoscope,
  Globe2,
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
      {/* ── Top Hero Banner with Brand Palette & Motion ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-16 sm:py-24">
        {/* Animated ambient glowing orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-accent-600/20 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Delicate geometric background grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-600/30 text-accent-100 border border-accent-100/30">
              <Award className="w-5 h-5 text-accent-100" />
            </div>
            <span className="text-xs font-mono tracking-widest text-brand-50 uppercase">
              EXCELLENCE • TRUST • INTEGRITY
            </span>
          </div>

          <div className="text-left sm:text-right">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Why Choose Us
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Pillars Section (Exact Content with Premium UI) ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/40 to-white">
        <Container>
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              The Catalyst Advantage
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight leading-tight">
              Our Core Commitments
            </h2>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Dedicated to delivering world-class medical equipment, proven clinical value, and exceptional service across India.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
            {/* Top Row: 2 Parallel Elevated Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* ══════════════════════════════════════════════════════
                  CARD 1: Over 15 Years of Experience in this Field
                 ══════════════════════════════════════════════════════ */}
              <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-11 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Top Border Accent Line */}
                <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Corner Watermark */}
                <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors select-none">
                  01
                </span>

                {/* Glowing Icon Frame */}
                <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <Clock className="w-8 h-8" />
                </div>

                {/* Subtitle Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-2xs uppercase tracking-wider font-bold bg-brand-50 text-brand-700 border border-brand-100">
                    <Sparkles className="w-3 h-3 text-brand-600" />
                    <span>Domain Expertise</span>
                  </span>
                </div>

                {/* Exact Title */}
                <h3 className="text-xl sm:text-2xl font-black text-brand-600 mb-4 group-hover:text-brand-700 transition-colors leading-snug">
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
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Trusted Industry Leadership</span>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════
                  CARD 2: Patient Centric Approach
                 ══════════════════════════════════════════════════════ */}
              <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-11 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Top Border Accent Line */}
                <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Corner Watermark */}
                <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-accent-50 transition-colors select-none">
                  02
                </span>

                {/* Glowing Icon Frame */}
                <div className="w-16 h-16 rounded-2xl bg-accent-50 border border-accent-100 text-accent-600 flex items-center justify-center mb-6 group-hover:bg-accent-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <HeartHandshake className="w-8 h-8" />
                </div>

                {/* Subtitle Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-2xs uppercase tracking-wider font-bold bg-accent-50 text-accent-700 border border-accent-100">
                    <Sparkles className="w-3 h-3 text-accent-600" />
                    <span>Healthcare Partnership</span>
                  </span>
                </div>

                {/* Exact Title */}
                <h3 className="text-xl sm:text-2xl font-black text-brand-600 mb-4 group-hover:text-brand-700 transition-colors leading-snug">
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
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-accent-600">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>Empowering Medical Practitioners</span>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 3: Quality is our Business (Full-Width Highlight)
               ══════════════════════════════════════════════════════ */}
            <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden text-center">
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 inset-x-12 h-1.5 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Watermark */}
              <span className="absolute top-6 right-8 text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors select-none">
                03
              </span>

              {/* Centered Glowing Icon Frame */}
              <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-50 to-accent-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-10 h-10" />
              </div>

              {/* Subtitle Badge */}
              <div className="mb-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-2xs uppercase tracking-wider font-bold bg-brand-50 text-brand-700 border border-brand-100">
                  <Sparkles className="w-3 h-3 text-accent-600" />
                  <span>Uncompromising Standard</span>
                </span>
              </div>

              {/* Exact Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-600 mb-4 group-hover:text-brand-700 transition-colors">
                Quality is our Business
              </h3>

              {/* Decorative Divider */}
              <div className="mx-auto mb-6 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>

              {/* Exact Paragraph */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Our Product and Services confirm the highest standards with zero margin of
                error. He believes in partnering with high quality products and brands.
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
          </div>
        </Container>
      </section>

      {/* ── Our Partners Carousel Section ── */}
      <PartnersSection />
    </div>
  );
}
