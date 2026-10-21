import Link from "next/link";
import Image from "next/image";
import Container from "../../ui/Container";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ChevronRight, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Leadership Team", href: "/leadership" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

const productList = [
  { label: "Orthopedics", href: "/products/orthopedics" },
  { label: "Neurology", href: "/products/neurology" },
  { label: "Ophthalmology", href: "/products/ophthalmology" },
  { label: "Dental", href: "/products/dental" },
  { label: "ENT", href: "/products/ent" },
  { label: "DVT Management", href: "/products/dvt" },
  { label: "Oncology", href: "/products/onco" },
  { label: "Hospital Supplies", href: "/products/hospital-supply" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#071B33] text-slate-300 overflow-hidden">
      {/* Blueprint Brand Blue & Orange Accent Line matching logo */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600" />

      {/* 4-Column Content Section */}
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Catalyst Biomedicals About & Logo */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block bg-white/95 px-3 py-1.5 rounded-xl mb-4 shadow-sm">
              <Image
                src="/images/logocatalyst.jpg"
                alt="Catalyst Biomedicals"
                width={260}
                height={70}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-sm mt-2">
              Established in 2015, <strong className="font-semibold text-white">Catalyst Biomedicals</strong> connects Indian healthcare providers with globally certified brand-name medical devices, precision instruments, and vital clinical support.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/catalystbiomedicals/home/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#00AEEF] hover:text-[#071B33] transition-all shadow-2xs"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/catalyst_biomedicals?obrf=djdocDhhdnpyNHRw"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#00AEEF] hover:text-[#071B33] transition-all shadow-2xs"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#00AEEF] hover:text-[#071B33] transition-all shadow-2xs"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#00AEEF] hover:text-[#071B33] transition-all shadow-2xs"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#00AEEF] opacity-70 group-hover:opacity-100" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Specialties */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
              <span>Specialties</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
              {productList.map((prod) => (
                <li key={prod.label}>
                  <Link
                    href={prod.href}
                    className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#00AEEF] opacity-70 group-hover:opacity-100" />
                    <span>{prod.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Pune Headquarters */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
              <span>Headquarters</span>
            </h3>
            <div className="text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <p>
                  Office No.1, &quot;Swastishree&quot;, Shree Varshanand Soc., Hingne Khurd,
                  Anand Nagar, Sinhagad Road, Pune 411 051, Maharashtra, India.
                </p>
              </div>

              <div className="pt-1.5 flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:sales@catalystbiomedicals.com"
                    className="text-white hover:text-[#00AEEF] block transition-colors"
                  >
                    sales@catalystbiomedicals.com
                  </a>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a
                  href="tel:+912024353999"
                  className="text-white hover:text-[#00AEEF] font-bold transition-colors"
                >
                  +91 20-24353999
                </a>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AEEF] hover:underline"
                >
                  <span>Request Business Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Slim Bottom Copyright Bar with Privacy & Terms */}
      <div className="border-t border-white/10 py-4 text-xs text-slate-400">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2026 Catalyst Biomedicals. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about-us" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
