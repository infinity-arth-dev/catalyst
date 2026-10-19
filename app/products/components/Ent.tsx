"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import {
  Zap,
  Waves,
  Wind,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Layers,
  AlertTriangle,
  HeartPulse,
  Info,
  Target,
  FileText,
  Activity,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Clock,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function Ent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/ent/ent-hero.jpg"
          alt="ENT Coblation Technology & Surgical Suites"
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
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono tracking-widest text-accent-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-ping" />
              ENT • COBLATION • MINIMALLY INVASIVE SURGICAL TECHNOLOGY
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              ENT Coblation Technology
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Advanced Coblation Systems for ENT Surgical Procedures
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Coblation is a tissue-treatment technology that uses radiofrequency energy and a conductive saline medium to create a plasma field. It is designed to enable controlled tissue removal, reduction, and coagulation in selected ear, nose, and throat (ENT) procedures.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What is ENT Coblation Technology? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Technology Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is ENT Coblation Technology?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            {/* Core Definition & Distinction */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-50 rounded-bl-full pointer-events-none" />
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                ENT Coblation Technology is used in selected surgical procedures to remove or reduce targeted soft tissue. The system typically includes an energy generator, a procedure-specific wand or probe, and compatible saline irrigation and suction components.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Unlike conventional high-temperature tissue removal methods, Coblation is designed to operate at relatively low temperatures. The actual performance and suitability depend on the system, wand, procedure, and clinical circumstances.
              </p>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Important Distinction:</strong> Coblation is a surgical technology, not a standalone treatment or diagnosis. The appropriate technique and device must be selected by a qualified ENT surgeon according to the patient&apos;s condition and the device&apos;s approved indications.
                </div>
              </div>
            </div>

            {/* 4 Core Clinical Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Waves className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Tonsil &amp; Adenoid Procedures
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Coblation systems with compatible wands may be used for selected tonsillectomy and adenoidectomy procedures, enabling controlled tissue dissection and coagulation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                    <Wind className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Nasal Turbinate Reduction
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specialized wands may be used to reduce enlarged submucosal nasal turbinate tissue in appropriate patients to assist in relieving persistent nasal obstruction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Soft Palate Procedures
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Selected systems and compatible devices may support procedures involving targeted soft-tissue reduction for snoring and airway considerations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Laryngeal &amp; Airway Procedures
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Specific wands are designed for selected procedures involving laryngeal or upper-airway tissue, subject to the device&apos;s approved regulatory indications.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. ENT Conditions and Procedures */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Applications
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                ENT Conditions &amp; Procedures
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Coblation may be considered by ENT specialists for selected conditions where surgical tissue removal or reduction is clinically appropriate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "01",
                  title: "Enlarged Tonsils",
                  desc: "Tonsillar enlargement may contribute to recurrent throat problems or obstructive symptoms. Surgical management depends on specialist clinical assessment.",
                },
                {
                  id: "02",
                  title: "Enlarged Adenoids",
                  desc: "Adenoid enlargement may contribute to nasal obstruction, mouth breathing, or sleep-related breathing problems, particularly in pediatric patients.",
                },
                {
                  id: "03",
                  title: "Enlarged Nasal Turbinates",
                  desc: "Turbinate enlargement may contribute to persistent nasal blockage, congested airway, and chronic difficulty breathing through the nasal passages.",
                },
                {
                  id: "04",
                  title: "Selected Snoring Conditions",
                  desc: "Certain soft-tissue procedures may be considered in appropriately assessed patients experiencing severe snoring or related upper airway resistance.",
                },
                {
                  id: "05",
                  title: "Selected Laryngeal Conditions",
                  desc: "Specialized instruments may be used for specific laryngeal tissue procedures and localized resections where indicated by ENT surgeons.",
                },
                {
                  id: "06",
                  title: "Other Indicated ENT Procedures",
                  desc: "Applications vary by system, compatible wand profile, patient anatomy, and the manufacturer's approved instructions for use.",
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
                      <Activity className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
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
          </div>
        </Container>
      </section>

      {/* 04. When Might an ENT Specialist Consider Coblation? */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Symptom Evaluation
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                When Might an ENT Specialist Consider Coblation?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Coblation may be considered only after an ENT specialist thoroughly evaluates the underlying condition and determines whether a surgical procedure is appropriate.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8">
              <div>
                <h3 className="text-sm uppercase font-bold tracking-wider text-brand-700 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-accent-600" />
                  Symptoms That May Require ENT Assessment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Recurrent tonsillitis or persistent throat problems.",
                    "Persistent nasal obstruction or difficulty breathing through the nose.",
                    "Enlarged tonsils or adenoids associated with obstructive symptoms.",
                    "Snoring or suspected sleep-disordered breathing.",
                    "Persistent symptoms associated with enlarged nasal turbinates.",
                    "Selected laryngeal or upper-airway conditions requiring specialist evaluation.",
                  ].map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {symptom}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Note Callout */}
              <div className="rounded-2xl border border-brand-200/90 bg-brand-50/60 p-5 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-950 leading-relaxed">
                  <strong>Important Clinical Note:</strong> These symptoms do not automatically indicate a need for Coblation. Treatment may involve medication, observation, other procedures, or surgery depending on individual diagnosis and anatomical presentation.
                </div>
              </div>

              {/* Emergency Warning */}
              <div className="rounded-2xl border border-red-200 bg-red-50/70 p-5 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  <strong>Emergency Warning:</strong> Severe difficulty breathing, rapidly increasing throat or neck swelling, or inability to swallow saliva requires immediate emergency medical assessment.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How Does an ENT Coblation System Work? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Technology Pathway
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Does an ENT Coblation System Work?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                The exact workflow varies by device and procedure. A typical system operates through the following components and clinical steps:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Clinical Assessment",
                  desc: "The ENT surgeon assesses the condition, reviews relevant investigations, and determines whether a Coblation procedure is clinically appropriate.",
                  icon: Stethoscope,
                },
                {
                  step: "2",
                  title: "System Preparation",
                  desc: "The compatible generator, procedure-specific wand, and required accessories are prepared according to the manufacturer's instructions.",
                  icon: Cpu,
                },
                {
                  step: "3",
                  title: "Saline Delivery",
                  desc: "A conductive saline medium is supplied where required by the system design to support plasma formation and electrolyte activation.",
                  icon: Waves,
                },
                {
                  step: "4",
                  title: "Controlled Energy Application",
                  desc: "Radiofrequency energy creates a plasma field around the active electrode, enabling targeted tissue removal or reduction at low temperatures.",
                  icon: Zap,
                },
                {
                  step: "5",
                  title: "Coagulation & Management",
                  desc: "Compatible systems provide coagulation functions to help control bleeding during the procedure with dedicated coag settings.",
                  icon: HeartPulse,
                },
                {
                  step: "6",
                  title: "Post-Procedure Assessment",
                  desc: "The clinical team monitors the patient, provides appropriate aftercare instructions, and arranges follow-up when necessary.",
                  icon: Clock,
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
          </div>
        </Container>
      </section>

      {/* 06. Potential Advantages of Coblation Technology */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Modalities
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Potential Advantages of Coblation Technology
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                The potential benefits depend on the specific device, procedure, patient, and surgeon&apos;s technique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Targeted Tissue Treatment",
                  desc: "Designed to remove or reduce selected tissue with high precision in procedures for which the device is indicated.",
                  icon: Target,
                },
                {
                  title: "Controlled Energy Delivery",
                  desc: "Allows the clinician to apply energy accurately using a compatible wand and tailored generator power settings.",
                  icon: Zap,
                },
                {
                  title: "Lower-Temperature Approach",
                  desc: "Coblation is designed to operate at lower temperatures (typically 40°C–65°C in adenotonsillectomy, typically no higher than 70°C on WEREWOLF™ platforms) than conventional electrosurgical methods; this does not eliminate the risk of thermal injury.",
                  icon: Sparkles,
                },
                {
                  title: "Integrated Irrigation",
                  desc: "Compatible systems integrate continuous saline delivery and suction to maintain plasma stability and clear surgical visibility.",
                  icon: Waves,
                },
                {
                  title: "Procedure-Specific Instruments",
                  desc: "Specialized wand designs support different anatomical sites including tonsils, adenoids, nasal turbinates, and larynx.",
                  icon: Layers,
                },
                {
                  title: "Clinical Flexibility",
                  desc: "Selected systems offer versatile instruments and adjustable coagulation modes for tailored ENT procedural workflows.",
                  icon: Activity,
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

      {/* 07. Technology Portfolio & Surgical Solutions */}
      <section id="products" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Technology Portfolio &amp; Equipment Solutions
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                ENT Coblation Equipment &amp; Surgical Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Catalyst Biomedicals presents the following technology profile and surgical equipment solutions, subject to verified distribution arrangements and local institutional availability.
              </p>
            </div>

            {/* Featured System Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/ent/ent-surgery.jpg"
                    alt="ENT Coblation Surgery and Smith & Nephew Technology"
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
                      Smith &amp; Nephew Healthcare Pvt Ltd
                    </p>
                    <p className="text-xs text-slate-500">
                      COBLATION™ Technology &amp; ENT Surgical Systems (Subject to Territory Verification)
                    </p>
                  </div>
                  <div className="relative h-12 w-36 shrink-0">
                    <Image
                      src="/partners/smithnephew-img.jpg"
                      alt="Smith & Nephew Healthcare Pvt Ltd"
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
                    Smith+Nephew COBLATION™ System
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600">
                    RF Plasma Cold Ablation Technology for ENT Procedures
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Smith+Nephew&apos;s COBLATION™ technology uses low-temperature radiofrequency energy to excite electrolytes in a conductive saline medium, creating a focused plasma field designed to gently dissolve molecular bonds with minimized thermal damage to adjacent tissue structures.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-brand-700">
                    Verified Technical Specifications &amp; Operational Parameters
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <table className="w-full text-xs sm:text-sm">
                      <tbody>
                        {[
                          { 
                            label: "Technology", 
                            value: "COBLATION™ Bipolar RF Plasma Dissociation" 
                          },
                          { 
                            label: "Operating Temperature", 
                            value: "Typically 40°C–65°C for adenotonsillectomy; typically no higher than 70°C on WEREWOLF™ system (vs. 400°C–600°C in conventional electrocautery)" 
                          },
                          { 
                            label: "Wand Portfolio", 
                            value: "TURBINATOR™, PROCISE™ XP, PROCISE™ MAX, EVAC™, Reflex™ (subject to regional regulatory status)" 
                          },
                          { 
                            label: "System Platforms", 
                            value: "WEREWOLF™ ENT Controller / COBLATOR™ II Surgery Controller" 
                          },
                          { 
                            label: "Fluid & Suction Interface", 
                            value: "Integrated conductive saline delivery channel & active vacuum suction evacuation" 
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
              </div>
            </div>

            {/* 6 Equipment Categories Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-brand-700">
                Equipment Categories &amp; Clinical Solutions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Coblation Generator System",
                    desc: "The central energy unit used with compatible instruments to deliver controlled radiofrequency output and regulated saline delivery.",
                  },
                  {
                    title: "ENT Coblation Wands",
                    desc: "Procedure-specific instruments designed for selected applications, including tonsillectomy, adenoidectomy, and turbinate reduction.",
                  },
                  {
                    title: "Laryngeal Wands",
                    desc: "Specialized, slender instruments designed for targeted access during selected laryngeal and upper-airway surgical procedures.",
                  },
                  {
                    title: "Saline Irrigation Components",
                    desc: "Compatible tubing sets and sterile irrigation accessories engineered for systems that require continuous conductive medium delivery.",
                  },
                  {
                    title: "Footswitches & Accessories",
                    desc: "Dual-pedal ergonomic footswitches, power cords, and mounting accessories designed for seamless surgical suite operation.",
                  },
                  {
                    title: "System Integration & Support",
                    desc: "Product demonstrations, surgeon training coordination, clinical documentation, and ongoing institutional support by Catalyst Biomedicals.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 space-y-2.5 hover:border-brand-300 hover:bg-white hover:shadow-sm transition-all">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-600" />
                      <h4 className="text-base font-bold text-brand-700">
                        {item.title}
                      </h4>
                    </div>
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
                <strong>Medical Equipment Distribution &amp; Portfolio Verification:</strong> If Catalyst Biomedicals includes Smith+Nephew COBLATION products in its active distribution portfolio, the specific generator models, compatible wand configurations, and local availability remain subject to confirmed authorized distribution status and regional regulatory registrations.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 08. Recovery After ENT Coblation Procedures */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Functional Recovery
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Recovery After ENT Coblation Procedures
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Recovery varies according to the procedure, the anatomical site treated, the patient&apos;s age and overall health, and the surgeon&apos;s instructions. Recovery following tonsil surgery may differ from recovery after a nasal turbinate procedure.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-brand-700">
                Typical Recovery Considerations:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Follow the treating surgeon's specific instructions for pain management and wound care.",
                  "Maintain appropriate hydration and adhere strictly to the recommended diet (soft or liquid foods as advised).",
                  "Attend all scheduled follow-up appointments for clinical evaluation and healing assessment.",
                  "Observe restrictions on strenuous physical activity, lifting, and return to work or school.",
                  "Seek prompt medical review for unexpected bleeding, worsening symptoms, dehydration, or fever.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  * Note: Recovery times, post-operative comfort, and clinical outcomes cannot be guaranteed and should always be discussed directly with the treating ENT specialist.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 09. How Can Safe Coblation Use Be Supported? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Surgical Safety &amp; Patient Care
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Can Safe Coblation Use Be Supported?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Adhering to strict clinical guidelines, device compatibility, and equipment protocols ensures optimal patient safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Appropriate Patient Selection",
                  desc: "Use the technology only when the treating ENT surgeon determines that the surgical procedure is clinically indicated.",
                  icon: Target,
                },
                {
                  title: "Device Compatibility",
                  desc: "Use only the generator, wands, tubing, and designated accessories specified by the manufacturer for the particular system.",
                  icon: Cpu,
                },
                {
                  title: "Training & Instructions",
                  desc: "Clinical personnel and theater staff must follow the manufacturer's instructions for use (IFU) and applicable technical training.",
                  icon: FileText,
                },
                {
                  title: "Sterility & Infection Control",
                  desc: "Strictly adhere to device-specific protocols for sterile single-use components, reprocessing, and sterile theater field maintenance.",
                  icon: ShieldCheck,
                },
                {
                  title: "Equipment Inspection",
                  desc: "Routinely inspect generator status, compatible accessories, cables, and required operating functions prior to clinical use.",
                  icon: CheckCircle2,
                },
                {
                  title: "Post-Procedure Monitoring",
                  desc: "Follow standardized clinical protocols for recovery observation, aftercare management, and immediate recognition of complications.",
                  icon: HeartPulse,
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                <strong>Surgical Risk Notice:</strong> The use of Coblation does not eliminate surgical risks. Risks and expected outcomes vary by procedure and patient anatomy.
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
                Patient &amp; Healthcare Professional Questions
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
                  q: "What is ENT Coblation Technology?",
                  a: "ENT Coblation is an advanced surgical tissue-treatment technology that utilizes bipolar radiofrequency (RF) energy in a conductive saline medium to create a focused, low-temperature plasma field. Rather than burning tissue like conventional electrocautery (which operates at 400°C–600°C), Coblation typically operates at low temperatures—typically 40°C–65°C in adenotonsillectomy procedures and typically no higher than 70°C on the WEREWOLF™ platform—enabling gentle molecular dissociation of targeted soft tissue with simultaneous coagulation capability.",
                },
                {
                  q: "Where is Coblation used in ENT procedures?",
                  a: "Depending on the specific system platform and procedure-specific wand selected, Coblation is utilized in pediatric and adult tonsillectomy, adenoidectomy, submucosal inferior turbinate reduction, soft-palate reduction for snoring or upper-airway obstruction, and selected laryngeal and hypopharyngeal tissue resections subject to approved regulatory indications.",
                },
                {
                  q: "Is Coblation suitable for every ENT patient?",
                  a: "No. Coblation is not suitable or indicated for every patient or every ENT condition. An experienced ENT specialist must perform a thorough diagnostic evaluation of the patient's anatomy, disease severity, medical history, and clinical indications to decide whether conservative management, medical therapy, or Coblation-assisted surgery is the appropriate care pathway.",
                },
                {
                  q: "Is Coblation the same as conventional electrosurgery?",
                  a: "No. Conventional electrosurgery (electrocautery) relies on intense electrical resistance to generate high thermal heat (400°C to 600°C) to cut and burn tissue, which can cause significant collateral thermal damage to adjacent margins. Coblation uses radiofrequency energy to excite electrolytes in a saline medium, forming a low-temperature plasma field that gently breaks organic molecular bonds with significantly reduced collateral thermal transfer.",
                },
                {
                  q: "Does Coblation guarantee less pain or faster recovery?",
                  a: "No. While Coblation is designed to operate at substantially lower temperatures to minimize collateral thermal injury, post-operative recovery, pain perception, healing time, and surgical outcomes vary greatly from patient to patient. Pain and recovery depend on individual anatomy, procedure type, baseline health, surgical technique, and post-operative care compliance. Clinical benefits cannot and should never be guaranteed.",
                },
                {
                  q: "What equipment is required for a Coblation procedure?",
                  a: "A complete Coblation procedural setup typically requires: (1) a compatible radiofrequency generator controller (such as the WEREWOLF™ or COBLATOR™ II platform), (2) a procedure-specific single-use sterile plasma wand (such as TURBINATOR™, PROCISE™ XP, or EVAC™), (3) a sterile conductive saline irrigation delivery set, (4) active surgical vacuum suction tubing, and (5) ergonomic dual-pedal footswitch controls for precise activation of ablation and coagulation modes.",
                },
                {
                  q: "How can a hospital or surgical center enquire about Coblation equipment?",
                  a: "Healthcare institutions, hospital procurement teams, and ENT surgical departments can contact Catalyst Biomedicals directly through our inquiry form or contact team. Our clinical distribution specialists assist with product specifications, system compatibility, regional availability, institutional quotations, and equipment demonstration arrangements.",
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-accent-400">
              ENT Coblation Technology Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Advanced ENT Coblation Solutions
            </h2>
            <p className="text-sm sm:text-base text-brand-100 leading-relaxed">
              Connect with Catalyst Biomedicals to enquire about available Coblation systems, compatible ENT wands, product specifications, quotations, and demonstrations. Our team can help identify relevant equipment from the company&apos;s verified product portfolio.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Enquire About Coblation Systems
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 backdrop-blur-sm transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Equipment Distribution & Clinical Information Banner */}
      <section className="pt-8 pb-4 bg-slate-50">
        <Container>
          <div className="w-full rounded-2xl border border-brand-200/90 bg-brand-50/70 p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
              <strong>Medical Equipment Distribution &amp; Clinical Information:</strong> Catalyst Biomedicals is an importer and distributor of surgical products, partnering with global innovators to equip hospitals and surgical suites. The educational content above details ENT procedural pathways, followed by the surgical equipment and Coblation systems we distribute to healthcare institutions. Product availability, manufacturer relationships, regulatory status, and approved indications should be confirmed directly with Catalyst Biomedicals before publication.
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Disclaimer Banner */}
      <section className="py-6 bg-slate-100 border-t border-slate-200 text-slate-500 text-xs">
        <Container>
          <div className="w-full text-center space-y-2">
            <p className="leading-relaxed">
              <strong>Medical Disclaimer:</strong> This content is intended for general educational and product-information purposes. It does not replace professional medical advice, diagnosis, or treatment. Surgical decisions must be made by qualified healthcare professionals.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
