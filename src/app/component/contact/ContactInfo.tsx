import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {/* Card 1: Address */}
      <div className="group flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="text-xs sm:text-sm leading-relaxed text-slate-700">
          <h3 className="font-extrabold text-slate-900 mb-1.5 text-base">
            Catalyst Biomedicals
          </h3>
          <p>Office No.1, &quot;Swastishree&quot;,</p>
          <p>Shree varshanand Soc. Hingne Khurd,</p>
          <p>Anand Nagar, Near Santosh Hall,</p>
          <p>Behind Jagtap Hospital, Sinhagad Road,</p>
          <p>Pune 411 051. Maharashtra, India.</p>
        </div>
      </div>

      {/* Card 2: Email */}
      <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
          <Mail className="h-5 w-5" />
        </div>
        <div className="text-xs sm:text-sm text-slate-700 space-y-1">
          <p>
            <a
              href="mailto:sales@catalystbiomedicals.com"
              className="text-brand-600 hover:text-brand-700 hover:underline font-semibold block transition-colors"
            >
              sales@catalystbiomedicals.com
            </a>
          </p>
          <p>
            <a
              href="mailto:catalystbiomedicals@gmail.com"
              className="text-brand-600 hover:text-brand-700 hover:underline font-semibold block transition-colors"
            >
              catalystbiomedicals@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Card 3: Phone */}
      <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-accent-300 transition-all duration-300">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 border border-accent-100 group-hover:scale-105 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
          <Phone className="h-5 w-5" />
        </div>
        <div className="text-xs sm:text-sm">
          <a
            href="tel:+912024352999"
            className="text-slate-800 hover:text-accent-600 font-bold transition-colors"
          >
            +9120-24352999
          </a>
        </div>
      </div>
    </div>
  );
}
