import { HeartIcon } from "lucide-react";
import styles from "./style.module.css";
import { RouterLink } from "../RouterLink";
export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <RouterLink href="/about-pomodoro">
          Entenda como funciona a técnica pomodoro
        </RouterLink>
        <RouterLink href="/">
          Chronos Pomodoro &copy; {new Date().toLocaleString()} - Feito com{" "}
          <HeartIcon />
          Desenvolvido por - Lucas Barbosa
        </RouterLink>
      </footer>
    </>
  );
}
