import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import PartnersSection from "@/component/home/PartnersSection";
import { Award, Compass, Eye, ShieldCheck, Sparkles, Building2, Globe2, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Catalyst Biomedicals",
  description:
    "Catalyst Biomedicals was established in 2015, with the view to import and distribute high quality brand name medical related products.",
};

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Top Banner with Brand Logo Palette & Subtle Motion */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-16 sm:py-24">
        {/* Animated ambient glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-accent-600/15 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Delicate geometric grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/30 text-brand-100 border border-brand-100/30">
              <ShieldCheck className="w-5 h-5 text-brand-100" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-brand-50">
              Trusted Healthcare Partnership
            </span>
          </div>

          <div className="text-left sm:text-right">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              About Us
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 1: Catalyst Biomedicals Detailed Intro */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Subtle background ambient mesh */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-50/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent-50/50 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Realistic Healthcare Team Showcase with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow backdrop */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-brand-100/30 to-accent-600/20 blur-xl opacity-75" />

                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl group transition-all duration-500 hover:shadow-brand-900/10">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/about-biomedical-team.jpg"
                      alt="Catalyst Biomedicals Team & Healthcare Facilities"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Top Floating Badge with Subtle Float Animation */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-md border border-brand-100 backdrop-blur-md animate-float">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-600 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600" />
                    </span>
                    <span className="text-xs font-bold tracking-wide text-brand-900 uppercase">
                      Biomedical Excellence
                    </span>
                  </div>

                  {/* Bottom Floating Stats Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl bg-white/95 p-3.5 shadow-xl border border-slate-100 backdrop-blur-md flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 border border-accent-100">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider font-bold text-slate-500">
                        Established
                      </span>
                      <span className="text-base font-black text-slate-900 leading-tight">
                        Since 2015
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exact text from reference image */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Company Overview
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
                Catalyst Biomedicals
              </h2>

              {/* Accent divider matching logo palette */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1.5 w-16 rounded-full bg-brand-600" />
                <div className="h-1.5 w-4 rounded-full bg-accent-600" />
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  <strong className="text-slate-900 font-bold">Catalyst Biomedicals</strong> was established in 2015, with the view to import and distribute high quality brand name medical related products. Our intention, and ongoing commitment, is to provide the industry with the highest possible level of service, whilst simultaneously, contributing to the building of the integrity of the industry. As the Name &quot;Catalyst&quot; refers to the agents facilitating smooth reactions, We offer a bridge between our customers and innovative products across the globe and help patients.
                </p>

                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Catalyst Biomedicals has grown steadfastly in becoming not only a first choice, but also a trusted partner and reliable supplier to the increasing list of satisfied clients that we have accrued over the last two years. We attribute our success solely to our long standing client base who took the time to listen and identify with our ability to offer trusted recommendation. It goes without saying that each and every one of our clients is our most valued.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Established</span>
                    <span className="block text-2xs text-slate-500">2015</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Pan-India</span>
                    <span className="block text-2xs text-slate-500">Distribution</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600 border border-accent-100">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Global</span>
                    <span className="block text-2xs text-slate-500">Brand Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Vision & Mission Cards with Rich Animations & Visual Showcases */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border-t border-slate-200/70">
        <Container>
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              Our Core Purpose
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
              Vision &amp; Mission
            </h2>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2">
              {/* Top border glow on hover */}
              <div className="absolute top-0 inset-x-8 h-1 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              {/* Realistic Vision Image Frame */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/vision-biomedical.jpg"
                  alt="Catalyst Biomedicals Future Vision & Medical Innovation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Icon Badge with subtle float */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2 shadow-lg border border-brand-100 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Our Vision
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 sm:p-10 flex flex-col items-center text-center flex-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                  Vision
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  The Vision of Catalyst Biomedicals is to be the best-in-class and the first choice in the communities we serve. We deliver on our vision by striving for excellence every day, and constantly seeking to improve the services we offer.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2">
              {/* Top border glow on hover */}
              <div className="absolute top-0 inset-x-8 h-1 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              {/* Realistic Mission Image Frame */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/mission-healthcare.jpg"
                  alt="Catalyst Biomedicals Mission for Patient Care"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Icon Badge with subtle float */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2 shadow-lg border border-accent-100 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Our Mission
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 sm:p-10 flex flex-col items-center text-center flex-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                  Mission
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our mission is to improve patients lives by delivering innovative products and services at affordable cost that drive quality, efficiency and easy to access in health care.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Deep Dive into Leadership & Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/70">
        <Container>
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              Explore Our Organization
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-600 tracking-tight leading-tight">
              Learn More About Catalyst Biomedicals
            </h2>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-14 rounded-full bg-brand-600" />
              <div className="h-1.5 w-3 rounded-full bg-accent-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Leadership Card */}
            <Link
              href="/leadership"
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/60 p-8 sm:p-10 hover:bg-white hover:border-brand-400 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  Leadership Team
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Discover the visionary leaders, healthcare advisors, and biomedical specialists guiding our strategic partnerships and ethical medical distribution.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:text-brand-700">
                <span>Meet Our Leaders</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>

            {/* Why Choose Us Card */}
            <Link
              href="/why-choose-us"
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/60 p-8 sm:p-10 hover:bg-white hover:border-brand-400 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent-50 text-accent-600 border border-accent-100 flex items-center justify-center mb-6 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  Why Choose Us
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Learn about our 6 core pillars of excellence: world-class brand portfolio, 24/7 technical support, loaner equipment, and pan-India logistics networks.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-accent-600 group-hover:text-accent-700">
                <span>Discover Our Strengths</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Section 4: Our Partners */}
      <PartnersSection />
    </div>
  );
}
