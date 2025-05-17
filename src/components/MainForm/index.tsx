import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaulButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
export function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput id="meuInput" labeltext="Task" type="text" />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
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
