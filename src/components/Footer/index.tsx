import { HeartIcon } from "lucide-react";
import styles from "./style.module.css";
import { Link } from "react-router";
export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Link to="/about-pomodoro">
          Entenda como funciona a técnica pomodoro
        </Link>
        <Link to="/">
          Chronos Pomodoro &copy; {new Date().toLocaleString()} - Feito com{" "}
          <HeartIcon />
        </Link>
      </footer>
    </>
  );
}
