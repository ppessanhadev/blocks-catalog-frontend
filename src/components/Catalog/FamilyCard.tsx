import Image from 'next/image';
import { ScriptProps } from 'next/script';
import { Family } from '@/types/Family';

interface FamilyCardProps extends ScriptProps {
  family: Family;
}

export const FamilyCard = ({ family }: FamilyCardProps) => (
  <article className="relative w-56 h-72 md:w-48 md:h-64 border border-blocks-gray rounded-xl">
    <Image
      width={130}
      height={130}
      priority={true}
      src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${family?.id}.jpg`}
      alt="Family image"
      className="m-auto w-auto h-auto p-2"
    />
    <div className="flex justify-around absolute bottom-0 w-full rounded-b-xl border-t border-t-blocks-gray p-1">
      <p className="inline text-blocks-black text-xs font-semibold w-36 leading-3">{family?.details?.name}</p>

      <span className="bg-blocks-gray w-[2px] h-6 mx-2" />

      <button>
        <Image src="/arrow-up-right.svg" width={16} height={16} alt="Seta para direita" />
      </button>
    </div>
  </article>
);
