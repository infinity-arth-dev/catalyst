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
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all duration-200 shadow-xs";

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-lg shadow-brand-950/5">
      <div className="text-center mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-700">
          Get In Touch
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
          Connect With Us
        </h3>
        {/* Centered accent divider */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5">
          <div className="h-1.5 w-12 rounded-full bg-accent-600" />
          <div className="h-1.5 w-3 rounded-full bg-brand-600" />
        </div>
      </div>

      {sent ? (
        <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center text-brand-950 animate-in fade-in duration-300">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-lg text-brand-900">Thank You!</h4>
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
              className="inline-flex items-center justify-center gap-2 min-w-[180px] rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-600/25 transition-all duration-200 hover:bg-brand-700 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Submit</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
