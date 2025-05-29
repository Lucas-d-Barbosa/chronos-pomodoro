import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { DefaulButton } from "../../components/DefaultButton";

import styles from "./Styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
export function History() {
  const { state } = useTaskContext();
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span> History </span>
          <span className={styles.buttonContainer}>
            <DefaulButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o histórico"
              title="Apagar todo o histórico"
            ></DefaulButton>{" "}
          </span>
        </Heading>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.tasks
                .map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>
                        {formatDate(task.interruptDate ?? task.startDate)}
                      </td>
                      <td>{task.type}</td>
                    </tr>
                  );
                })
                .reverse()}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
