import { ScriptProps } from 'next/script';

export const Banner = ({ children }: ScriptProps) => (
  <div className="p-5 bg-blocks-banner text-center w-full">
    <p className="text-white">{children}</p>
  </div>
);
