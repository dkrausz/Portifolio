import { useContext } from "react";
import { portifolioContext } from "../../providers/portifolioContext";
import styles from "./about.module.css";
import certificate from "../../../public/certificado.jpg";

export function About() {
  const { text } = useContext(portifolioContext);

  return (
    <div className={styles.about__container}>
      <h1 className={styles.title}>{text.about}</h1>
      <p className={styles.text__container}>{text.aboutMe}</p>
      <img src={certificate} alt="" />
    </div>
  );
}
