import Link from 'next/link';

export const Footer = () => (
  <footer className="absolute bottom-0 w-full mt-auto p-6 bg-blocks-footer">
    <ul className="flex flex-col text-center text-blocks-zinc md:flex-row justify-center gap-2 md:gap-8 m-auto">
      <li className="transition ease-in-out duration-1000 hover:text-blocks-hover">
        <Link href="https://www.blocksrvt.com/pt/sobre" className="visited:text-blocks-hover">
          Sobre
        </Link>
      </li>

      <li className="transition ease-in-out duration-1000 hover:text-blocks-hover ">
        <Link href="https://faq.blocksrvt.com/pt-BR/" className="visited:text-blocks-hover">
          FAQ
        </Link>
      </li>

      <li className="transition ease-in-out duration-1000 hover:text-blocks-hover">
        <Link href="https://www.blocksrvt.com/pt/termos-de-uso" className="visited:text-blocks-hover">
          Termos de uso
        </Link>
      </li>

      <li className="transition ease-in-out duration-1000 hover:text-blocks-hover">
        <Link href="https://www.blocksrvt.com/pt/politica-de-privacidade" className="visited:text-blocks-hover">
          Política de Privacidade
        </Link>
      </li>
    </ul>
  </footer>
);
