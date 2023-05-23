import Image from 'next/image';

export const Header = () => (
  <header className="w-full p-4 bg-white">
    <Image className="m-auto" src="/logo.png" alt="image" width={146} height={54} />
  </header>
);
