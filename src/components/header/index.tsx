import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import avatar from "../../assets/avatar.jpg";
import styles from "./header.module.css";
import { useContext } from "react";
import { portifolioContext } from "../../providers/portifolioContext";
import { useLocation } from "react-router-dom";

interface headerProps {
  isMobile: boolean;
}

export function Header({ isMobile }: headerProps) {
  const { handleOpenMenu, handleDefaultPage } = useContext(portifolioContext);
  const locate = useLocation();

  const handleMenu = () => {
    handleDefaultPage(locate.pathname);
    handleOpenMenu(true);
  };

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
        {isMobile ? <GiHamburgerMenu size={60} className={styles.menu__button} onClick={() => handleMenu()} /> : null}
      </div>
    </header>
  );
}
