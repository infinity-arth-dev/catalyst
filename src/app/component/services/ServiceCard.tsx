import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Matching icons from reference website:
  const icons = [
    // 1. Innovative Solutions (lightbulb/brain)
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.439v-2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v2.25m4.5 0h-4.5m10.5-8.25a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    ),
    // 2. Network and Logistics (delivery truck)
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.808H16.5M3.75 14.25h16.5m-16.5 0V6a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v8.25" />
      </svg>
    ),
    // 3. Patient Care Program (doctor/health specialist)
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    // 4. Equipment Testing and Repair (flask / maintenance)
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m9.25-11.396v5.714a2.25 2.25 0 00.659 1.591L19 14.5M3 19.5h18M6.75 19.5a2.25 2.25 0 002.25-2.25v-2.25m6 4.5a2.25 2.25 0 01-2.25-2.25v-2.25" />
      </svg>
    ),
  ];

  return (
    <div className="group relative flex flex-col items-center text-center rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300">
      {/* Top accent bar visible on hover */}
      <div className="absolute top-0 inset-x-8 h-1 rounded-b-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
        {icons[index % icons.length]}
      </div>
      
      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-accent-600 min-h-[3rem] flex items-center justify-center group-hover:text-accent-500 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Read More button/link */}
      <Link
        href="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors group/link"
      >
        <span>Read More</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
