import Image from 'next/image';
import { useState } from 'react';
import { ScriptProps } from 'next/script';
import { Family } from '@/types/Family';
import { config } from '@/utils/config';

interface FamilyCardProps extends ScriptProps {
  family: Family;
}

export const FamilyCard = ({ family }: FamilyCardProps) => {
  const [error, setError] = useState(false);
  const imageSrc = config.baseUrl.images + `/${family?.id}.jpg`;

  return (
    <article className="relative w-56 h-72 md:w-48 md:h-64 border border-blocks-gray rounded-xl">
      <Image
        width={180}
        height={180}
        priority={true}
        src={error ? '/no-image.jpg' : imageSrc}
        alt="Family image"
        className="m-auto w-auto h-auto p-2"
        onError={() => setError(true)}
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
};
