"use client";

import { useState } from "react";
import Container from "@/component/ui/Container";
import { ShieldCheck, MapPin, Send, CheckCircle2 } from "lucide-react";

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
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all duration-200 shadow-xs";

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-t border-slate-200/70 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Catalyst Biomedicals mission & value statement */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              Partner with us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-2">
              Catalyst Biomedicals
            </h2>

            {/* Accent divider matching logo palette */}
            <div className="mt-4 flex items-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-accent-600" />
              <div className="h-1.5 w-4 rounded-full bg-brand-600" />
            </div>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Our Product and Services confirm the highest standards with zero margin of error. We believe in partnering with high quality products and brands.
            </p>

            {/* Stat Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 border border-brand-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="block text-2xl font-black text-brand-600">100%</span>
                </div>
                <span className="text-xs font-medium text-slate-600 block">
                  Certified Quality Standards
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-accent-200 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 border border-accent-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="block text-2xl font-black text-accent-600">Pan-India</span>
                </div>
                <span className="text-xs font-medium text-slate-600 block">
                  Distribution &amp; Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-brand-950/5 border border-slate-200/90 relative">
              <div className="text-center mb-8">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-700">
                  Contact Form
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Get In Touch
                </h3>
                {/* Centered accent divider */}
                <div className="mt-2.5 flex items-center justify-center gap-1.5">
                  <div className="h-1.5 w-12 rounded-full bg-accent-600" />
                  <div className="h-1.5 w-3 rounded-full bg-brand-600" />
                </div>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center text-brand-950 animate-in fade-in duration-300">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-brand-900">Thank You!</h4>
                  <p className="text-sm mt-1 text-brand-800">Your message has been received. Our team will contact you shortly.</p>
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
                      className="inline-flex items-center justify-center gap-2 min-w-[180px] rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-600/25 transition-all duration-200 hover:bg-brand-700 hover:shadow-lg active:scale-95 cursor-pointer"
                    >
                      <span>SUBMIT</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
