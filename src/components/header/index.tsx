import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatar from "../../assets/avatar.jpg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header>
      <img src={avatar} alt="" className={styles.avatar} />
      <div>
        <a href="https://www.linkedin.com/in/danilo-krausz-a7a603113/" target="_blank">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/dkrausz" target="_blank">
          <FaGithub size={30} />
        </a>
        <a href="mailto:danilo.krausz@gmail.com" target="_blank">
          <MdEmail size={30} />
        </a>
      </div>
    </header>
  );
}
