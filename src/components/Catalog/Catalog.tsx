'use client';
import { Loading } from '@/components/Loading';
import { useFamilies } from '@/hooks/useFamilies';
import { FamilyCard } from '@/components/Catalog/FamilyCard';

export const Catalog = () => {
  const { ref, families, isLoading } = useFamilies();

  return (
    <section className="px-16 lg:px-48 m-auto py-8">
      <h3 className="text-blocks-black text-2xl font-medium p-2">Resultados</h3>

      <main className="flex flex-wrap justify-center gap-4 pb-16" ref={ref}>
        {families.map((family) => (
          <FamilyCard key={family.id} family={family} />
        ))}
      </main>
      {isLoading && <Loading />}
    </section>
  );
};
