import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import AnimatedSection from "@/component/ui/AnimatedSection";
import {
  Briefcase,
  GraduationCap,
  HeartPulse,
  Clock,
  MapPin,
  CheckCircle2,
  Mail,
  ArrowRight,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Catalyst Biomedicals",
  description:
    "Join the Catalyst Biomedicals team. Explore career opportunities in biomedical engineering, medical sales, logistics, and healthcare technology.",
};

const perks = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Accelerated career pathways with continuous learning and certifications on global medical technologies.",
  },
  {
    icon: HeartPulse,
    title: "Meaningful Healthcare Impact",
    description: "Empower surgeons, doctors, and hospitals across India with life-saving precision equipment.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate biomedical engineers, healthcare specialists, and visionary leaders.",
  },
  {
    icon: ShieldCheck,
    title: "Competitive Benefits",
    description: "Attractive compensation packages, medical insurance coverage, and performance incentives.",
  },
];

const openings = [
  {
    title: "Biomedical Service Engineer",
    department: "Technical Services & Calibration",
    location: "Pune, Maharashtra",
    type: "Full-Time",
    experience: "1-3 Years",
    description:
      "Responsible for testing, calibrating, and preventative maintenance of electrosurgical units, camera processors, and arthroscopy systems.",
    requirements: [
      "Degree or Diploma in Biomedical / Electronics / Instrumentation Engineering",
      "Hands-on experience with hospital operating theater equipment and electrical safety testing",
      "Willingness to travel for on-site hospital installations and calibration audits",
    ],
  },
  {
    title: "Medical Device Sales Specialist (Orthopedics / ENT)",
    department: "Sales & Clinical Distribution",
    location: "Mumbai / Pune, Maharashtra",
    type: "Full-Time",
    experience: "2-5 Years",
    description:
      "Drive hospital relations, surgical suite product demonstrations, and key account management across leading healthcare networks.",
    requirements: [
      "B.Sc / B.Tech / B.Pharm / MBA with experience in medical devices or surgical implants",
      "Demonstrated track record of hospital and surgeon relationship building",
      "Strong technical presentation and clinical communication skills",
    ],
  },
  {
    title: "Supply Chain & Cold-Chain Logistics Coordinator",
    department: "Operations & Logistics",
    location: "Pune, Maharashtra",
    type: "Full-Time",
    experience: "1-3 Years",
    description:
      "Manage emergency loaner equipment dispatch, temperature-controlled warehouse operations, and batch lot tracking.",
    requirements: [
      "Graduate in Logistics, Supply Chain, or General Science",
      "Experience with medical supply chain, ERP systems, and urgent dispatch protocols",
      "High attention to compliance, traceability, and prompt hospital delivery",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Top Banner — Full-width Strip */}
      <section className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-brand-950">
        <Image
          src="/images/services-banner.jpg"
          alt="Careers at Catalyst Biomedicals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B33]/90 via-[#071B33]/60 to-[#071B33]/90 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#00AEEF] animate-ping" />
            <div className="text-xs font-mono tracking-widest text-brand-100 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>JOIN OUR GROWING TEAM</span>
            </div>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
              Careers
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-14 sm:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00AEEF] bg-[#d8f2fd]/70 px-3.5 py-1.5 rounded-full border border-[#00AEEF]/30">
              Work With Purpose
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#00AEEF] tracking-tight">
              Why Build Your Career At Catalyst?
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
              We bring the latest global biomedical innovations to clinicians across India. Be a part of a mission-driven team shaping modern surgery and hospital care.
            </p>
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </AnimatedSection>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <AnimatedSection key={perk.title} animation="fade-up" delay={idx * 80}>
                  <div className="h-full rounded-3xl border border-[#DCE6EE] bg-white p-7 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-[#d8f2fd]/60 text-[#00AEEF] flex items-center justify-center mb-5 border border-[#00AEEF]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                      {perk.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00AEEF] bg-[#d8f2fd]/70 px-3.5 py-1.5 rounded-full border border-[#00AEEF]/30">
              Current Openings
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore Open Positions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Find the role that matches your skills and start making an impact in biomedical healthcare.
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, idx) => (
              <AnimatedSection key={job.title} animation="fade-up" delay={idx * 100}>
                <div className="rounded-3xl border border-[#DCE6EE] bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#00AEEF]/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider block mb-1">
                        {job.department}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {job.title}
                      </h3>
                    </div>
                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#00AEEF] text-white text-xs font-bold shadow-md hover:bg-[#0098d4] transition-colors shrink-0"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-600">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <GraduationCap className="w-3.5 h-3.5 text-[#00AEEF]" />
                      {job.experience}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Key Qualifications:
                    </span>
                    {job.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Apply / Send Resume Section */}
      <section id="apply" className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-[#071B33] via-[#0B2544] to-[#071B33] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-5">
                <Mail className="w-7 h-7 text-[#00AEEF]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Don&apos;t See The Right Role Listed?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                We are always seeking talented biomedical engineers, sales executives, and operations professionals. Send your resume directly to our HR team.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:careers@catalystbiomedicals.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00AEEF] text-slate-900 font-bold text-sm shadow-lg hover:bg-cyan-400 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: careers@catalystbiomedicals.com</span>
                </a>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
                >
                  <span>Contact HR Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
