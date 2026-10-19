import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, idx) => (
        <ServiceCard key={s.title} service={s} index={idx} />
      ))}
    </div>
  );
}
