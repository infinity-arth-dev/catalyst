"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import {
  HeartPulse,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Layers,
  AlertTriangle,
  Info,
  ShieldAlert,
  Stethoscope,
  Clock,
  ShieldCheck,
  Cpu,
  FileText,
  Boxes,
  PackageCheck,
  Syringe,
  Sparkles,
  Zap
} from "lucide-react";

export default function Oncology() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/onco/onco-hero.jpg"
          alt="Oncology Solutions and Chemotherapy Safety"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-brand-950/40" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-500/15 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="w-full space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono tracking-widest text-accent-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-ping" />
              ONCOLOGY CARE • CHEMOTHERAPY SAFETY • CANCER CARE SUPPORT
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              Oncology Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Advanced Oncology Products &amp; Healthcare Solutions
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Catalyst Biomedicals aims to support healthcare institutions with medical products and equipment for oncology-related care, chemotherapy safety, and clinical workflows. Product selection should be based on hospital requirements, manufacturer specifications, and applicable regulatory standards.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What Are Oncology Solutions? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Technology Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What Are Oncology Solutions?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            {/* Core Definition & Importance */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-50 rounded-bl-full pointer-events-none" />
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                Oncology solutions encompass medical products, equipment, and support systems used in cancer diagnosis, treatment, and patient care. These may include chemotherapy administration supplies, protective equipment for healthcare professionals, infusion-related products, and specialized medical devices.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Cancer care environments demand an exacting balance of precision drug delivery, occupational safety for clinical staff handling hazardous cytotoxic compounds, and patient comfort. By implementing standardized closed-transfer devices, chemotherapy-tested PPE, and advanced tumor-targeting technologies, oncology centers protect their workforce while advancing therapeutic outcomes.
              </p>

              <div className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-950 leading-relaxed">
                  <strong>Clinical Governance Notice:</strong> Oncology departments require appropriate medical supplies, protective equipment, and reliable clinical workflows to support the safe delivery of prescribed cancer treatments. Product selection should follow institutional protocols, healthcare professional guidance, and manufacturer instructions.
                </div>
              </div>
            </div>

            {/* 3 Core Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Chemotherapy Safety
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered containment barriers and certified PPE designed to prevent hazardous drug exposure during compounding, transport, and administration.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                    <Syringe className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Infusion Accuracy
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Precision administration lines, closed drug transfer adapters, and dedicated infusion consumables engineered for compatible chemotherapy regimens.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Targeted Oncology
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specialized modalities such as Tumour Specific Electroporation (TSE) for enhanced local chemotherapeutic uptake and targeted tissue ablation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. Oncology Product Categories */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Product Spectrum
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Oncology Product Categories
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Categorized healthcare solutions supporting clinical cancer care, hazardous drug handling, and day-care oncology infusion units.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "01",
                  title: "Chemotherapy Safety Products",
                  desc: "Specialized protective equipment and accessories designed to help healthcare professionals handle hazardous chemotherapy medicines according to established safety procedures.",
                },
                {
                  id: "02",
                  title: "Infusion & Administration Supplies",
                  desc: "Selected medical consumables used for administering prescribed therapies in clinical settings, subject to product compatibility and approved indications.",
                },
                {
                  id: "03",
                  title: "Personal Protective Equipment (PPE)",
                  desc: "Appropriate gloves, gowns, and other protective products intended to support healthcare personnel during hazardous drug handling and related clinical procedures.",
                },
                {
                  id: "04",
                  title: "Closed-System Drug Transfer Devices",
                  desc: "Specialized devices designed to mechanically prevent the escape of hazardous drugs or vapours and reduce environmental contamination during compatible drug-transfer procedures.",
                },
                {
                  id: "05",
                  title: "Oncology Department Consumables",
                  desc: "Medical supplies used to support routine workflows in oncology departments, infusion units, and hospital treatment areas.",
                },
                {
                  id: "06",
                  title: "Specialized Oncology Equipment",
                  desc: "Depending on the verified product portfolio, this category may include selected devices and accessories that support cancer-care services, such as tumor electroporation systems.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-brand-300 hover:bg-white hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-md">
                        {item.id}
                      </span>
                      <PackageCheck className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-700">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                <strong>Selection Note:</strong> Product selection should always be verified against hospital pharmacy protocols, physician orders, and the manufacturer&apos;s specific instructions for use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. Chemotherapy Safety & Standards */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Occupational Protection &amp; Guidelines
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Hazardous Drug Handling &amp; Safety Standards
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Handling antineoplastic agents requires stringent adherence to international hazardous drug containment protocols (such as USP &lt;800&gt; and NIOSH recommendations).
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/products/onco/onco-chemo-safety.jpg"
                    alt="Sterile Hazardous Drug Compounding and Chemotherapy Safety Equipment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm uppercase font-bold tracking-wider text-brand-700 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-accent-600" />
                    Essential Containment &amp; Barrier Criteria
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Chemotherapy-tested gloves tested according to ASTM D6978 permeation standards.",
                      "Polyethylene-coated or laminated gowns offering front and sleeve fluid-impermeability.",
                      "Closed-System Drug Transfer Devices (CSTDs) preventing aerosol and vapor leakage.",
                      "Needleless connection ports eliminating sharps injury and cytotoxic spray risks.",
                      "Dedicated cytotoxic spill kits for rapid neutralizing and safe disposal.",
                      "Aspiration vent filters and specialized drug reconstitution accessories.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Warning Callout */}
              <div className="rounded-2xl border border-red-200 bg-red-50/70 p-5 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  <strong>Hazardous Drug Exposure Warning:</strong> Antineoplastic agents pose genotoxic, mutagenic, and teratogenic hazards to healthcare personnel. Any compromise in barrier integrity, container leakage, or accidental spill requires immediate activation of hospital hazardous chemical protocols and emergency decontamination.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. Clinical Workflow in Oncology & Infusion Units */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Pathway &amp; Clinical Protocols
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Clinical Workflow in Oncology Departments
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                From pharmacy reconstitution to bedside administration, a closed-loop workflow ensures maximum clinical safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Prescription Verification",
                  desc: "Oncology pharmacy and nursing teams conduct double-verification of oncologist orders, patient BSA (body surface area), and laboratory clearances.",
                  icon: FileText,
                },
                {
                  step: "2",
                  title: "Aseptic Closed Compounding",
                  desc: "Hazardous drugs are reconstituted within Class II Type B2 biologic safety cabinets utilizing CSTDs to prevent vapor escape.",
                  icon: ShieldCheck,
                },
                {
                  step: "3",
                  title: "Secure Transport",
                  desc: "Prepared intravenous bags and syringes are packaged in sealed, puncture-resistant, UV-protective transport containers with cytotoxic warning labels.",
                  icon: Boxes,
                },
                {
                  step: "4",
                  title: "Bedside Administration",
                  desc: "Trained oncology nurses don specialized chemotherapy PPE and connect closed administration sets to the patient's vascular access port.",
                  icon: Syringe,
                },
                {
                  step: "5",
                  title: "Infusion Monitoring",
                  desc: "Continuous monitoring of infusion pump flow rates, peripheral or central line patency, extravasation signs, and acute hypersensitivity reactions.",
                  icon: Clock,
                },
                {
                  step: "6",
                  title: "Cytotoxic Waste Disposal",
                  desc: "All tubing, empty bags, gloves, and gowns are segregated into labeled, puncture-proof cytotoxic waste receptacles for high-temperature incineration.",
                  icon: PackageCheck,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-brand-300 hover:bg-white hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-brand-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
                        {item.step}
                      </div>
                      <item.icon className="w-5 h-5 text-slate-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-700">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                * Note: Exact drug-handling protocols and protective standards are governed by institutional cancer centre SOPs and national occupational health authorities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. Benefits of Standardized Oncology Safety Solutions */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Value
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Benefits of Standardized Oncology Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Equipping oncology suites with verified protective devices and targeted therapies delivers multidimensional clinical benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Occupational Health Protection",
                  desc: "Substantially minimizes staff exposure to aerosolized cytotoxic drugs, protecting oncology nurses, compounding pharmacists, and technicians.",
                  icon: ShieldCheck,
                },
                {
                  title: "Reduced Environmental Contamination",
                  desc: "Closed-system transfer adapters eliminate surface residue and airborne vapor drift across cleanrooms and chemotherapy day-care centers.",
                  icon: Sparkles,
                },
                {
                  title: "Aseptic Drug Delivery Assurance",
                  desc: "Closed-system mechanics prevent microbial ingress into drug vials, safeguarding immunocompromised cancer patients during therapy.",
                  icon: CheckCircle2,
                },
                {
                  title: "Targeted Tumor Ablation Capabilities",
                  desc: "Innovative electroporation technologies (TSE) offer tissue-sparing, enhanced-uptake therapeutic options for challenging or resistant solid tumors.",
                  icon: Zap,
                },
                {
                  title: "Regulatory & Accreditation Compliance",
                  desc: "Supports healthcare institutions in meeting NABH, JCI, and occupational safety criteria for hazardous drug compounding and disposal.",
                  icon: FileText,
                },
                {
                  title: "Supply Chain Reliability",
                  desc: "Consistent procurement schedules and verified product compatibility streamline hospital stock management for high-turnover oncology consumables.",
                  icon: Boxes,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 07. Featured Oncology Portfolio & Technology Solutions */}
      <section id="products" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Technology &amp; Equipment Portfolio
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Oncology Portfolio &amp; Specialized Equipment
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                A dual-focus portfolio supporting chemotherapy safety consumables alongside innovative tumor-specific treatment technologies.
              </p>
            </div>

            {/* Featured System Card 1: ChemoTech IQwave TSE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/onco/onco-tse-generator.jpg"
                    alt="ChemoTech IQwave TSE Tumour Specific Electroporation Clinical System"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent-600 mb-1">
                      Featured Technology Partner
                    </p>
                    <p className="text-base font-bold text-brand-900">
                      Scandinavian ChemoTech AB (Sweden)
                    </p>
                    <p className="text-xs text-slate-500">
                      Tumour Specific Electroporation (TSE) Technology
                    </p>
                  </div>
                  <div className="relative h-12 w-36 shrink-0">
                    <Image
                      src="/partners/chemotech.jpg"
                      alt="Scandinavian ChemoTech AB"
                      fill
                      sizes="150px"
                      className="object-contain object-right"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-700 tracking-tight">
                    IQwave™ – Tumour Specific Electroporation (TSE)
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600">
                    Scandinavian ChemoTech AB (Lund, Sweden)
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The IQwave™ – TSE platform provides gentle yet effective tumor ablation and enhanced intracellular chemotherapy delivery for solid and resistant cancers. It selectively targets tumor cell membranes with precision electric pulses, temporarily permeabilizing them for significantly improved therapeutic absorption while sparing surrounding non-cancerous structures.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-brand-700">
                    Platform Specifications &amp; Features
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <table className="w-full text-xs sm:text-sm">
                      <tbody>
                        {[
                          { label: "Platform Model", value: "IQwave™ TSE Clinical Generator" },
                          { label: "Mechanism", value: "Dynamic Tumour Specific Electroporation (TSE)" },
                          { label: "Energy Delivery", value: "Real-time tissue impedance guided electric pulses" },
                          { label: "Clinical Target", value: "Head & neck tumors, breast metastases, cutaneous lesions" },
                          { label: "Procedure Type", value: "Minimally invasive, outpatient-friendly local ablation" },
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="px-3.5 py-2.5 font-semibold text-brand-700 w-2/5 border-b border-slate-100 align-top">
                              {row.label}
                            </td>
                            <td className="px-3.5 py-2.5 text-slate-700 border-b border-slate-100">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured System Card 2: Chemotherapy Safety Portfolio & Cardinal Health Note */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                    Hazardous Drug Safety Portfolio
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-brand-700">
                    Chemotherapy Protection &amp; Closed Drug Transfer Systems
                  </h3>
                </div>
                <div className="relative h-10 w-32 shrink-0">
                  <Image
                    src="/partners/cardinalhealth.jpg"
                    alt="Cardinal Health"
                    fill
                    sizes="130px"
                    className="object-contain object-right"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Cardinal Health has a documented oncology-related portfolio that includes chemotherapy safety products, such as <strong>Insta-Gard®</strong>, <strong>ChemoPlus™</strong>, and <strong>ChemoBloc™</strong>. It also provides broader pharmaceutical and specialty services for oncology practices.
              </p>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-xs sm:text-sm">
                  <tbody>
                    {[
                      { 
                        category: "Chemotherapy Gloves", 
                        details: "ASTM D6978 tested nitrile and latex gloves for handling antineoplastic agents" 
                      },
                      { 
                        category: "Protective Gowns & Sleeves", 
                        details: "ChemoPlus™ and ChemoBloc™ poly-coated impervious chemotherapy protective gowns" 
                      },
                      { 
                        category: "Preparation Mats & Spill Kits", 
                        details: "Specialized absorbent preparation mats, sealable transport bags, and neutralizing spill kits" 
                      },
                      { 
                        category: "Closed Transfer Devices (CSTDs)", 
                        details: "Closed-system vial adapters and syringe safety transfer devices" 
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-3.5 py-2.5 font-semibold text-brand-700 w-2/5 border-b border-slate-100 align-top">
                          {row.category}
                        </td>
                        <td className="px-3.5 py-2.5 text-slate-700 border-b border-slate-100">
                          {row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Crucial Cardinal Health Disclaimer */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Important note about Cardinal Health:</strong> Cardinal Health has a documented oncology-related portfolio that includes chemotherapy safety products, such as Insta-Gard®, ChemoPlus™, and ChemoBloc™. However, do not state that Catalyst Biomedicals supplies Cardinal Health oncology products unless its actual portfolio and distribution relationship have been confirmed. Official references:{" "}
                  <a
                    href="https://www.cardinalhealth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-amber-800"
                  >
                    Cardinal Health — Medical Products
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.cardinalhealth.ca/en/products/general-medical-supplies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-amber-800"
                  >
                    Cardinal Health — Chemotherapy Protection and Safety Products
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 08. Supporting Oncology Departments */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Institutional Best Practices
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Supporting Oncology Departments
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Oncology departments require appropriate medical supplies, protective equipment, and reliable clinical workflows to support the safe delivery of prescribed cancer treatments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-brand-700">
                Key Departmental Protocols:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Standardized Reconstitution: Perform all cytotoxic mixing within designated laminar airflow biologic safety cabinets with closed-system transfer adapters.",
                  "Appropriate Protective Donning: Double-glove with chemotherapy-tested gloves and don seamless front-closing impermeable gowns prior to handling antineoplastic agents.",
                  "Secondary Containment in Transit: Ensure all prepared cytotoxic infusions are transported in sealed, leak-proof, labeled secondary containers.",
                  "Infusion Line Priming Safety: Prime intravenous infusion lines with non-cytotoxic diluent solution prior to adding the hazardous active drug to avoid line-flushing spray.",
                  "Routine Spill Drill Readiness: Equip each nursing station and compounding room with readily accessible, certified hazardous drug spill kits.",
                  "Traceability & Record Keeping: Maintain batch traceability, lot expiration monitoring, and accurate logging of specialized oncology consumables.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 rounded-2xl border border-brand-200 bg-brand-50/70 p-4">
                <p className="text-xs sm:text-sm text-brand-950 font-medium">
                  <strong>Clinical Directive:</strong> Product selection should follow institutional protocols, healthcare professional guidance, and manufacturer instructions to ensure uncompromised clinical outcomes and worker protection.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 09. Safety & Quality Considerations */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Principles
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Safety &amp; Quality Considerations
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Five core principles for healthcare institutions implementing oncology products and hazardous drug supplies:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Appropriate Clinical Application",
                  desc: "Select products appropriate for the intended clinical application, procedure duration, and specific chemotherapy drug toxicity profile.",
                  icon: CheckCircle2,
                },
                {
                  title: "Adhere to Instructions & Protocols",
                  desc: "Follow manufacturer instructions for use (IFU) and institutional hospital protocols meticulously at every clinical stage.",
                  icon: FileText,
                },
                {
                  title: "Use Suitable Protective Equipment",
                  desc: "Use suitable protective equipment (tested chemotherapy gloves, gowns, respirators, eye protection) when handling hazardous medicines.",
                  icon: ShieldCheck,
                },
                {
                  title: "Verify Documentation & Compliance",
                  desc: "Verify product compatibility, documentation, certifications, and applicable regulatory requirements before institutional adoption.",
                  icon: ShieldAlert,
                },
                {
                  title: "Ensure Comprehensive Staff Training",
                  desc: "Ensure that healthcare personnel receive appropriate training for specialized equipment, CSTDs, and oncology consumables.",
                  icon: Stethoscope,
                },
                {
                  title: "Cytotoxic Waste Segregation",
                  desc: "Strictly adhere to national biomedical waste regulations for separate yellow-coded cytotoxic waste incineration and disposal.",
                  icon: AlertTriangle,
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 space-y-3 hover:border-brand-300 hover:bg-white hover:shadow-sm transition-all">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-700">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section id="faqs" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Hospital Inquiries &amp; Clinical FAQs
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What are oncology solutions?",
                  a: "Oncology solutions encompass medical products, equipment, and support systems used in cancer diagnosis, treatment, and patient care. These may include chemotherapy administration supplies, protective equipment for healthcare professionals, infusion-related products, and specialized medical devices.",
                },
                {
                  q: "What is the function of Closed-System Drug Transfer Devices (CSTDs)?",
                  a: "CSTDs are specialized drug-transfer devices designed to mechanically prohibit the transfer of environmental contaminants into the system and prevent the escape of hazardous drug or vapor concentrations outside the system, significantly reducing occupational chemical exposure during compounding and administration.",
                },
                {
                  q: "How do chemotherapy-tested PPE products differ from regular hospital PPE?",
                  a: "Chemotherapy-tested gloves and gowns undergo rigorous barrier testing (such as ASTM D6978) against specific antineoplastic drugs to confirm resistance to chemical permeation, degradation, and fluid strike-through, offering far greater protection than standard medical examination PPE.",
                },
                {
                  q: "What is Tumour Specific Electroporation (TSE) technology?",
                  a: "Developed by Scandinavian ChemoTech AB, Tumour Specific Electroporation (TSE) is a patented technology utilizing precision electrical pulses guided by real-time tissue impedance. It temporarily increases cancer cell membrane permeability to maximize intracellular chemotherapy absorption while sparing surrounding healthy nerve and vascular tissues.",
                },
                {
                  q: "What oncology safety products are manufactured by Cardinal Health?",
                  a: "Cardinal Health's documented oncology-related portfolio includes chemotherapy safety products such as Insta-Gard®, ChemoPlus™, and ChemoBloc™ protective gowns, gloves, and prep mats, as well as broader specialty pharmaceutical support services for oncology practices.",
                },
                {
                  q: "Does Catalyst Biomedicals distribute Cardinal Health oncology products in India?",
                  a: "The information presented describes Cardinal Health's documented oncology portfolio generally. Specific product brands, models, certifications, and authorized distribution claims in India should be published and engaged only after direct confirmation of Catalyst Biomedicals' active portfolio and distribution rights.",
                },
                {
                  q: "How can a hospital or cancer centre enquire about oncology equipment and supplies?",
                  a: "Hospitals, cancer centres, oncology departments, and healthcare procurement teams can contact Catalyst Biomedicals directly via our contact desk to discuss available oncology products, technical documentation, institutional quotations, and supply requirements.",
                },
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-brand-700">
                        {faq.q}
                      </span>
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? "bg-accent-600 text-white rotate-180" : "bg-slate-100 text-slate-600"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Product Availability & Hospital Enquiries CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-accent-400">
              Product Availability &amp; Hospital Enquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Enquire About Oncology Products
            </h2>
            <p className="text-sm sm:text-base text-brand-100 leading-relaxed">
              Catalyst Biomedicals welcomes enquiries from hospitals, cancer centres, oncology departments, and healthcare procurement teams regarding available oncology-related products, technical specifications, product documentation, and supply requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Enquire About Oncology Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 backdrop-blur-sm transition-all"
              >
                Contact Catalyst Biomedicals
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Information Notice Banner */}
      <section className="pt-8 pb-4 bg-slate-50">
        <Container>
          <div className="w-full rounded-2xl border border-brand-200/90 bg-brand-50/70 p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
              <strong>Product Information Notice:</strong> Specific product brands, models, certifications, and distribution claims should be published only after verification of Catalyst Biomedicals&apos; current portfolio and supporting documentation. For official manufacturer references, visit{" "}
              <a
                href="https://www.cardinalhealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline hover:text-accent-600"
              >
                Cardinal Health Medical Products
              </a>{" "}
              and{" "}
              <a
                href="https://www.cardinalhealth.ca/en/products/general-medical-supplies/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline hover:text-accent-600"
              >
                Cardinal Health Chemotherapy Protection Products
              </a>.
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Disclaimer Banner */}
      <section className="py-6 bg-slate-100 border-t border-slate-200 text-slate-500 text-xs">
        <Container>
          <div className="w-full text-center space-y-2">
            <p className="leading-relaxed">
              <strong>Medical Disclaimer:</strong> This page provides general information about medical products and oncology support solutions. It does not replace professional medical advice, diagnosis, or treatment. Healthcare institutions and clinicians must evaluate clinical suitability and adhere to applicable drug-prescribing guidelines and manufacturer instructions for use.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
