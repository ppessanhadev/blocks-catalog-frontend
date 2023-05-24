import { Banner } from '@/components/Banner';
import { Catalog } from '@/components/Catalog/Catalog';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';

export default function Home() {
  return (
    <>
      <Banner>
        Não limite sua criatividade, junte-se a familia Blocks por apenas <b>BRL 19,99</b>
      </Banner>

      <Header />

      <Section name="Catálogo" />

      <Catalog />
    </>
  );
}
