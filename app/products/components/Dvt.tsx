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
  ChevronRight,
  ChevronDown,
  Layers,
  AlertTriangle,
  Info,
  Target,
  FileText,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Clock,
  ShieldCheck,
  Cpu,
  Bed,
  Footprints,
  Sliders
} from "lucide-react";

export default function Dvt() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden text-white py-10 sm:py-14 md:py-16">
        <Image
          src="/products/dvt/dvt-hero.jpg"
          alt="DVT Management & Prevention Solutions"
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
              DVT PREVENTION • VENOUS CIRCULATION • MECHANICAL COMPRESSION
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
              DVT Management &amp; Prevention Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-accent-300 font-semibold tracking-wide">
              Advanced DVT Prevention &amp; Management Solutions
            </p>

            <p className="text-xs sm:text-sm text-slate-200 font-light max-w-3xl leading-relaxed">
              Medical equipment and mechanical compression solutions designed to support deep vein thrombosis (DVT) prevention protocols in hospitals, surgical units, and critical care settings.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. What is DVT Management? */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Medical Technology Overview
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                What is DVT Management?
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
                Deep Vein Thrombosis (DVT) occurs when a blood clot forms in a deep vein, commonly in the lower leg or thigh. It can cause pain and swelling, and in some cases, the clot may travel to the lungs, causing a potentially life-threatening pulmonary embolism (PE).
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                DVT management involves clinical risk assessment, appropriate diagnostic investigations, preventive measures, and medical treatment when required. Depending on the patient&apos;s condition, healthcare professionals may use anticoagulant medication, early mobilization, or selected mechanical compression devices.
              </p>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong>Important Distinction:</strong> DVT prevention is not the same as treating an existing blood clot. Mechanical compression devices are used for specific preventive or other approved indications and must be selected according to clinical assessment and manufacturer instructions.
                </div>
              </div>
            </div>

            {/* 3 Core Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Venous Stasis Reduction
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Intermittent pneumatic compression periodically inflates limb garments to mimic the natural calf muscle pump and accelerate venous blood velocity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Mechanical Thromboprophylaxis
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A non-pharmacological prevention modality that may be selected for indicated surgical, trauma, or high-bleeding-risk patients based on individualized VTE and bleeding risk assessment.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Bed className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-700">
                    Hospital Inpatient Support
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Standardized compression regimens integrated into post-operative recovery, intensive care units, orthopedic suites, and general medical wards.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. DVT Risk Factors & Clinical Considerations */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Presentations &amp; Risk Profiling
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                DVT Risk Factors &amp; Clinical Considerations
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                DVT risk may increase in patients experiencing certain medical conditions, surgical procedures, or extended immobility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "01",
                  title: "Reduced Mobility",
                  desc: "Prolonged bed rest, extended immobility, or limited movement during hospitalization may significantly increase the risk of venous pooling and blood clot formation.",
                },
                {
                  id: "02",
                  title: "Surgical Procedures",
                  desc: "Patients recovering from major surgical interventions, particularly major orthopedic joint reconstructions and pelvic or abdominal procedures, require targeted DVT prevention plans.",
                },
                {
                  id: "03",
                  title: "Hospitalization & Critical Care",
                  desc: "Patients admitted to intensive care units or critical care wards present complex medical factors requiring routine venous thromboembolism risk assessment.",
                },
                {
                  id: "04",
                  title: "Previous DVT or Pulmonary Embolism",
                  desc: "A documented history of previous thromboembolic events significantly influences a patient's clinical risk assessment score and prevention protocol.",
                },
                {
                  id: "05",
                  title: "Certain Medical Conditions",
                  desc: "Active malignancy, hypercoagulability disorders, pregnancy, heart failure, and systemic inflammatory diseases can elevate baseline thrombosis susceptibility.",
                },
                {
                  id: "06",
                  title: "Additional Risk Factors",
                  desc: "Advanced age, elevated BMI/obesity, hormone therapy, and long-duration travel may also contribute to venous thromboembolic risk in susceptible individuals.",
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                <strong>Clinical Assessment Note:</strong> Risk factors alone do not confirm the presence of DVT. A qualified healthcare professional must clinically assess each patient individually.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. When is DVT Assessment Required? */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Symptom Awareness &amp; Warning Signs
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                When is DVT Assessment Required?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Deep Vein Thrombosis may develop silently with few noticeable symptoms. Prompt medical evaluation is critical when physical warning signs emerge.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="/products/dvt/dvt-assessment-ultrasound.jpg"
                    alt="Vascular Doppler ultrasound and clinical limb assessment for Deep Vein Thrombosis"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm uppercase font-bold tracking-wider text-brand-700 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-accent-600" />
                    Possible Signs of DVT
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Swelling in one leg, calf, or arm.",
                      "Pain, tenderness, or cramping in the affected limb.",
                      "Persistent warmth in the affected area.",
                      "Redness or visible discolouration of the skin.",
                      "Unexplained unilateral swelling following surgery.",
                      "Engorgement of superficial collateral veins.",
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {symptom}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emergency Warning */}
              <div className="rounded-2xl border border-red-200 bg-red-50/70 p-5 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  <strong>Emergency Warning (Pulmonary Embolism):</strong> Sudden shortness of breath, unexplained sharp chest pain, coughing up blood, tachycardia, lightheadedness, or sudden collapse may indicate a life-threatening pulmonary embolism. Seek immediate emergency medical care.
                </div>
              </div>

              {/* Clinical Note Callout */}
              <div className="rounded-2xl border border-brand-200/90 bg-brand-50/60 p-5 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-950 leading-relaxed">
                  <strong>Clinical Note:</strong> Symptoms alone cannot definitively confirm DVT. Accurate diagnosis requires clinical probability scoring and objective investigations such as compression duplex venous ultrasound or D-dimer assessment.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How Do DVT Prevention Devices Work? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Technology Pathway &amp; Clinical Workflow
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Do DVT Prevention Devices Work?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Intermittent Pneumatic Compression (IPC) devices are used in selected clinical settings to support venous blood flow and reduce blood pooling in the extremities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Patient Assessment",
                  desc: "The healthcare team evaluates the patient's individual risk of venous thromboembolism and determines whether mechanical thromboprophylaxis is indicated.",
                  icon: Stethoscope,
                },
                {
                  step: "2",
                  title: "Device Selection",
                  desc: "A compatible compression controller and the appropriate limb sleeves or foot cuffs are selected according to manufacturer instructions and patient anatomy.",
                  icon: Cpu,
                },
                {
                  step: "3",
                  title: "Sleeve Application",
                  desc: "The compression sleeves are carefully fitted around the prescribed limb area (calf, thigh, or foot) by trained clinical personnel ensuring proper alignment.",
                  icon: Layers,
                },
                {
                  step: "4",
                  title: "Intermittent Inflation",
                  desc: "The controller inflates and deflates chambered sleeves in programmed cycles to apply sequential gradient pressure, propelling blood toward the heart.",
                  icon: Sliders,
                },
                {
                  step: "5",
                  title: "Clinical Monitoring",
                  desc: "Nursing staff regularly inspect device operation, pressure settings, correct sleeve fit, patient comfort, and skin integrity according to hospital protocols.",
                  icon: Clock,
                },
                {
                  step: "6",
                  title: "Ongoing Prevention Plan",
                  desc: "Mechanical prevention is continued or adjusted according to the patient's returning mobility, serial risk assessments, and the treating medical team's directives.",
                  icon: Footprints,
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
                * Note: Device design, compression cycles, pressure settings, and approved uses vary by manufacturer and specific model platform.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. Potential Benefits of DVT Prevention Technology */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Care Modalities
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Potential Benefits of DVT Prevention Technology
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Clinical outcomes depend on patient risk, device selection, correct garment fit, and the overall hospital prevention protocol. Compression devices may help reduce DVT risk in selected patients, but do not eliminate the risk of DVT or pulmonary embolism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Supports Venous Circulation",
                  desc: "Intermittent pneumatic compression supports venous blood velocity and may help reduce venous stasis in immobile or post-operative patients.",
                  icon: HeartPulse,
                },
                {
                  title: "Mechanical Prevention Option",
                  desc: "Mechanical compression may serve as an option for selected patients, including those with elevated bleeding risks where anticoagulants are unsuitable, based on individualized VTE and bleeding risk assessment.",
                  icon: ShieldCheck,
                },
                {
                  title: "Non-Invasive Application",
                  desc: "Compression garments are applied externally around compatible limb areas (calves, thighs, or feet), delivering non-invasive, controlled mechanical compression.",
                  icon: Layers,
                },
                {
                  title: "Adjustable Device Programs",
                  desc: "Depending on the platform, certain advanced systems offer automated pressure adjustments, customizable cycle intervals, or vascular refill tracking.",
                  icon: Sliders,
                },
                {
                  title: "Hospital Workflow Support",
                  desc: "Designed for bedside deployment across surgical wards, critical care units, recovery suites, and extended-immobility inpatient care.",
                  icon: Bed,
                },
                {
                  title: "Patient Monitoring & Tracking",
                  desc: "Selected controller platforms incorporate compliance-monitoring features to assist clinical staff in tracking therapy duration.",
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

      {/* 07. DVT Prevention Equipment & Solutions */}
      <section id="products" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <div className="w-full space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Equipment Portfolio &amp; Hospital Solutions
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                DVT Prevention Equipment &amp; Solutions
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Healthcare institutions may enquire about mechanical compression equipment, compatible garments, and hospital thromboprophylaxis consumables to support institutional VTE protocols.
              </p>
            </div>

            {/* Featured System Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/products/dvt/dvt-prevention-system.jpg"
                    alt="Hospital DVT Compression System and Ward Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent-600 mb-1">
                      Featured Product Profile
                    </p>
                    <p className="text-base font-bold text-brand-900">
                      Cardinal Health — Kendall SCD™ 700 Sequential Compression System
                    </p>
                    <p className="text-xs text-slate-500">
                      Subject to portfolio verification and authorized distribution status
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
                    Cardinal Health — Kendall SCD™ 700 Sequential Compression System
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600">
                    Intermittent Pneumatic Compression Platform
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Kendall SCD™ 700 is an intermittent pneumatic compression system designed to support deep vein thrombosis prevention in indicated patients. Depending on the compatible garment, the system uses programmed compression cycles and Vascular Refill Detection technology to adjust the interval between compressions. Its compliance-monitoring feature helps healthcare staff track the duration of device operation.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-brand-700">
                    Technical Specifications &amp; Operational Features
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <table className="w-full text-xs sm:text-sm">
                      <tbody>
                        {[
                          { 
                            label: "System Model", 
                            value: "Kendall SCD™ 700 Sequential Compression System" 
                          },
                          { 
                            label: "Garment Pressures", 
                            value: "Leg Sleeves: Sequential gradient circumferential pressure (45 mmHg ankle, 40 mmHg calf, 30 mmHg thigh). Foot cuffs operate with distinct rapid-inflation pressure settings. Confirm specific garment IFU." 
                          },
                          { 
                            label: "Vascular Refill", 
                            value: "Vascular Refill Detection technology to adjust the interval between compressions" 
                          },
                          { 
                            label: "Compliance Tracking", 
                            value: "Integrated compliance-monitoring feature helps healthcare staff track duration of device operation" 
                          },
                          { 
                            label: "Garment Compatibility", 
                            value: "Compatible leg sleeves (knee length, thigh length) and foot cuffs (garment-specific settings apply)" 
                          },
                          { 
                            label: "Power & Configuration", 
                            value: "AC mains operation with rechargeable battery option (verify model configuration)" 
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
                  <p className="text-[11px] text-slate-500 italic">
                    <strong>Technical specifications:</strong> Confirm the exact model and compatible garment before listing compression pressures, accessories, battery configuration, certifications, or other technical details. Refer to the applicable manufacturer instructions for use.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                  <p className="text-xs text-amber-950 leading-relaxed">
                    <strong>Important:</strong> Public product documentation confirms the device&apos;s features, but it does not establish that Catalyst Biomedicals currently sells or is authorized to distribute this product in India. Product availability and distribution rights should be confirmed directly with Catalyst Biomedicals.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Equipment Categories Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-brand-700">
                Equipment Categories &amp; Hospital Solutions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Intermittent Pneumatic Compression (IPC) Devices",
                    desc: "Compression systems engineered to inflate and deflate compatible sleeves at programmed intervals to support venous return and DVT prophylaxis.",
                  },
                  {
                    title: "DVT Compression Sleeves & Cuffs",
                    desc: "Limb-specific disposable and reusable compression sleeves designed for compatibility with designated compression controller units.",
                  },
                  {
                    title: "Sequential Compression Systems",
                    desc: "Systems that apply sequential, gradient pressure across multi-chamber garments to mimic the physiological venous calf pump.",
                  },
                  {
                    title: "Controller Units & Accessories",
                    desc: "Equipment controllers, high-durability connecting air tubing, power supplies, bed-rail hooks, and replacement accessories.",
                  },
                  {
                    title: "Patient Safety & Monitoring Support",
                    desc: "Operational documentation, sleeve sizing guidelines, and clinical in-service support to promote proper placement and skin inspection.",
                  },
                  {
                    title: "Hospital & Surgical Care Solutions",
                    desc: "Prophylaxis solutions tailored for general surgery, orthopedic operating suites, trauma ICUs, bariatrics, and inpatient medical wards.",
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
                <strong>Manufacturer &amp; Product Information:</strong> Add specific brand names, model numbers, technical specifications, certifications, product images, and distribution claims only after confirming Catalyst Biomedicals&apos; current portfolio and the applicable documentation. The equipment categories above represent website product solutions and are subject to active territory distribution verification.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 08. Supporting Recovery & Mobility */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Patient Care &amp; Inpatient Pathways
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                Supporting Recovery &amp; Mobility
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Recovery and prevention requirements vary according to the patient&apos;s condition, surgical procedure, and overall clinical risk profile.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-brand-700">
                Key Recovery &amp; Care Considerations:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Follow the Care Plan: Patients should adhere to the treating team's instructions regarding prescribed compression devices, anticoagulation medication, and follow-up.",
                  "Encourage Appropriate Mobility: Active limb movement and ambulation should be initiated promptly when the treating team determines that it is safe.",
                  "Check Device Fit: Compression sleeves must be correctly sized, positioned, and connected according to manufacturer instructions and clinical guidelines.",
                  "Monitor Skin Condition: Healthcare staff should routinely inspect the limb for pain, discomfort, pressure marks, skin irritation, or changes in temperature.",
                  "Attend Scheduled Follow-Ups: Patients should report any new or worsening swelling, leg heaviness, or discoloration to clinical personnel immediately.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                <p className="text-xs sm:text-sm text-amber-950 font-medium">
                  <strong>Important Clinical Directives:</strong> A patient with suspected or confirmed acute DVT should not initiate compression-device use independently. The treating physician must evaluate the clot status and determine the appropriate medical anticoagulation approach.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 09. How Can Safe DVT Prevention Be Supported? */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="w-full space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-600">
                Clinical Safety &amp; Quality
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-700 tracking-tight">
                How Can Safe DVT Prevention Be Supported?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-14 rounded-full bg-brand-600" />
                <div className="h-1.5 w-3.5 rounded-full bg-accent-600" />
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Rigorous adherence to individualized risk assessment and facility protocols ensures safe, effective mechanical thromboprophylaxis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Individual Risk Assessment",
                  desc: "Utilize validated scoring tools (e.g. Caprini score) to guide the prevention strategy and identify high-risk surgical and medical inpatients.",
                  icon: Target,
                },
                {
                  title: "Correct Device Selection",
                  desc: "Choose a clinically indicated compression system and correctly sized compatible garments appropriate for the patient's anatomy and manufacturer IFU.",
                  icon: Cpu,
                },
                {
                  title: "Clinical Supervision",
                  desc: "Deploy equipment strictly according to hospital protocol, manufacturer instructions for use (IFU), and licensed clinical oversight.",
                  icon: FileText,
                },
                {
                  title: "Fit & Skin Inspection",
                  desc: "Ensure correct sleeve placement and regularly monitor the skin underneath for moisture, pressure injury, or arterial insufficiency.",
                  icon: ShieldCheck,
                },
                {
                  title: "Device Inspection",
                  desc: "Verify pump controllers, air tubes, snap connectors, and alarms before each patient application to ensure error-free operation.",
                  icon: CheckCircle2,
                },
                {
                  title: "Integrated Strategy",
                  desc: "Combine mechanical compression with pharmacoprophylaxis and early mobilization when indicated according to multidisciplinary guidelines.",
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

            {/* Safer Standardized Safety Notice & Precautions */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-3.5">
              <h3 className="text-base font-bold text-brand-800 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                Safety Notice &amp; Precautions
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Intermittent pneumatic compression devices are not suitable for every patient. Suitability depends on the patient&apos;s clinical condition, the intended use, the selected garment, and the manufacturer&apos;s instructions for use. Healthcare professionals should assess relevant vascular conditions, skin integrity, limb abnormalities and other device-specific precautions before use.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Patients with suspected or confirmed DVT should receive medical assessment and follow their treating clinician&apos;s advice before compression therapy is initiated or modified. Symptoms that may indicate pulmonary embolism require immediate emergency medical care.
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
                  q: "What is Deep Vein Thrombosis (DVT)?",
                  a: "Deep Vein Thrombosis occurs when a blood clot (thrombus) forms in a deep vein, commonly in the lower leg or thigh. It can cause pain and swelling, and in some cases, the clot may travel to the lungs, causing a potentially life-threatening pulmonary embolism (PE).",
                },
                {
                  q: "What is a DVT prevention device?",
                  a: "A DVT prevention device, such as an intermittent pneumatic compression system, applies controlled compression to compatible limb garments to support venous blood flow and help reduce the risk of clot formation in selected patients.",
                },
                {
                  q: "Who may require DVT prevention equipment?",
                  a: "Certain hospitalized, surgical, post-operative, or less-mobile patients may require mechanical thromboprophylaxis following an individual clinical assessment.",
                },
                {
                  q: "Can a compression device treat an existing DVT?",
                  a: "A device intended for DVT prevention should not be considered a treatment for an existing blood clot. Confirmed DVT requires an appropriate treatment plan determined by a qualified healthcare professional.",
                },
                {
                  q: "Are compression sleeves suitable for every patient?",
                  a: "No. Suitability depends on the patient's condition, the device's approved indications, garment compatibility, and relevant precautions. Healthcare professionals should assess the patient before use.",
                },
                {
                  q: "Are DVT prevention devices used with medication?",
                  a: "Mechanical compression may be used alone or alongside medication as part of an individualized prevention plan. The appropriate approach depends on the patient's risk of blood clots, bleeding risk, and clinical circumstances.",
                },
                {
                  q: "How can a hospital enquire about DVT equipment?",
                  a: "Hospitals and healthcare institutions can contact Catalyst Biomedicals to enquire about currently available products, compatible compression sleeves, technical specifications, quotations, and product demonstrations.",
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
              DVT Management &amp; Prevention Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Hospital-Ready DVT Prevention Solutions
            </h2>
            <p className="text-sm sm:text-base text-brand-100 leading-relaxed">
              Connect with Catalyst Biomedicals to enquire about available DVT prevention equipment, compression systems, compatible sleeves, technical specifications, and hospital supply requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Enquire About DVT Equipment
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
              <strong>Medical Equipment Distribution &amp; Clinical Information:</strong> Catalyst Biomedicals is an importer and distributor of medical-related products. The educational content above details venous thromboembolism care pathways, followed by the DVT prevention equipment and mechanical compression solutions we distribute to healthcare institutions. Product availability, manufacturer relationships, regulatory status, and approved indications should be confirmed directly with Catalyst Biomedicals before publication. For clinical reference, venous thromboembolism guidelines and IPC methods are discussed in peer-reviewed clinical consensus statements (such as the Indian Society of Critical Care Medicine consensus on VTE prophylaxis).
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Disclaimer Banner */}
      <section className="py-6 bg-slate-100 border-t border-slate-200 text-slate-500 text-xs">
        <Container>
          <div className="w-full text-center space-y-2">
            <p className="leading-relaxed">
              <strong>Medical Disclaimer:</strong> This content is intended for general educational and product-information purposes. It does not replace professional medical advice, diagnosis, or treatment. DVT prevention and treatment decisions must be made by qualified healthcare professionals.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
