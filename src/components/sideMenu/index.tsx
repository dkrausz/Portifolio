import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgSmartphoneChip } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { Switch } from "radix-ui";
import styles from "./sideMenu.module.css";
import { useEffect, useState } from "react";

export function SideMenu() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    console.log(isEnglish);
  }, [isEnglish]);

  return (
    <aside>
      <nav>
        <ul>
          <li>
            <IoHome></IoHome>Home
          </li>
          <li>
            <FcAbout></FcAbout>Sobre
          </li>
          <li>
            <CgSmartphoneChip></CgSmartphoneChip>Tecnologias
          </li>
          <li>
            <GrProjects></GrProjects>Projetos
          </li>

          <li>
            <Switch.Root className={styles.SwitchRoot} checked={isEnglish} onCheckedChange={setIsEnglish}>
              <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
