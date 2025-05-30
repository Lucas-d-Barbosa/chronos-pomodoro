import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { initialTaskState } from "./initialTaskState";
import { TaskActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReduce(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemainig = newTask.duration * 60;
      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemainig,
        formattedSecondsRemainig: formatSecondsToMinutes(secondsRemainig),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemainig: 0,
        formattedSecondsRemainig: "00:00",
        tasks: state.tasks.map((task) => {
          if (task.id === state.activeTask?.id) {
            task = {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemainig: 0,
        formattedSecondsRemainig: "00:00",
        tasks: state.tasks.map((task) => {
          if (task.id === state.activeTask?.id) {
            task = {
              ...task,
              completeDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemainig: action.payload.secondsRemaining,
        formattedSecondsRemainig: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return { ...initialTaskState };
    }
    case TaskActionTypes.RESUME_TASK: {
      const resumed = {
        ...action.payload!,
        startDate: Date.now(), // redefine início
      };
      return {
        ...state,
        activeTask: resumed,
        pausedTask: null,
        // mantém secondsRemainig e formattedSecondsRemainig
      };
    }

    case TaskActionTypes.PAUSE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemainig: state.secondsRemainig,
        formattedSecondsRemainig: state.formattedSecondsRemainig,
        pausedTask: state.activeTask,
      };
    }
  }

  return state;
}
