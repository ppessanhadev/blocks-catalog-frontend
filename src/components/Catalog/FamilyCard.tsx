import Image from 'next/image';

export const FamilyCard = () => (
  <article className="relative w-56 h-72 md:w-48 md:h-64 border border-blocks-gray rounded-xl">
    <div className="flex justify-around absolute bottom-0 w-full rounded-b-xl border-t border-t-blocks-gray p-2 ">
      <p className="inline text-blocks-black text-xs font-semibold w-36 leading-3">
        Lorem Ipsum is sLorem Ipsum is simply ....
      </p>

      <span className="bg-blocks-gray w-[2px] h-6 mx-2" />

      <button>
        <Image src="/arrow-up-right.svg" width={16} height={16} alt="Seta para direita" />
      </button>
    </div>
  </article>
);
