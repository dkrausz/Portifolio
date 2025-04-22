import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatar from "../../assets/avatar.jpg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header>
      <img src={avatar} alt="" className={styles.avatar} />
      <div>
        <a href="">
          <FaLinkedin size={24} />
        </a>
        <a href="">
          <FaGithub size={24} />
        </a>
        <a href="">
          <MdEmail size={24} />
        </a>
      </div>
    </header>
  );
}
