export type Ttechology = {
  icon: string;
  name: string;
};

enum ApplicationSide {
  Frontend = "frontend",
  Backend = "backend",
}

export type TProjects = {
  id: number;
  title: string;
  deploy: string;
  img: string;
  description: string;
  gitHub: string;
  technologies: Ttechology[];
  applicationSide: ApplicationSide;
};

export const projects: TProjects[] = [
  // {
  //   id: 1,
  //   title: "Amazon Scraper",
  //   deploy: "www.www.ww",
  //   img: "teste",
  //   description: "Projeto em que o usuario coloca um link da amazon Suecia, e os dados do produto são salvos e o preço é verificado todo o dia",
  //   gitHub: "www,www.www",
  //   technologies: [{ icon: "icone", name: "nodeJs" }],
  //   applicationSide: ApplicationSide.Backend,
  // },
  {
    id: 2,
    title: "Lista de Tarefas",
    deploy: "https://dkrausz.github.io/lista_de_tarefas/",
    img: "../../../public/projects_Imgs/taskManagers.jpg",
    description:
      "Projeto desenvolvido como parte do aprendizado na Kenzie Academy Brasil A aplicação é uma lista de tarefas interativa que permite adicionar, concluir e remover tarefas de forma simples e eficiente.",
    gitHub: "https://github.com/dkrausz/lista_de_tarefas",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 3,
    title: "Site institucional genérico",
    deploy: "https://dkrausz.github.io/site_institucional_generico/",
    img: "../../../public/projects_Imgs/siteInstitucional.jpg",
    description:
      "Este projeto foi desenvolvido como parte do curso da Kenzie Academy . O objetivo principal é criar um site institucional responsivo baseado em um modelo de design fornecido no Figma, focando inicialmente na versão desktop e posteriormente adaptando para diferentes resoluções de tela.",
    gitHub: "https://github.com/dkrausz/site_institucional_generico",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 4,
    title: "Control Finance",
    deploy: "https://dkrausz.github.io/control-finance/",
    img: "../../../public/projects_Imgs/controlFinance.jpg",
    description:
      "Este projeto foi desenvolvido como parte do curso da Kenzie Academy. O objetivo é criar uma aplicação web de controle financeiro que permite ao usuário cadastrar valores, classificá-los como entradas ou saídas, visualizar totais e aplicar filtros por tipo de transação.",
    gitHub: "https://github.com/dkrausz/control-finance",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 5,
    title: "Open Music",
    deploy: "https://dkrausz.github.io/open-music/",
    img: "../../../public/projects_Imgs/openMusic.jpg",
    description:
      "Este projeto foi desenvolvido como parte do curso da Kenzie Academy. O objetivo principal é refatorar uma página de álbuns musicais, incorporando novas funcionalidades e melhorias visuais com foco em boas práticas modernas de JavaScript.",
    gitHub: "https://github.com/dkrausz/open-music",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 6,
    title: "GitHub User Search",
    deploy: "https://dkrausz.github.io/git-search/",
    img: "../../../public/projects_Imgs/gitSearch.jpg",
    description:
      "Este projeto foi desenvolvido como parte do curso da Kenzie Academy. O objetivo é consumir a GitHub API para buscar por usuários da plataforma e exibir seus repositórios públicos. A aplicação também implementa navegação entre páginas para lidar com diferentes estados da busca (usuário encontrado ou não encontrado).",
    gitHub: "https://github.com/dkrausz/git-search",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 7,
    title: "Portfólio em React",
    deploy: "https://m3-s1-entrega-portfolio-template-dkrausz-edwrr4jgj.vercel.app/",
    img: "../../../public/projects_Imgs/portifolioKenzie.jpg",
    description:
      "Este projeto foi desenvolvido como parte da formação na Kenzie Academy e tem como objetivo a construção de um portfólio utilizando React. A aplicação apresenta tecnologias e projetos renderizados dinamicamente com base em dados fornecidos, além de uma estrutura de componentes clara e organizada.",
    gitHub: "https://github.com/dkrausz/portifolio-kenzie",
    technologies: [
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
      { icon: "../../../public/icons/react.svg", name: "ReactJs" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 8,
    title: "Menu de Hamburgueria e carrinho de compras",
    deploy: "https://react-entrega-s3-template-hamburgueria-dkrausz-75rjpl8fy.vercel.app/",
    img: "../../../public/projects_Imgs/hamburgueriaKenzie.jpg",
    description:
      "Este projeto foi desenvolvido como parte do curso da Kenzie Academy. O objetivo é implementar funcionalidades e estilização em um projeto React existente, simulando o funcionamento de um e-commerce com integração à API de produtos e gerenciamento de carrinho de compras.",
    gitHub: "https://github.com/dkrausz/hamburgueria-kenzie",
    technologies: [
      { icon: "../../../public/icons/sass.svg", name: "SASS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
      { icon: "../../../public/icons/react.svg", name: "ReactJs" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 9,
    title: "Kenzie Hub - Cadastro e Login",
    deploy: "https://react-entrega-kenzie-hub-dkrausz-lg0cxduhv.vercel.app/",
    img: "../../../public/projects_Imgs/kenzieHub.jpg",
    description:
      "Este projeto foi desenvolvido como parte do curso da Kenzie Academy com o objetivo de consolidar os conhecimentos de formulários, rotas e integração com APIs em aplicações React.",
    gitHub: "https://github.com/dkrausz/hub-kenzie",
    technologies: [
      { icon: "../../../public/icons/sass.svg", name: "SASS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
      { icon: "../../../public/icons/react.svg", name: "ReactJs" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 10,
    title: "CRUD de Produtos",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/CRUD.jpg",
    description:
      "Projeto de um CRUD de produtos utilizando TypeScript com foco em Programação Orientada a Objetos (POO) e Desenvolvimento Orientado a Testes (TDD). O objetivo é implementar funcionalidades de criação, leitura, atualização e exclusão de produtos, atendendo aos testes automatizados previamente definidos.",
    gitHub: "https://github.com/dkrausz/Entrega-1---CRUD-de-produto",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Backend,
  },
  {
    id: 11,
    title: "API de Livros",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/API_livros.jpg",
    description:
      "API desenvolvida com a metodologia TDD (Test Driven Development) para gerenciar uma coleção de livros. Inclui operações de CRUD, middlewares personalizados e arquitetura organizada em controllers e services.",
    gitHub: "https://github.com/dkrausz/Entrega-2---API-de-livros",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Backend,
  },
  {
    id: 12,
    title: "API de livros com validação de dados",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/API_livros_validation.jpg",
    description:
      "Projeto desenvolvido com foco em praticar os conceitos de Test Driven Development (TDD), validação de dados com Zod, e middleware personalizados, com o objetivo de gerenciar uma coleção de livros através de uma API RESTful. Esta é a continuação da API de livros desenvolvida anteriormente.",
    gitHub: "https://github.com/dkrausz/Entrega-3---API-de-livros-com-validacao-de-dados",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Backend,
  },
  {
    id: 13,
    title: "API de cadastro de tarefas",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/task.jpg",
    description:
      "Esta API RESTful foi desenvolvida para gerenciar tarefas e categorias com autenticação de usuários. Utiliza validação de dados com Zod, autenticação via JSON Web Token (JWT) e banco de dados relacional com Prisma ORM.",
    gitHub: "https://github.com/dkrausz/Autentica-o-para-API-de-Controle-de-Tarefas",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Backend,
  },
  {
    id: 14,
    title: "API de Catálogo de Carros",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/cars.jpg",
    description:
      "Projeto de uma API RESTful para gerenciamento de um catálogo de carros, desenvolvida com TypeScript, Express e Prisma. A API permite criar, listar, atualizar, excluir e visualizar detalhes de veículos, com validação de dados usando Zod e cobertura completa de testes automatizados.",
    gitHub: "https://github.com/dkrausz/API-de-cat-logo-de-carros",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Backend,
  },
  {
    id: 15,
    title: "Barbearia Landing Page",
    deploy: "https://dkrausz.github.io/barbearia-landing-page/",
    img: "../../../public/projects_Imgs/barbearia.jpg",
    description: "Uma landing page simples e responsiva para uma barbearia, desenvolvida com HTML, CSS e JavaScript.",
    gitHub: "https://github.com/dkrausz/barbearia-landing-page",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/js.svg", name: "JS (ES6)" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 16,
    title: "Loja de Roupas frontEnd",
    deploy: "https://loja-roupas-eta.vercel.app/",
    img: "../../../public/projects_Imgs/store.jpg",
    description:
      "Uma aplicação frontend para uma loja de roupas, desenvolvida com React, TypeScript e Vite, utilizando Tailwind CSS para estilização. Este projeto busca fornecer uma interface moderna para usuários navegarem e comprarem produtos de vestuário.",
    gitHub: "https://github.com/dkrausz/loja-roupa-front",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/tailwind.svg", name: "TailWind" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
      { icon: "../../../public/icons/react.svg", name: "RactJs" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 17,
    title: "Loja de Roupas backEnd",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/storeBack.png",
    description:
      "Uma aplicação backEnd para uma loja de roupas, desenvolvida com nodeJs, TypeScript , funções de CRUD para clientes, funcionarios, produtos, ordens, regras de segurança diferentes para cada rota, etc",
    gitHub: "https://github.com/dkrausz/loja-roupas",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Backend,
  },
  {
    id: 18,
    title: "Meu portfólio",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/portfoil.jpg",
    description: "Meu portifolio, com tema claro e escuro, onde apresento meus projetos",
    gitHub: "https://github.com/dkrausz/loja-roupas",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
      { icon: "../../../public/icons/react.svg", name: "RactJs" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 19,
    title: "SAAS Barbearia (em construção) FrontEnd",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/barbeariaSAAS.jpg",
    description:
      "Uma aplicação frontEnd que consome a API do backEnd, permite realizar cadastro de clientes, agendamentos, envio de confirmação automático, dentre outras funções.",
    gitHub: "https://github.com/dkrausz/barberShopSystemFrontEnd",
    technologies: [
      { icon: "../../../public/icons/html5.svg", name: "HTML5" },
      { icon: "../../../public/icons/css3.svg", name: "CSS" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
      { icon: "../../../public/icons/react.svg", name: "RactJs" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
  {
    id: 20,
    title: "SAAS Barbearia (em construção) BackEnd",
    deploy: "Não tem",
    img: "../../../public/projects_Imgs/barbeariaSAASBack.jpg",
    description: "Aplicação BackEnd q, permite realizar cadastro de clientes, agendamentos, envio de confirmação automático, dentre outras funções.",
    gitHub: "xxxxxxxxx",
    technologies: [
      { icon: "../../../public/icons/node.svg", name: "NodeJs" },
      { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    ],
    applicationSide: ApplicationSide.Frontend,
  },
];
