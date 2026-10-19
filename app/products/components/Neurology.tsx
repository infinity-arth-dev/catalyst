"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import { 
  Activity, 
  CheckCircle2,  
  FileText, 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Layers,
  AlertTriangle,
  HeartPulse,
  Info,
  Brain,
  Zap,
  Target
} from "lucide-react";

export default function Neurology() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/neurology/neurology-hero.jpg"
          alt="Neurology &amp; Neurodiagnostic Solutions"
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
              NEUROLOGY • BRAIN, SPINE &amp; NERVE HEALTH
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              Neurology &amp; Neurodiagnostic Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Neurodiagnostic Technologies &amp; Solutions for Healthcare Professionals
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Neurodiagnostic technologies and specialized medical solutions supporting hospitals, clinicians, and healthcare institutions in neurological assessment and patient care.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What is Neurology? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Specialty Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is Neurology?
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
                Neurology is the branch of medicine concerned with disorders of the nervous system, which includes the brain, spinal cord, peripheral nerves, and the systems responsible for muscle movement and sensation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Neurologists evaluate symptoms such as headaches, seizures, weakness, numbness, tremors, memory difficulties, and balance problems. Depending on the condition, management may involve medication, monitoring, diagnostic procedures, rehabilitation, or referral to neurosurgery and other specialties.
              </p>

              {/* Distinction Box: Neurology vs Neurosurgery */}
              <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5 flex items-start gap-3.5">
                <Brain className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
                  <strong>Important Distinction:</strong> <em>Neurology and Neurosurgery are distinct medical specialties.</em> Neurology focuses on diagnosing and medically managing disorders of the brain, spinal cord, nerves, and muscles. Neurosurgery involves surgical treatment of selected conditions affecting these structures. Catalyst Biomedicals supplies diagnostic and medical technologies supporting comprehensive neurological care.
                </div>
              </div>

              {/* 4 Key Areas */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Brain & Cognitive Function",
                    desc: "Assessment of headaches, seizures, memory changes, cognitive difficulties, and brain-related disorders.",
                    icon: <Brain className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Spinal Cord & Pathways",
                    desc: "Evaluation of spinal cord disorders, nerve compression, weakness, sensory changes, and coordination problems.",
                    icon: <Layers className="w-5 h-5 text-accent-600" />
                  },
                  {
                    title: "Peripheral Nerves",
                    desc: "Assessment of neuropathy, nerve injuries, tingling, numbness, and altered sensory perception.",
                    icon: <Zap className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Muscles & Movement",
                    desc: "Evaluation of muscle weakness, involuntary movements, tremors, and neuromuscular disorders.",
                    icon: <Activity className="w-5 h-5 text-accent-600" />
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

      {/* 03. Common Neurological Conditions */}
      <section id="conditions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Common Neurological Conditions
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Common Neurological Conditions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                These conditions represent frequent neurological disorders evaluated and managed by clinical specialists.
              </p>
            </div>

            {/* 8 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Headaches & Migraine",
                  desc: "Recurrent headaches, migraine attacks, sensitivity to light or sound, nausea, and associated neurological symptoms.",
                },
                {
                  number: "02",
                  title: "Epilepsy & Seizures",
                  desc: "Conditions involving recurrent unprovoked seizures that may affect awareness, motor function, sensation, or behavior.",
                },
                {
                  number: "03",
                  title: "Stroke & TIA",
                  desc: "Conditions caused by interrupted blood supply (ischemic) or bleeding (hemorrhagic) in the brain. Requires urgent emergency evaluation.",
                },
                {
                  number: "04",
                  title: "Parkinson’s Disease",
                  desc: "Movement disorders causing resting tremors, muscle stiffness, bradykinesia (slowed movement), and postural instability.",
                },
                {
                  number: "05",
                  title: "Peripheral Neuropathy",
                  desc: "Nerve disorders causing burning pain, tingling, numbness, or weakness, frequently associated with diabetes or metabolic causes.",
                },
                {
                  number: "06",
                  title: "Multiple Sclerosis (MS)",
                  desc: "An immune-mediated demyelinating disease affecting the central nervous system, producing sensory, visual, and motor symptoms.",
                },
                {
                  number: "07",
                  title: "Memory & Cognition",
                  desc: "Conditions affecting memory, thinking, reasoning, language, and executive cognitive capabilities, including dementia.",
                },
                {
                  number: "08",
                  title: "Neuromuscular Disorders",
                  desc: "Conditions affecting communication between nerves and muscles or the muscles themselves, causing progressive weakness.",
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

      {/* 04. When Should You Consult a Neurologist? (Symptoms & Emergencies) */}
      <section id="symptoms" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Symptom Evaluation
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                When Should You Consult a Neurologist?
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
                Symptoms That May Require Neurological Assessment:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Persistent or recurring headaches unresponsive to standard care.",
                  "Repeated episodes of dizziness, vertigo, or balance instability.",
                  "Tremors, involuntary movements, or progressive muscle stiffness.",
                  "Persistent numbness, tingling, or burning peripheral nerve pain.",
                  "Unexplained muscle weakness or difficulties with coordination.",
                  "Seizures, convulsions, or episodes of altered awareness.",
                  "Memory loss, sudden confusion, or cognitive processing changes.",
                  "Noticeable changes in vision, speech articulation, or swallowing.",
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
                <span>Neurological Emergencies — Immediate Emergency Action</span>
              </div>
              <p className="text-xs sm:text-sm text-red-900/90 leading-relaxed">
                <strong>Important:</strong> Sudden facial drooping, weakness or numbness on one side of the body, difficulty speaking or understanding speech, sudden loss of vision or balance, or a sudden severe unexplained &quot;thunderclap&quot; headache can indicate an acute stroke or life-threatening event. <strong>Call India&apos;s emergency number 112 or seek immediate emergency medical care.</strong> Do not wait for symptoms to improve. A first seizure, prolonged seizure (lasting over 5 minutes), or repeated seizures without regaining consciousness also requires emergency medical assistance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How Are Neurological Conditions Diagnosed? */}
      <section id="diagnosis" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Diagnostic Pathway
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Are Neurological Conditions Diagnosed?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Neurological diagnosis depends on symptoms, medical history, physical examination, and the suspected condition. Tests are selected according to clinical presentation; not every patient requires every test.
              </p>
            </div>

            {/* Split Layout: Consultation Image + 6 Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/products/neurology/neurology-consultation.jpg"
                    alt="Neurologist reviewing 3D brain scans and neural mapping"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-center text-slate-500 italic">
                  Neurological examination and digital brain tractography guide accurate diagnosis.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {[
                  {
                    step: "1",
                    title: "Medical Consultation",
                    desc: "Comprehensive review of symptoms, onset, previous medical history, current medications, and family history.",
                  },
                  {
                    step: "2",
                    title: "Neurological Examination",
                    desc: "Systematic assessment of reflexes, cranial nerves, muscle strength, sensory perception, speech, coordination, and mental status.",
                  },
                  {
                    step: "3",
                    title: "Brain & Spine Imaging",
                    desc: "MRI and CT scans identify structural changes, vascular lesions, acute stroke, demyelination, or intracranial masses.",
                  },
                  {
                    step: "4",
                    title: "Electrical Activity Testing (EEG / EMG)",
                    desc: "EEG records electrical activity in the brain for seizure assessment; EMG and nerve conduction studies evaluate muscle and peripheral nerve function.",
                  },
                  {
                    step: "5",
                    title: "Laboratory Tests",
                    desc: "Blood analysis and, in selected indications, lumbar puncture cerebrospinal fluid (CSF) testing to investigate infections or inflammatory markers.",
                  },
                  {
                    step: "6",
                    title: "Treatment Planning",
                    desc: "The clinician determines whether medical therapy, monitoring, rehabilitation, or specialist referral to neurosurgery is appropriate.",
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

      {/* 06. Neurological Treatment Options */}
      <section id="treatments" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Modalities
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Neurological Treatment Options
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Treatment depends on the specific diagnosis and should be directed by a qualified healthcare professional.
              </p>
            </div>

            {/* Treatment Options Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4 w-full">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-brand-950 text-white rounded-t-xl">
                    <tr>
                      <th className="px-5 py-3.5 font-bold rounded-tl-xl w-2/5">Treatment Approach</th>
                      <th className="px-5 py-3.5 font-bold rounded-tr-xl">Clinical Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { approach: "Medicines", purpose: "Manage conditions such as epilepsy, migraine, movement disorders, and selected nerve pain." },
                      { approach: "Lifestyle & Risk-Factor Management", purpose: "Support neurological health and reduce certain risks, including vascular stroke risk." },
                      { approach: "Physiotherapy", purpose: "Improve muscle strength, balance, mobility, coordination, and functional independence." },
                      { approach: "Occupational & Speech Therapy", purpose: "Support daily activities, adaptive communication, and swallowing rehabilitation when affected." },
                      { approach: "Neurodiagnostic Monitoring", purpose: "Help clinicians evaluate electrical brain or nerve conditions using tests such as EEG or EMG when indicated." },
                      { approach: "Specialist Procedures or Surgery", purpose: "Used for selected structural or refractory conditions, with neurosurgical or other specialist involvement." },
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

      {/* 07. Neurology Equipment & Diagnostic Solutions (Portfolio) */}
      <section id="solutions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Neurology Products &amp; Therapeutic Solutions
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Neurology Equipment &amp; Diagnostic Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Catalyst Biomedicals supplies targeted medical products, neuromodulation systems, and neurodiagnostic technologies to hospitals and healthcare institutions.
              </p>
            </div>

            {/* Division 1: Epilepsy - LivaNova VNS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg group">
                  <Image
                    src="/products/neurology/vns-therapy.jpg"
                    alt="LivaNova VNS Therapy for Epilepsy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-brand-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                      <Zap className="w-3.5 h-3.5 text-accent-400" />
                      Neuromodulation
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 space-y-2">
                  <p className="text-xs uppercase font-bold tracking-widest text-accent-600">
                    Product Portfolio Partner
                  </p>
                  <p className="text-sm font-semibold text-brand-700">
                    LivaNova VNS Therapy
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pioneering neuromodulation technology delivering targeted electrical stimulation to the vagus nerve for drug-resistant epilepsy.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-brand-600">
                    Epilepsy Solutions
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-800 tracking-tight mt-1">
                    LivaNova VNS Therapy
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1.5 w-12 rounded-full bg-brand-600" />
                    <div className="h-1.5 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  We are associated with LivaNova for their VNS (Vagus Nerve Stimulation) therapy for epilepsy, supporting clinicians in managing patients with drug-resistant epilepsy to achieve meaningful seizure reduction.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Proven long-term seizure frequency reduction",
                    "AutoStim technology responding to rapid heart rate changes",
                    "Manual magnet feature for on-demand seizure intervention",
                    "Improved post-ictal recovery and alertness",
                    "Comprehensive physician programmer interface",
                    "Extensive clinical trial documentation and safety data",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Division 2: Multiple Sclerosis & Pain Management */}
            <div className="pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* MS - Nuvigen */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                  Multiple Sclerosis Management
                </span>
                <h3 className="text-xl font-bold text-brand-900">
                  Nuvigen MS Therapeutics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Well established long-term therapy in the Multiple Sclerosis segment. Nuvigen provides proven disease-modifying immunomodulatory support that slows the accumulation of physical disability and reduces clinical relapse rates.
                </p>
                <div className="pt-2 text-xs font-semibold text-brand-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  Established Disease Modification Profile
                </div>
              </div>

              {/* Pain Management - Rusan */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                  Neuropathic Pain
                </span>
                <h3 className="text-xl font-bold text-brand-900">
                  Rusan Pharma Pain Therapeutics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trusted pain management solutions supporting patients suffering from severe chronic neurological and musculoskeletal pain, including neuropathic discomfort associated with Parkinson&apos;s disease.
                </p>
                <div className="pt-2 text-xs font-semibold text-brand-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  Targeted Analgesic &amp; Neuropathic Formulations
                </div>
              </div>
            </div>

            {/* Neurodiagnostic & Rehabilitation Categories */}
            <div className="pt-12 border-t border-slate-200 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                    <Image
                      src="/products/neurology/eeg-system.jpg"
                      alt="Clinical EEG and Neurodiagnostics Workstation"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center text-slate-500 italic">
                    Clinical EEG telemetry and neurodiagnostic monitoring solutions.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "EEG Systems",
                      desc: "Equipment used to record and evaluate the brain's electrical activity, commonly utilized for seizure assessment and neurological diagnostics.",
                    },
                    {
                      title: "EMG & NCS Systems",
                      desc: "Diagnostic systems used to assess electrical activity in muscle fibers and peripheral nerve conduction pathways.",
                    },
                    {
                      title: "Neurological Monitoring",
                      desc: "Monitoring solutions for clinical and intraoperative settings, supporting real-time assessment of nervous system integrity.",
                    },
                    {
                      title: "Neuro-Rehabilitation",
                      desc: "Equipment supporting balance, motor retraining, and functional mobility rehabilitation following stroke or injury.",
                    },
                  ].map((cat, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
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

      {/* 08. Recovery and Rehabilitation */}
      <section id="recovery" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Functional Recovery
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Recovery and Rehabilitation
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery varies considerably by diagnosis, severity, treatment, and individual health. For example, migraine management focuses on controlling acute attacks and preventing recurrence, whereas recovery following an ischemic stroke can involve prolonged multidisciplinary rehabilitation. Some progressive conditions require ongoing disease management rather than a fixed recovery timeline.
              </p>

              <h3 className="text-base font-bold text-brand-900 pt-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-600" />
                Typical Neurological Rehabilitation Goals:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Improving balance, gait stability, and walking coordination.",
                  "Regaining muscle strength and functional movement control.",
                  "Supporting speech articulation, language, or swallowing when affected.",
                  "Improving independence in everyday personal and professional activities.",
                  "Regularly monitoring progress and adjusting the rehabilitation protocol.",
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

      {/* 09. How Can Neurological Health Be Supported? */}
      <section id="prevention" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="w-full space-y-10">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Brain Health &amp; Prevention
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Can Neurological Health Be Supported?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Vascular Risk Management",
                  desc: "Control blood pressure, blood glucose, and cholesterol under qualified medical guidance to protect cerebral circulation.",
                },
                {
                  title: "Regular Physical Activity",
                  desc: "Engage in consistent cardiovascular exercise and follow a nutritious, balanced diet to support brain neuroplasticity.",
                },
                {
                  title: "Adequate Rest & Sleep",
                  desc: "Prioritize consistent, restorative sleep patterns to facilitate neural waste clearance and cognitive health.",
                },
                {
                  title: "Head Injury Protection",
                  desc: "Wear appropriate helmets and safety gear during sports or cycling to reduce the risk of traumatic brain injuries.",
                },
                {
                  title: "Avoid Tobacco & Limit Alcohol",
                  desc: "Reduce environmental neurotoxins that impair cerebral blood flow and accelerate nerve damage.",
                },
                {
                  title: "Timely Clinical Review",
                  desc: "Seek prompt medical advice for persistent or changing symptoms, and attend all recommended neurological follow-ups.",
                },
              ].map((tip, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-brand-900">{tip.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-slate-500 italic">
              *These healthy lifestyle measures support overall neurological resilience but cannot prevent every neurological disease.
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
                  q: "What is the difference between neurology and neurosurgery?",
                  a: "Neurology focuses mainly on diagnosing and medically managing nervous-system disorders using pharmacotherapy, diagnostics, and rehabilitation. Neurosurgery involves surgical treatment of selected conditions affecting the brain, spine, and peripheral nerves."
                },
                {
                  q: "When should I visit a neurologist?",
                  a: "Consider an appointment for recurring headaches, seizures, tremors, persistent numbness, unexplained weakness, memory changes, or balance difficulties. Sudden stroke-like symptoms require immediate emergency care rather than a routine clinic visit."
                },
                {
                  q: "Which tests are used to diagnose neurological disorders?",
                  a: "Depending on the symptoms, tests may include a detailed neurological examination, MRI, CT, EEG, EMG, nerve conduction studies (NCS), and laboratory blood or cerebrospinal fluid investigations."
                },
                {
                  q: "Can neurological conditions be treated without surgery?",
                  a: "Yes, many are managed effectively with medication, clinical monitoring, lifestyle modifications, and rehabilitation. Selected structural conditions or refractory syndromes may involve neurosurgical procedures."
                },
                {
                  q: "Can neurological symptoms improve?",
                  a: "Some symptoms improve significantly with targeted medical therapy or rehabilitation; others require ongoing long-term disease management. Outcomes depend on the specific underlying pathology and promptness of intervention."
                },
                {
                  q: "Is rehabilitation necessary after a stroke?",
                  a: "Rehabilitation is an essential component of recovery after stroke. The specific program depends on the person's functional impairments, medical stability, and long-term recovery goals."
                },
                {
                  q: "Are all severe headaches neurological emergencies?",
                  a: "Not all headaches are emergencies. However, a sudden, extremely severe headache (often called a 'thunderclap' headache), especially when accompanied by fever, neck stiffness, confusion, vision loss, or limb weakness, requires immediate emergency assessment."
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
                NEUROLOGY &amp; NEURODIAGNOSTIC INQUIRIES
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Neurology &amp; Neurodiagnostic Solutions
              </h3>

              <p className="text-sm sm:text-base text-brand-100 max-w-2xl leading-relaxed">
                Connect with Catalyst Biomedicals to enquire about available neurological diagnostic equipment, product specifications, quotations, and demonstrations. Our team can help you identify relevant solutions from our confirmed product portfolio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Enquire About Neurology Products
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
                <strong>Medical Disclaimer:</strong> This content is intended for general educational purposes and does not replace professional medical advice, diagnosis, or treatment. For emergencies, seek immediate medical attention by calling 112 or visiting the nearest hospital emergency unit.
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
              <strong>Medical Equipment Distribution &amp; Clinical Information:</strong> Catalyst Biomedicals is an importer and distributor of biomedical solutions, partnering with international healthcare innovators to equip medical facilities. The educational content above provides nervous-system reference information alongside the specialized neurological therapies and diagnostic technologies we supply to healthcare professionals.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
