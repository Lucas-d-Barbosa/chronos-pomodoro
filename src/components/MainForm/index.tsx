import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaulButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");
  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Deu certo.", taskName);
  }
  return (
    <form action="" className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          labeltext="Task"
          type="text"
          value={taskName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTaskName(e.target.value)
          }
        />
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
