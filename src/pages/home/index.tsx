import { useContext } from "react";
import { portifolioContext } from "../../providers/portifolioContext";
import styles from "./home.module.css";

export function Home() {
  const { text } = useContext(portifolioContext);
  return (
    <div className={styles.home__container}>
      <h1 className={styles.title}>Home</h1>
      <h2>Danilo Krausz</h2>
      <p className={styles.text__container}>{text.homeText}</p>
    </div>
  );
}
