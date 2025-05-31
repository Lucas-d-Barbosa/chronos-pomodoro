import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  PAUSE_TASK: "PAUSE_TASK",
  RESET_STATE: "RESET_STATE",
  COUNT_DOWN: "COUNT_DOWN",
  COMPLETE_TASK: "COMPLETE_TASK",
  RESUME_TASK: "RESUME_TASK",
  CHANGE_SETTINGS: "CHANGE_SETTINGS",
} as const;

export type TaskActionTypeKeys =
  (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof TaskActionTypes.PAUSE_TASK;
      payload: TaskModel | null;
    }
  | {
      type: typeof TaskActionTypes.RESUME_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    }
  | {
      type: typeof TaskActionTypes.RESET_STATE;
    }
  | {
      type: typeof TaskActionTypes.COMPLETE_TASK;
    };
