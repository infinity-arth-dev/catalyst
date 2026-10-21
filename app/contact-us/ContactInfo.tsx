import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {/* Card 1: Address */}
      <div className="group flex items-start gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-brand-900/10 hover:border-brand-400 hover:-translate-y-1 transition-all duration-300">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-2xs">
          <MapPin className="h-6 w-6" />
        </div>
        <div className="text-xs sm:text-sm leading-relaxed text-slate-700">
          <h3 className="font-extrabold text-brand-700 mb-1.5 text-base group-hover:text-brand-600 transition-colors">
            Catalyst Biomedicals
          </h3>
          <p>Office No.1, &quot;Swastishree&quot;,</p>
          <p>Shree varshanand Soc. Hingne Khurd,</p>
          <p>Anand Nagar, Near Santosh Hall,</p>
          <p>Behind Jagtap Hospital, Sinhagad Road,</p>
          <p className="font-semibold text-brand-800">Pune 411 051. Maharashtra, India.</p>
        </div>
      </div>

      {/* Card 2: Email */}
      <div className="group flex items-center gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-brand-900/10 hover:border-brand-400 hover:-translate-y-1 transition-all duration-300">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-2xs">
          <Mail className="h-6 w-6" />
        </div>
        <div className="text-xs sm:text-sm text-slate-700 space-y-1.5">
          <p className="font-bold text-brand-700 text-sm">Official Email Inquiries</p>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@catalystbiomedicals.com&su=Inquiry%20-%20Catalyst%20Biomedicals"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 hover:underline font-semibold transition-colors"
            >
              <span>sales@catalystbiomedicals.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=catalystbiomedicals@gmail.com&su=Inquiry%20-%20Catalyst%20Biomedicals"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 hover:underline font-semibold transition-colors"
            >
              <span>catalystbiomedicals@gmail.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>

      {/* Card 3: Phone */}
      <div className="group flex items-center gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-accent-900/10 hover:border-accent-400 hover:-translate-y-1 transition-all duration-300">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 border border-accent-100 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300 shadow-2xs">
          <Phone className="h-6 w-6" />
        </div>
        <div className="text-xs sm:text-sm">
          <p className="font-bold text-slate-900 text-sm mb-1">Direct Telephone Support</p>
          <a
            href="tel:+912024353999"
            className="text-slate-800 hover:text-accent-600 font-extrabold text-base transition-colors"
          >
            +9120-24353999
          </a>
        </div>
      </div>
    </div>
  );
}
