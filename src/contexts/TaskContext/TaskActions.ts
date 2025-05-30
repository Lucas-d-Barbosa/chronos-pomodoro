// useReduce <- hook do React que recebe um reduce e um estado inicial
// reducer <- função que recebe o estado atual e uma ação e retorna o estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmetnte) payload
// type <- o tipo da ação, geralmente uma string (pode ser um enum, constrante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualziar o estado

import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  PAUSE_TASK = "PAUSE_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  RESUME_TASK = "RESUME_TASK",
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.PAUSE_TASK;
      payload: TaskModel | null;
    }
  | {
      type: TaskActionTypes.RESUME_TASK; // ← adiciona este caso
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };
