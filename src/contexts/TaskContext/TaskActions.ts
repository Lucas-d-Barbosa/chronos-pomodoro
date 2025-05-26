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
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.PAUSE_TASK;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };
