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
  Sparkles,
  Building2,
  Award,
  UserCheck,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Catalyst Biomedicals",
  description:
    "Join the Catalyst Biomedicals team. Explore career opportunities in biomedical engineering, medical sales, logistics, and healthcare technology.",
};

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  isUrgent?: boolean;
  departmentColor?: "cyan" | "orange";
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const perks = [
  {
    icon: TrendingUp,
    title: "Career Growth & OEM Certifications",
    description:
      "Direct technical training on international medical devices with structured career progression and professional certifications.",
    badge: "Continuous Learning",
    color: "cyan",
  },
  {
    icon: HeartPulse,
    title: "Direct Clinical Impact",
    description:
      "Your daily work directly empowers surgeons and saves lives by ensuring hospital operating rooms never face equipment downtime.",
    badge: "Patient-First Mission",
    color: "orange",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside experienced biomedical engineers, clinical consultants, and healthcare leaders in an open, supportive team.",
    badge: "Team Synergy",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Competitive Compensation & Perks",
    description:
      "Attractive salary structures, comprehensive medical insurance, travel allowances, and rewarding performance incentives.",
    badge: "Stability & Care",
    color: "orange",
  },
];

const openings: JobOpening[] = [
  {
    title: "Biomedical Service Engineer",
    department: "Technical Services & Calibration",
    departmentColor: "cyan",
    location: "Pune, Maharashtra",
    type: "Full-Time",
    experience: "1-3 Years",
    isUrgent: true,
    description:
      "Responsible for testing, calibrating, preventative maintenance, and rapid troubleshooting of electrosurgical units, camera processors, and arthroscopy systems.",
    responsibilities: [
      "Perform electrical safety tests and output calibration audits according to OEM standards.",
      "Diagnose hardware faults on endoscopic light sources and imaging towers.",
      "Conduct hospital operating room on-site equipment commissioning and preventive maintenance.",
      "Maintain detailed calibration certificates and service log records in ERP.",
    ],
    requirements: [
      "Degree or Diploma in Biomedical / Electronics / Instrumentation Engineering",
      "Hands-on experience with hospital operating theater equipment and electrical safety testing",
      "Willingness to travel for on-site hospital installations across Maharashtra and Western India",
      "Strong analytical mindset with high adherence to healthcare safety protocols",
    ],
  },
  {
    title: "Medical Device Sales Specialist (Orthopedics / ENT)",
    department: "Sales & Clinical Distribution",
    departmentColor: "orange",
    location: "Mumbai / Pune, Maharashtra",
    type: "Full-Time",
    experience: "2-5 Years",
    isUrgent: true,
    description:
      "Drive hospital relations, surgical suite product demonstrations, and key account management across leading healthcare institutions and surgical centers.",
    responsibilities: [
      "Engage with orthopedic surgeons, ENT specialists, and hospital procurement heads.",
      "Coordinate in-theater case support and product demonstrations for specialized instruments.",
      "Develop regional sales pipelines and achieve annual clinical distribution goals.",
      "Coordinate loaner sets and emergency surgical equipment replenishment.",
    ],
    requirements: [
      "B.Sc / B.Tech / B.Pharm / MBA with proven experience in medical devices or surgical implants",
      "Demonstrated track record of hospital and surgeon relationship building",
      "Strong technical presentation and clinical communication skills",
      "Self-driven professional with strong territory planning skills",
    ],
  },
  {
    title: "Supply Chain & Cold-Chain Logistics Coordinator",
    department: "Operations & Logistics",
    departmentColor: "cyan",
    location: "Pune, Maharashtra",
    type: "Full-Time",
    experience: "1-3 Years",
    description:
      "Oversee medical inventory management, temperature-controlled warehouse operations, and prompt emergency dispatch of loaner devices to operating rooms.",
    responsibilities: [
      "Monitor cold-chain temperature logs and compliance standards for sensitive clinical supplies.",
      "Coordinate same-day or next-flight dispatches for urgent emergency surgery loaners.",
      "Maintain barcode batch tracking, expiry monitoring, and stock reconciliation in ERP.",
      "Manage vendor courier relationships and regional hospital delivery logistics.",
    ],
    requirements: [
      "Graduate in Logistics, Supply Chain, Commerce, or General Science",
      "Experience with medical supply chain, ERP systems, and urgent dispatch protocols",
      "High attention to compliance, traceability, and prompt hospital delivery",
      "Strong customer service orientation for surgical time-critical supplies",
    ],
  },
  {
    title: "Clinical Application Specialist (Surgical Systems)",
    department: "Clinical Support & Applications",
    departmentColor: "orange",
    location: "Pune / Pan-India",
    type: "Full-Time",
    experience: "2-4 Years",
    description:
      "Partner with clinicians and surgical teams to provide clinical application guidance, physician training, and live surgical case assistance.",
    responsibilities: [
      "Deliver technical guidance to surgeons during adoption of specialized surgical devices.",
      "Conduct structured hands-on workshops and training sessions for OT technicians.",
      "Collaborate with the biomedical engineering team on complex system configurations.",
      "Collect surgeon feedback for OEM engineering and product development teams.",
    ],
    requirements: [
      "Degree in Biomedical Science, Nursing, Clinical Engineering, or allied healthcare",
      "Familiarity with operating theater sterile workflows and surgical protocols",
      "Strong empathetic communication and coaching skills for clinical professionals",
      "Flexibility for travel to key medical institutions and academic conferences",
    ],
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Application Review",
    desc: "Our HR and technical team screens your resume within 48 business hours to assess role alignment.",
  },
  {
    step: "02",
    title: "Technical Conversation",
    desc: "A focused discussion covering your technical competencies, field experience, and clinical knowledge.",
  },
  {
    step: "03",
    title: "Leadership Alignment",
    desc: "Meet our department heads to discuss culture fit, values, and mutual long-term career aspirations.",
  },
  {
    step: "04",
    title: "Offer & Certified Induction",
    desc: "Receive an attractive offer followed by structured OEM equipment training and guided mentorship.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ── Top Hero Banner — Photographic Strip with Gradient ── */}
      <section className="relative w-full h-52 sm:h-64 md:h-76 lg:h-84 overflow-hidden bg-brand-950">
        <Image
          src="/images/services-banner.jpg"
          alt="Careers at Catalyst Biomedicals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B33]/92 via-[#071B33]/70 to-[#071B33]/92 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          {/* Top Tagline Badge */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg animate-float">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#00AEEF] animate-ping" />
            <div className="text-xs font-mono tracking-widest text-white flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>JOIN OUR GROWING TEAM</span>
            </div>
          </div>

          {/* Heading in Brand Blue & Orange */}
          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00AEEF]">Our</span>{" "}
              <span className="text-[#E8502A]">Careers</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-200/90 max-w-md sm:ml-auto">
              Empowering healthcare across India through precision surgical technologies and certified calibration.
            </p>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </div>
        </Container>
      </section>


      {/* ── Why Catalyst Section (Perks) ── */}
      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-14">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#E8502A] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E8502A]" />
              <span>Why Choose Us</span>
            </div>

            {/* Heading in Blue & Orange */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="text-[#00AEEF]">Why</span>{" "}
              <span className="text-[#E8502A]">Choose Us</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              We partner with global medical manufacturers to supply and service life-saving equipment.
            </p>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </AnimatedSection>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              const isOrange = perk.color === "orange";
              return (
                <AnimatedSection key={perk.title} animation="fade-up" delay={idx * 80}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col group">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                          isOrange
                            ? "bg-orange-50 text-[#E8502A] border-orange-200/60 group-hover:bg-[#E8502A] group-hover:text-white"
                            : "bg-cyan-50 text-[#00AEEF] border-cyan-200/60 group-hover:bg-[#00AEEF] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${
                          isOrange
                            ? "text-[#E8502A] bg-orange-50/70 border-orange-200/60"
                            : "text-[#00AEEF] bg-[#EAF5F8] border-[#00AEEF]/30"
                        }`}
                      >
                        {perk.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-bold mb-2 transition-colors ${
                        isOrange
                          ? "text-slate-900 group-hover:text-[#E8502A]"
                          : "text-slate-900 group-hover:text-[#00AEEF]"
                      }`}
                    >
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

      {/* ── Transparent Hiring Process ── */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80">
        <Container>
          <div className="text-center mb-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Hiring Process</span>
            </div>

            {/* Heading in Blue & Orange */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              <span className="text-[#00AEEF]">Hiring</span>{" "}
              <span className="text-[#E8502A]">Process</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
              A transparent, streamlined evaluation cycle designed to respect your time.
            </p>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-12 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-3.5 rounded-full bg-[#E8502A]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {hiringSteps.map((step, idx) => {
              const isStepOrange = idx % 2 === 1;
              return (
                <div
                  key={step.step}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs relative hover:border-[#00AEEF]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-2xl font-black ${
                        isStepOrange ? "text-[#E8502A]" : "text-[#00AEEF]"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`h-1.5 w-8 rounded-full ${
                        isStepOrange ? "bg-orange-200" : "bg-cyan-200"
                      }`}
                    />
                  </div>
                  <h4
                    className={`text-sm font-bold mb-1.5 ${
                      isStepOrange ? "text-slate-900 hover:text-[#E8502A]" : "text-slate-900 hover:text-[#00AEEF]"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Current Openings Section ── */}
      <section id="openings" className="py-16 sm:py-20 bg-white">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#E8502A] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#E8502A]" />
              <span>Current Openings</span>
            </div>

            {/* Heading in Blue & Orange */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="text-[#00AEEF]">Current</span>{" "}
              <span className="text-[#E8502A]">Openings</span>
            </h2>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>

            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Find the role matching your expertise across engineering, sales, and logistics.
            </p>
          </AnimatedSection>

          {/* Job Openings List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job) => {
              const isCyan = job.departmentColor === "cyan";
              return (
                <AnimatedSection key={job.title} animation="fade-up">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-[#00AEEF]/50 transition-all duration-200">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <span
                            className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${
                              isCyan
                                ? "text-[#00AEEF] bg-[#EAF5F8] border-[#00AEEF]/30"
                                : "text-[#E8502A] bg-orange-50 border-orange-200/70"
                            }`}
                          >
                            {job.department}
                          </span>
                          {job.isUrgent && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8502A] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/60">
                              Urgent Hiring
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900">{job.title}</h3>
                      </div>

                      <a
                        href={`mailto:careers@catalystbiomedicals.com?subject=Application for ${encodeURIComponent(
                          job.title
                        )}`}
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#00AEEF] text-white text-xs font-bold shadow-xs hover:bg-[#0092d0] transition-colors shrink-0"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Metadata Chips */}
                    <div className="mt-3.5 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                      <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                        <GraduationCap className="w-3.5 h-3.5 text-[#00AEEF]" />
                        {job.experience}
                      </span>
                    </div>

                    {/* Short Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Responsibilities & Qualifications */}
                    <div className="mt-5 pt-5 border-t border-slate-100 space-y-4">
                      <div>
                        <h5 className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span>Key Responsibilities</span>
                        </h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-xs font-bold text-[#E8502A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span>Qualifications & Skills</span>
                        </h5>
                        <ul className="space-y-1.5">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <Check className="w-3.5 h-3.5 text-[#E8502A] shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Light Minimal HR & Resume Submission Section ── */}
      <section id="apply" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-white via-[#F8FBFC] to-[#F0F8FA] border border-slate-200/90 p-7 sm:p-11 shadow-lg relative overflow-hidden">
            {/* Subtle light ambient glow shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8502A]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              {/* Mail Icon in Soft Pill */}
              <div className="inline-flex items-center justify-center w-13 h-13 rounded-2xl bg-[#EAF5F8] border border-[#00AEEF]/30 text-[#00AEEF] mb-3 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>

              {/* Tagline Badge */}
              <div className="block mb-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00AEEF] text-xs font-bold uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Connect With HR</span>
                </div>
              </div>

              {/* Light Minimal Heading in Blue & Orange */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                <span className="text-[#00AEEF]">Connect</span>{" "}
                <span className="text-[#E8502A]">With HR</span>
              </h2>

              <div className="mt-2.5 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-12 rounded-full bg-[#00AEEF]" />
                <div className="h-1.5 w-3.5 rounded-full bg-[#E8502A]" />
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                We are always seeking talented biomedical engineers, sales executives, and operations professionals. Send your resume directly to our HR team.
              </p>

              {/* Key Trust Badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold shadow-2xs">
                  <Clock className="w-3 h-3 text-[#00AEEF]" />
                  Response within 48 Hours
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold shadow-2xs">
                  <Building2 className="w-3 h-3 text-[#E8502A]" />
                  Pune & Mumbai Presence
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold shadow-2xs">
                  <ShieldCheck className="w-3 h-3 text-[#00AEEF]" />
                  100% Confidential
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:careers@catalystbiomedicals.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00AEEF] text-white font-bold text-sm shadow-sm hover:bg-[#009cd6] transition-all active:scale-98"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: careers@catalystbiomedicals.com</span>
                </a>

                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#00AEEF] text-slate-700 hover:text-[#00AEEF] hover:bg-slate-50 font-bold text-sm shadow-xs transition-all active:scale-98"
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
