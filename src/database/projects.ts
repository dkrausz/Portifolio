type techology = {
  icon: string;
  name: string;
};

export type TProjects = {
  title: string;
  deploy: string;
  img: string;
  description: string;
  gitHub: string;
  technologies: techology[];
};

export const projects: TProjects[] = [
  {
    title: "Amazon Scraper",
    deploy: "www.www.ww",
    img: "teste",
    description: "Projeto em que o usuario coloca um link da amazon Suecia, e os dados do produto são salvos e o preço é verificado todo o dia",
    gitHub: "www,www.www",
    technologies: [{ icon: "icone", name: "nodeJs" }],
  },
];
