import Link from "next/link";
import Container from "@/component/ui/Container";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Leadership", href: "/leadership" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Terms & Conditions", href: "#" },
];

const productList = [
  "Orthopedics",
  "Neurology",
  "Ophthalmology",
  "Dental",
  "ENT",
  "DVT",
  "Onco",
  "Hospital Supply",
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-950 text-brand-100">
      {/* 4-Column Simple Content Section */}
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Catalyst Biomedicals About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Catalyst Biomedicals
            </h3>
            <p className="text-sm leading-relaxed text-brand-100/90">
              <strong className="font-semibold text-white">Catalyst Biomedicals</strong> was established in 2015, with the view to import and distribute high quality brand name medical related products.
            </p>
          </div>

          {/* Column 2: Quick Link */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              {productList.map((prod) => (
                <li key={prod}>
                  <Link
                    href="/products"
                    className="hover:text-white transition-colors"
                  >
                    {prod}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="text-sm leading-relaxed text-brand-100/90 space-y-1">
              <p>Office No.1, &quot;Swastishree&quot;,</p>
              <p>Shree varshanand Soc. Hingne Khurd,</p>
              <p>Anand Nagar. Near Santosh Hall, Behind</p>
              <p>Jagtap Hospital, Sinhagad Road,</p>
              <p>Pune 411 051.</p>
              <p>Maharashtra, India</p>

              <div className="pt-2">
                <p className="font-semibold text-white">Email Id:</p>
                <p>
                  <a
                    href="mailto:sales@catalystbiomedicals.com"
                    className="hover:text-white hover:underline"
                  >
                    sales@catalystbiomedicals.com
                  </a>{" "}
                  /
                </p>
                <p>
                  <a
                    href="mailto:catalystbiomedicals@gmail.com"
                    className="hover:text-white hover:underline"
                  >
                    catalystbiomedicals@gmail.com
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <p>
                  <span className="font-semibold text-white">Phone Number:</span>{" "}
                  <a
                    href="tel:+912024352999"
                    className="hover:text-white hover:underline"
                  >
                    +9120-24352999
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Slim Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-4 text-xs">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <p>© 2022 Catalyst Biomedicals. All Rights Reserved.</p>
            <span className="hidden sm:inline text-brand-100/40">•</span>
            <Link
              href="#"
              className="text-brand-100/90 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="flex items-center gap-4 text-brand-100/80">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition-colors"
            >
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
