"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-100 transition-all duration-300 shadow-2xs";

  return (
    <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-2xl shadow-brand-950/10 overflow-hidden">
      {/* Top dynamic gradient accent line */}
      <div className="absolute top-0 inset-x-12 h-1.5 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600" />

      <div className="text-center mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-100">
          Get In Touch
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-brand-600 mt-2">
          Connect With Us
        </h3>
        {/* Centered accent divider */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5">
          <div className="h-1.5 w-12 rounded-full bg-brand-600" />
          <div className="h-1.5 w-3 rounded-full bg-accent-600" />
        </div>
      </div>

      {sent ? (
        <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center text-brand-950 animate-scale-in">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 animate-pulse-ring">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-bold text-xl text-brand-900">Thank You!</h4>
          <p className="text-sm mt-1 text-brand-800">Your message has been sent successfully. Our team will contact you shortly.</p>
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
              <span>Submit Message</span>
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
