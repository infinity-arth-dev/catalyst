import Link from "next/link";
import Image from "next/image";
import Container from "@/component/ui/Container";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-600/15 via-brand-100/20 to-accent-600/15 blur-lg opacity-70" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/about-biomedical-team.jpg"
                    alt="Catalyst Biomedicals Professional Healthcare Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Established Badge */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 rounded-xl bg-white/95 p-3 shadow-lg border border-slate-100 backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 border border-accent-100">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-bold text-slate-500">
                      Established
                    </span>
                    <span className="text-base font-extrabold text-slate-900 leading-tight">
                      Since 2018
                    </span>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-brand-950/85 px-3 py-1 shadow-md border border-brand-800 text-white backdrop-blur-md text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>Trusted Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Sub-heading badge */}
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              About Us
            </span>

            {/* Title */}
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight leading-tight">
              Catalyst Biomedicals
            </h2>

            {/* Decorative accent divider matching logo palette */}
            <div className="mt-4 flex items-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>

            {/* Content paragraphs */}
            <div className="mt-6 space-y-4">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                <strong className="text-slate-900 font-semibold">Catalyst Biomedicals</strong> was established in 2018, with the view to import and distribute high quality brand name medical related products. Our intention, and ongoing commitment, is to provide the industry with the highest possible level of service, while simultaneously contributing to the building of the integrity of the industry.
              </p>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                As the name &quot;Catalyst&quot; refers to the agents facilitating smooth reactions, we offer a bridge between our customers and innovative products across the globe and help patients.
              </p>
            </div>

            {/* CTA Link */}
            <div className="mt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/20 group text-sm sm:text-base"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
