import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../component/ui/Container";
import AnimatedSection from "../component/ui/AnimatedSection";
import { Award, Compass, Eye, ShieldCheck, Sparkles, Building2, Globe2, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Catalyst Biomedicals",
  description:
    "Catalyst Biomedicals was established in 2015, with the view to import and distribute high quality brand name medical related products.",
};

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Top Banner — Full-width Horizontal Strip with About Us Image */}
      <section className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-brand-950">
        <Image
          src="/images/about-banner.jpg"
          alt="About Catalyst Biomedicals"
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
              <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
            </div>
            <span className="text-xs font-mono tracking-widest text-white uppercase">
              TRUSTED HEALTHCARE PARTNERSHIP
            </span>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00AEEF]">About</span>{" "}
              <span className="text-[#E8502A]">Us</span>
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 1: Catalyst Biomedicals Detailed Intro */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Subtle background ambient mesh */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-50/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2 animate-pulse-glow" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent-50/50 rounded-full blur-3xl pointer-events-none animate-float" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Realistic Healthcare Team Showcase with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <AnimatedSection animation="fade-right" className="w-full max-w-md">
                <div className="relative group">
                  {/* Glow backdrop */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-brand-100/30 to-accent-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

                  {/* Main Card */}
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl transition-all duration-500 group-hover:shadow-brand-900/15">
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
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00AEEF]" />
                      </span>
                      <span className="text-xs font-bold tracking-wide text-brand-900 uppercase">
                        Biomedical Excellence
                      </span>
                    </div>

                    {/* Bottom Floating Stats Card */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl bg-white/95 p-3.5 shadow-xl border border-slate-100 backdrop-blur-md flex items-center gap-3 animate-float-reverse">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 border border-accent-100">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider font-bold text-slate-500">
                          Established
                        </span>
                        <span className="text-base font-black text-[#00AEEF] leading-tight">
                          Since 2015
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Exact text from reference image */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatedSection animation="fade-left" delay={150}>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8502A] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80 shadow-xs">
                  Company Overview
                </span>

                <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  <span className="text-[#00AEEF]">Catalyst</span>{" "}
                  <span className="text-[#E8502A]">Biomedicals</span>
                </h2>

                {/* Accent divider matching logo palette */}
                <div className="mt-4 flex items-center gap-1.5">
                  <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
                  <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
                </div>
                
                <div className="mt-6 space-y-4">
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    <strong className="text-brand-800 font-bold">Catalyst Biomedicals</strong> was established in 2015, with the view to import and distribute high quality brand name medical related products. Our intention, and ongoing commitment, is to provide the industry with the highest possible level of service, whilst simultaneously, contributing to the building of the integrity of the industry. As the Name &quot;Catalyst&quot; refers to the agents facilitating smooth reactions, We offer a bridge between our customers and innovative products across the globe and help patients.
                  </p>

                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    Catalyst Biomedicals has grown steadfastly in becoming not only a first choice, but also a trusted partner and reliable supplier to the increasing list of satisfied clients that we have accrued over the last two years. We attribute our success solely to our long standing client base who took the time to listen and identify with our ability to offer trusted recommendation. It goes without saying that each and every one of our clients is our most valued.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-50/50 transition-colors">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-110 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Established</span>
                      <span className="block text-xs text-slate-500">2015</span>
                    </div>
                  </div>

                  <div className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-brand-50/50 transition-colors">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-110 transition-transform">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Pan-India</span>
                      <span className="block text-xs text-slate-500">Distribution</span>
                    </div>
                  </div>

                  <div className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-accent-50/50 transition-colors">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 border border-accent-100 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Global</span>
                      <span className="block text-xs text-slate-500">Brand Partners</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Vision & Mission Cards with Rich Animations & Visual Showcases */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 border-t border-slate-200/70">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E8502A] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-xs">
              Our Core Purpose
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              <span className="text-[#00AEEF]">Our Vision &amp;</span>{" "}
              <span className="text-[#E8502A]">Mission</span>
            </h2>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Vision Card */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                {/* Top Animated Brand Gradient Line */}
                <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-80 group-hover:opacity-100 transition-opacity z-20" />

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
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2 shadow-lg border border-brand-100 backdrop-blur-md group-hover:border-brand-200 transition-all">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100/70 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Eye className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-brand-700 transition-colors">
                      Our Vision
                    </span>
                  </div>
                </div>

                {/* Content Area with Watermark Quote */}
                <div className="relative p-6 sm:p-8 flex flex-col items-center text-center flex-1">
                  {/* Watermark Quote Icon in Background */}
                  <div className="absolute top-4 right-6 text-7xl font-serif text-slate-100 select-none pointer-events-none group-hover:text-brand-50 transition-colors">
                    &ldquo;
                  </div>

                  <h3 className="relative text-2xl sm:text-3xl font-black text-brand-600 tracking-tight group-hover:text-brand-700 transition-colors">
                    Vision
                  </h3>

                  {/* Decorative Divider */}
                  <div className="relative mt-2.5 mb-5 flex items-center justify-center gap-1.5">
                    <div className="h-1 w-12 rounded-full bg-brand-600 group-hover:w-16 transition-all duration-300" />
                    <div className="h-1 w-3 rounded-full bg-accent-600" />
                  </div>

                  {/* Inner Text Card Box */}
                  <div className="relative w-full rounded-2xl bg-slate-50/70 p-5 sm:p-6 border border-slate-100 hover:border-brand-200 hover:bg-white group-hover:border-brand-200/70 group-hover:bg-white transition-all">
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      The Vision of Catalyst Biomedicals is to be the best-in-class and the first choice in the communities we serve. We deliver on our vision by striving for excellence every day, and constantly seeking to improve the services we offer.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection animation="fade-up" delay={250}>
              <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                {/* Top Animated Brand Gradient Line */}
                <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

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
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2 shadow-lg border border-accent-100 backdrop-blur-md group-hover:border-accent-200 transition-all">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600 border border-accent-100/70 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-accent-700 transition-colors">
                      Our Mission
                    </span>
                  </div>
                </div>

                {/* Content Area with Watermark Quote */}
                <div className="relative p-6 sm:p-8 flex flex-col items-center text-center flex-1">
                  {/* Watermark Quote Icon in Background */}
                  <div className="absolute top-4 right-6 text-7xl font-serif text-slate-100 select-none pointer-events-none group-hover:text-accent-50 transition-colors">
                    &ldquo;
                  </div>

                  <h3 className="relative text-2xl sm:text-3xl font-black text-brand-600 tracking-tight group-hover:text-brand-700 transition-colors">
                    Mission
                  </h3>

                  {/* Decorative Divider */}
                  <div className="relative mt-2.5 mb-5 flex items-center justify-center gap-1.5">
                    <div className="h-1 w-12 rounded-full bg-brand-600 group-hover:w-16 transition-all duration-300" />
                    <div className="h-1 w-3 rounded-full bg-accent-600" />
                  </div>

                  {/* Inner Text Card Box */}
                  <div className="relative w-full rounded-2xl bg-slate-50/70 p-5 sm:p-6 border border-slate-100 hover:border-accent-200 hover:bg-white group-hover:border-accent-200/70 group-hover:bg-white transition-all">
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                      Our mission is to improve patients lives by delivering innovative products and services at affordable cost that drive quality, efficiency and easy to access in health care.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Section 3: Deep Dive into Leadership & Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/70">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600 bg-accent-50 px-3.5 py-1.5 rounded-full border border-accent-100">
              Explore Our Organization
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-600 tracking-tight leading-tight">
              Learn More About Catalyst Biomedicals
            </h2>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-14 rounded-full bg-brand-600" />
              <div className="h-1.5 w-3 rounded-full bg-accent-600" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Leadership Card */}
            <AnimatedSection animation="fade-right" delay={100}>
              <Link
                href="/leadership"
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full"
              >
                {/* Top Animated Brand Gradient Line */}
                <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-80 group-hover:opacity-100 transition-opacity z-20" />

                {/* Watermark Quote Icon in Background */}
                <div className="absolute top-4 right-6 text-7xl font-serif text-slate-100 select-none pointer-events-none group-hover:text-brand-50 transition-colors">
                  &ldquo;
                </div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100/70 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                    <Users className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-brand-600 tracking-tight group-hover:text-brand-700 transition-colors">
                    Leadership Team
                  </h3>

                  {/* Decorative Divider */}
                  <div className="mt-2.5 mb-5 flex items-center gap-1.5">
                    <div className="h-1 w-10 rounded-full bg-brand-600 group-hover:w-14 transition-all duration-300" />
                    <div className="h-1 w-2.5 rounded-full bg-accent-600" />
                  </div>

                  {/* Inner Text Card Box */}
                  <div className="rounded-2xl bg-slate-50/70 p-5 border border-slate-100 hover:border-brand-200 hover:bg-white group-hover:border-brand-200/70 group-hover:bg-white transition-all">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      Discover the visionary leaders, healthcare advisors, and biomedical specialists guiding our strategic partnerships and ethical medical distribution.
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:text-brand-700">
                  <span>Meet Our Leaders</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            </AnimatedSection>

            {/* Why Choose Us Card */}
            <AnimatedSection animation="fade-left" delay={200}>
              <Link
                href="/why-choose-us"
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-md hover:shadow-2xl hover:shadow-accent-900/10 hover:border-accent-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full"
              >
                {/* Top Animated Brand Gradient Line */}
                <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                {/* Watermark Quote Icon in Background */}
                <div className="absolute top-4 right-6 text-7xl font-serif text-slate-100 select-none pointer-events-none group-hover:text-accent-50 transition-colors">
                  &ldquo;
                </div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-accent-50 text-accent-600 border border-accent-100/70 flex items-center justify-center mb-6 group-hover:bg-accent-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                    <ShieldCheck className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-brand-600 tracking-tight group-hover:text-brand-700 transition-colors">
                    Why Choose Us
                  </h3>

                  {/* Decorative Divider */}
                  <div className="mt-2.5 mb-5 flex items-center gap-1.5">
                    <div className="h-1 w-10 rounded-full bg-brand-600 group-hover:w-14 transition-all duration-300" />
                    <div className="h-1 w-2.5 rounded-full bg-accent-600" />
                  </div>

                  {/* Inner Text Card Box */}
                  <div className="rounded-2xl bg-slate-50/70 p-5 border border-slate-100 hover:border-accent-200 hover:bg-white group-hover:border-accent-200/70 group-hover:bg-white transition-all">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      Learn about our 6 core pillars of excellence: world-class brand portfolio, 24/7 technical support, loaner equipment, and pan-India logistics networks.
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-accent-600 group-hover:text-accent-700">
                  <span>Discover Our Strengths</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </div>
  );
}
