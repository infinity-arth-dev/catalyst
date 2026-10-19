"use client";
import { useState } from "react";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import NetworkBackgroundCanvas from "../../component/ui/NetworkBackgroundCanvas";
import { ShieldCheck, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-100 transition-all duration-300 shadow-2xs";

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#001724] via-brand-950 to-[#00111A] border-t border-brand-800/40">
      {/* Interactive Biomedical Distribution & Connectivity Network Canvas */}
      <NetworkBackgroundCanvas
        className="opacity-70"
        nodeCount={50}
        maxDistance={140}
        interactive={true}
      />

      {/* Ambient glowing radial light accents */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-transparent to-brand-950/70 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Catalyst Biomedicals mission & value statement */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/80 backdrop-blur-md border border-brand-500/30 text-accent-400 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent-400" />
                <span>Partner With Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-sm">
                Catalyst Biomedicals
              </h2>

              {/* Accent divider matching logo palette */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1.5 w-16 rounded-full bg-white shadow-sm" />
                <div className="h-1.5 w-4 rounded-full bg-accent-500 shadow-sm" />
              </div>

              <p className="mt-6 text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Our products and services confirm to the highest standards with zero margin of error. We believe in partnering with high quality products and globally reputable brands to deliver excellence to patients and clinics across India.
              </p>

              {/* Stat Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <div className="group p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="block text-2xl font-black text-white">100%</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 block">
                    Certified Quality Standards
                  </span>
                </div>

                <div className="group p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="block text-2xl font-black text-white">Pan-India</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 block">
                    Distribution &amp; Support
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="lg:col-span-6">
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-2xl shadow-brand-950/10 border border-slate-200/90 relative">
                {/* Top decorative accent bar */}
                <div className="absolute top-0 inset-x-12 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600" />

                <div className="text-center mb-8">
                  <span className="text-xs uppercase font-bold tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    Contact Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-600 mt-2">
                    Get In Touch
                  </h3>
                  {/* Centered accent divider */}
                  <div className="mt-2.5 flex items-center justify-center gap-1.5">
                    <div className="h-1.5 w-12 rounded-full bg-brand-600" />
                    <div className="h-1.5 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                {submitted ? (
                  <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center text-brand-950 animate-scale-in">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 animate-pulse-ring">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-xl text-brand-900">Thank You!</h4>
                    <p className="text-sm mt-1 text-brand-800">Your message has been received. Our clinical specialists will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Enter Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email ID"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Your message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="btn-shimmer inline-flex items-center justify-center gap-2.5 min-w-[200px] rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-600/30 transition-all duration-300 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer group"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
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
  );
}
