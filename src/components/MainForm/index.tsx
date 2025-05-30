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
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    showMessage.dissmiss();
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      showMessage.warn("Digite o nome da tarefa.");
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
    showMessage.success("Tarefa iniciada!");
  }

  function handlePauseTask() {
    if (!state.activeTask) return;
    dispatch({ type: TaskActionTypes.PAUSE_TASK, payload: state.activeTask });
    showMessage.success("Tarefa pausada!");
  }

  function handleResumeTask() {
    if (!state.pausedTask) return;
    dispatch({ type: TaskActionTypes.RESUME_TASK, payload: state.pausedTask });
    showMessage.success("Tarefa retomada!");
  }

  function handleInterruptTask() {
    showMessage.dissmiss();
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    showMessage.error("Tarefa interrompida!");
  }

  return (
    <form action="" className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          labeltext="Digite uma tarefa:"
          type="text"
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && !state.pausedTask && (
          <DefaulButton
            aria-label="Iniciar nova tarefa."
            title="Iniciar nova tarefa."
            type="submit"
            icon={<PlayCircleIcon />}
            key="botao_submit"
          />
        )}

        {state.activeTask && (
          <>
            <DefaulButton
              aria-label="Finalizar tarefa atual."
              title="Finalizar tarefa atual."
              type="button"
              color="red"
              icon={<StopCircleIcon />}
              onClick={handleInterruptTask}
              key="botao_finalizar"
            />
            <DefaulButton
              aria-label="Pausar tarefa atual."
              title="Pausar tarefa atual."
              type="button"
              color="yellow"
              icon={<PauseCircleIcon />}
              onClick={handlePauseTask}
              key="botao_pausar"
            />
          </>
        )}

        {!state.activeTask && state.pausedTask && (
          <DefaulButton
            aria-label="Retomar tarefa pausada."
            title="Retomar tarefa pausada."
            type="button"
            color="green"
            icon={<PlayCircleIcon />}
            onClick={handleResumeTask}
            key="botao_retomar"
          />
        )}
      </div>
    </form>
  );
}
