import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        title="Ir para a página inicial"
        aria-label="Ir para a página inicial"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        title="Ir para o histórico"
        aria-label="Ir para o histórico"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        title="Ir para as configurações"
        aria-label="Ir para as configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        title="Mudar o tema"
        aria-label="Mudar o tema"
        onClick={handleThemeChange}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  );
}

export default Menu;
