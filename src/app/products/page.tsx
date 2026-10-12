"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/component/ui/Container";
import PartnersSection from "@/component/home/PartnersSection";
//
interface ProductPartnerItem {
  subtitle: string;
  partnerName: string;
  logo?: string;
  description: string;
}

interface ProductCategoryDetail {
  id: string;
  name: string;
  slug: string;
  image: string;
  items: ProductPartnerItem[];
}

const PRODUCT_SEGMENTS: ProductCategoryDetail[] = [
  {
    id: "orthopedics",
    name: "Orthopedics",
    slug: "orthopedics",
    image: "/products/Orthopedics.jpg",
    items: [
      {
        subtitle: "Arthoscopy",
        partnerName: "Smith & Nephew Healthcare Pvt Ltd",
        logo: "/partners/smithnephew-img.jpg",
        description:
          "We are a trusted and growing channel partner for Smith & Nephew Healthcare Pvt Ltd for their arthroscopy division. We have been associated with them from last two years and have a great track record in incremental sales. He have been able to push more capital equipment in our regions and hence increasing the installation base with appropriate service.",
      },
      {
        subtitle: "Joint replacement surgery",
        partnerName: "Smith & Nephew Healthcare Pvt Ltd",
        logo: "/partners/smithnephew-img.jpg",
        description:
          "Smith+Nephew is a world leader in joint replacement systems for knees, hips and shoulders.",
      },
    ],
  },
  {
    id: "neurology",
    name: "Neurology",
    slug: "neurology",
    image: "/products/Neurology.jpg",
    items: [
      {
        subtitle: "Epilepsy",
        partnerName: "Vagus Nerve stimulation Livanova",
        logo: "/partners/livanova.jpg",
        description:
          "LivaNova is a global medical technology company built on nearly five decades of experience and a relentless commitment to improve the lives of drug resistance epilepsy patients",
      },
      {
        subtitle: "Multiple Sclerosis",
        partnerName: "Nuvigen",
        logo: "/partners/nuvigen.jpg",
        description:
          "Well established long term therapy in Multiple Sclerosis segment.",
      },
      {
        subtitle: "Parkinson",
        partnerName: "Rusan Pharma",
        logo: "/partners/rusan.jpg",
        description:
          "Another breakthrough product from Rusan Pharm management of Pain in neurological condition.",
      },
    ],
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    slug: "ophthalmology",
    image: "/products/Ophthalmology.jpg",
    items: [
      {
        subtitle: "Ophthalmology (IOL’s)",
        partnerName: "VSY Biotechnology",
        logo: "/partners/vsybio.jpg",
        description:
          "VSY Biotechnology: We are associated with VSY Biotechnology Pvt. Ltd. VSY is a Netherland based company. We deal in all type of lenses from VSY.",
      },
      {
        subtitle: "Adaptive Ocular Sciences:-",
        partnerName: "",
        logo: "/partners/adaptive.jpg",
        description:
          "Adaptive Ocular Sciences is a manufacturer of high end Intraocular Lenses at its state-of-the-art manufacturing unit based in Gujarat. AOS has a technical collaboration with Ocular Technology Inc – USA.",
      },
    ],
  },
  {
    id: "dental",
    name: "Dental Segment",
    slug: "dental",
    image: "/products/Dental.jpg",
    items: [
      {
        subtitle: "Bioline Dental Implant:",
        partnerName: "",
        logo: "/partners/bioline.jpg",
        description:
          "At Bioline Dental Implants, we provide dental implant solution from conventional , TTPHIL, Zygoma , one piece implant , conical implant , All this results in the art of simplicity solutions that simplify dental implantology procedures and deliver proven clinical long-term success.",
      },
      {
        subtitle: "Densply Sirona / MIS India:",
        partnerName: "",
        logo: "/partners/dentsply.jpg",
        description:
          "Dentsply Sirona is the world’s largest manufacturer of professional dental products and technologies.",
      },
    ],
  },
  {
    id: "ent",
    name: "ENT",
    slug: "ent",
    image: "/products/ENT.jpg",
    items: [
      {
        subtitle: "ENT",
        partnerName: "Smith & Nephew Healthcare Pvt Ltd:",
        logo: "/partners/smithnephew-img.jpg",
        description:
          "We are dealing with coblation machine with is based on the patent technology for cold ablation of tissues for application in ENT.",
      },
    ],
  },
  {
    id: "dvt",
    name: "DVT management",
    slug: "dvt",
    image: "/products/DVT.jpg",
    items: [
      {
        subtitle: "DVT management",
        partnerName: "Cardinal Health:",
        logo: "/partners/cardinalhealth.jpg",
        description:
          "Cardinal health company with mission to help prevent the preventable, the unthinkable, deep vein thrombosis, a blood clot let loose, pulmonary embolism, a life threatened. Not on our watch. Patients matter. That’s why we’ve created the Kendall SCD™ 700 Smart Compression™ system.",
      },
    ],
  },
  {
    id: "hospital-supply",
    name: "Hospital Supply",
    slug: "hospital-supply",
    image: "/products/Hospital-Supply.jpg",
    items: [
      {
        subtitle: "Hospital Supply",
        partnerName: "Cardinal Health:",
        logo: "/partners/cardinalhealth.jpg",
        description: "Gloves, Food pump , Drapes.",
      },
    ],
  },
  {
    id: "onco",
    name: "Onco",
    slug: "onco",
    image: "/products/onco.jpg",
    items: [
      {
        subtitle: "Onco",
        partnerName: "Chemotech:",
        logo: "/partners/chemotech.jpg",
        description:
          "ChemoTech recently launched the IQwave™ – TSE (Tumour Specific Electroporation) with gentle yet effective and flexible treatment capabilities.",
      },
    ],
  },
];

function ProductSegmentCard({
  segment,
  index,
}: {
  segment: ProductCategoryDetail;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isOdd = index % 2 === 1;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // One card slides in from the left (even), next card slides in from the right (odd)
  const slideAnimation = isVisible
    ? "translate-x-0 opacity-100"
    : isOdd
      ? "translate-x-20 sm:translate-x-32 opacity-0"
      : "-translate-x-20 sm:-translate-x-32 opacity-0";

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-1000 ease-out will-change-transform ${slideAnimation}`}
    >
      <div className="group relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-12 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-300 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden max-w-6xl mx-auto">
        {/* Top accent glow line on hover */}
        <div className="absolute top-0 inset-x-12 h-1 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <div
            className={`lg:col-span-5 ${isOdd ? "lg:order-2" : "lg:order-1"
              }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md group/img">
              <Image
                src={segment.image}
                alt={segment.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`lg:col-span-7 ${isOdd ? "lg:order-1" : "lg:order-2"
              }`}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent-600 tracking-tight group-hover:text-accent-500 transition-colors">
              {segment.name}
            </h3>
            {/* Decorative brand divider */}
            <div className="mt-3 mb-6 flex items-center gap-1.5">
              <div className="h-1.5 w-14 rounded-full bg-accent-600" />
              <div className="h-1.5 w-3.5 rounded-full bg-brand-600" />
            </div>

            <div className="space-y-8">
              {segment.items.map((item, itemIdx) => (
                <div key={itemIdx} className="space-y-3">
                  {/* Subtitle & Partner Name in Logo Cyan Blue */}
                  <div className="text-base sm:text-lg font-bold text-brand-600 leading-snug">
                    {item.partnerName ? `${item.subtitle} :- ${item.partnerName}` : `${item.subtitle}`}
                  </div>

                  {/* Partner Logo — generous dimensions, sharp and clearly visible */}
                  {item.logo && (
                    <div className="relative h-14 sm:h-18 w-56 sm:w-64 my-2">
                      <Image
                        src={item.logo}
                        alt={item.partnerName || item.subtitle}
                        fill
                        sizes="280px"
                        className="object-contain object-left"
                      />
                    </div>
                  )}

                  {/* Exact Description Text */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Top Banner with Brand Logo Palette */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-14 sm:py-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-accent-600/15 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container className="relative z-10 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-mono tracking-widest text-brand-100 animate-float">
            <span>CERTIFIED MEDICAL SUPPLY &amp; DISTRIBUTION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-wide text-white/95 sm:ml-auto">
            Products
          </h1>
        </Container>
      </section>

      {/* Main Products Heading */}
      <section className="pt-16 pb-10 bg-white">
        <Container>
          <div className="text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
              Healthcare Portfolio
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight leading-tight">
              Products
            </h2>
            {/* Centered accent divider matching logo palette */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <div className="h-1.5 w-16 rounded-full bg-brand-600" />
              <div className="h-1.5 w-4 rounded-full bg-accent-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* Alternating Product Segments with Left/Right Entrance Animations */}
      <section className="pb-16 sm:pb-24 overflow-x-hidden">
        {PRODUCT_SEGMENTS.map((segment, index) => {
          const isOdd = index % 2 === 1;

          return (
            <div
              key={segment.id}
              className={`py-12 sm:py-16 transition-colors duration-300 ${isOdd ? "bg-slate-50/70 border-y border-slate-200/60" : "bg-white"
                }`}
            >
              <Container>
                <ProductSegmentCard segment={segment} index={index} />
              </Container>
            </div>
          );
        })}
      </section>

      {/* Our Partners Section */}
      <PartnersSection />
    </div>
  );
}
