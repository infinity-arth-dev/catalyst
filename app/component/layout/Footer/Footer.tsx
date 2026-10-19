import Link from "next/link";
import Container from "../../ui/Container";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Leadership", href: "/leadership" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact-us" },
];

const productList = [
  { label: "Orthopedics", href: "/products/orthopedics" },
  { label: "Neurology", href: "/products/neurology" },
  { label: "Ophthalmology", href: "/products/ophthalmology" },
  { label: "Dental", href: "/products/dental" },
  { label: "ENT", href: "/products/ent" },
  { label: "DVT", href: "/products/dvt" },
  { label: "Oncology", href: "/products/onco" },
  { label: "Hospital Supply", href: "/products/hospital-supply" },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-brand-950 text-brand-100 overflow-hidden">
      {/* Top dynamic gradient accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 animate-gradient" />

      {/* 4-Column Content Section */}
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Catalyst Biomedicals About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-600" />
              <span>Catalyst Biomedicals</span>
            </h3>
            <p className="text-sm leading-relaxed text-brand-100/80">
              <strong className="font-semibold text-white">Catalyst Biomedicals</strong> was established in 2015, with the view to import and distribute high quality brand name medical products to healthcare providers across India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/catalystbiomedicals/home/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-100 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-xs"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/catalyst_biomedicals?obrf=djdocDhhdnpyNHRw"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-100 hover:bg-accent-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-xs"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-100 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-xs"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-100 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-xs"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-brand-100/80 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-600" />
              <span>Our Products</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {productList.map((prod) => (
                <li key={prod.label}>
                  <Link
                    href={prod.href}
                    className="group inline-flex items-center gap-1.5 text-brand-100/80 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{prod.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              <span>Contact Us</span>
            </h3>
            <div className="text-sm leading-relaxed text-brand-100/80 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                <p>
                  Office No.1, &quot;Swastishree&quot;, Shree varshanand Soc. Hingne Khurd,
                  Anand Nagar, Sinhagad Road, Pune 411 051, Maharashtra, India.
                </p>
              </div>

              <div className="pt-2 flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@catalystbiomedicals.com&su=Inquiry%20-%20Catalyst%20Biomedicals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-400 hover:underline block transition-colors"
                  >
                    sales@catalystbiomedicals.com
                  </a>
                </div>
              </div>
              <div className="pt-2 flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=catalystbiomedicals@gmail.com&su=Inquiry%20-%20Catalyst%20Biomedicals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-400 hover:underline block transition-colors"
                  >
                    catalystbiomedicals@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <a
                  href="tel:+912024353999"
                  className="text-white hover:text-accent-400 hover:underline font-bold transition-colors"
                >
                  +9120-24353999
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Slim Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-4 text-xs text-brand-100/70">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2022 Catalyst Biomedicals. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/about-us"
              className="hover:text-white transition-colors"
            >
              About
            </Link>
            <span>•</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>•</span>
            <Link
              href="/contact-us"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
