"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import { 
  Eye, 
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
  Scan,
  Sparkles
} from "lucide-react";

export default function Ophthalmology() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/ophthalmology/ophthalmology-hero.jpg"
          alt="Ophthalmology & Eye Care Solutions"
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
              OPHTHALMOLOGY • VISION • OCULAR HEALTH
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              Ophthalmology &amp; Eye Care Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Advanced Ophthalmic Technologies &amp; Diagnostic Solutions
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Advanced ophthalmic technologies and medical equipment supporting eye-care professionals in vision assessment, diagnosis, and treatment.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What is Ophthalmology? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Specialty Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is Ophthalmology?
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
                Ophthalmology is the branch of medicine concerned with the health of the eyes and visual system, including the cornea, lens, retina, optic nerve, and surrounding structures.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ophthalmologists evaluate vision problems, eye discomfort, and diseases that may affect sight. Depending on the condition, management may involve corrective lenses, medication, diagnostic imaging, laser treatment, surgery, or regular monitoring.
              </p>

              {/* Distinction Box: Ophthalmology vs Optometry */}
              <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5 flex items-start gap-3.5">
                <Eye className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
                  <strong>Important Distinction:</strong> <em>Ophthalmology focuses on the medical and surgical management of eye diseases.</em> Optometry primarily focuses on vision assessment, refractive correction, and optometric care within the practitioner&apos;s scope of practice. Catalyst Biomedicals supports healthcare institutions through its medical equipment and ophthalmic product portfolio.
                </div>
              </div>

              {/* 4 Key Areas */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Vision & Refraction",
                    desc: "Assessment of refractive errors, visual acuity, and difficulties with near or distant vision.",
                    icon: <Eye className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Cornea & Ocular Surface",
                    desc: "Evaluation of corneal disorders, dry eye, irritation, and other ocular surface conditions.",
                    icon: <Sparkles className="w-5 h-5 text-accent-600" />
                  },
                  {
                    title: "Retina & Optic Nerve",
                    desc: "Assessment of retinal diseases, diabetic eye complications, and optic nerve disorders.",
                    icon: <Scan className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Lens & Intraocular Pressure",
                    desc: "Evaluation of cataracts, glaucoma, and other conditions affecting the lens and internal pressure of the eye.",
                    icon: <Layers className="w-5 h-5 text-accent-600" />
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 space-y-2 hover:border-brand-400 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-brand-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. Common Ophthalmic Conditions */}
      <section id="conditions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Presentations
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Common Ophthalmic Conditions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                These conditions represent common eye disorders evaluated and managed by qualified eye-care professionals.
              </p>
            </div>

            {/* 8 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Cataracts",
                  desc: "Clouding of the eye’s natural lens, potentially causing blurred vision, glare, and difficulty seeing clearly.",
                },
                {
                  number: "02",
                  title: "Glaucoma",
                  desc: "A group of eye diseases that can damage the optic nerve and cause progressive vision loss, often without early symptoms.",
                },
                {
                  number: "03",
                  title: "Refractive Errors",
                  desc: "Myopia, hyperopia, astigmatism, and presbyopia that affect the eye’s ability to focus clearly.",
                },
                {
                  number: "04",
                  title: "Diabetic Retinopathy",
                  desc: "Damage to retinal blood vessels associated with diabetes, potentially threatening vision if not detected and managed.",
                },
                {
                  number: "05",
                  title: "Age-Related Macular Degeneration",
                  desc: "A condition affecting the macula, which is responsible for central vision and detailed visual tasks.",
                },
                {
                  number: "06",
                  title: "Dry Eye Disease",
                  desc: "A condition involving insufficient or unstable tears, causing irritation, burning, redness, or fluctuating vision.",
                },
                {
                  number: "07",
                  title: "Conjunctivitis",
                  desc: "Inflammation of the conjunctiva that may cause redness, watering, itching, or discharge.",
                },
                {
                  number: "08",
                  title: "Retinal Disorders",
                  desc: "Conditions affecting the retina that may cause flashes, floaters, visual-field changes, or reduced vision.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-accent-600 px-2.5 py-1 rounded-full bg-accent-50 border border-accent-100">
                        {card.number}
                      </span>
                      <span className="text-xs text-slate-500">Condition</span>
                    </div>
                    <h3 className="text-base font-bold text-brand-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 04. When Should You Consult an Eye Specialist? (Symptoms & Emergencies) */}
      <section id="symptoms" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Symptom Evaluation
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                When Should You Consult an Eye Specialist?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            {/* Routine Symptoms */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-[#00AEEF] flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-[#E8502A]" />
                Symptoms That May Require Ophthalmic Assessment:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Blurred vision or difficulty focusing clearly.",
                  "Persistent redness, itching, irritation, or eye discomfort.",
                  "Increased sensitivity to light or difficulty seeing at night.",
                  "Frequent changes in vision or prescription requirements.",
                  "Floaters, flashes of light, or visual-field disturbances.",
                  "Persistent dry eyes or excessive, uncontrollable watering.",
                  "Difficulty reading or performing routine visual tasks.",
                  "Diabetes or systemic conditions that increase the risk of eye disease.",
                ].map((symptom, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Warning Signs */}
            <div className="rounded-3xl border-2 border-red-200 bg-red-50/70 p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="flex items-center gap-2.5 text-red-700 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Ophthalmic Emergencies — Immediate Medical Attention</span>
              </div>
              <p className="text-xs sm:text-sm text-red-900/90 leading-relaxed">
                <strong>Emergency Warning:</strong> Sudden vision loss, severe eye pain, chemical exposure, penetrating eye trauma, or a sudden surge in flashes and floaters—particularly with a dark shadow or curtain spreading across your field of vision—may indicate a sight-threatening emergency such as acute retinal detachment or angle-closure glaucoma. <strong>Seek immediate emergency ophthalmic care</strong> rather than waiting for symptoms to resolve on their own.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How Are Ophthalmic Conditions Diagnosed? */}
      <section id="diagnosis" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Diagnostic Pathway
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Are Ophthalmic Conditions Diagnosed?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Diagnosis depends on symptoms, medical history, risk factors, and a comprehensive eye examination. Tests are selected according to clinical findings; not every patient requires every test.
              </p>
            </div>

            {/* Split Layout: Slit-Lamp System Image + 6 Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/products/ophthalmology/slit-lamp-system.jpg"
                    alt="Ophthalmic slit lamp biomicroscope and optical coherence tomography"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-center text-slate-500 italic">
                  Digital slit-lamp biomicroscopy and optical imaging guide precise ocular diagnosis.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {[
                  {
                    step: "1",
                    title: "Medical Consultation",
                    desc: "Review of visual symptoms, onset, previous ocular conditions, systemic health (such as diabetes), medications, and family history.",
                  },
                  {
                    step: "2",
                    title: "Visual Acuity & Refraction Testing",
                    desc: "Assessment of visual clarity, near and distance acuity, and refractive errors to determine appropriate optical correction.",
                  },
                  {
                    step: "3",
                    title: "Slit-Lamp Examination",
                    desc: "Detailed biomicroscopic examination of the anterior structures of the eye, including the cornea, anterior chamber, iris, and crystalline lens.",
                  },
                  {
                    step: "4",
                    title: "Intraocular Pressure Measurement",
                    desc: "Measurement of intraocular pressure (tonometry) as one part of comprehensive glaucoma risk evaluation and screening, alongside optic nerve and visual field assessment.",
                  },
                  {
                    step: "5",
                    title: "Retinal Examination & Imaging",
                    desc: "Fundus examination, digital retinal photography, and optical coherence tomography (OCT) when clinically indicated to assess retinal layers.",
                  },
                  {
                    step: "6",
                    title: "Treatment Planning",
                    desc: "The specialist determines whether observation, corrective lenses, medication, laser procedures, surgery, or further referral is required.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4.5 shadow-xs hover:border-brand-400 transition-colors">
                    <div className="h-8 w-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. Ophthalmic Treatment Options */}
      <section id="treatments" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Modalities
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Ophthalmic Treatment Options
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Treatment depends on the specific diagnosis and should be directed by a qualified eye-care professional.
              </p>
            </div>

            {/* Treatment Options Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4 w-full">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-brand-950 text-white rounded-t-xl">
                    <tr>
                      <th className="px-5 py-3.5 font-bold rounded-tl-xl w-2/5">Treatment Modality</th>
                      <th className="px-5 py-3.5 font-bold rounded-tr-xl">Clinical Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { approach: "Corrective Lenses", purpose: "Prescription glasses or contact lenses to correct refractive errors, astigmatism, and presbyopia." },
                      { approach: "Medication & Eye Drops", purpose: "Prescribed pharmacological solutions for glaucoma pressure reduction, inflammation, allergic relief, and ocular infections." },
                      { approach: "Laser Procedures", purpose: "Targeted laser therapies (e.g., YAG capsulotomy, SLT, retinal photocoagulation) for glaucoma and retinal disorders." },
                      { approach: "Ophthalmic Surgery", purpose: "Micro-incisional cataract surgery with intraocular lens (IOL) implantation, trabeculectomy, and vitreoretinal operations." },
                      { approach: "Monitoring & Follow-Up", purpose: "Regular biometric evaluations, visual field testing, and retinal imaging to monitor disease progression and surgical stability." },
                      { approach: "Vision Rehabilitation", purpose: "Low-vision aids, adaptive optical devices, and functional training to preserve daily independence for individuals with persistent visual impairment." },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-3.5 font-semibold text-brand-800">{row.approach}</td>
                        <td className="px-5 py-3.5 text-slate-700">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 07. Ophthalmic Equipment & Diagnostic Solutions (Portfolio) */}
      <section id="solutions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Ophthalmic Product Portfolio
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Ophthalmic Equipment &amp; Diagnostic Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Catalyst Biomedicals offers intraocular lenses, surgical technologies, and diagnostic equipment for healthcare institutions, ophthalmic clinics, and surgical suites.
              </p>
            </div>

            {/* Division 1: VSY Biotechnology */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/ophthalmology/ophthalmic-surgery.jpg"
                    alt="Ophthalmic surgery suite for intraocular lens implantation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent-600 mb-1">
                      Partner Brand
                    </p>
                    <p className="text-base font-bold text-brand-900">
                      VSY Biotechnology (Europe)
                    </p>
                    <p className="text-xs text-slate-500">
                      European ophthalmic medical-device company specializing in intraocular lenses
                    </p>
                  </div>
                  <div className="relative h-12 w-32 shrink-0">
                    <Image
                      src="/partners/vsybio.jpg"
                      alt="VSY Biotechnology"
                      fill
                      sizes="130px"
                      className="object-contain object-right"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-100">
                    Intraocular Lenses for Cataract &amp; Refractive Procedures
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-brand-900 tracking-tight">
                    VSY Biotechnology Solutions
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1 w-12 rounded-full bg-brand-600" />
                    <div className="h-1 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Catalyst Biomedicals offers intraocular lenses from VSY Biotechnology, a European ophthalmic medical-device company specializing in intraocular lenses for cataract and refractive lens procedures. The portfolio includes trifocal, extended depth of focus (EDOF), monofocal, and toric lens designs, subject to regional distribution agreements and approved product registrations.
                </p>

                <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800">
                    Clinical Performance &amp; Innovation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    VSY Biotechnology develops advanced optical designs distributed in international markets across 40+ countries, utilizing high-purity hydrophobic and hydrophilic acrylic biomaterials manufactured under international quality management standards.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Portfolio Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Trifocal & EDOF (Extended Depth of Focus) designs",
                      "Toric models for precise astigmatism correction",
                      "Hydrophobic & hydrophilic acrylic biocompatibility",
                      "Preloaded injector systems for sterile micro-incision delivery",
                      "Blue-light-filtering options available in selected models",
                      "Full range of spherical & aspheric monofocals",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Division 2: Adaptive Ocular Sciences */}
            <div className="pt-12 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6 lg:order-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/ophthalmology/adaptive-ocular-sciences.jpg"
                    alt="Adaptive Ocular Sciences adtec foldable toric and monofocal intraocular lenses"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent-600 mb-1">
                      Collaborative Brand
                    </p>
                    <p className="text-base font-bold text-brand-900">
                      Adaptive Ocular Sciences
                    </p>
                    <p className="text-xs text-slate-500">
                      Technical collaboration with Ocular Technology Inc – USA
                    </p>
                  </div>
                  <div className="relative h-12 w-32 shrink-0">
                    <Image
                      src="/partners/adaptive.jpg"
                      alt="Adaptive Ocular Sciences"
                      fill
                      sizes="130px"
                      className="object-contain object-right"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 lg:order-1">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-100">
                    Domestic Manufacturing &amp; Innovation
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-brand-900 tracking-tight">
                    Adaptive Ocular Sciences
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1 w-12 rounded-full bg-brand-600" />
                    <div className="h-1 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Adaptive Ocular Sciences manufactures intraocular lenses at its dedicated manufacturing facility in Gujarat. AOS reports an active technical collaboration with Ocular Technology Inc (USA) for its product designs, uniting US design expertise with domestic manufacturing capabilities.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    High-Precision Ophthalmic Implants
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed to provide surgeons with predictable refractive outcomes and patients with visual sharpness across everyday activities. Product specifications subject to current manufacturer documentation.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Capabilities &amp; Product Solutions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Hydrophobic acrylic monofocal & toric IOL designs",
                      "Micro-incision injectable optics compatible with sub-2.2mm delivery",
                      "Precision edge profiles designed to reduce PCO formation",
                      "Viscoelastics, balanced salt solution (BSS) & surgical consumables",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* General Equipment & Technologies Portfolio Grid */}
            <div className="pt-8 border-t border-slate-200">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Clinical Diagnostic Equipment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-900">
                    General Ophthalmic Equipment &amp; Clinical Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Potential equipment categories available through Catalyst Biomedicals, separate from confirmed branded implant portfolios and subject to current supply agreements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      title: "Ophthalmic Diagnostic Equipment",
                      desc: "Comprehensive diagnostic workstations and visual acuity testing units supporting clinical assessment."
                    },
                    {
                      title: "Slit-Lamp Examination Systems",
                      desc: "High-magnification optical biomicroscopes equipped with digital imaging and adjustable LED illumination."
                    },
                    {
                      title: "Retinal Imaging & OCT Systems",
                      desc: "Non-mydriatic fundus cameras and optical coherence tomography for deep retinal layer analysis."
                    },
                    {
                      title: "Intraocular Pressure Measurement",
                      desc: "Goldmann and non-contact applanation tonometry devices utilized as one component of glaucoma risk evaluation."
                    },
                    {
                      title: "Ophthalmic Surgical Instruments",
                      desc: "Microsurgical titanium instruments, phacoemulsification handpieces, and sterile operative sets."
                    },
                    {
                      title: "Ophthalmic Consumables",
                      desc: "OVD viscoelastic solutions, sterile drape packs, custom surgical tubing, and single-use micro-blades."
                    },
                  ].map((cat, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2 hover:border-brand-300 transition-colors">
                      <h4 className="text-sm font-bold text-brand-900">{cat.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 08. Recovery and Vision Rehabilitation */}
      <section id="recovery" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Functional Recovery
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Recovery and Vision Rehabilitation
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery depends on the eye condition, its severity, the treatment provided, and the patient’s overall health. For example, vision may improve rapidly within days following cataract surgery, while glaucoma management generally focuses on preventing or slowing further optic nerve damage. Retinal disorders may require ongoing monitoring and serial treatments.
              </p>

              <h3 className="text-base font-bold text-brand-900 pt-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-600" />
                Typical Vision-Care Goals:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Improving visual clarity and daily visual function.",
                  "Preserving remaining vision in progressive eye diseases.",
                  "Monitoring treatment outcomes and disease stability.",
                  "Supporting functional independence in reading, mobility, and everyday activities.",
                  "Maintaining regular follow-up with the treating eye-care professional.",
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 09. How Can Eye Health Be Supported? */}
      <section id="prevention" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="w-full space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Eye Health &amp; Prevention
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Can Eye Health Be Supported?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Regular Eye Examinations",
                  desc: "Schedule eye assessments according to age, symptoms, medical history, and individual risk factors.",
                },
                {
                  title: "Diabetes & Blood Pressure Management",
                  desc: "Follow qualified medical guidance to reduce the risk of diabetes-related retinopathy and vascular eye complications.",
                },
                {
                  title: "Eye Protection",
                  desc: "Use suitable protective eyewear during work, sports, and activities involving potential eye hazards or UV exposure.",
                },
                {
                  title: "Healthy Lifestyle",
                  desc: "Maintain a balanced diet rich in leafy greens and antioxidants, regular physical activity, and habits that support ocular microcirculation.",
                },
                {
                  title: "Contact-Lens Hygiene",
                  desc: "Follow proper cleaning, replacement, and wearing instructions to minimize the risk of corneal infections.",
                },
                {
                  title: "Timely Clinical Review",
                  desc: "Seek prompt assessment for new visual changes, persistent discomfort, or worsening eye symptoms without delay.",
                },
              ].map((tip, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-brand-900">{tip.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-slate-500 italic">
              *These measures support eye health but cannot prevent every eye disease.
            </p>
          </div>
        </Container>
      </section>

      {/* 10. Frequently Asked Questions (FAQs) */}
      <section id="faqs" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Patient Questions
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "What is ophthalmology?",
                  a: "Ophthalmology is the medical specialty concerned with diagnosing and treating eye diseases, managing visual disorders, and performing ophthalmic surgery."
                },
                {
                  q: "What is the difference between an ophthalmologist and an optometrist?",
                  a: "An ophthalmologist is a medical doctor (MD/MS) trained to diagnose and treat all eye diseases and perform eye surgeries. An optometrist primarily provides visual examinations, diagnoses refractive errors, and prescribes corrective lenses within their regulated scope."
                },
                {
                  q: "Which tests are commonly used in ophthalmology?",
                  a: "Common assessments include visual acuity testing, slit-lamp biomicroscopy, intraocular pressure measurement (tonometry), dilated retinal fundus examination, and optical coherence tomography (OCT) when indicated."
                },
                {
                  q: "Can all eye conditions be treated with medication?",
                  a: "No. Depending on the diagnosis, treatment may involve prescription eyeglasses, medicated eye drops, laser procedures, surgery (such as cataract extraction), or continuous observational monitoring."
                },
                {
                  q: "Can vision loss be reversed?",
                  a: "Some causes of reduced vision (such as cataracts or refractive errors) can often be restored, while damage from conditions like advanced glaucoma or macular scarring may be irreversible. Early diagnosis is critical to preserving remaining vision."
                },
                {
                  q: "How often should I have an eye examination?",
                  a: "The recommended frequency depends on age, medical history, existing symptoms, and risk factors such as diabetes, hypertension, or family history of glaucoma. Annual check-ups are generally recommended for high-risk individuals."
                },
                {
                  q: "Are sudden vision changes an emergency?",
                  a: "Yes. Sudden vision loss, severe eye pain, chemical burns, or a sudden burst of flashes and floaters require urgent medical assessment at an emergency ophthalmic facility."
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-brand-700 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent-600 shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Contact and Product Inquiry Section */}
      <section id="inquire" className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/40 border-t border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full rounded-3xl bg-brand-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono tracking-widest text-accent-300">
                <FileText className="w-3.5 h-3.5" />
                OPHTHALMOLOGY &amp; EYE-CARE INQUIRIES
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Ophthalmology &amp; Eye Care Solutions
              </h3>

              <p className="text-sm sm:text-base text-brand-100 max-w-2xl leading-relaxed">
                Connect with Catalyst Biomedicals to enquire about available ophthalmic equipment, product specifications, quotations, and demonstrations. Our team can help you identify relevant solutions from our verified product portfolio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Contact Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 border border-white/20 transition-all duration-300"
                >
                  Explore Available Products
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Medical Disclaimer */}
              <div className="mt-8 pt-6 border-t border-white/15 text-[11px] text-brand-200/80 leading-relaxed text-left">
                <strong>Medical Disclaimer:</strong> This content is intended for general educational purposes and does not replace professional medical advice, diagnosis, or treatment. Seek urgent medical attention for eye emergencies.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning & Distribution Notice at the bottom */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="w-full rounded-2xl border border-brand-200/90 bg-brand-50/70 p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
              <strong>Medical Equipment Distribution &amp; Clinical Information:</strong> Catalyst Biomedicals supports healthcare institutions through the import and distribution of medical-related products. Specific ophthalmic products, manufacturer relationships, and supply capabilities should be confirmed against the company’s current portfolio before publication.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
