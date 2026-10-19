import React from "react";
import Orthopedics from "./Orthopedics";
import Neurology from "./Neurology";
import Ophthalmology from "./Ophthalmology";
import Dental from "./Dental";
import Ent from "./Ent";
import Dvt from "./Dvt";
import HospitalSupply from "./HospitalSupply";
import Oncology from "./Oncology";

export {
  Orthopedics,
  Neurology,
  Ophthalmology,
  Dental,
  Ent,
  Dvt,
  HospitalSupply,
  Oncology,
};

export interface ProductConfig {
  name: string;
  summary: string;
  Component: React.ComponentType;
}

export const PRODUCT_COMPONENTS: Record<string, ProductConfig> = {
  orthopedics: {
    name: "Orthopedics",
    summary: "Advanced Arthroscopy & Joint Replacement Solutions by Smith & Nephew.",
    Component: Orthopedics,
  },
  neurology: {
    name: "Neurology",
    summary: "Neuromodulation & Neurotherapy Solutions featuring LivaNova VNS Therapy, Nuvigen & Rusan Pharma.",
    Component: Neurology,
  },
  ophthalmology: {
    name: "Ophthalmology",
    summary: "Premium Intraocular Lens Solutions from VSY Biotechnology and Adaptive Ocular Sciences.",
    Component: Ophthalmology,
  },
  dental: {
    name: "Dental Segment",
    summary: "Complete Dental Implant & Restoration Solutions with Bioline Dental Implants and Dentsply Sirona.",
    Component: Dental,
  },
  ent: {
    name: "ENT Coblation Technology",
    summary: "Advanced Coblation Systems for ENT Surgical Procedures by Smith & Nephew.",
    Component: Ent,
  },
  dvt: {
    name: "DVT Management & Prevention",
    summary: "Advanced DVT Prevention & Management Solutions featuring Intermittent Pneumatic Compression (IPC) systems.",
    Component: Dvt,
  },
  "hospital-supply": {
    name: "Hospital Supply",
    summary: "Essential Hospital Consumables including gloves, enteral feeding pumps, and surgical drapes from Cardinal Health.",
    Component: HospitalSupply,
  },
  onco: {
    name: "Oncology Solutions",
    summary: "Tumour Specific Electroporation (TSE) IQwave™ cancer treatment platform by Scandinavian ChemoTech AB.",
    Component: Oncology,
  },
};

export const productSlugs = Object.keys(PRODUCT_COMPONENTS);
