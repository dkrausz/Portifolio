import { createContext, useEffect, useState } from "react";
import { Language, languages, TLanguage } from "../translations";

interface IPortifolioProps {
  children: React.ReactNode;
}

interface IPortifolioContext {
  darkMode: boolean;
  OpenMenu: boolean;
  defaultPage: string;
  lang: Language;
  text: TLanguage;
  changeDarkMode: (value: boolean) => void;
  changeLanguage: (value: boolean) => void;
  handleOpenMenu: (value: boolean) => void;
  handleDefaultPage: (page: string) => void;
}

export const portifolioContext = createContext({} as IPortifolioContext);

export const PortifolioContextProvider = ({ children }: IPortifolioProps) => {
  const [defaultPage, setDefautlPage] = useState("home");
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;
    return savedLang ?? getDefaultLanguage();
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [OpenMenu, setOpenMenu] = useState(false);

  const text = languages[lang];

  function getDefaultLanguage(): Language {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("pt")) return Language.PT;
    if (browserLang.startsWith("en")) return Language.EN;

    return Language.PT;
  }

  const changeDarkMode = (value: boolean): void => {
    setDarkMode(value);
  };

  const changeLanguage = (value: boolean): void => {
    if (value) {
      setLang(Language.EN);
    } else {
      setLang(Language.PT);
    }
  };

  const handleOpenMenu = (value: boolean) => {
    setOpenMenu(value);
  };

  const handleDefaultPage = (page: string) => {
    setDefautlPage(page);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("root");
    if (darkMode) {
      root.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <portifolioContext.Provider value={{ darkMode, changeDarkMode, lang, changeLanguage, text, handleOpenMenu, OpenMenu, defaultPage, handleDefaultPage }}>
      {children}
    </portifolioContext.Provider>
  );
};
