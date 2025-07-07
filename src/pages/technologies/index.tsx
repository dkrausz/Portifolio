import { useContext } from "react";
import { Tech } from "../../components/tech";
import styles from "./technologies.module.css";
import { portifolioContext } from "../../providers/portifolioContext";

const technologies = {
  languages: [
    { icon: "/icons/html5.svg", name: "HTML5" },
    { icon: "/icons/css3.svg", name: "CSS3" },
    { icon: "/icons/js.svg", name: "JavaScript" },
    { icon: "/icons/ts.svg", name: "TypeScript" },
    { icon: "/icons/sql.svg", name: "SQL" },
  ],

  libraries: [
    { icon: "/icons/react.svg", name: "React.js" },
    { icon: "/icons/express.svg", name: "Express.js" },
    { icon: "/icons/prisma.svg", name: "Prisma ORM" },
    { icon: "/icons/jwt.svg", name: "JWT" },
    { icon: "/icons/zod.svg", name: "Zod" },
    { icon: "/icons/axios.svg", name: "Axios" },

    { icon: "/icons/tailwind.svg", name: "Tailwind CSS" },
  ],

  tools: [
    { icon: "/icons/git.svg", name: "Git" },
    { icon: "/icons/github.svg", name: "GitHub" },
    { icon: "/icons/npm.svg", name: "NPM Scripts" },
    { icon: "/icons/vite.svg", name: "Vite" },
    { icon: "/icons/eslint.svg", name: "ESLint" },
    { icon: "/icons/prettier.svg", name: "Prettier" },
    { icon: "/icons/faker.svg", name: "Faker.js" },
    { icon: "/icons/insomnia.svg", name: "Insomnia" },
    { icon: "/icons/ts-node.svg", name: "ts-node-dev" },
  ],
};

export function Technologies() {
  const { text } = useContext(portifolioContext);
  return (
    <div className={styles.main__container}>
      <h1 className={styles.title}>Tecnologias</h1>

      <div className={styles.tech__container}>
        <h2>{text.languages}</h2>
        <ul className={styles.techList}>
          {technologies.languages.map((tech, index) => {
            return <Tech tech={tech} width="9rem" key={index} />;
          })}
        </ul>
      </div>

      <div className={styles.tech__container}>
        <h2>{text.libraries}</h2>
        <ul className={styles.techList}>
          {technologies.libraries.map((tech, index) => {
            return <Tech tech={tech} width="9rem" key={index} />;
          })}
        </ul>
      </div>
      <div className={styles.tech__container}>
        <h2>{text.tools}</h2>
        <ul className={styles.techList}>
          {technologies.tools.map((tech, index) => {
            return <Tech tech={tech} width="9rem" key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}
