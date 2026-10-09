import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/component/ui/Container";
import PartnersSection from "@/component/home/PartnersSection";
import {
  Users,
  Award,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership | Catalyst Biomedicals",
  description:
    "Meet Sagar Patel and Nilesh Kelkar, Founders and Directors of Catalyst Biomedicals.",
};

export default function LeadershipPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ── Hero Banner with Rich Brand Palette & Motion ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-16 sm:py-24">
        {/* Animated ambient glowing orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-accent-600/20 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Delicate geometric background grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/30 text-brand-100 border border-brand-100/30">
              <Users className="w-5 h-5 text-brand-100" />
            </div>
            <span className="text-xs font-mono tracking-widest text-brand-50 uppercase">
              FOUNDERS &amp; EXECUTIVE DIRECTORS
            </span>
          </div>

          <div className="text-left sm:text-right">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Leadership
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-accent-600" />
              <div className="h-1.5 w-4 rounded-full bg-brand-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section Title & Tag ── */}
      <section className="pt-14 sm:pt-20 pb-6 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              Executive Governance
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Founders &amp; Directors
            </h2>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-accent-600" />
              <div className="h-1.5 w-4 rounded-full bg-brand-600" />
            </div>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Guided by decades of specialized experience in pharmaceutical, biomedical, and medical device ecosystems across India.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Main Leadership Founders Grid ── */}
      <section className="pb-16 sm:pb-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* ══════════════════════════════════════════════════════
                CARD 1: SAGAR PATEL (FOUNDER/DIRECTOR)
               ══════════════════════════════════════════════════════ */}
            <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Top Animated Brand Gradient Line */}
              <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Watermark Quote Icon in Background */}
              <div className="absolute top-8 right-8 text-7xl font-serif text-slate-100 select-none pointer-events-none group-hover:text-brand-50 transition-colors">
                &ldquo;
              </div>

              {/* Executive Silhouette in High-End Glassmorphic Frame */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  {/* Outer Glowing Halo */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-600/20 to-accent-600/20 blur-md group-hover:blur-lg transition-all" />

                  {/* Circular Avatar Container */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white bg-gradient-to-b from-slate-100 via-brand-50/50 to-slate-200 shadow-xl flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 200 200"
                      className="w-36 h-36 sm:w-44 sm:h-44 text-slate-900 transition-transform duration-500 group-hover:scale-105"
                      fill="currentColor"
                    >
                      {/* Head */}
                      <circle cx="100" cy="65" r="40" />
                      {/* Shoulders / Torso */}
                      <path d="M30 180 C30 135 65 125 100 125 C135 125 170 135 170 180 Z" />
                      {/* White Shirt Collar */}
                      <polygon points="82,125 100,165 118,125" fill="#ffffff" />
                      {/* Dark Tie */}
                      <polygon points="95,135 105,135 107,175 100,182 93,175" fill="#0f172a" />
                    </svg>
                  </div>

                  {/* Verified Founder Badge */}
                  <div className="absolute bottom-1 right-2 flex items-center justify-center h-10 w-10 rounded-full bg-brand-600 text-white shadow-lg border-2 border-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Pill Tag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-100 mb-2">
                  <Sparkles className="w-3 h-3 text-brand-600" />
                  <span>Founding Executive</span>
                </span>

                {/* Founder Name & Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-accent-600 tracking-tight group-hover:text-accent-500 transition-colors">
                  Sagar Patel (Founder/Director)
                </h3>

                {/* Decorative Divider */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <div className="h-1 w-12 rounded-full bg-accent-600" />
                  <div className="h-1 w-3 rounded-full bg-brand-600" />
                </div>
              </div>

              {/* Exact Unaltered Bio Paragraphs with Elevated Readability */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed flex-1">
                <div className="rounded-2xl bg-slate-50/70 p-5 border border-slate-100 hover:border-brand-200 hover:bg-white transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">
                    <GraduationCap className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Education &amp; Experience</span>
                  </div>
                  <p>
                    He has completed his Bachelors in Pharmacy from Bharati University
                    (Pune) and Masters in Business Administration in Marketing from NIBM
                    (Chennai). Sagar has total 11 years of work experience in sales and
                    marketing in pharmaceutical and medical device industry and have
                    proved himself with his dedication and hard work according to the
                    market opportunities.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50/70 p-5 border border-slate-100 hover:border-brand-200 hover:bg-white transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">
                    <Briefcase className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>MNC Associations &amp; Orthopedic Relationships</span>
                  </div>
                  <p>
                    Sagar has been associated with top pharmaceutical MNC&apos;s such as
                    Zydus, Sanofi-Aventis and Baxter in sales function. Sagar has spent
                    almost 7 years in the field of medical devices. Sagar has a good know-how
                    of the market and enjoys a great relationship with surgeons in
                    orthopedic segment. Sagar is associated with Smith &amp; Nephew
                    Healthcare Pvt. Ltd. since 2011.
                  </p>
                </div>

                <div className="rounded-2xl bg-brand-50/50 p-5 border border-brand-100/70 hover:bg-brand-50 transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">
                    <Award className="w-4 h-4 text-accent-600 shrink-0" />
                    <span>Entrepreneurial Vision</span>
                  </div>
                  <p>
                    The overall experience motivated him to get into entrepreneurship and
                    brought Catalyst Biomedicals into existence. Sagar is passionate along
                    with the long term vision to make Catalyst Biomedicals a first choice for
                    the clients.
                  </p>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 2: NILESH KELKAR (FOUNDER/DIRECTOR)
               ══════════════════════════════════════════════════════ */}
            <div className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-md hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Top Animated Brand Gradient Line */}
              <div className="absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r from-accent-600 via-brand-600 to-accent-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Watermark Quote Icon in Background */}
              <div className="absolute top-8 right-8 text-7xl font-serif text-slate-100 select-none pointer-events-none group-hover:text-accent-50 transition-colors">
                &ldquo;
              </div>

              {/* Executive Silhouette in High-End Glassmorphic Frame */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  {/* Outer Glowing Halo */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent-600/20 to-brand-600/20 blur-md group-hover:blur-lg transition-all" />

                  {/* Circular Avatar Container */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white bg-gradient-to-b from-slate-100 via-accent-50/40 to-slate-200 shadow-xl flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 200 200"
                      className="w-36 h-36 sm:w-44 sm:h-44 text-slate-900 transition-transform duration-500 group-hover:scale-105"
                      fill="currentColor"
                    >
                      {/* Head */}
                      <circle cx="100" cy="65" r="40" />
                      {/* Shoulders / Torso */}
                      <path d="M30 180 C30 135 65 125 100 125 C135 125 170 135 170 180 Z" />
                      {/* White Shirt Collar */}
                      <polygon points="82,125 100,165 118,125" fill="#ffffff" />
                      {/* Dark Tie */}
                      <polygon points="95,135 105,135 107,175 100,182 93,175" fill="#0f172a" />
                    </svg>
                  </div>

                  {/* Verified Founder Badge */}
                  <div className="absolute bottom-1 right-2 flex items-center justify-center h-10 w-10 rounded-full bg-accent-600 text-white shadow-lg border-2 border-white">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Pill Tag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-50 text-accent-700 border border-accent-100 mb-2">
                  <Sparkles className="w-3 h-3 text-accent-600" />
                  <span>Founding Executive</span>
                </span>

                {/* Founder Name & Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-accent-600 tracking-tight group-hover:text-accent-500 transition-colors">
                  Nilesh Kelkar (Founder/Director)
                </h3>

                {/* Decorative Divider */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <div className="h-1 w-12 rounded-full bg-accent-600" />
                  <div className="h-1 w-3 rounded-full bg-brand-600" />
                </div>
              </div>

              {/* Exact Unaltered Bio Paragraphs with Elevated Readability */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed flex-1">
                <div className="rounded-2xl bg-slate-50/70 p-5 border border-slate-100 hover:border-accent-200 hover:bg-white transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">
                    <GraduationCap className="w-4 h-4 text-accent-600 shrink-0" />
                    <span>Education &amp; IIM Lucknow</span>
                  </div>
                  <p>
                    He has completed Graduation in Bachelors of Science in Microbiology.
                    Also completed Advance Excecutive program in Sales and Marketing from
                    IIM Lucknow.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50/70 p-5 border border-slate-100 hover:border-accent-200 hover:bg-white transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">
                    <Briefcase className="w-4 h-4 text-accent-600 shrink-0" />
                    <span>17+ Years Pharma &amp; MNC Background</span>
                  </div>
                  <p>
                    He has more than 17 years of exerience in Pharma in different segments
                    like Derma, Ortho, Gynec, Neuro , Endo and Rheumatology with broad
                    experince in premium product segment. Worked in reputed companies like
                    Cipla, Sanofi Aventies , Eli Lilly and Biogen Idec.
                  </p>
                </div>

                <div className="rounded-2xl bg-accent-50/40 p-5 border border-accent-100/70 hover:bg-accent-50 transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">
                    <Award className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Values &amp; Organizational Mission</span>
                  </div>
                  <p>
                    He leads the company with passion and strongly believes in company
                    values. Working with innovative medicines and devices motivated him to
                    drive the organizational goal of better health coutcome.
                  </p>
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
