export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-6 text-2xl font-bold text-brand-900 sm:text-3xl">
      {title}
    </h2>
  );
}
