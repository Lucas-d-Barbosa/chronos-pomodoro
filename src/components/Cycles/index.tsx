import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./style.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStap = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: "tempo de trabalho.",
    shortBreakTime: "tempo de descanso curto.",
    longBreakTime: "tempo de descanso longo.",
  };
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDots}>
        {cycleStap.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              aria-label={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
            ></span>
          );
        })}

        {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
      </div>
    </div>
  );
}
