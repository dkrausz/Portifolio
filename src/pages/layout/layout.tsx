import { Header } from "../../components/header";
import { SideMenu } from "../../components/sideMenu";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.main__container}>
      <Header></Header>
      <main>
        <SideMenu></SideMenu>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
