import { useContext } from "react";
import { portifolioContext } from "../../providers/portifolioContext";
import styles from "./about.module.css";
import certificate from "../../../public/certificado.jpg";

export function About() {
  const { text } = useContext(portifolioContext);

  return (
    <div className={styles.about__container}>
      <h1 className={styles.title}>{text.about}</h1>
      <div className={styles.text__container}>
        {text.aboutMe.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <img src={certificate} alt="" />
    </div>
  );
}
