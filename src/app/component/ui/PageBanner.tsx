import Container from "./Container";

export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="bg-brand-900 py-12 text-white">
      <Container>
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      </Container>
    </div>
  );
}
