import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";
import { TimerWorkerMenager } from "../../workes/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReduce, initialTaskState, () => {
    const storageState = localStorage.getItem("state");

    if (!storageState) return initialTaskState;
    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;
    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemainig: 0,
      formattedSecondsRemainig: "00:00",
    };
  });
  const worker = TimerWorkerMenager.getInstance();
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    if (countDownSeconds < 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });
  useEffect(() => {
    // Estado mudou?
    localStorage.setItem("state", JSON.stringify(state));
    if (!state.activeTask) {
      worker.terminate();
    }
    document.title = `${state.formattedSecondsRemainig} - Chronos Pomodoro`;
    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
