import { HeartIcon } from "lucide-react";
import styles from "./style.module.css";
export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">
          Chronos Pomodoro &copy; {new Date().toLocaleString()} - Feito com{" "}
          <HeartIcon />
        </a>
      </footer>
    </>
  );
}
