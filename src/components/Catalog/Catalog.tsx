import { FamilyCard } from '@/components/Catalog/FamilyCard';

export const Catalog = () => {
  const arr = Array.from({ length: 24 }).map((_v, i) => ({ id: i }));

  return (
    <section className="px-16 lg:px-48 m-auto py-8">
      <h3 className="text-blocks-black text-2xl font-medium p-1">Resultados</h3>

      <main className="flex flex-wrap gap-4">
        {arr.map(({ id }) => (
          <FamilyCard key={id} />
        ))}
      </main>
    </section>
  );
};
