import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./style.module.css";
import { useState } from "react";
type AvailableThemes = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");
  function handleThemeChange(e: React.MouseEvent): void {
    e.preventDefault();
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  }
  return (
    <>
      <h1>{theme}</h1>
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
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
