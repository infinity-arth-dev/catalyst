import Link from "next/link";
import Image from "next/image";
import Container from "@/component/ui/Container";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-50/70 via-white to-accent-50/40 border-b border-slate-200">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wide mb-4">
              Leading Biomedical Partner
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-brand-600">Catalyst</span>{" "}
              <span className="text-accent-600">Biomedicals</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-brand-600 uppercase tracking-wide">
              Bringing Quality to Life
            </p>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              Importing and distributing high quality brand name medical products to healthcare providers across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors shadow-sm"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-lg border border-accent-600 bg-white px-6 py-3 font-semibold text-accent-600 hover:bg-accent-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 border border-slate-200">
              <Image
                src="/images/hero-biomedical-lab.jpg"
                alt="Catalyst Biomedical Laboratory"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}