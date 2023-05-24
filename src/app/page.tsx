import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';

export default function Home() {
  return (
    <main>
      <Banner>
        Não limite sua criatividade, junte-se a familia Blocks por apenas <b>BRL 19,99</b>
      </Banner>

      <Header />

      <Section name="Catálogo" />

      <div className="w-screen h-screen" />
    </main>
  );
}
