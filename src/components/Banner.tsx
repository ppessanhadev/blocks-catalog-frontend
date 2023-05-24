'use client';
import { ScriptProps } from 'next/script';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const Banner = ({ children }: ScriptProps) => {
  const scrollPos = useScrollPosition();

  return (
    <nav className={scrollPos <= 50 ? 'blocks-banner' : 'blocks-banner-opacity'}>
      <p className="text-white">{children}</p>
    </nav>
  );
};
