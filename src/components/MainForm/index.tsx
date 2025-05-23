import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaulButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm() {
  const { state, setState } = useTaskContext();
  function handleClick() {
    setState((prevState) => {
      return { ...prevState, formattedSecondsRemainig: "02:20" };
    });
  }
  return (
    <form action="" className="form">
      <button type="button" onClick={handleClick}>
        Clicar
      </button>
      <div className="formRow">
        <DefaultInput id="meuInput" labeltext="Task" type="text" />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaulButton type="submit" icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
