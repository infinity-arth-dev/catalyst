import Link from "next/link";
import Image from "next/image";
import Container from "../../component/ui/Container";
import AnimatedSection from "../../component/ui/AnimatedSection";
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent-600/5 rounded-full blur-3xl pointer-events-none animate-float" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedSection animation="fade-right" className="w-full max-w-md">
              <div className="relative group">
                {/* Outer decorative halo */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-600/20 via-brand-100/30 to-accent-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl transition-all duration-500 group-hover:shadow-brand-900/15">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/about-biomedical-team.jpg"
                      alt="Catalyst Biomedicals Professional Healthcare Team"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Established Badge */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl border border-slate-100 backdrop-blur-md animate-float">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 border border-accent-100 shadow-2xs">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-500">
                        Established
                      </span>
                      <span className="text-base font-black text-slate-900 leading-tight">
                        Since 2015
                      </span>
                    </div>
                  </div>

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-brand-950/85 px-3.5 py-1.5 shadow-lg border border-brand-800 text-white backdrop-blur-md text-xs font-bold animate-float-reverse">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                    <span>Trusted Quality</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatedSection animation="fade-left" delay={150}>
              {/* Sub-heading badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                <span>About Us</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-black text-brand-600 tracking-tight leading-tight">
                Catalyst Biomedicals
              </h2>

              {/* Decorative accent divider matching logo palette */}
              <div className="mt-3.5 flex items-center gap-1.5">
                <div className="h-1.5 w-16 rounded-full bg-brand-600" />
                <div className="h-1.5 w-4 rounded-full bg-accent-600" />
              </div>

              {/* Content paragraphs */}
              <div className="mt-6 space-y-4">
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  <strong className="text-slate-900 font-bold">Catalyst Biomedicals</strong> was established in 2015, with the view to import and distribute high quality brand name medical related products. Our intention, and ongoing commitment, is to provide the industry with the highest possible level of service, while simultaneously contributing to the building of the integrity of the industry.
                </p>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  As the name &quot;Catalyst&quot; refers to the agents facilitating smooth reactions, we offer a bridge between our customers and innovative products across the globe and help patients.
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Global Brand Partnerships</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>Pan-India Distribution</span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="mt-8">
                <Link
                  href="/about-us"
                  className="btn-shimmer inline-flex items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white hover:bg-brand-700 transition-all duration-300 shadow-md shadow-brand-600/25 group text-sm sm:text-base hover:shadow-xl hover:shadow-brand-600/35 hover:-translate-y-0.5"
                >
                  <span>Read More About Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
