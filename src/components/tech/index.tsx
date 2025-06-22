import { Ttechology } from "../../database/projects";
import styles from "./tech.module.css";

interface techProps {
  tech: Ttechology;
  width?: string;
}

export function Tech({ tech, width }: techProps) {
  return (
    <li className={styles.tech__container} style={width ? { width } : undefined}>
      <strong>{tech.name}</strong>
      <img src={tech.icon} alt="" />
    </li>
  );
}
