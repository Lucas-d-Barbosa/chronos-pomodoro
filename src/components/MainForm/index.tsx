import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaulButton } from "../DefaultButton";
import { PauseCircleIcon, PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";
// import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }
  return (
    <form action="" className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          labeltext="Task"
          type="text"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      <div className="formRow">
        {!state.activeTask ? (
          <DefaulButton
            aria-label="Iniciar nova tarefa."
            title="Iniciar nova tarefa."
            type="submit"
            icon={<PlayCircleIcon />}
            key={"botao_submit"}
          />
        ) : (
          <DefaulButton
            aria-label="Finalizar tarefa atual."
            title="Finalizar tarefa atual."
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key={"botao_finalizar"}
          />
        )}
        <DefaulButton
          aria-label="Pausar tarefa atual."
          title="Pausar tarefa atual."
          type="button"
          color="yellow"
          icon={<PauseCircleIcon />}
          key={"botao_pausar"}
        />
      </div>
    </form>
  );
}
