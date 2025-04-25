import { IoHome } from "react-icons/io5";
// import { FcAbout } from "react-icons/fc";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { CgSmartphoneChip } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { Switch } from "radix-ui";
import styles from "./sideMenu.module.css";
import { useContext, useEffect, useState } from "react";
import AmericanFlag from "../../assets/united-states-flag-icon.svg";
import BrazilianFlag from "../../assets/brazil-flag-icon.svg";
import { portifolioContext } from "../../providers/portifolioContext";
import { RiInfoCardLine } from "react-icons/ri";
import { Language } from "../../translations";

export function SideMenu() {
  const { darkMode, changeDarkMode, changeLanguage, lang, text } = useContext(portifolioContext);

  const [isEnglish, setIsEnglish] = useState(false);

  const changeTOEnglish = (value: boolean) => {
    setIsEnglish(value);
    changeLanguage(value);
  };

  useEffect(() => {
    if (lang === Language.EN) {
      console.log("lang", lang === Language.EN);

      changeTOEnglish(true);
    } else {
      console.log("mudar para pt");

      changeTOEnglish(false);
    }
  }, []);

  return (
    <aside>
      <nav>
        <ul>
          <li className={styles.navItem}>
            <IoHome></IoHome>Home
          </li>
          <li className={styles.navItem}>
            <RiInfoCardLine></RiInfoCardLine>
            {text.about}
          </li>
          <li className={styles.navItem}>
            <CgSmartphoneChip></CgSmartphoneChip>
            {text.technologies}
          </li>
          <li className={styles.navItem}>
            <GrProjects></GrProjects>
            {text.projects}
          </li>

          <li className={styles.language__container}>
            <img src={BrazilianFlag} alt="Brandeira Brasileira" className={styles.flag} />

            <Switch.Root className={styles.SwitchRoot} checked={isEnglish} onCheckedChange={changeTOEnglish}>
              <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
            <img src={AmericanFlag} alt="Bandeira Americana" className={styles.flag} />
          </li>

          <li className={styles.language__container}>
            <MdOutlineLightMode size={40} className={styles.flag} />
            <Switch.Root className={styles.SwitchRoot} checked={darkMode} onCheckedChange={changeDarkMode}>
              <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
            <MdOutlineNightlight size={40} className={styles.flag} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
