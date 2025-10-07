export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </div>
  );
}