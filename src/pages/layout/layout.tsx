import { Header } from "../../components/header";
import { SideMenu } from "../../components/sideMenu";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useContext } from "react";
import { portifolioContext } from "../../providers/portifolioContext";
import { AnimatePresence, motion } from "motion/react";

export const Layout = () => {
  const isMobile = useIsMobile(425);
  const { OpenMenu } = useContext(portifolioContext);

  return (
    <div className={styles.main__container}>
      <AnimatePresence>
        {OpenMenu && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              backgroundColor: " var(--color-background-primary)",
            }}
          >
            <SideMenu />
          </motion.div>
        )}
      </AnimatePresence>
      <Header isMobile={isMobile} />
      <main>
        {isMobile ? null : <SideMenu />}

        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
