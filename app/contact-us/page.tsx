import Image from "next/image";
import Container from "@/component/ui/Container";
import AnimatedSection from "@/component/ui/AnimatedSection";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Catalyst Biomedicals",
  description:
    "Get in touch with Catalyst Biomedicals for inquiries regarding medical products, imports, and distribution.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Top Banner — Full-width Horizontal Strip with Contact Image */}
      <section className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-brand-950">
        <Image
          src="/images/contact-banner.jpg"
          alt="Contact Catalyst Biomedicals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay to ensure text legibility while displaying the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-brand-950/80 pointer-events-none" />

        <Container className="relative h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10 py-8 sm:py-0">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg animate-float">
            <div className="flex items-center gap-1.5 text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#E8502A] text-white shadow-2xs">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#00AEEF] text-white shadow-2xs">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#E8502A] text-white shadow-2xs">
                <MapPin className="h-3.5 w-3.5" />
              </span>
            </div>
            <span className="text-xs font-mono tracking-widest text-white uppercase pl-1">
              PAN-INDIA SUPPORT &amp; DISTRIBUTION
            </span>
          </div>

          <div className="text-left sm:text-right animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
              <span className="text-[#00AEEF]">Contact</span>{" "}
              <span className="text-[#E8502A]">Us</span>
            </h1>
            <div className="mt-3 flex items-center sm:justify-end gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-[#00AEEF]" />
              <div className="h-1.5 w-4 rounded-full bg-[#E8502A]" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area: 2 Columns */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none animate-float" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Left Column: 3 Contact Info Cards */}
            <div className="lg:col-span-5">
              <AnimatedSection animation="fade-right">
                <ContactInfo />
              </AnimatedSection>
            </div>

            {/* Right Column: Connect With Us Form */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fade-left" delay={150}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded Google Map */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <Container>
          <AnimatedSection animation="scale-in">
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-2xl transition-shadow duration-500">
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
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
