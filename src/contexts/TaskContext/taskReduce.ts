import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReduce(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.PAUSE_TASK: {
      return state;
    }
  }

  // sempre deve retornar o estado
  return state;
}
