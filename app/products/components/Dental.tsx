"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import { 
  Smile, 
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
  Sparkles
} from "lucide-react";

export default function Dental() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/dental/dental-hero.jpg"
          alt="Dental Equipment & Oral Healthcare Solutions"
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
              DENTAL • ORAL HEALTH • RESTORATIVE CARE
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              Dental Equipment &amp; Oral Healthcare Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Advanced Dental Technologies &amp; Clinical Solutions
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Dental care focuses on the prevention, diagnosis, and treatment of conditions affecting the teeth, gums, jaw, and oral cavity. Modern dental technologies support clinicians in oral examinations, restorative procedures, infection control, and the maintenance of long-term oral health.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What is Dentistry? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Specialty Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is Dentistry?
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
                Dentistry is the branch of healthcare concerned with maintaining oral health, diagnosing dental diseases, and treating conditions affecting the teeth, gums, and supporting oral structures.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dental professionals evaluate tooth decay, gum disease, oral infections, missing teeth, and other oral health concerns. Depending on the condition, treatment may involve preventive care, restorative procedures, endodontics, prosthodontics, orthodontics, oral surgery, or regular monitoring.
              </p>

              {/* Distinction Box: General Dentistry vs Specialized Care */}
              <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5 flex items-start gap-3.5">
                <Smile className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
                  <strong>Important Distinction:</strong> <em>General dentistry focuses on routine oral healthcare, prevention, diagnosis, and common dental treatments.</em> Specialized dental care may include orthodontics, periodontics, endodontics, prosthodontics, and oral and maxillofacial surgery. Catalyst Biomedicals supports healthcare institutions through its medical equipment and dental product portfolio.
                </div>
              </div>

              {/* 4 Key Areas */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Preventive Dentistry",
                    desc: "Routine examinations, oral hygiene, scaling, and preventive care to maintain healthy teeth and gums.",
                    icon: <Smile className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Restorative Dentistry",
                    desc: "Treatment of damaged or decayed teeth using appropriate restorative materials and techniques.",
                    icon: <Sparkles className="w-5 h-5 text-accent-600" />
                  },
                  {
                    title: "Endodontics & Pulp Care",
                    desc: "Assessment and treatment of diseases affecting the dental pulp and root canal system.",
                    icon: <Activity className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Prosthodontics",
                    desc: "Restoration or replacement of missing or damaged teeth to support oral function and appearance.",
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

      {/* 03. Common Dental Conditions */}
      <section id="conditions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Presentations
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Common Dental Conditions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                These conditions represent common oral health problems evaluated and managed by qualified dental professionals.
              </p>
            </div>

            {/* 8 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Dental Caries (Tooth Decay)",
                  desc: "Damage to tooth structure caused by acids produced by bacteria, potentially resulting in cavities and pain.",
                },
                {
                  number: "02",
                  title: "Gingivitis & Periodontal Disease",
                  desc: "Inflammation of the gums and diseases affecting the tissues and alveolar bone that support the teeth.",
                },
                {
                  number: "03",
                  title: "Tooth Sensitivity",
                  desc: "Discomfort or sharp nerve sensitivity triggered by hot, cold, sweet, or acidic foods and drinks.",
                },
                {
                  number: "04",
                  title: "Pulpitis & Dental Infection",
                  desc: "Inflammation or infection involving the dental pulp, which may require root canal treatment or other dental procedures.",
                },
                {
                  number: "05",
                  title: "Missing or Damaged Teeth",
                  desc: "Loss, fracture, or severe damage to teeth that may require restorative or implant-borne prosthetic treatment.",
                },
                {
                  number: "06",
                  title: "Malocclusion",
                  desc: "Misalignment of teeth or jaws that may affect biting, chewing, facial aesthetics, and dental function.",
                },
                {
                  number: "07",
                  title: "Oral Lesions & Ulcers",
                  desc: "Changes and persistent mucosal ulcerations in the oral tissues that require clinical examination to identify cause.",
                },
                {
                  number: "08",
                  title: "Dental Trauma",
                  desc: "Injuries involving cracked, dislodged, or knocked-out teeth and supporting structures due to accidents or impact.",
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

      {/* 04. When Should You Consult a Dentist? (Symptoms & Emergencies) */}
      <section id="symptoms" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Symptom Evaluation
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                When Should You Consult a Dentist?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            {/* Routine Symptoms */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-brand-600" />
                Symptoms That May Require Dental Assessment:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Persistent toothache or acute pain while chewing.",
                  "Bleeding, swollen, or tender gum tissue.",
                  "Sharp sensitivity to hot, cold, or sugary foods and beverages.",
                  "Chronic bad breath (halitosis) that persists despite oral hygiene.",
                  "Loose, cracked, broken, or missing teeth.",
                  "Visible swelling around the teeth, gums, or lower jaw.",
                  "Difficulty chewing, jaw clicking, or pain opening the mouth.",
                  "Mouth ulcers or oral lesions that do not heal within two weeks.",
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
                <span>Dental Emergencies — Prompt Medical Attention</span>
              </div>
              <p className="text-xs sm:text-sm text-red-900/90 leading-relaxed">
                <strong>Emergency Warning:</strong> Severe facial or oral swelling, particularly accompanied by high fever or rapidly spreading infection, requires urgent dental or hospital emergency assessment. <strong>Difficulty breathing or swallowing due to facial or submandibular swelling is a life-threatening medical emergency.</strong> A knocked-out permanent tooth also requires immediate dental attention (ideally within 30–60 minutes kept moist in milk or saliva) for the best chance of successful reimplantation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How Are Dental Conditions Diagnosed? */}
      <section id="diagnosis" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Diagnostic Pathway
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Are Dental Conditions Diagnosed?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Dental diagnosis depends on symptoms, medical and dental history, clinical examination, and the suspected condition. Investigations are selected according to clinical need; not every patient requires every test.
              </p>
            </div>

            {/* Split Layout: Dental Diagnostics Image + 6 Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/products/dental/dental-diagnostics.jpg"
                    alt="Dental specialist reviewing 3D CBCT tomographic scans"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-center text-slate-500 italic">
                  Digital intraoral radiography and 3D CBCT scans guide precision dental diagnosis.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {[
                  {
                    step: "1",
                    title: "Dental Consultation",
                    desc: "Review of chief complaints, pain history, previous dental procedures, systemic medical history, medications, and home oral hygiene regimens.",
                  },
                  {
                    step: "2",
                    title: "Oral Examination",
                    desc: "Visual and tactile assessment of the teeth, periodontal gingiva, tongue, buccal mucosa, occlusion bite, and visible signs of decay.",
                  },
                  {
                    step: "3",
                    title: "Dental Imaging",
                    desc: "Periapical, bitewing, panoramic OPG X-rays, and 3D CBCT imaging to evaluate tooth roots, alveolar bone density, and impacted teeth.",
                  },
                  {
                    step: "4",
                    title: "Periodontal Assessment",
                    desc: "Probing of gum pocket depths, evaluation of gingival bleeding, tooth mobility grading, and supporting bone level analysis.",
                  },
                  {
                    step: "5",
                    title: "Specialized Diagnostic Tests",
                    desc: "Thermal and electric pulp vitality testing, transillumination, and articulating paper bite analysis based on clinical indications.",
                  },
                  {
                    step: "6",
                    title: "Treatment Planning",
                    desc: "The clinician determines whether preventive care, composite restoration, endodontic therapy, implant prosthetics, or oral surgery is indicated.",
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

      {/* 06. Dental Treatment Options */}
      <section id="treatments" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Modalities
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Dental Treatment Options
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Treatment depends on the specific diagnosis and should be provided by a qualified dental professional.
              </p>
            </div>

            {/* Treatment Options Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4 w-full">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-brand-950 text-white rounded-t-xl">
                    <tr>
                      <th className="px-5 py-3.5 font-bold rounded-tl-xl w-2/5">Care Modality</th>
                      <th className="px-5 py-3.5 font-bold rounded-tr-xl">Clinical Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { approach: "Preventive Care", purpose: "Ultrasonic scaling, polishing, oral hygiene instruction, fluoride varnish application, and pit-and-fissure sealants." },
                      { approach: "Restorative Dentistry", purpose: "Tooth-colored composite resin fillings, inlays, onlays, and ceramic crowns to reconstruct decayed or fractured teeth." },
                      { approach: "Root Canal Treatment", purpose: "Chemo-mechanical debridement and hermetic obturation of infected root canals to preserve natural tooth architecture." },
                      { approach: "Periodontal Treatment", purpose: "Deep subgingival scaling, root planing, and localized antimicrobial therapy to halt progressive periodontal disease." },
                      { approach: "Prosthetic & Orthodontic Care", purpose: "Dental implants, fixed crown-and-bridge prosthetics, removable dentures, and clear aligners to restore function and alignment." },
                      { approach: "Oral Surgery", purpose: "Surgical extractions of impacted third molars, bone grafting, sinus lifts, and pre-prosthetic bone contouring." },
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

      {/* 07. Dental Equipment & Clinical Solutions (Portfolio) */}
      <section id="solutions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Confirmed Product Portfolio
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Dental Equipment &amp; Clinical Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Catalyst Biomedicals supports healthcare institutions, dental clinics, and surgical centers through high-precision implant systems, restorative materials, and biomedical equipment.
              </p>
            </div>

            {/* Division 1: Bioline Dental Implants */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/dental/bioline-implant.jpg"
                    alt="Bioline dental implant surgical kit and titanium implants"
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
                      Bioline Dental Implants
                    </p>
                    <p className="text-xs text-slate-500">
                      The Art of Simplicity in Implantology
                    </p>
                  </div>
                  <div className="relative h-12 w-32 shrink-0">
                    <Image
                      src="/partners/bioline.jpg"
                      alt="Bioline Dental Implants"
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
                    Advanced Implantology Systems
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-brand-900 tracking-tight">
                    Bioline Dental Implants
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1 w-12 rounded-full bg-brand-600" />
                    <div className="h-1 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  At Bioline Dental Implants, we provide comprehensive implant solutions ranging from conventional, TTPHIL, Zygoma, one-piece implants, to conical connection implants. All this results in solutions that simplify procedures and deliver proven clinical long-term success.
                </p>

                <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800">
                    Clinical Overview &amp; Predictability
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed to simplify surgical workflows for general dental surgeons and oral implantologists alike, ensuring rapid osseointegration, optimal bone preservation, and an excellent soft-tissue seal.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Implant System Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Conventional & TTPHIL implant designs",
                      "Zygomatic implants for severe maxillary resorption",
                      "One-piece and internal hex conical connection platforms",
                      "Simplified surgical kits with color-coded drill stops",
                      "High primary stability in compromised D3/D4 bone",
                      "Wide range of prosthetic CAD/CAM abutments",
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

            {/* Division 2: Dentsply Sirona / MIS India */}
            <div className="pt-12 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6 lg:order-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/dental/dental-restorative.jpg"
                    alt="Dentsply Sirona professional dental treatment systems and digital workflow"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent-600 mb-1">
                      Global Innovation Partner
                    </p>
                    <p className="text-base font-bold text-brand-900">
                      Dentsply Sirona / MIS India
                    </p>
                    <p className="text-xs text-slate-500">
                      World&apos;s largest professional dental products manufacturer
                    </p>
                  </div>
                  <div className="relative h-12 w-32 shrink-0">
                    <Image
                      src="/partners/dentsply.jpg"
                      alt="Dentsply Sirona"
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
                    Comprehensive Restorative &amp; Digital Suite
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-brand-900 tracking-tight">
                    Dentsply Sirona / MIS India
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1 w-12 rounded-full bg-brand-600" />
                    <div className="h-1 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Dentsply Sirona is the world&apos;s largest manufacturer of professional dental products and technologies. We partner to supply high-end implantology (MIS Implants), endodontics, restorative materials, and digital workflows across India.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Integrated Clinical Workflows
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    From digital intraoral scanning and chairside CAD/CAM restorations to bioactive restorative composites and NiTi rotary endodontic shaping files.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Product Portfolio:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "MIS V3 & Seven implant systems",
                      "Universal restorative adhesives & composite resins",
                      "Rotary & reciprocating endodontic file systems",
                      "CAD/CAM milling blocks & aesthetic ceramics",
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

            {/* General Equipment & Clinical Categories Grid */}
            <div className="pt-8 border-t border-slate-200">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-900">
                    Dental Equipment &amp; Clinical Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Subject to Catalyst Biomedicals&apos; confirmed supply relationships and regional hospital supply authorizations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      title: "Dental Examination Equipment",
                      desc: "Ergonomic dental delivery chairs, LED operating lights, and diagnostic examination workstations."
                    },
                    {
                      title: "Dental Imaging Systems",
                      desc: "Intraoral digital phosphor plate sensors, panoramic OPG units, and 3D dental CBCT scanners."
                    },
                    {
                      title: "Dental Instruments & Handpieces",
                      desc: "High-speed air turbines, electric micro-motors, surgical contra-angles, and periodontal hand curettes."
                    },
                    {
                      title: "Restorative Dental Materials",
                      desc: "Bioactive composite materials, bonding agents, glass ionomer cements, and aesthetic finishing polishers."
                    },
                    {
                      title: "Endodontic Equipment",
                      desc: "Apex locators, cordless endodontic motors, thermal obturation units, and ultrasonic root canal systems."
                    },
                    {
                      title: "Dental Infection-Control Solutions",
                      desc: "Class-B autoclaves, ultrasonic instrument baths, water filtration units, and sterile surgical barrier supplies."
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

      {/* 08. Recovery and Oral Rehabilitation */}
      <section id="recovery" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Functional Recovery
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Recovery and Oral Rehabilitation
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery depends on the dental condition, the procedure performed, and the patient’s overall health. Routine restorative treatments may require minimal recovery, while oral surgery and complex dental rehabilitation can involve longer healing periods and follow-up visits.
              </p>

              <h3 className="text-base font-bold text-brand-900 pt-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-600" />
                Typical Oral Rehabilitation Goals:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Restoring comfortable chewing and biting efficiency.",
                  "Maintaining healthy teeth and supporting gum tissues.",
                  "Improving speech articulation and oral function where affected.",
                  "Supporting the replacement or restoration of damaged and missing teeth.",
                  "Monitoring healing and the long-term success of dental treatment.",
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

      {/* 09. How Can Oral Health Be Supported? */}
      <section id="prevention" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="w-full space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Oral Health &amp; Prevention
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Can Oral Health Be Supported?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Daily Oral Hygiene",
                  desc: "Brush twice daily with fluoride toothpaste and clean between teeth regularly using dental floss or interdental brushes.",
                },
                {
                  title: "Routine Dental Check-ups",
                  desc: "Visit a dental professional at intervals recommended for individual oral health needs, typically every six months.",
                },
                {
                  title: "Balanced Nutrition",
                  desc: "Limit frequent consumption of sugary foods, acidic beverages, and sticky carbohydrates to reduce the risk of tooth decay.",
                },
                {
                  title: "Gum Health",
                  desc: "Seek prompt professional advice for bleeding gums, persistent bad breath, or visible gum recession.",
                },
                {
                  title: "Avoid Tobacco",
                  desc: "Avoid all forms of smoking and smokeless tobacco, which markedly increase the risk of periodontal disease and oral cancer.",
                },
                {
                  title: "Timely Dental Treatment",
                  desc: "Address tooth pain, infection, broken teeth, and persistent oral lesions promptly before conditions progress.",
                },
              ].map((tip, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-brand-900">{tip.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-slate-500 italic">
              *These measures support oral health but cannot prevent every dental condition.
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
                  q: "What is dentistry?",
                  a: "Dentistry is the branch of healthcare focused on preventing, diagnosing, and treating conditions affecting the teeth, gums, and oral cavity."
                },
                {
                  q: "How often should I visit a dentist?",
                  a: "The recommended frequency depends on oral health, medical history, and individual risk factors. Routine dental check-ups and cleanings are typically advised every 6 months for most individuals."
                },
                {
                  q: "What causes tooth decay?",
                  a: "Tooth decay develops when acids produced by oral bacteria damage tooth enamel over time, often influenced by frequent dietary sugar exposure and oral hygiene habits."
                },
                {
                  q: "Can a damaged tooth be saved?",
                  a: "Many damaged teeth can be successfully restored with composite fillings, inlays, root canal treatment, or dental crowns, depending on the extent of damage and remaining healthy tooth structure."
                },
                {
                  q: "When is root canal treatment required?",
                  a: "It may be recommended when the dental pulp becomes irreversibly inflamed or infected due to deep decay, repeated dental procedures, or traumatic tooth injury."
                },
                {
                  q: "Are dental X-rays always necessary?",
                  a: "No. Dental imaging is selected judiciously according to symptoms, visual clinical examination findings, and individual diagnostic need."
                },
                {
                  q: "When should dental swelling be treated urgently?",
                  a: "Significant facial or gum swelling, fever, or spreading cellulitis requires prompt clinical assessment. Any difficulty breathing or swallowing constitutes a medical emergency."
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
                DENTAL EQUIPMENT &amp; PRODUCT INQUIRIES
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Dental Solutions for Healthcare Professionals
              </h3>

              <p className="text-sm sm:text-base text-brand-100 max-w-2xl leading-relaxed">
                Connect with Catalyst Biomedicals to enquire about available dental equipment, product specifications, quotations, and demonstrations. Our team can help identify relevant solutions from the company’s verified product portfolio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Enquire About Dental Products
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
                <strong>Medical Disclaimer:</strong> This content is intended for general educational purposes and does not replace professional dental advice, diagnosis, or treatment.
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
              <strong>Medical Equipment Distribution &amp; Clinical Information:</strong> Catalyst Biomedicals supports healthcare institutions through the import and distribution of medical-related products. Specific dental products, manufacturer relationships, and supply capabilities should be confirmed against the company’s current portfolio before publication.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
