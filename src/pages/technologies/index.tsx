import { Tech } from "../../components/tech";
import styles from "./technologies.module.css";

const technologies = {
  languages: [
    { icon: "../../../public/icons/html5.svg", name: "HTML5" },
    { icon: "../../../public/icons/css3.svg", name: "CSS3" },
    { icon: "../../../public/icons/js.svg", name: "JavaScript" },
    { icon: "../../../public/icons/ts.svg", name: "TypeScript" },
    { icon: "../../../public/icons/sql.svg", name: "SQL" },
  ],

  libraries: [
    { icon: "../../../public/icons/react.svg", name: "React.js" },
    { icon: "../../../public/icons/express.svg", name: "Express.js" },
    { icon: "../../../public/icons/prisma.svg", name: "Prisma ORM" },
    { icon: "../../../public/icons/jwt.svg", name: "JWT" },
    { icon: "../../../public/icons/zod.svg", name: "Zod" },
    { icon: "../../../public/icons/axios.svg", name: "Axios" },

    { icon: "../../../public/icons/tailwind.svg", name: "Tailwind CSS" },
  ],

  tools: [
    { icon: "../../../public/icons/git.svg", name: "Git" },
    { icon: "../../../public/icons/github.svg", name: "GitHub" },
    { icon: "../../../public/icons/npm.svg", name: "NPM Scripts" },
    { icon: "../../../public/icons/vite.svg", name: "Vite" },
    { icon: "../../../public/icons/eslint.svg", name: "ESLint" },
    { icon: "../../../public/icons/prettier.svg", name: "Prettier" },
    { icon: "../../../public/icons/faker.svg", name: "Faker.js" },
    { icon: "../../../public/icons/insomnia.svg", name: "Insomnia" },
    { icon: "../../../public/icons/ts-node.svg", name: "ts-node-dev" },
  ],
};

export function Technologies() {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.title}>Tecnologias</h1>

      <div className={styles.tech__container}>
        <h2>Languages</h2>
        <ul className={styles.techList}>
          {technologies.languages.map((tech) => {
            return <Tech tech={tech} width="9rem" />;
          })}
        </ul>
      </div>

      <div className={styles.tech__container}>
        <h2>Bibliotecas</h2>
        <ul className={styles.techList}>
          {technologies.libraries.map((tech) => {
            return <Tech tech={tech} width="9rem" />;
          })}
        </ul>
      </div>
      <div className={styles.tech__container}>
        <h2>Ferramentas</h2>
        <ul className={styles.techList}>
          {technologies.tools.map((tech) => {
            return <Tech tech={tech} width="9rem" />;
          })}
        </ul>
      </div>
    </div>
  );
}
