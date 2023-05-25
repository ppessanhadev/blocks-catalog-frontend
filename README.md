# Blocks catalog | Desafio frontend
Essa aplicação é voltada para um desafio do qual seu objetivo é criar uma SPA contendo catálogo de familias.
Eu tomei a liberdade de fazer um deploy da aplicação pela [Vercel](https://www.vercel.com) e ela pode ser acessada por [esse link](https://blocks-catalog-frontend-ppessanhadev.vercel.app).

### Overview
Durante o desenvolvimento optei por utilizar como biblioteca principal o [Next 13](https://nextjs.org), me consisti em sua documentação para definir e configurar o projeto de forma concisa, e os motivos em utiliza-lo foram para mais versatilidade, ganhos de renderização com ssr (server side rendering), facilitação com roteamento, maior performance entre outras vantagens.

A aplicação em sí se comunica com uma API fornecida fornecida no pela repositório de referencia a esse teste, e pode ser [encontrada aqui](https://github.com/blocksrvt/frontend-test).


**Bibliotecas**

Escolhi por utilizar algumas bibliotecas para maior facilidade de implementações, elas foram:
- [axios](https://axios-http.com/ptbr/) por simplificar e tornar mais simples algumas configurações como tempo limite e a implementação de parâmetros sem a necessidade de colocar diretamente a url.
- [react-easy-infinite-scroll](https://www.npmjs.com/package/react-easy-infinite-scroll-hook) para implementar o carregamento e requisições conforme o usuário desce a página
- [tailwind](https://tailwindcss.com) para estilização geral de toda a aplicação e simplicidade em aplicar responsividade ao projeto.
- [prettier](https://prettier.io/) e [eslint](https://eslint.org/) para consistência e padronização de código

**Páginas**

Como está aplicação é uma SPA, então ela possuí apenas a página inicial, sendo ela:

| Página | Descrição                                       |
|--------|-------------------------------------------------|
| /      | Página voltada listagem de familias disponiveis |

### Como rodar o projeto
A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar localmente:

**Rodando localmente com pnpm**

O projeto em si foi desenvolvido utilizado o gerenciador de pacote [pnpm](https://pnpm.io), para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `cp .env.example .env`
2. `pnpm install`
2. `pnpm dev`

**OBS**: para rodar a aplicação é necessário que a versão do node seja maior ou igual a v18
>> A aplicação estará rodando em: http://localhost:3000
