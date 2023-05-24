import { ScriptProps } from 'next/script';

interface SectionProps extends ScriptProps {
  name: string;
}

export const Section = ({ name }: SectionProps) => (
  <>
    <hr className="blocks-gradient w-full h-[2px]" />

    <section className="w-full p-16 bg-blocks-section shadow-md">
      <h2 className="max-w-[1329px] m-auto text-3xl text-blocks-black font-bold">
        {name}
        <div className="w-[34px] h-1 bg-blue-300 rounded blocks-gradient" />
      </h2>
    </section>
  </>
);
