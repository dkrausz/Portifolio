import { IoHome } from "react-icons/io5";
// import { FcAbout } from "react-icons/fc";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { CgSmartphoneChip } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { RadioGroup, Switch } from "radix-ui";
import styles from "./sideMenu.module.css";
import { useContext, useEffect, useState } from "react";
import AmericanFlag from "../../assets/united-states-flag-icon.svg";
import BrazilianFlag from "../../assets/brazil-flag-icon.svg";
import { portifolioContext } from "../../providers/portifolioContext";
import { RiInfoCardLine } from "react-icons/ri";
import { Language } from "../../translations";
import { useNavigate } from "react-router-dom";

export function SideMenu() {
  const { darkMode, changeDarkMode, changeLanguage, lang, text } = useContext(portifolioContext);
  const [isEnglish, setIsEnglish] = useState(false);
  const navigate = useNavigate();

  const changeTOEnglish = (value: boolean) => {
    setIsEnglish(value);
    changeLanguage(value);
  };

  const handleMenu = (page: string) => {
    navigate(`/${page}`);
  };

  useEffect(() => {
    if (lang === Language.EN) {
      changeTOEnglish(true);
    } else {
      changeTOEnglish(false);
    }
  }, []);

  return (
    <aside>
      <nav>
        <RadioGroup.Root className={styles.nav__list} defaultValue="home" onValueChange={(value) => handleMenu(value)}>
          <RadioGroup.Item value="home" className={styles.navItem}>
            <IoHome />
            Home
          </RadioGroup.Item>
          <RadioGroup.Item value="about" className={styles.navItem}>
            <RiInfoCardLine />
            {text.about}
          </RadioGroup.Item>
          <RadioGroup.Item value="tech" className={styles.navItem}>
            <CgSmartphoneChip />
            {text.technologies}
          </RadioGroup.Item>
          <RadioGroup.Item value="projects" className={styles.navItem}>
            <GrProjects />
            {text.projects}
          </RadioGroup.Item>
        </RadioGroup.Root>

        <div className={styles.language__container}>
          <img src={BrazilianFlag} alt="Brandeira Brasileira" className={styles.flag} />

          <Switch.Root className={styles.SwitchRoot} checked={isEnglish} onCheckedChange={changeTOEnglish}>
            <Switch.Thumb className={styles.SwitchThumb} />
          </Switch.Root>
          <img src={AmericanFlag} alt="Bandeira Americana" className={styles.flag} />
        </div>

        <div className={styles.language__container}>
          <MdOutlineLightMode size={40} className={styles.flag} />
          <Switch.Root className={styles.SwitchRoot} checked={darkMode} onCheckedChange={changeDarkMode}>
            <Switch.Thumb className={styles.SwitchThumb} />
          </Switch.Root>
          <MdOutlineNightlight size={40} className={styles.flag} />
        </div>
        {/* </ul> */}
      </nav>
    </aside>
  );
}
