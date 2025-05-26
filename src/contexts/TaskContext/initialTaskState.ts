import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemainig: 0,
  formattedSecondsRemainig: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
