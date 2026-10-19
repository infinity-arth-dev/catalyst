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
  Scissors,
  Sparkles
} from "lucide-react";

export default function HospitalSupply() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/hospital-supply/hospital-supply-hero.jpg"
          alt="Hospital Medical Supplies and Clinical Consumables"
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
              HOSPITAL CONSUMABLES • SURGICAL SUPPLIES • PATIENT CARE
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              Hospital Supply Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Cardinal Health — Hospital Medical Supplies &amp; Solutions
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Essential hospital supplies, surgical operating room consumables, infection barrier protection, patient monitoring accessories, and clinical nutrition systems supporting modern healthcare infrastructure.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What are Hospital Medical Supplies? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Healthcare Infrastructure Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is Hospital Supply Management?
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
                Hospital medical supplies play a foundational role in daily clinical operations, patient care, surgical preparation, and routine healthcare procedures. From sterile barrier gloves and surgical drapes to diagnostic monitoring accessories, reliable supplies ensure seamless hospital workflows.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Cardinal Health is a global healthcare company that manufactures and distributes medical and laboratory products, pharmaceuticals, and healthcare solutions. Its medical product portfolio encompasses high-performance surgical consumables, wound care systems, patient monitoring accessories, and specialized enteral feeding solutions trusted across acute and ambulatory care settings worldwide.
              </p>

              <div className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-950 leading-relaxed">
                  <strong>Clinical Workflow Directive:</strong> Appropriate product selection, compatibility verification, climate-controlled storage, and strict adherence to manufacturer instructions for use (IFU) help healthcare institutions uphold infection control standards and ensure uninterrupted clinical delivery.
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
                    Infection Prevention
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Medical-grade barrier defenses including sterile surgical gloves, impervious surgical drapes, and protective apparel to minimize cross-contamination risks.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Diagnostic Continuity
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-fidelity ECG electrodes, monitoring cables, and clinical patient interfaces engineered for stable signal transmission across telemetry and bedside monitoring.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Supply Reliability
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured institutional supply logistics, batch traceability, and consistent packaging configurations tailored for corporate and multi-specialty hospitals.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. Hospital Clinical Departments & Supply Requirements */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Departmental Deployment
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Clinical Departments &amp; Supply Requirements
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Modern hospital facilities require specialized consumable configurations aligned with distinct departmental care demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "01",
                  title: "Operating Theatres & Surgical Suites",
                  desc: "Demands sterile barrier drapes, high-tactility surgical gloves, incise films, fluid collection pouches, and surgical skin prep consumables.",
                },
                {
                  id: "02",
                  title: "Intensive Care & Critical Units",
                  desc: "Requires continuous ECG monitoring electrodes, enteral nutrition pumps, closed delivery sets, aspiration catheters, and barrier PPE.",
                },
                {
                  id: "03",
                  title: "General Inpatient Wards",
                  desc: "Relies on examination gloves, basic wound care dressings, IV administration accessories, skin prep wipes, and diagnostic disposables.",
                },
                {
                  id: "04",
                  title: "Wound Care & Minor Procedure Clinics",
                  desc: "Utilizes advanced hydrocolloid dressings, transparent film dressings, non-adherent pads, sterile gauze, and medical fixation tapes.",
                },
                {
                  id: "05",
                  title: "Infection Control & Isolation Rooms",
                  desc: "Requires certified particulate respirators, fluid-resistant surgical masks, isolation gowns, shoe covers, and medical gloves.",
                },
                {
                  id: "06",
                  title: "Emergency & Post-Anesthesia Care",
                  desc: "Requires rapid-access consumable packs, hemodynamic monitoring interfaces, patient warming consumables, and acute wound management supplies.",
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
                <strong>Procurement Assessment:</strong> Departmental requirements should be evaluated alongside hospital infection control committees, biomedical engineering, and surgical nursing leadership.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. Sterility, Safety & Standards in Hospital Consumables */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Sterility Assurance &amp; Compliance
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Sterility, Safety &amp; Quality Standards
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Strict adherence to international medical device manufacturing certifications ensures uncompromised barrier defense and clinical reliability.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/products/hospital-supply/hospital-supply-consumables.jpg"
                    alt="Sterile Hospital Supplies and Infection Control Consumables"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm uppercase font-bold tracking-wider text-brand-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-600" />
                    Essential Safety &amp; Manufacturing Criteria
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Medical-grade barrier integrity meeting ISO 13485 standards.",
                      "Validated sterility assurance levels (SAL 10⁻⁶) for invasive consumables.",
                      "Latex-free and powder-free formulations reducing allergic sensitization.",
                      "Fluid-impervious fabrics compliant with AAMI Level 3 & Level 4 barrier standards.",
                      "Secure lot and batch numbering for hospital-wide supply traceability.",
                      "Biocompatible medical polymers tested according to ISO 10993 requirements.",
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

              {/* Notice Callout */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Sterile Barrier Verification:</strong> Never use medical consumables if the primary sterile packaging has been punctured, torn, exposed to moisture, or exceeded its marked expiration date. Single-use devices must not be re-sterilized or re-used under any circumstances.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How Are Hospital Supplies Managed & Deployed? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Operational Supply Chain
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Hospital Consumable Management &amp; Workflow
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                From procurement validation to sterile point-of-care deployment, standardized protocols safeguard clinical integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Clinical Need Assessment",
                  desc: "Hospital departments review surgical volume, inpatient census, and specialty procedure requirements to establish baseline consumable inventory targets.",
                  icon: Stethoscope,
                },
                {
                  step: "2",
                  title: "Compatibility Verification",
                  desc: "Clinical teams confirm compatibility between devices and consumables, such as feeding tube connectors, pump cassettes, and ECG monitoring cables.",
                  icon: Cpu,
                },
                {
                  step: "3",
                  title: "Controlled Storage",
                  desc: "Supplies are stored in clean, climate-controlled, pest-free environments with strict First-Expired, First-Out (FEFO) stock rotation practices.",
                  icon: Boxes,
                },
                {
                  step: "4",
                  title: "Aseptic Point-of-Care Use",
                  desc: "Healthcare workers inspect package seals, perform hand hygiene, and open sterile barrier supplies following aseptic non-touch techniques.",
                  icon: Layers,
                },
                {
                  step: "5",
                  title: "Clinical Monitoring",
                  desc: "Staff routinely assess dressing adhesion, glove integrity during long procedures, electrode signal fidelity, and enteral infusion rates.",
                  icon: Clock,
                },
                {
                  step: "6",
                  title: "Biomedical Waste Segregation",
                  desc: "Used consumables are disposed of in designated color-coded biomedical waste containers adhering to hospital infection control and environmental guidelines.",
                  icon: ShieldCheck,
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
                * Note: Exact supply handling, sterilization verification, and inventory replenishment protocols vary by healthcare facility governance and local regulatory requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. Benefits of Standardized Hospital Supplies */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical &amp; Operational Value
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Benefits of Standardized Hospital Supplies
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Standardizing on verified, high-performance medical consumables elevates patient safety and streamlines hospital procurement logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Consistent Infection Barrier Protection",
                  desc: "High-grade surgical gloves and drapes provide predictable barrier resistance against fluid strike-through, pathogens, and chemical hazards.",
                  icon: ShieldCheck,
                },
                {
                  title: "Enhanced Tactile Sensitivity & Comfort",
                  desc: "Ergonomically engineered surgical gloves (such as Protexis™) reduce hand fatigue during extended surgical procedures without compromising puncture resistance.",
                  icon: Sparkles,
                },
                {
                  title: "Reliable Diagnostic Signal Fidelity",
                  desc: "Low-impedance conductive gel on specialized ECG monitoring electrodes maintains stable cardiac trace readings and minimizes skin irritation.",
                  icon: Activity,
                },
                {
                  title: "Advanced Wound Bed Management",
                  desc: "Modern wound care dressings promote optimal moisture balance, support autolytic debridement, and facilitate atraumatic removal.",
                  icon: Scissors,
                },
                {
                  title: "Precision Enteral Nutrition Delivery",
                  desc: "Clinically engineered enteral feeding sets and pumps ensure accurate volumetric delivery and prevent accidental IV tube misconnections.",
                  icon: HeartPulse,
                },
                {
                  title: "Institutional Supply Chain Efficiency",
                  desc: "Consolidating on verified, international-standard product portfolios simplifies inventory management, warehousing, and clinical in-service training.",
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

      {/* 07. Featured Product Portfolio: Cardinal Health Medical Solutions */}
      <section id="products" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Product Portfolio
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Cardinal Health — Hospital Medical Supplies &amp; Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Cardinal Health manufactures and distributes essential medical and laboratory products, surgical solutions, patient monitoring accessories, and clinical devices supporting healthcare institutions worldwide.
              </p>
            </div>

            {/* Featured Manufacturer Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/hospital-supply/cardinal-medical-supplies.jpg"
                    alt="Cardinal Health Hospital Medical Supplies and Consumables"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent-600 mb-1">
                      Featured Manufacturer Profile
                    </p>
                    <p className="text-base font-bold text-brand-900">
                      Cardinal Health
                    </p>
                    <p className="text-xs text-slate-500">
                      Global Healthcare &amp; Medical Products Manufacturer
                    </p>
                  </div>
                  <div className="relative h-12 w-36 shrink-0">
                    <Image
                      src="/partners/cardinalhealth.jpg"
                      alt="Cardinal Health"
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
                    Comprehensive Hospital Medical Portfolio
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600">
                    Surgical Supplies • Patient Monitoring • Infection Prevention
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Cardinal Health is a global healthcare company that manufactures and distributes medical and laboratory products, pharmaceuticals, and healthcare solutions. Its medical product portfolio includes essential hospital supplies, surgical products, patient monitoring accessories, wound care products, and specialized medical devices.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-brand-700">
                    Portfolio Categories &amp; Clinical Focus
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <table className="w-full text-xs sm:text-sm">
                      <tbody>
                        {[
                          { 
                            label: "Examination & Surgical Gloves", 
                            value: "Protexis™ surgical gloves (polyisoprene, neoprene, latex) and powder-free exam gloves" 
                          },
                          { 
                            label: "Surgical & OR Supplies", 
                            value: "Aero Chrome™ sterile surgical drapes, impervious gowns, incise films, and fluid barrier systems" 
                          },
                          { 
                            label: "Patient Monitoring", 
                            value: "Medi-Trace™ ECG electrodes, monitoring cables, leadwires, and neonatal sensor interfaces" 
                          },
                          { 
                            label: "Enteral Nutrition Delivery", 
                            value: "Kangaroo™ OMNI & ePump enteral feeding pumps and ENFit® safety delivery sets" 
                          },
                          { 
                            label: "DVT Compression Systems", 
                            value: "Kendall SCD™ 700 sequential compression controllers, Express foot cuffs, and leg sleeves" 
                          },
                          { 
                            label: "Wound Care Solutions", 
                            value: "Sterile gauze, transparent island dressings, hydrocolloids, foam, and medical fixation tapes" 
                          },
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

                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                  <p className="text-xs text-amber-950 leading-relaxed">
                    <strong>Important before publishing:</strong> The information above describes Cardinal Health&apos;s product range generally. It does not confirm that Catalyst Biomedicals distributes every listed product or holds an authorized distribution agreement with Cardinal Health. Verify the actual products, brands, and distribution rights before presenting them as part of Catalyst&apos;s portfolio.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Core Product Categories Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-brand-700">
                6 Medical Product Portfolio Segments
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    num: "1",
                    title: "General Medical Supplies",
                    desc: "A range of everyday medical products designed to support routine patient care and clinical activities in healthcare facilities.",
                  },
                  {
                    num: "2",
                    title: "Surgical & Operating Room Supplies",
                    desc: "Medical products intended to support surgical procedures, operating room preparation, and infection prevention practices.",
                  },
                  {
                    num: "3",
                    title: "Wound Care Products",
                    desc: "Dressings and wound management products designed to support appropriate wound care across healthcare settings.",
                  },
                  {
                    num: "4",
                    title: "Patient Monitoring Accessories",
                    desc: "Products such as ECG electrodes and related monitoring accessories used by healthcare professionals during patient monitoring.",
                  },
                  {
                    num: "5",
                    title: "Infection Prevention & Personal Protective Equipment",
                    desc: "Selected products such as medical gloves, masks, gowns, and other protective supplies intended to support healthcare workers and infection prevention procedures.",
                  },
                  {
                    num: "6",
                    title: "Specialized Medical Devices",
                    desc: "Depending on the available product range, specialized solutions may include enteral feeding products, compression systems for DVT prevention, and other clinically focused medical equipment.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 space-y-3 hover:border-brand-300 hover:bg-white hover:shadow-sm transition-all relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                        Category {item.num}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-accent-600" />
                    </div>
                    <h4 className="text-base font-bold text-brand-700">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Manufacturer & Portfolio Notice */}
            <div className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
                <strong>Official Manufacturer Information:</strong> Official public company overview and portfolio documentation is available at{" "}
                <a
                  href="https://ir.cardinalhealth.com/overview/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-700 underline hover:text-accent-600"
                >
                  Cardinal Health Investor Overview
                </a>{" "}
                and{" "}
                <a
                  href="https://www.cardinalhealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-700 underline hover:text-accent-600"
                >
                  Cardinal Health Medical Products
                </a>. Catalyst Biomedicals confirms product specifications, batch packaging configurations, and distribution rights prior to institutional contract fulfillment.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 08. Supporting Hospital & Clinical Requirements */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Institutional Best Practices
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Supporting Hospital &amp; Clinical Requirements
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Hospital medical supplies play an important role in daily clinical operations, patient care, surgical preparation, and routine healthcare procedures.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-brand-700">
                Key Handling &amp; Operational Protocols:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Appropriate Product Selection: Ensure garments, drapes, and dressings are selected in accordance with procedural duration, anticipated fluid exposure, and surgical technique.",
                  "Compatibility Verification: Verify that specialized consumables (such as enteral pump cassettes, ENFit® syringes, or compression sleeves) match corresponding hospital device controllers.",
                  "Climate-Controlled Storage: Maintain sterile consumables in clean, dry, temperature-regulated supply areas away from direct sunlight and extreme humidity.",
                  "Packaging Integrity Checks: Inspect sterile pouches, box tamper seals, and expiration dates immediately prior to sterile field presentation.",
                  "Clinician Allergen Awareness: Provide non-latex and synthetic glove options (such as polyisoprene or neoprene) for staff or patients with documented Type I latex allergies.",
                  "Waste Segregation Compliance: Ensure proper disposal of used consumables in designated biohazard bins in compliance with hospital infection control guidelines.",
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
                  <strong>Clinical Directive:</strong> Appropriate product selection, compatibility, storage, and use according to manufacturer instructions help healthcare facilities maintain consistent clinical workflows and protect patient safety.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 09. Quality Assurance, Regulatory Compliance & Precautions */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Quality Assurance &amp; Precautions
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Safety Notice &amp; Regulatory Precautions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Rigorous adherence to quality management systems and clinical instructions for use ensures patient and healthcare worker safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Single-Use Assurance",
                  desc: "Consumables marked as single-use must never be re-used, re-processed, or re-sterilized due to risks of material degradation and cross-infection.",
                  icon: AlertTriangle,
                },
                {
                  title: "Regulatory Conformance",
                  desc: "Products adhere to applicable medical device quality standards (e.g. ISO 13485, CE marking, and Indian regulatory compliance where authorized).",
                  icon: FileText,
                },
                {
                  title: "Sterile Barrier Verification",
                  desc: "Healthcare professionals should verify that primary packaging is undamaged and dry before dispensing into the sterile surgical field.",
                  icon: ShieldCheck,
                },
                {
                  title: "Clinical Skin Assessment",
                  desc: "Monitor patient skin condition beneath dressings, medical tapes, and monitoring electrodes for signs of irritation or adhesive sensitivity.",
                  icon: Stethoscope,
                },
                {
                  title: "Correct Connector Protocols",
                  desc: "Utilize ENFit® enteral feeding connectors designed to prevent accidental cross-connection with intravenous or respiratory tubing lines.",
                  icon: Cpu,
                },
                {
                  title: "Manufacturer Instructions for Use",
                  desc: "Always deploy, fit, operate, and dispose of medical devices and supplies strictly according to the applicable manufacturer IFU.",
                  icon: CheckCircle2,
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

            {/* Standardized Safety Notice */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-3.5">
              <h3 className="text-base font-bold text-brand-800 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                Safety Notice &amp; Clinical Precautions
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Hospital medical supplies and devices are not universally interchangeable across all clinical applications. Product suitability depends on the specific clinical procedure, patient anatomy, known sensitivities (including natural rubber latex), and the manufacturer&apos;s approved indications. Healthcare institutions must follow treating clinicians&apos; directives and institutional infection prevention guidelines.
              </p>
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
                Hospital Procurement &amp; Clinical Inquiries
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
                  q: "What product categories are included in Cardinal Health's medical portfolio?",
                  a: "Cardinal Health's published medical portfolio encompasses general medical supplies, surgical and operating room supplies (drapes and gowns), wound care products, patient monitoring accessories (ECG electrodes and cables), infection prevention and personal protective equipment (gloves, masks, and gowns), and specialized medical devices including enteral feeding systems and DVT compression products.",
                },
                {
                  q: "Are latex-free and synthetic surgical gloves available for sensitive clinicians and patients?",
                  a: "Yes. In addition to traditional surgical gloves, advanced product lines such as Protexis™ feature synthetic polyisoprene and neoprene formulations that deliver the tactile sensitivity and elasticity of natural rubber latex without containing latex proteins, thereby mitigating Type I latex allergy risks.",
                },
                {
                  q: "What is the role of Kangaroo™ enteral nutrition delivery systems in hospital settings?",
                  a: "Kangaroo™ enteral feeding pumps (such as the Kangaroo™ ePump and Kangaroo™ OMNI) provide automated, accurate enteral nutrition delivery for patients unable to ingest food orally. They feature anti-free-flow safety mechanisms, continuous and intermittent feeding modes, and ENFit® connection systems to prevent tubing misconnections.",
                },
                {
                  q: "How do sterile surgical drapes contribute to operating room infection prevention?",
                  a: "Sterile surgical drapes provide an impervious physical barrier around the operative field, preventing fluid strike-through, bacterial migration, and surgical site contamination. High-performance drapes (such as Aero Chrome™) meet stringent AAMI barrier standards to protect both patients and surgical personnel.",
                },
                {
                  q: "How does Catalyst Biomedicals support hospital supply chain and procurement needs?",
                  a: "Catalyst Biomedicals collaborates with healthcare institutions, hospital purchase committees, and critical care units to assist with product enquiries, technical documentation, packaging configurations, institutional price quotations, and reliable supply scheduling.",
                },
                {
                  q: "Are all listed Cardinal Health products immediately available for distribution in India?",
                  a: "The information presented describes Cardinal Health's global medical portfolio generally. Actual product availability, authorized distribution rights in India, regulatory import licenses, and institutional supply arrangements must be verified directly with Catalyst Biomedicals before procurement commitments.",
                },
                {
                  q: "How can a hospital or medical procurement team enquire about supply availability?",
                  a: "Hospitals, surgical facilities, and healthcare procurement teams can contact Catalyst Biomedicals directly via our contact page, phone, or email to discuss product availability, compatible accessories, technical specifications, and bulk institutional quotations.",
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

      {/* Enquiries & Product Availability CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-accent-400">
              Enquiries &amp; Product Availability
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Hospital Procurement &amp; Supply Inquiries
            </h2>
            <p className="text-sm sm:text-base text-brand-100 leading-relaxed">
              Catalyst Biomedicals invites hospitals, healthcare institutions, and medical procurement teams to enquire about available hospital supplies, product specifications, packaging configurations, and supply requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Enquire About Hospital Supplies
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

      {/* Medical Equipment Distribution & Institutional Information Banner */}
      <section className="pt-8 pb-4 bg-slate-50">
        <Container>
          <div className="w-full rounded-2xl border border-brand-200/90 bg-brand-50/70 p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
              <strong>Medical Equipment Distribution &amp; Portfolio Verification:</strong> Catalyst Biomedicals is an importer and distributor of medical-related products. The information above describes Cardinal Health&apos;s product range generally. It does not confirm that Catalyst Biomedicals distributes every listed product or holds an authorized distribution agreement with Cardinal Health. Verify the actual products, brands, and distribution rights before presenting them as part of Catalyst&apos;s portfolio. For official product details, refer to the{" "}
              <a
                href="https://www.cardinalhealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline hover:text-accent-600"
              >
                Cardinal Health Medical Products website
              </a>.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
