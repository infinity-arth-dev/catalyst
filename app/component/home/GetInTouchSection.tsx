"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import NetworkBackgroundCanvas from "../../component/ui/NetworkBackgroundCanvas";
import {
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  Award,
  Headphones,
  HeartHandshake,
  Clock,
  ArrowRight,
  PhoneCall,
  Building2,
} from "lucide-react";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    phone: "",
    email: "",
    category: "Product Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const whyBenefits = [
    {
      title: "Quality-Focused Solutions",
      desc: "Globally validated devices meeting stringent international CE & ISO standards with zero margin of error.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Support",
      desc: "Factory-trained biomedical engineers and clinical specialists available 24/7 for prompt on-site support.",
      icon: Headphones,
    },
    {
      title: "Trusted Partnerships",
      desc: "Direct authorised collaborations with tier-1 international medical manufacturers across 8 specialties.",
      icon: HeartHandshake,
    },
    {
      title: "Customer-Centric Service",
      desc: "Rapid regional hubs in Pune, Nashik, and Kolhapur ensuring sterile delivery and standby loaner units.",
      icon: Clock,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        organization: "",
        phone: "",
        email: "",
        category: "Product Enquiry",
        message: "",
      });
    }, 4500);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#00AEEF] focus:outline-none focus:ring-3 focus:ring-[#00AEEF]/20 transition-all duration-200 shadow-2xs";

  return (
    <>
      {/* ── Section 08: Why Catalyst? (4 Benefit Cards) ── */}
      <section className="relative py-20 sm:py-24 bg-[#F4F7FA] border-t border-[#DCE6EE] overflow-hidden">
        <Container>
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200/80 text-brand-700 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-accent-600" />
              <span>Core Strengths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
              Why Catalyst Biomedicals?
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
              Delivering medical technology with uncompromised integrity, verified quality, and rapid regional execution.
            </p>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBenefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group relative rounded-2xl bg-white border border-[#DCE6EE] p-6 shadow-2xs hover:shadow-xl hover:border-brand-400 hover:-translate-y-1.5 transition-all duration-300"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-5 border border-brand-200/50 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-brand-800 leading-snug mb-2 group-hover:text-brand-600 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {b.desc}
                  </p>
                  <div className="absolute bottom-0 inset-x-8 h-1 rounded-t-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Section 09: Contact CTA Dark Navy Banner & Enquiry Form ── */}
      <section
        id="enquiry"
        className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-[#071B33] via-[#0b223d] to-[#123C61] text-white border-t border-[#123C61]"
      >
        {/* Interactive biomedical network canvas */}
        <NetworkBackgroundCanvas
          className="opacity-50"
          nodeCount={45}
          maxDistance={130}
          interactive={true}
        />

        {/* Ambient radial glows */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#123C61]/40 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Blueprint Heading & Direct Contact Info */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-extrabold uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Business &amp; Hospital Enquiries</span>
                </div>

                {/* Blueprint Headline: "Let's Find the Right Medical Solution for You." */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Let&apos;s Find the Right Medical Solution for You.
                </h2>

                <div className="mt-4 flex items-center gap-1.5">
                  <div className="h-1.5 w-16 rounded-full bg-brand-600" />
                  <div className="h-1.5 w-4 rounded-full bg-accent-500" />
                </div>

                <p className="mt-6 text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
                  Our specialized team can help you identify the appropriate product or service enquiry route, discuss hospital procurement requirements, or coordinate equipment maintenance.
                </p>

                {/* Direct Verification Metrics */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#00AEEF] block mb-1">
                      Headquarters
                    </span>
                    <span className="text-sm font-bold text-white block">
                      Sinhagad Road, Pune, Maharashtra
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#00AEEF] block mb-1">
                      Direct Support Line
                    </span>
                    <a
                      href="tel:+912024353999"
                      className="text-sm font-bold text-white hover:text-[#00AEEF] transition-colors flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#00AEEF]" />
                      <span>+91 20-24353999</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Validated Enquiry Form */}
            <div className="lg:col-span-6">
              <AnimatedSection animation="fade-left" delay={150}>
                <div className="rounded-3xl bg-white p-7 sm:p-9 shadow-2xl text-slate-800 border border-[#DCE6EE] relative">
                  {/* Top cyan accent bar */}
                  <div className="absolute top-0 inset-x-12 h-1.5 rounded-b-full bg-[#00AEEF]" />

                  <div className="mb-6">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-brand-600 block mb-1">
                      Fast Clinical Response
                    </span>
                    <h3 className="text-2xl font-black text-brand-600">
                      Send an Enquiry
                    </h3>
                  </div>

                  {submitted ? (
                    <div className="rounded-2xl bg-[#EAF5F8] border border-[#00AEEF]/40 p-8 text-center text-[#071B33] animate-scale-in">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#00AEEF] text-[#071B33] shadow-md shadow-cyan-500/30">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-xl text-[#071B33]">Enquiry Received!</h4>
                      <p className="text-sm mt-1.5 text-slate-600">
                        Thank you for reaching out. Our clinical specialists will review your requirements and respond promptly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter Full name here"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Hospital / Organisation
                          </label>
                          <input
                            type="text"
                            placeholder="Hospital or Clinic Name"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({ ...formData, organization: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Enquiry Category
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) =>
                              setFormData({ ...formData, category: e.target.value })
                            }
                            className={inputClass}
                          >
                            <option value="Product Enquiry">Product Enquiry</option>
                            <option value="Service & Maintenance">Service &amp; Maintenance</option>
                            <option value="Manufacturer Partnership">Manufacturer Partnership</option>
                            <option value="General Healthcare Enquiry">General Enquiry</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Message &amp; Requirements *
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Please describe the product specialty or service requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <div className="pt-2">
                        {/* Blueprint CTA: Discuss Your Requirements (Cyan fill with dark navy text) */}
                        <button
                          type="submit"
                          className="btn-shimmer w-full flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 hover:bg-brand-700 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                        >
                          <span>Discuss Your Requirements</span>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
