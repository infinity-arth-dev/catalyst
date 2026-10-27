// data/products.ts

export interface ProductPartnerItem {
  subtitle: string;
  partnerName: string;
  logo?: string;
  description: string;
  longDescription?: string;          // NEW — used on detail page
  gallery?: string[];                // NEW — multiple images
  overview?: string;
  features?: string[];
  applications?: string[];
  benefits?: painfulStringList;
  specifications?: { label: string; value: string }[];
  clinicalNotes?: string;
}

type painfulStringList = string[];

export interface ProductCategoryDetail {
  id: string;
  name: string;
  slug: string;
  image: string;
  heroImage?: string;                // NEW — detail page banner
  tagline?: string;
  summary?: string;
  items: ProductPartnerItem[];
}

export const productCategories: ProductCategory[] = [
  { slug: "orthopedics", name: "Orthopedics", image: "/products/orthopedics/orthopedics-main.jpg" },
  { slug: "neurology", name: "Neurology", image: "/products/neurology/neurology-main.jpg" },
  { slug: "ophthalmology", name: "Ophthalmology", image: "/products/ophthalmology/ophthalmology-main.jpg" },
  { slug: "dental", name: "Dental", image: "/products/dental/dental-main.jpg" },
  { slug: "ent", name: "ENT", image: "/products/ent/ent-main.jpg" },
  { slug: "dvt", name: "DVT", image: "/products/dvt/dvt-main.jpg" },
  { slug: "onco", name: "Onco", image: "/products/onco/onco-main.jpg" },
  { slug: "hospital-supply", name: "Hospital Supply", image: "/products/hospital-supply/hospital-supply-main.jpg" },
];

export const PRODUCT_SEGMENTS: ProductCategoryDetail[] = [
  {
    id: "orthopedics",
    name: "Orthopedics",
    slug: "orthopedics",
    image: "/products/orthopedics/orthopedics-main.jpg",
    heroImage: "/products/orthopedics/orthopedics-hero.jpg",
    tagline: "Advanced Arthroscopy & Joint Replacement Solutions",
    summary:
      "Comprehensive orthopedic portfolio covering minimally invasive arthroscopy and complete joint replacement systems for knee, hip, and shoulder.",
    items: [
      {
        subtitle: "Arthoscopy",
        partnerName: "Smith & Nephew Healthcare Pvt Ltd",
        logo: "/partners/smithnephew-img.jpg",
        description:
          "We are a trusted and growing channel partner for Smith & Nephew Healthcare Pvt Ltd for their arthroscopy division. We have been associated with them from last two years and have a great track record in incremental sales. He have been able to push more capital equipment in our regions and hence increasing the installation base with appropriate service.",
        longDescription:
          "Our arthroscopy division partners with Smith+Nephew to deliver state-of-the-art minimally invasive surgical solutions across India. From 4K visualization towers to advanced RF ablation and shaver consoles, we support hospitals in building complete arthroscopy suites with installation, training, and lifecycle service.",
        gallery: [
          "/products/orthopedics/arthroscopy-1.jpg",
          "/products/orthopedics/arthroscopy-2.jpg",
          "/products/orthopedics/arthroscopy-3.jpg",
          "/products/orthopedics/arthroscopy-4.jpg",
        ],
        overview:
          "Smith & Nephew arthroscopy systems enable minimally invasive visualization and treatment of joint pathologies with industry-leading optics and instrumentation.",
        features: [
          "High-definition 4K arthroscopy camera systems",
          "Liquid management & radiofrequency ablation devices",
          "Complete range of shaver blades and burrs",
          "Arthroscopic pump systems for joint distension",
          "Wide portfolio of arthroscopic hand instruments",
        ],
        applications: [
          "Knee arthroscopy (ACL/PCL reconstruction, meniscectomy)",
          "Shoulder arthroscopy (rotator cuff repair, labral repair)",
          "Hip arthroscopy (FAI, labral tears)",
          "Ankle and wrist arthroscopy",
          "Small joint arthroscopy",
        ],
        benefits: [
          "Minimally invasive — smaller incisions, faster recovery",
          "Reduced post-operative pain and hospital stay",
          "Improved visualization for precise diagnosis",
          "Proven clinical outcomes with long-term durability",
        ],
        specifications: [
          { label: "Camera Resolution", value: "4K UHD" },
          { label: "Light Source", value: "LED / Xenon" },
          { label: "Shaver Systems", value: "Console + Blade Range" },
          { label: "RF Ablation", value: "COBLATION™ Technology" },
        ],
        clinicalNotes:
          "Backed by Smith+Nephew's global clinical evidence and training programs. Our team provides on-site technical support and surgeon training across installation sites.",
      },
      {
        subtitle: "Joint replacement surgery",
        partnerName: "Smith & Nephew Healthcare Pvt Ltd",
        logo: "/partners/smithnephew-img.jpg",
        description:
          "Smith+Nephew is a world leader in joint replacement systems for knees, hips and shoulders.",
        longDescription:
          "Smith+Nephew offers one of the world's most comprehensive joint replacement portfolios — from primary to complex revision surgeries. Our team supports hospitals with implant selection, surgical planning tools, and post-operative outcome tracking.",
        gallery: [
          "/products/orthopedics/joint-1.jpg",
          "/products/orthopedics/joint-2.jpg",
          "/products/orthopedics/joint-3.jpg",
        ],
        overview:
          "Smith+Nephew offers one of the most comprehensive joint replacement portfolios, combining advanced materials, proven designs, and digital surgical planning.",
        features: [
          "Primary & revision knee systems (cemented & cementless)",
          "Hip replacement — stemmed, short-stem, and resurfacing options",
          "Shoulder arthroplasty — anatomic & reverse",
          "VERILAST™ Oxidized Zirconium bearing technology",
          "Digital templating and patient-specific instrumentation",
        ],
        applications: [
          "Total knee arthroplasty (TKA)",
          "Total hip arthroplasty (THA)",
          "Partial knee replacement (unicondylar)",
          "Reverse shoulder arthroplasty",
          "Revision joint replacement procedures",
        ],
        benefits: [
          "Long implant survivorship backed by registry data",
          "Improved range of motion and patient satisfaction",
          "Reduced wear with advanced bearing surfaces",
          "Comprehensive sizes for anatomical fit",
        ],
        specifications: [
          { label: "Knee Systems", value: "LEGION™, JOURNEY™ II" },
          { label: "Hip Systems", value: "POLARSTEM™, ANTHOLOGY™" },
          { label: "Shoulder Systems", value: "Aequalis™" },
          { label: "Bearing Options", value: "VERILAST™, XLPE, Ceramic" },
        ],
        clinicalNotes:
          "Smith+Nephew joint replacement systems are supported by long-term clinical studies and national joint registries worldwide.",
      },
    ],
  },
  {
    id: "neurology",
    name: "Neurology",
    slug: "neurology",
    image: "/products/neurology/neurology-main.jpg",
    heroImage: "/products/neurology/neurology-hero.jpg",
    tagline: "Neuromodulation & Neurotherapy Solutions",
    summary:
      "Targeted therapies for drug-resistant epilepsy, multiple sclerosis, and Parkinson's disease management.",
    items: [
      {
        subtitle: "Epilepsy",
        partnerName: "Vagus Nerve stimulation Livanova",
        logo: "/partners/livanova.jpg",
        description:
          "LivaNova is a global medical technology company built on nearly five decades of experience and a relentless commitment to improve the lives of drug resistance epilepsy patients",
        longDescription:
          "VNS Therapy™ from LivaNova has transformed the lives of over 100,000 drug-resistant epilepsy patients worldwide. Our team supports neurologists and neurosurgeons with implant selection, programming, and patient follow-up.",
        gallery: [
          "/products/neurology/epilepsy-1.jpg",
          "/products/neurology/epilepsy-2.jpg",
          "/products/neurology/epilepsy-3.jpg",
        ],
        overview:
          "Vagus Nerve Stimulation (VNS) Therapy™ from LivaNova is an adjunctive treatment for drug-resistant epilepsy, delivering mild electrical pulses to the vagus nerve to reduce seizure frequency.",
        features: [
          "Implantable pulse generator with programmable settings",
          "Magnetic activation for on-demand stimulation",
          "AutoStim™ — automatic seizure detection & response",
          "MRI-conditional compatibility (SenTiva™)",
          "Long battery life with replaceable generator",
        ],
        applications: [
          "Drug-resistant focal epilepsy",
          "Lennox-Gastaut syndrome",
          "Pediatric epilepsy patients (>4 years)",
          "Patients not suitable for resective surgery",
        ],
        benefits: [
          "Significant reduction in seizure frequency",
          "Improved quality of life and alertness",
          "Non-pharmacological, adjustable therapy",
          "Reversible and titratable treatment",
        ],
        specifications: [
          { label: "Generator", value: "SenTiva™ / Demipulse™" },
          { label: "Stimulation", value: "Programmable Duty Cycle" },
          { label: "MRI", value: "Conditional (1.5T & 3T)" },
          { label: "Battery Life", value: "Up to 11 years" },
        ],
        clinicalNotes:
          "VNS Therapy has been used in over 100,000 patients worldwide with 20+ years of clinical evidence.",
      },
      {
        subtitle: "Multiple Sclerosis",
        partnerName: "Nuvigen",
        logo: "/partners/nuvigen.jpg",
        description:
          "Well established long term therapy in Multiple Sclerosis segment.",
        longDescription:
          "Nuvigen offers established immunomodulatory therapy that reduces relapse rates and slows disability progression in relapsing-remitting MS.",
        gallery: [
          "/products/neurology/ms-1.jpg",
          "/products/neurology/ms-2.jpg",
        ],
        overview:
          "Nuvigen offers established immunomodulatory therapy for relapsing-remitting multiple sclerosis, helping reduce relapse rates and slow disease progression.",
        features: [
          "Long-term disease-modifying therapy",
          "Well-tolerated safety profile",
          "Convenient dosing regimen",
          "Proven efficacy in reducing relapses",
        ],
        applications: [
          "Relapsing-remitting multiple sclerosis (RRMS)",
          "Clinically isolated syndrome (CIS)",
          "Secondary progressive MS with relapses",
        ],
        benefits: [
          "Reduces frequency and severity of relapses",
          "Slows accumulation of disability",
          "Improves long-term patient outcomes",
          "Established safety record",
        ],
        specifications: [
          { label: "Therapy Type", value: "Disease-Modifying Immunomodulatory" },
          { label: "Indication", value: "Relapsing-Remitting Multiple Sclerosis" },
        ],
        clinicalNotes:
          "Decades of clinical use in MS management with robust post-marketing safety data.",
      },
      {
        subtitle: "Parkinson",
        partnerName: "Rusan Pharma",
        logo: "/partners/rusan.jpg",
        description:
          "Another breakthrough product from Rusan Pharm management of Pain in neurological condition.",
        longDescription:
          "Rusan Pharma's breakthrough formulation addresses neuropathic and central pain associated with Parkinson's disease.",
        gallery: [
          "/products/neurology/parkinson-1.jpg",
        ],
        overview:
          "Rusan Pharma's breakthrough formulation addresses neuropathic and central pain associated with Parkinson's disease and other neurological conditions.",
        features: [
          "Targeted neuropathic pain management",
          "Optimized pharmacokinetic profile",
          "Improved patient compliance",
          "Breakthrough formulation from Rusan Pharma",
        ],
        applications: [
          "Parkinson's disease-associated pain",
          "Neuropathic pain in neurological disorders",
          "Central pain syndromes",
        ],
        benefits: [
          "Effective pain relief in neurological conditions",
          "Improved quality of life",
          "Reduced dependency on opioids",
          "Well-tolerated in long-term use",
        ],
        specifications: [
          { label: "Therapy Category", value: "Neuropathic Pain Management" },
          { label: "Manufacturer", value: "Rusan Pharma" },
        ],
        clinicalNotes:
          "Rusan Pharma is a leader in pain management and de-addiction therapies with a strong R&D pipeline.",
      },
    ],
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    slug: "ophthalmology",
    image: "/products/ophthalmology/ophthalmology-main.jpg",
    heroImage: "/products/ophthalmology/ophthalmology-hero.jpg",
    tagline: "Premium Intraocular Lens Solutions",
    summary:
      "High-end IOL portfolio from global and Indian manufacturers for cataract and refractive surgery.",
    items: [
      {
        subtitle: "Ophthalmology (IOL's)",
        partnerName: "VSY Biotechnology",
        logo: "/partners/vsybio.jpg",
        description:
          "VSY Biotechnology: We are associated with VSY Biotechnology Pvt. Ltd. VSY is a Netherland based company. We deal in all type of lenses from VSY.",
        longDescription:
          "Through our partnership with VSY Biotechnology (Netherlands), we supply premium trifocal, EDOF, and toric intraocular lenses manufactured with hydrophobic and hydrophilic acrylic materials, providing optimal visual clarity across near, intermediate, and distance ranges.",
        gallery: [
          "/products/ophthalmology/iol-1.jpg",
          "/products/ophthalmology/iol-2.jpg",
        ],
        overview:
          "VSY Biotechnology, a Netherlands-based ophthalmic device company, offers a complete range of premium intraocular lenses for cataract and refractive surgery.",
        features: [
          "Monofocal, multifocal, and toric IOLs",
          "Trifocal and EDOF (Extended Depth of Focus) options",
          "Hydrophobic and hydrophilic acrylic materials",
          "Preloaded injector systems for safe implantation",
          "Blue-light filtering designs",
        ],
        applications: [
          "Cataract surgery",
          "Refractive lens exchange",
          "Astigmatism correction (toric IOLs)",
          "Presbyopia correction (multifocal/trifocal)",
        ],
        benefits: [
          "Excellent visual outcomes at all distances",
          "Reduced spectacle dependency",
          "Stable, predictable refractive results",
          "Advanced optic designs for contrast sensitivity",
        ],
        specifications: [
          { label: "IOL Types", value: "Mono, Multi, Toric, Trifocal, EDOF" },
          { label: "Material", value: "Hydrophobic/Hydrophilic Acrylic" },
          { label: "Injection", value: "Preloaded Systems" },
        ],
        clinicalNotes:
          "VSY Biotechnology products are CE-marked and exported to over 60 countries worldwide.",
      },
      {
        subtitle: "Adaptive Ocular Sciences",
        partnerName: "Adaptive Ocular Sciences",
        logo: "/partners/adaptive.jpg",
        description:
          "Adaptive Ocular Sciences is a manufacturer of high end Intraocular Lenses at its state-of-the-art manufacturing unit based in Gujarat. AOS has a technical collaboration with Ocular Technology Inc – USA.",
        longDescription:
          "Adaptive Ocular Sciences produces world-class intraocular lenses from Gujarat in technical collaboration with Ocular Technology Inc (USA), blending cutting-edge optical engineering with swift domestic fulfillment.",
        gallery: [
          "/products/ophthalmology/aos-1.jpg",
          "/products/ophthalmology/aos-2.jpg",
        ],
        overview:
          "Adaptive Ocular Sciences (AOS) manufactures high-end intraocular lenses in Gujarat, India, with technical collaboration from Ocular Technology Inc, USA.",
        features: [
          "State-of-the-art manufacturing facility in Gujarat",
          "Technical collaboration with Ocular Technology Inc – USA",
          "Advanced optic designs for premium outcomes",
          "Rigorous quality control and sterilization",
          "Wide diopter range availability",
        ],
        applications: [
          "Cataract surgery",
          "Premium IOL implantation",
          "Astigmatism management",
          "Presbyopia correction",
        ],
        benefits: [
          "High-quality, affordable IOL options",
          "Made in India with US technology collaboration",
          "Consistent optical performance",
          "Reliable supply chain",
        ],
        specifications: [
          { label: "Manufacturing", value: "Gujarat, India" },
          { label: "Collaboration", value: "Ocular Technology Inc – USA" },
          { label: "IOL Range", value: "High-end Premium Lenses" },
        ],
        clinicalNotes:
          "AOS combines Indian manufacturing excellence with US-based R&D collaboration.",
      },
    ],
  },
  {
    id: "dental",
    name: "Dental Segment",
    slug: "dental",
    image: "/products/dental/dental-main.jpg",
    heroImage: "/products/dental/dental-hero.jpg",
    tagline: "Complete Dental Implant & Restoration Solutions",
    summary:
      "From conventional to advanced zygomatic implants, plus world-class dental products from Dentsply Sirona.",
    items: [
      {
        subtitle: "Bioline Dental Implant",
        partnerName: "Bioline Dental",
        logo: "/partners/bioline.jpg",
        description:
          "At Bioline Dental Implants, we provide dental implant solution from conventional , TTPHIL, Zygoma , one piece implant , conical implant , All this results in the art of simplicity solutions that simplify dental implantology procedures and deliver proven clinical long-term success.",
        longDescription:
          "Bioline Dental Implants delivers high-precision implant systems including conventional, TTPHIL, and advanced zygomatic implants for severe alveolar resorption, simplifying clinical workflows while delivering enduring osseointegration.",
        gallery: [
          "/products/dental/bioline-1.jpg",
          "/products/dental/bioline-2.jpg",
        ],
        overview:
          "Bioline Dental Implants offers a complete range of implant solutions — from conventional to advanced — designed to simplify implantology and ensure long-term clinical success.",
        features: [
          "Conventional & TTPHIL implants",
          "Zygoma implants for severe bone loss",
          "One-piece & conical implant designs",
          "Simplified surgical protocols",
          "Proven long-term clinical success",
        ],
        applications: [
          "Single tooth replacement",
          "Multiple tooth replacement",
          "Full-arch rehabilitation",
          "Zygomatic implants for atrophic maxilla",
          "Immediate loading protocols",
        ],
        benefits: [
          "Simplified surgical procedures",
          "Reduced treatment time",
          "High success rates",
          "Cost-effective solutions",
        ],
        specifications: [
          { label: "Implant Types", value: "Conventional, TTPHIL, Zygoma, One-piece, Conical" },
          { label: "Surface", value: "Advanced Bio-active Surface" },
          { label: "Connection", value: "Multiple Platform Options" },
        ],
        clinicalNotes:
          "Bioline is known for the 'art of simplicity' in implantology with proven long-term success.",
      },
      {
        subtitle: "Densply Sirona / MIS India",
        partnerName: "Dentsply Sirona",
        logo: "/partners/dentsply.jpg",
        description:
          "Dentsply Sirona is the world’s largest manufacturer of professional dental products and technologies.",
        longDescription:
          "As the world's foremost dental solutions innovator, Dentsply Sirona delivers comprehensive implantology and restorative ecosystems that integrate digital planning, high-strength restorative ceramics, and ergonomic surgical tools.",
        gallery: [
          "/products/dental/dentsply-1.jpg",
          "/products/dental/dentsply-2.jpg",
        ],
        overview:
          "Dentsply Sirona, the world's largest dental products manufacturer, offers comprehensive solutions spanning implants, endodontics, restorative, and digital dentistry.",
        features: [
          "World's largest dental products manufacturer",
          "Complete implant systems (MIS Implants)",
          "Endodontic & restorative materials",
          "Digital dentistry solutions",
          "Professional dental technologies",
        ],
        applications: [
          "Dental implantology",
          "Endodontic treatment",
          "Restorative dentistry",
          "Prosthodontics",
          "Digital dental workflows",
        ],
        benefits: [
          "Trusted global brand",
          "Comprehensive product portfolio",
          "Innovation-driven technology",
          "Extensive clinical support",
        ],
        specifications: [
          { label: "Implants", value: "MIS Implants (C1, SEVEN, etc.)" },
          { label: "Endodontics", value: "ProTaper, AH Plus" },
          { label: "Digital", value: "CEREC, Primeprint" },
        ],
        clinicalNotes:
          "Dentsply Sirona is the world's largest manufacturer of professional dental products and technologies.",
      },
    ],
  },
  {
    id: "ent",
    name: "ENT",
    slug: "ent",
    image: "/products/ent/ent-main.jpg",
    heroImage: "/products/ent/ent-hero.jpg",
    tagline: "Advanced Coblation Technology for ENT",
    summary:
      "Patented COBLATION™ cold ablation technology for precise ENT tissue removal.",
    items: [
      {
        subtitle: "ENT Coblation",
        partnerName: "Smith & Nephew Healthcare Pvt Ltd",
        logo: "/partners/smithnephew-img.jpg",
        description:
          "We are dealing with coblation machine with is based on the patent technology for cold ablation of tissues for application in ENT.",
        longDescription:
          "Smith+Nephew's COBLATION™ low-temperature plasma technology operates between 40°C and 70°C, offering pediatric and adult ENT surgeons exceptionally precise ablation with minimized collateral thermal necrosis, less intraoperative bleeding, and faster patient recovery.",
        gallery: [
          "/products/ent/coblation-1.jpg",
          "/products/ent/coblation-2.jpg",
        ],
        overview:
          "Smith+Nephew's COBLATION™ technology uses low-temperature radiofrequency energy for precise, gentle tissue removal in ENT procedures.",
        features: [
          "Patented COBLATION™ cold ablation technology",
          "Low-temperature tissue removal (40–70°C)",
          "Minimal thermal damage to surrounding tissue",
          "Precise, controlled ablation",
          "Wide range of ENT wands and electrodes",
        ],
        applications: [
          "Tonsillectomy & adenoidectomy",
          "Turbinate reduction",
          "Laryngeal lesion removal",
          "Snoring & sleep apnea surgery",
          "Head & neck soft tissue procedures",
        ],
        benefits: [
          "Reduced post-operative pain",
          "Faster recovery and return to normal activity",
          "Minimal bleeding",
          "Preserved healthy tissue",
        ],
        specifications: [
          { label: "Technology", value: "COBLATION™ RF Plasma" },
          { label: "Operating Temp", value: "40–70°C" },
          { label: "Wand Range", value: "PROCISE™, COBLATOR™ II" },
        ],
        clinicalNotes:
          "COBLATION™ is a patented technology from Smith+Nephew with extensive ENT clinical evidence.",
      },
    ],
  },
  {
    id: "dvt",
    name: "DVT management",
    slug: "dvt",
    image: "/products/dvt/dvt-main.jpg",
    heroImage: "/products/dvt/dvt-hero.jpg",
    tagline: "Prevention of Deep Vein Thrombosis",
    summary:
      "Kendall SCD™ Smart Compression™ system for DVT prevention in surgical and immobilized patients.",
    items: [
      {
        subtitle: "DVT management",
        partnerName: "Cardinal Health",
        logo: "/partners/cardinalhealth.jpg",
        description:
          "Cardinal health company with mission to help prevent the preventable, the unthinkable, deep vein thrombosis, a blood clot let loose, pulmonary embolism, a life threatened. Not on our watch. Patients matter. That’s why we’ve created the Kendall SCD™ 700 Smart Compression™ system.",
        longDescription:
          "Cardinal Health's Kendall SCD™ 700 Smart Compression™ system delivers sequential, graduated pneumatic compression with Vascular Refill Detection, actively preventing fatal pulmonary embolisms and deep vein thrombosis across surgical suites and critical care units.",
        gallery: [
          "/products/dvt/scd-1.jpg",
          "/products/dvt/scd-2.jpg",
        ],
        overview:
          "The Kendall SCD™ 700 Smart Compression™ system from Cardinal Health is designed to prevent deep vein thrombosis (DVT) and pulmonary embolism (PE) in at-risk patients.",
        features: [
          "Kendall SCD™ 700 Smart Compression™ system",
          "Sequential compression therapy",
          "Smart Compression™ technology",
          "User-friendly interface and alarms",
          "Wide range of sleeve sizes",
        ],
        applications: [
          "Post-surgical DVT prophylaxis",
          "Immobilized patients",
          "Orthopedic surgery patients",
          "ICU and critical care",
          "High-risk medical patients",
        ],
        benefits: [
          "Clinically proven DVT prevention",
          "Reduces risk of pulmonary embolism",
          "Non-invasive and well-tolerated",
          "Improves patient outcomes",
        ],
        specifications: [
          { label: "System", value: "Kendall SCD™ 700" },
          { label: "Technology", value: "Smart Compression™" },
          { label: "Sleeves", value: "Knee, Thigh, Foot" },
        ],
        clinicalNotes:
          "Cardinal Health's mission: 'To help prevent the preventable — DVT, pulmonary embolism. Patients matter.'",
      },
    ],
  },
  {
    id: "hospital-supply",
    name: "Hospital Supply",
    slug: "hospital-supply",
    image: "/products/hospital-supply/hospital-supply-main.jpg",
    heroImage: "/products/hospital-supply/hospital-supply-hero.jpg",
    tagline: "Essential Hospital Consumables",
    summary:
      "Gloves, feeding pumps, and surgical drapes from Cardinal Health.",
    items: [
      {
        subtitle: "Hospital Supply",
        partnerName: "Cardinal Health",
        logo: "/partners/cardinalhealth.jpg",
        description: "Gloves, Food pump , Drapes.",
        longDescription:
          "We distribute Cardinal Health's essential hospital consumables—including premium surgical and examination gloves, Kangaroo™ enteral feeding pumps, and sterile surgical drapes—ensuring infection control and uninterrupted patient care.",
        gallery: [
          "/products/hospital-supply/supply-1.jpg",
          "/products/hospital-supply/supply-2.jpg",
        ],
        overview:
          "Cardinal Health provides essential hospital consumables including examination gloves, enteral feeding pumps, and sterile surgical drapes.",
        features: [
          "Examination & surgical gloves",
          "Enteral feeding pumps",
          "Sterile surgical drapes",
          "Infection control products",
          "Quality-assured consumables",
        ],
        applications: [
          "Surgical procedures",
          "Patient examination",
          "Enteral nutrition delivery",
          "Infection control",
          "General hospital use",
        ],
        benefits: [
          "Reliable supply chain",
          "Consistent quality",
          "Cost-effective",
          "Wide product range",
        ],
        specifications: [
          { label: "Gloves", value: "Latex, Nitrile, Vinyl" },
          { label: "Feeding Pumps", value: "Kangaroo™ Series" },
          { label: "Drapes", value: "Sterile, Single-use" },
        ],
        clinicalNotes:
          "Cardinal Health is a global leader in hospital supply and medical consumables.",
      },
    ],
  },
  {
    id: "onco",
    name: "Onco",
    slug: "onco",
    image: "/products/onco/onco-main.jpg",
    heroImage: "/products/onco/onco-hero.jpg",
    tagline: "Innovative Oncology Treatment Solutions",
    summary:
      "ChemoTech's IQwave™ – TSE (Tumour Specific Electroporation) for gentle, effective cancer treatment.",
    items: [
      {
        subtitle: "Oncology Solutions",
        partnerName: "Chemotech",
        logo: "/partners/chemotech.jpg",
        description:
          "ChemoTech recently launched the IQwave™ – TSE (Tumour Specific Electroporation) with gentle yet effective and flexible treatment capabilities.",
        longDescription:
          "ChemoTech's IQwave™ system introduces Tumour Specific Electroporation (TSE), a groundbreaking minimally invasive therapy designed to treat soft tissue and resistant solid tumors gently, maximizing therapeutic concentration while minimizing damage to healthy surrounding tissues.",
        gallery: [
          "/products/onco/iqwave-1.jpg",
          "/products/onco/iqwave-2.jpg",
        ],
        overview:
          "ChemoTech's IQwave™ – TSE (Tumour Specific Electroporation) is a novel oncology treatment platform offering gentle yet effective tumor ablation.",
        features: [
          "IQwave™ – TSE technology",
          "Tumour Specific Electroporation",
          "Gentle and effective treatment",
          "Flexible treatment capabilities",
          "Minimally invasive approach",
        ],
        applications: [
          "Solid tumor treatment",
          "Soft tissue tumors",
          "Palliative oncology",
          "Treatment-resistant tumors",
        ],
        benefits: [
          "Gentle treatment with minimal side effects",
          "Effective tumor control",
          "Flexible treatment protocols",
          "Improved patient quality of life",
        ],
        specifications: [
          { label: "Technology", value: "TSE (Tumour Specific Electroporation)" },
          { label: "Platform", value: "IQwave™" },
          { label: "Approach", value: "Minimally Invasive" },
        ],
        clinicalNotes:
          "ChemoTech is a Swedish oncology company focused on innovative cancer treatment technologies.",
      },
    ],
  },
];
