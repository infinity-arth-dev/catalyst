import Container from "@/component/ui/Container";
import ContactForm from "@/component/contact/ContactForm";
import ContactInfo from "@/component/contact/ContactInfo";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Catalyst Biomedicals",
  description:
    "Get in touch with Catalyst Biomedicals for inquiries regarding medical products, imports, and distribution.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Top Banner with Brand Logo Palette & Subtle Motion */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-16 sm:py-24">
        {/* Animated ambient glows using logo colors */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-accent-600/15 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Delicate geometric grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-float">
            <div className="flex items-center gap-2 text-brand-100">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white shadow-xs">
                <Mail className="h-4 w-4" />
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white shadow-xs">
                <Phone className="h-4 w-4" />
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white shadow-xs">
                <MapPin className="h-4 w-4" />
              </span>
            </div>
            <span className="text-xs font-mono tracking-widest text-brand-100 uppercase pl-1">
              PAN-INDIA SUPPORT &amp; DISTRIBUTION
            </span>
          </div>

          <div className="text-left sm:text-right">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Contact Us
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-accent-600" />
              <div className="h-1.5 w-4 rounded-full bg-brand-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area: 2 Columns */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Left Column: 3 Contact Info Cards */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Connect With Us Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded Google Map */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 shadow-md">
            <iframe
              title="Catalyst Biomedicals Location Map"
              src="https://maps.google.com/maps?q=18.4870,73.8245+(Catalyst+Biomedicals)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
