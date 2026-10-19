"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";
import { 
  Activity, 
  Stethoscope, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  FileText, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Layers,
  Sparkles,
  AlertTriangle,
  HeartPulse,
  Clock,
  Calendar,
  Dna,
  Shield,
  Apple,
  Info
} from "lucide-react";

export default function Orthopedics() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Department Hero */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/orthopedics/orthopedics-hero.jpg"
          alt="Orthopedics Operating Room & Arthroscopy"
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
              SURGICAL EQUIPMENT DISTRIBUTION &amp; CLINICAL SOLUTIONS
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              Orthopedics &amp; Joint Replacement Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Advanced Arthroscopy &amp; Joint Replacement Surgical Technologies
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Catalyst Biomedicals supplies advanced orthopedic capital equipment, arthroscopy visualization towers, and precision joint replacement implant systems to hospital operating suites and healthcare institutions across India. Our goal is to support healthcare professionals with cutting-edge surgical technologies, robust OT installations, and dedicated clinical support.
            </p>
          </div>
        </Container>
      </section>


      {/* 01. What is Orthopedics? */}
      <section id="about" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Specialty Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is Orthopedics?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            {/* Core Definition */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-50 rounded-bl-full pointer-events-none" />
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                Orthopedics is a medical specialty that focuses on the prevention, diagnosis, treatment, and rehabilitation of conditions affecting the musculoskeletal system. This system includes bones, joints, muscles, ligaments, tendons, cartilage, and the structures that support movement.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Orthopedic specialists, also called orthopedic doctors or orthopedic surgeons, help people manage pain, recover from injuries, improve mobility, and return to everyday activities.
              </p>

              {/* 4 Anatomical Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Bones & Fractures",
                    desc: "Treatment of broken bones, bone deformities, and traumatic skeletal injuries.",
                    icon: <Shield className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Joints & Cartilage",
                    desc: "Management of arthritis, joint stiffness, wear, and articular cartilage damage.",
                    icon: <Activity className="w-5 h-5 text-accent-600" />
                  },
                  {
                    title: "Muscles & Ligaments",
                    desc: "Care for sprains, strains, tendon injuries, and sports-related biomechanical tears.",
                    icon: <Dna className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Spine & Mobility",
                    desc: "Assessment of back pain, posture problems, alignment, and movement mechanics.",
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

      {/* 02. Common Orthopedic Conditions */}
      <section id="conditions" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Presentations
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Common Orthopedic Conditions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                These conditions represent frequent clinical presentations routinely evaluated and managed by orthopedic surgeons and clinical care teams.
              </p>
            </div>

            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  number: "01",
                  title: "Arthritis & Joint Degeneration",
                  desc: "Inflammation or damage affecting joints, often causing pain, stiffness, swelling, and reduced movement. Osteoarthritis is commonly associated with wear-related joint changes.",
                  areas: "Knees, hips, hands, shoulders",
                },
                {
                  number: "02",
                  title: "Fractures & Broken Bones",
                  desc: "A break in a bone caused by an accident, fall, sports injury, or weakened bone from osteoporosis.",
                  areas: "Wrist, ankle, arm, leg, hip",
                },
                {
                  number: "03",
                  title: "Back & Neck Pain",
                  desc: "Pain resulting from muscle strain, disc problems, age-related changes, or spinal conditions. Symptoms may include stiffness or pain radiating into an arm or leg.",
                  areas: "Cervical & lumbar spine, sciatica",
                },
                {
                  number: "04",
                  title: "Tendon & Ligament Injuries",
                  desc: "Sprains, strains, and tears occurring during exercise, sports, lifting, or sudden joint twisting and impact.",
                  areas: "Ankle, knee (ACL/PCL), shoulder, wrist",
                },
                {
                  number: "05",
                  title: "Hip & Knee Problems",
                  desc: "Conditions such as joint degeneration, meniscus injuries, and ligament tears affecting walking, stair climbing, and standing endurance.",
                  areas: "Meniscus tears, cartilage loss, bursitis",
                },
                {
                  number: "06",
                  title: "Hand, Wrist & Foot Conditions",
                  desc: "Includes carpal tunnel syndrome, tendon disorders, bunions, plantar fasciitis, and complex foot or ankle injuries.",
                  areas: "Carpal tunnel, Achilles tendon, bunions",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-accent-600 px-2.5 py-1 rounded-full bg-accent-50 border border-accent-100">
                        {card.number}
                      </span>
                      <span className="text-xs text-slate-500">Condition Overview</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-brand-600">
                      Common Areas:
                    </span>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">
                      {card.areas}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Conditions Box */}
            <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center w-full">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-brand-800">Specialized Surgical &amp; Clinical Care:</span> Additional conditions addressed by orthopedic sub-specialists include osteoporosis-related fragility fractures, scoliosis and spinal deformities, pediatric musculoskeletal disorders, high-velocity sports trauma, and bone infections or tumors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. When Should You Consult an Orthopedic Doctor? (Symptoms) */}
      <section id="symptoms" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Symptom Evaluation
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                When Should You Consult an Orthopedic Doctor?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
            </div>

            {/* Symptoms Checklist Grid */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-brand-600" />
                Routine Symptoms for Orthopedic Specialist Review:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  "Persistent pain in the bones, joints, back, neck, or muscles.",
                  "Joint swelling, tenderness, heat, or persistent morning stiffness.",
                  "Difficulty walking, standing, climbing stairs, or moving a limb.",
                  "Reduced range of motion or difficulty bending and straightening a joint.",
                  "Sharp or dull aching pain following a fall, accident, or sports injury.",
                  "Numbness, tingling sensations, or progressive weakness in an arm or leg.",
                  "Changes in posture, balance instability, or obvious deformity of a joint.",
                  "Repeated joint pain that affects restful sleep or routine daily activities.",
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

            {/* Red Flag Warning Box */}
            <div className="rounded-3xl border-2 border-red-200 bg-red-50/70 p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="flex items-center gap-2.5 text-red-700 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Emergency Signs Requiring Immediate Medical Care</span>
              </div>
              <p className="text-xs sm:text-sm text-red-900/90 leading-relaxed">
                <strong>Important:</strong> Sudden severe pain after an injury, an obvious limb deformity, complete inability to bear weight, a hot swollen joint accompanied by fever, or new limb weakness and numbness requires urgent medical assessment. New back pain accompanied by loss of bladder or bowel control, or numbness around the groin/saddle area, requires immediate emergency evaluation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. How Are Orthopedic Conditions Diagnosed? */}
      <section id="diagnosis" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Evaluation Pathway
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Are Orthopedic Conditions Diagnosed?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Diagnostic evaluations are tailored to the patient&apos;s symptoms and suspected musculoskeletal pathology. Not every patient requires advanced imaging or laboratory testing.
              </p>
            </div>

            {/* Split layout: Image + 5 Diagnostic Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/products/orthopedics/ortho-consultation.jpg"
                    alt="Orthopedic doctor reviewing joint imaging and anatomical knee model"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-center text-slate-500 italic">
                  Clinical consultation and anatomical imaging guide tailored patient interventions.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Medical Consultation",
                    desc: "Discuss the location of pain, when it started, previous injuries, aggravating movements, and how it impacts daily activities and work.",
                  },
                  {
                    step: "2",
                    title: "Physical Examination",
                    desc: "Assess movement range, muscle strength, joint stability, swelling, spinal posture, tenderness, and specialized orthopedic stress maneuvers.",
                  },
                  {
                    step: "3",
                    title: "Imaging Tests (When Indicated)",
                    desc: "X-rays identify fractures and degenerative joint changes. MRI evaluates ligaments, tendons, meniscus, and cartilage. CT scans provide 3D views of complex joint anatomy.",
                  },
                  {
                    step: "4",
                    title: "Laboratory Tests (Selected Cases)",
                    desc: "Blood tests or joint-fluid aspirate testing when infection, gout, autoimmune inflammatory arthritis, or metabolic bone disorders are suspected.",
                  },
                  {
                    step: "5",
                    title: "Treatment Planning",
                    desc: "The specialist recommends personalized treatment based on precise diagnostic findings, severity, age, activity level, and patient health goals.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-brand-400 transition-colors">
                    <div className="h-8 w-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. Orthopedic Treatment Options and Solutions */}
      <section id="treatments" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="space-y-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Pathways
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Orthopedic Treatment Pathways
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Treatment pathways are highly individualized. Many patients improve successfully through conservative and rehabilitative care; injections, medication, or surgery are recommended selectively when indicated.
              </p>
            </div>

            {/* 5 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  title: "1. Physiotherapy & Rehab",
                  desc: "Exercises to improve muscle strength, flexibility, balance, joint kinematics, and functional independence tailored to recovery stage.",
                },
                {
                  title: "2. Medicines & Pain Relief",
                  desc: "Evidence-based analgesics or anti-inflammatory medications chosen according to patient history, diagnosis, and safety profile.",
                },
                {
                  title: "3. Braces, Splints & Casts",
                  desc: "Protects injured tissues, stabilizes fractures or joints, limits unwanted motion temporarily, and safely supports weight-bearing.",
                },
                {
                  title: "4. Selected Injections",
                  desc: "Targeted intra-articular or soft-tissue injections to manage pain, reduce inflammation, and facilitate rehabilitative therapy when appropriate.",
                },
                {
                  title: "5. Orthopedic Surgery",
                  desc: "Advanced procedures including fracture internal fixation, ligament/tendon repair, arthroscopic surgery, and joint replacement.",
                },
              ].map((p, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-brand-900 tracking-tight">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Condition-to-Treatment Approaches Table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-brand-900">
                General Treatment Approaches by Condition
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-brand-950 text-white rounded-t-xl">
                    <tr>
                      <th className="px-5 py-3.5 font-bold rounded-tl-xl w-1/3">Condition</th>
                      <th className="px-5 py-3.5 font-bold rounded-tr-xl">Common Treatment Approaches</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { condition: "Mild sprain or strain", approach: "Activity modification, appropriate support, and targeted rehabilitation" },
                      { condition: "Fracture", approach: "Splint, cast, or surgical fixation depending on fracture severity and displacement" },
                      { condition: "Osteoarthritis", approach: "Exercise, physiotherapy, weight management, medications, and joint replacement for severe end-stage wear" },
                      { condition: "Back pain", approach: "Activity guidance, exercise-based rehabilitation, selected medicines, and specialist evaluation when indicated" },
                      { condition: "Ligament tear", approach: "Rehabilitation, bracing, and support; surgical reconstruction for selected sports or high-demand instability" },
                      { condition: "Frozen shoulder", approach: "Guided exercises, physiotherapy, and selected anti-inflammatory medicines or injections" },
                      { condition: "Severe hip or knee joint damage", approach: "Conservative treatment initially when appropriate; total joint replacement for selected severe cases" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-3.5 font-semibold text-brand-800">{row.condition}</td>
                        <td className="px-5 py-3.5 text-slate-700">{row.approach}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic pt-2">
                *These are general educational pathways, not individual prescriptions. A qualified physician or orthopedic surgeon must determine the appropriate clinical approach.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. Surgical Products & Biomedical Portfolio (Smith & Nephew) */}
      <section id="products-portfolio" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Supplied Surgical Products Portfolio
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Supplied Orthopedic Surgical Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Catalyst Biomedicals supplies world-leading capital equipment, arthroscopy visualization suites, and joint replacement implants from Smith &amp; Nephew Healthcare Pvt Ltd to hospitals and surgical teams.
              </p>
            </div>

            {/* Division 1: Arthroscopy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg group">
                  <Image
                    src="/products/orthopedics/arthroscopy.jpg"
                    alt="Orthopedics Arthroscopy Systems"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-brand-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-accent-400" />
                      Minimally Invasive Systems
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 space-y-3">
                  <p className="text-xs uppercase font-bold tracking-widest text-accent-600">
                    Product Portfolio Partner
                  </p>
                  <div className="relative h-16 w-full max-w-xs">
                    <Image
                      src="/partners/smithnephew-img.jpg"
                      alt="Smith & Nephew Healthcare Pvt Ltd"
                      fill
                      sizes="300px"
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="text-sm font-semibold text-brand-700">
                    Smith &amp; Nephew Healthcare Pvt Ltd
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We supply capital equipment, instrumentation, and consumables with comprehensive technical installation and lifecycle after-sales support.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-brand-600">
                    Surgical Visualization &amp; Resection
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-800 tracking-tight mt-1">
                    Arthroscopy Solutions
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1.5 w-12 rounded-full bg-brand-600" />
                    <div className="h-1.5 w-3 rounded-full bg-accent-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Our team supplies orthopedic surgical suites with 4K visualization systems, motorized shaver consoles, fluid management pumps, and specialized radiofrequency ablation technology from Smith &amp; Nephew.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "4K UHD true visualization camera consoles",
                    "High-efficiency LED and Xenon optical illumination",
                    "Integrated motorized shaver consoles & high-speed blades",
                    "Continuous joint distension fluid management pumps",
                    "Ergonomic surgical hand instruments & access cannulas",
                    "COBLATION™ low-thermal RF technology for select tissue procedures",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-xs sm:text-sm">
                    <tbody>
                      {[
                        { label: "Imaging Resolution", value: "Available up to 4K UHD Ultra-High Definition" },
                        { label: "Optical Illumination", value: "High-Efficiency LED / Xenon Fiber-Optic Sources" },
                        { label: "Shaver Consoles", value: "Integrated Motor Drive with Multi-Speed Control" },
                        { label: "Radiofrequency Ablation", value: "COBLATION™ Technology (Indicated for Specific Joint Applications)" },
                      ].map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="px-4 py-3 font-semibold text-brand-800 w-2/5 border-b border-slate-100">{spec.label}</td>
                          <td className="px-4 py-3 text-slate-700 border-b border-slate-100">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 italic">
                  *Specifications represent available product-category options. Exact models, configurations, and accessory availability depend on hospital requirements. Contact our technical team for system quotes.
                </p>
              </div>
            </div>

            {/* Division 2: Joint Replacement */}
            <div className="pt-12 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg group">
                  <Image
                    src="/products/orthopedics/joint-replacement.jpg"
                    alt="Joint Replacement Surgery Systems"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-accent-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                      <Award className="w-3.5 h-3.5 text-accent-400" />
                      Arthroplasty Solutions
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 space-y-2">
                  <p className="text-xs uppercase font-bold tracking-widest text-accent-600">
                    Product Portfolio Partner
                  </p>
                  <p className="text-sm font-semibold text-brand-700">
                    Smith &amp; Nephew Healthcare Pvt Ltd
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Global provider of total knee, hip, and shoulder replacement systems designed to support anatomical kinematics.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                    Total &amp; Partial Arthroplasty
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-800 tracking-tight mt-1">
                    Joint Replacement Surgery
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <div className="h-1.5 w-12 rounded-full bg-accent-600" />
                    <div className="h-1.5 w-3 rounded-full bg-brand-600" />
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  Smith+Nephew is a world leader in joint replacement systems for knees, hips, and shoulders. We supply premier implant solutions designed for durability, anatomical kinematic restoration, and long-term joint survivorship.
                </p>

                {/* VERILAST Technology Box — Medically Measured & Accurate */}
                <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-700" />
                    <h4 className="text-xs uppercase font-bold tracking-wider text-brand-900">
                      VERILAST™ Advanced Bearing Technology
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    VERILAST™ technology combines an oxidized zirconium bearing surface with highly cross-linked polyethylene in compatible Smith+Nephew knee implant systems. The bearing combination is designed to reduce wear. Actual outcomes and implant longevity depend on the implant system, patient factors, surgical technique, and other clinical considerations.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-xs sm:text-sm">
                    <tbody>
                      {[
                        { label: "Knee Systems", value: "LEGION™, JOURNEY™ II Bicruciate & CR/PS" },
                        { label: "Hip Systems", value: "POLARSTEM™, ANTHOLOGY™, REDAPT™ Revision" },
                        { label: "Shoulder Systems", value: "Aequalis™ Anatomic & Reverse Shoulder Systems" },
                        { label: "Bearing Combinations", value: "Oxidized Zirconium, Highly Cross-Linked Polyethylene, Ceramic" },
                      ].map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="px-4 py-3 font-semibold text-brand-800 w-2/5 border-b border-slate-100">{spec.label}</td>
                          <td className="px-4 py-3 text-slate-700 border-b border-slate-100">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 italic">
                  *Implant selection is determined solely by the operating surgeon based on patient anatomy and clinical criteria. Verify exact indications and manufacturer documentation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 07. Recovery Duration & Stages */}
      <section id="recovery" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="space-y-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Healing Milestones
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Recovery Duration for Orthopedic Conditions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Recovery depends on the type and severity of injury, age, general health, treatment received, and adherence to rehabilitation. The following are approximate educational ranges.
              </p>
            </div>

            {/* Recovery Duration Table — Clinically Refined */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4 w-full">
              <h3 className="text-base sm:text-lg font-bold text-brand-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-600" />
                Indicative Recovery Periods
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-slate-100 text-slate-800 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-bold">Condition or Treatment</th>
                      <th className="px-4 py-3 font-bold">Indicative Recovery Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { item: "Mild sprain or strain", duration: "A few days to several weeks" },
                      { item: "More significant soft-tissue injury", duration: "Several weeks to a few months" },
                      { item: "Bone fracture", duration: "Often around 6–12 weeks for initial bone healing; complex or displaced fractures may take longer" },
                      { item: "Stress fracture", duration: "At least several weeks; severe cases may take 3 months or longer" },
                      { item: "Back pain from a simple strain", duration: "Often improves over days to several weeks" },
                      { item: "ACL reconstruction", duration: "Rehabilitation commonly takes 4–6 months or longer; return to pivoting sports may take 9–12 months and depends on functional recovery and the surgeon's clearance" },
                      { item: "Shoulder arthroscopy", duration: "Approximately 1–6 months depending on the procedure (simple debridement/decompression takes 1–3 months; rotator cuff repair takes longer)" },
                      { item: "Knee replacement", duration: "Many people resume most daily activities within 3–6 weeks, while full recovery commonly takes 4–12 months" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="px-4 py-3 font-semibold text-brand-800">{row.item}</td>
                        <td className="px-4 py-3 text-slate-700">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4 Typical Recovery Stages */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-center text-brand-800">
                Typical Recovery Stages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    stage: "Stage 1",
                    phase: "Early Care",
                    focus: "Pain & Protection",
                    desc: "Control acute symptoms, protect the injured area, and follow the initial treatment plan.",
                  },
                  {
                    stage: "Stage 2",
                    phase: "Healing",
                    focus: "Restore Movement",
                    desc: "Begin or progress prescribed movement and rehabilitation as the clinician permits.",
                  },
                  {
                    stage: "Stage 3",
                    phase: "Recovery",
                    focus: "Rebuild Strength",
                    desc: "Gradually improve muscle strength, balance, walking, and everyday functional capacity.",
                  },
                  {
                    stage: "Stage 4",
                    phase: "Return",
                    focus: "Normal Activities",
                    desc: "Return to work, exercise, and sports according to healing progress and medical clearance.",
                  },
                ].map((st, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs relative overflow-hidden">
                    <span className="text-[11px] font-mono uppercase font-bold text-accent-600">{st.stage}</span>
                    <h4 className="text-base font-black text-brand-900 mt-1">{st.phase}</h4>
                    <p className="text-xs font-semibold text-brand-600 mt-0.5">{st.focus}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-3">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 08. How Can Orthopedic Problems Be Prevented? & Consultation Process */}
      <section id="prevention" className="py-16 sm:py-24 scroll-mt-28">
        <Container>
          <div className="space-y-16">
            {/* Prevention */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                  Bone &amp; Joint Health
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                  How Can Orthopedic Problems Be Prevented?
                </h2>
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                  <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Regular Exercise",
                    desc: "Build muscle strength, joint flexibility, coordination, and balance to protect joint alignment.",
                    icon: <Activity className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Balanced Nutrition",
                    desc: "Include adequate dietary protein, calcium, and vitamin D as appropriate for your needs.",
                    icon: <Apple className="w-5 h-5 text-accent-600" />
                  },
                  {
                    title: "Safe Movement",
                    desc: "Use appropriate lifting techniques and avoid sudden, unconditioned increases in exercise intensity.",
                    icon: <ShieldCheck className="w-5 h-5 text-brand-600" />
                  },
                  {
                    title: "Joint Protection",
                    desc: "Wear suitable footwear, use protective sports gear, maintain healthy weight, and prevent falls.",
                    icon: <Shield className="w-5 h-5 text-accent-600" />
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-brand-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Steps */}
            <div className="pt-12 border-t border-slate-200 space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-600">
                  Patient Consultation Workflow
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-black text-brand-800 tracking-tight">
                  What Happens During an Orthopedic Consultation?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {[
                  { step: "01", title: "Book Appointment", desc: "Choose an orthopedic specialist based on symptoms or referral." },
                  { step: "02", title: "Discuss Symptoms", desc: "Explain pain location, duration, injury history, and movement restrictions." },
                  { step: "03", title: "Undergo Examination", desc: "The doctor evaluates the affected area and determines if imaging is required." },
                  { step: "04", title: "Receive Treatment Plan", desc: "Review suitable options, expected benefits, risks, and follow-up needs." },
                  { step: "05", title: "Attend Follow-Ups", desc: "Assess healing progress and adjust rehabilitation protocols as needed." },
                ].map((st, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-2 text-center">
                    <span className="text-xs font-mono font-bold text-accent-600 bg-white px-2 py-1 rounded-full border border-slate-200">{st.step}</span>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-900 mt-2">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-xs text-slate-600 max-w-3xl mx-auto">
                <strong>What Patients Should Bring:</strong> Relevant previous medical reports, recent X-ray or MRI imaging scans, a list of current medicines, and details of previous physical therapy or treatments.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 09. Frequently Asked Questions (FAQs) */}
      <section id="faqs" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Educational Guidance
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
                  q: "When should I visit an orthopedic doctor?",
                  a: "Consult an orthopedic doctor for persistent joint or bone pain, restricted movement, recurring sports injuries, swelling, or difficulty performing everyday activities. Severe injuries or emergency warning signs require urgent clinical assessment."
                },
                {
                  q: "Can orthopedic problems be treated without surgery?",
                  a: "Yes, many orthopedic conditions improve without surgery through structured physical therapy, activity modification, anti-inflammatory medicines, orthotics, bracing, and selected injections. Surgery is considered when conservative options are insufficient or in severe acute structural damage."
                },
                {
                  q: "How long does orthopedic treatment take?",
                  a: "Treatment duration varies: mild sprains or strains often improve over days to weeks, bone fractures typically require 6–12 weeks of initial healing, while comprehensive joint replacement or ACL reconstruction involves several months of progressive rehabilitation."
                },
                {
                  q: "Is physiotherapy necessary after orthopedic treatment?",
                  a: "Yes, physiotherapy plays an essential role in both conservative and postoperative recovery. It helps rebuild muscle strength, restores joint range of motion, retrains balance, and accelerates safe return to functional activity."
                },
                {
                  q: "Can arthritis be completely cured?",
                  a: "Osteoarthritis is a degenerative condition that cannot be completely cured, but its symptoms can be effectively managed with exercise, physiotherapy, weight management, medications, and joint replacement when joint cartilage is severely worn."
                },
                {
                  q: "Can children visit an orthopedic specialist?",
                  a: "Yes, pediatric orthopedic surgeons specialize in the musculoskeletal health of infants, children, and adolescents, treating growth plate injuries, scoliosis, limb length discrepancies, and congenital conditions."
                },
                {
                  q: "When can I return to work or sports after an injury?",
                  a: "Return timelines depend on your healing progress, physical job demands, and doctor's clearance. Desk jobs may be resumed sooner, whereas demanding manual labor or pivoting sports requires meeting functional recovery criteria."
                },
                {
                  q: "Should I apply ice or heat to orthopedic pain?",
                  a: "Ice is generally recommended for acute injuries, swelling, and sudden inflammation (first 24–48 hours). Heat is typically more beneficial for chronic muscle stiffness and warming up joints. Always wrap ice or heat in a towel to protect your skin."
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

      {/* 10. Hospital Demonstration & Product Consultation Inquiry Section */}
      <section id="inquire" className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/40 border-t border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full rounded-3xl bg-brand-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono tracking-widest text-accent-300">
                <FileText className="w-3.5 h-3.5" />
                EQUIPMENT DEMONSTRATIONS &amp; HOSPITAL INQUIRIES
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Request an Equipment Demonstration or Clinical Product Consultation
              </h3>

              <p className="text-sm sm:text-base text-brand-100 max-w-2xl leading-relaxed">
                Connect with Catalyst Biomedicals&apos; orthopedic technical specialists for hospital equipment trials, OT installation planning, surgeon product demonstrations, and implant catalogue requests.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request Equipment Demonstration
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 border border-white/20 transition-all duration-300"
                >
                  Back to All Products
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Medical Disclaimer */}
              <div className="mt-8 pt-6 border-t border-white/15 text-[11px] text-brand-200/80 leading-relaxed text-left">
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding medical conditions. Catalyst Biomedicals supplies equipment and implants directly to healthcare institutions and certified professionals.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Educational & Positioning Notice */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="w-full rounded-2xl border border-brand-200/90 bg-brand-50/70 p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
              <strong>Medical Equipment Distribution &amp; Clinical Information:</strong> Catalyst Biomedicals is an importer and distributor of surgical products, partnering with global innovators to equip hospitals and surgical suites. The educational content below details musculoskeletal care pathways, followed by the surgical equipment and joint replacement systems we distribute to healthcare institutions.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
