import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
type AvailableThemes = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes;
    return storageTheme ?? "dark";
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(e: React.MouseEvent): void {
    e.preventDefault();
    setTheme((theme) => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a href="#" className={styles.menuLink} aria-label="Home" title="Home">
          <HouseIcon />
        </a>
        <a
          href="#"
          className={styles.menuLink}
          aria-label="Histórico"
          title="Histórico"
        >
          <HistoryIcon />
        </a>
        <a
          href="#"
          className={styles.menuLink}
          aria-label="Configurações"
          title="Configurações"
        >
          <SettingsIcon />
        </a>
        <a
          href="#"
          className={styles.menuLink}
          aria-label="Alterar Tema"
          title="Alterar Tema"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
