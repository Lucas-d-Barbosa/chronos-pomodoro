import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { DefaultButton } from "../../components/DefaultButton";

import styles from "./Styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useEffect, useState } from "react";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";

export function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;
  const [sortedTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );
  useEffect(() => {
    setSortTaskOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);
  function hendleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection =
      sortedTasksOptions.direction === "desc" ? "asc" : "desc";
    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortedTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showMessage.dissmiss();
    showMessage.confirm(
      "Você tem certeza que desaja apagar o histórico?",
      (confirmation) => {
        setConfirmClearHistory(confirmation);
      }
    );
  }
  useEffect(() => {
    if (!confirmClearHistory) return;
    setConfirmClearHistory(false);
    showMessage.error("Histórico apagado.");
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch]);
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span> History </span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar todo o histórico"
                title="Apagar todo o histórico"
                onClick={handleResetHistory}
              ></DefaultButton>{" "}
            </span>
          )}
        </Heading>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          {hasTasks && (
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() => hendleSortTasks({ field: "name" })}
                  >
                    Tarefa
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => hendleSortTasks({ field: "duration" })}
                  >
                    Duração
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => hendleSortTasks({ field: "startDate" })}
                  >
                    Data
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasksOptions.tasks.map((task) => {
                  const taskTypeDicionary = {
                    workTime: "Tempo de trabalho",
                    shortBreakTime: "Descanso Curto",
                    longBreakTime: "Descanso Longo",
                  };
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDicionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {!hasTasks && <Heading>Ainda não existem tarefas criadas.</Heading>}
        </div>
      </Container>
    </MainTemplate>
  );
}
