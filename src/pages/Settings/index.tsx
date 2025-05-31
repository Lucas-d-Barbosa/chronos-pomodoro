import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement | null>(null);
  const shortBreakInput = useRef<HTMLInputElement | null>(null);
  const longBreakInput = useRef<HTMLInputElement | null>(null);
  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakInput.current?.value);
    const longBreakTime = Number(longBreakInput.current?.value);
    showMessage.dissmiss();
    if (!workTime || !shortBreakTime || !longBreakTime) {
      showMessage.error("Digite apenas números em todos os campos!");
      return;
    }
    if (workTime < 1 || workTime > 99) {
      showMessage.error("Digite valores entre 1 e 99 para tempo de foco!");
      return;
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      showMessage.error(
        "Digite valores entre 1 e 30 para tempo de descanso curto!"
      );
      return;
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      showMessage.error(
        "Digite valores entre 1 e 60 para tempo de descanso longo!"
      );
      return;
    }
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success("Configurações salvas com sucesso!");
  }
  useEffect(() => {
    document.title = "Configurações - Chronos Pomodoro";
  }, []);
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <h3 style={{ textAlign: "center" }}>
          Modifique as Configurações para tempo de foco, descanso curto e
          descanso longo.
        </h3>
      </Container>

      <Container>
        <form action="" className="form" onSubmit={handleSaveSettings}>
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labeltext="Tempo de Foco:"
              ref={workTimeInput}
              type="number"
              defaultValue={state.config.workTime}
            ></DefaultInput>
          </div>

          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labeltext="Tempo de descanso curto:"
              ref={shortBreakInput}
              type="number"
              defaultValue={state.config.shortBreakTime}
            ></DefaultInput>
          </div>

          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labeltext="Tempo de descanso longo:"
              ref={longBreakInput}
              type="number"
              defaultValue={state.config.longBreakTime}
            ></DefaultInput>
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            ></DefaultButton>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
