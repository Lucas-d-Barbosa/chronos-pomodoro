import styles from "./style.module.css";
import { useTaskContext } from "../../contexts/TaskContext";

export function CountDown() {
  const { state } = useTaskContext();
  return (
    <>
      <div className={styles.container}>{state.formattedSecondsRemainig}</div>
    </>
  );
}
