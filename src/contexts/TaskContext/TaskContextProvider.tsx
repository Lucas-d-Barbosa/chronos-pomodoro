import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";
import { TimerWorkerMenager } from "../../workes/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReduce, initialTaskState);
  const worker = TimerWorkerMenager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(e.data);

    if (countDownSeconds < 0) {
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
    if (!state.activeTask) {
      console.log("Worker terminado por falta de activeTask");
      worker.terminate();
    }
    worker.postMessage(state);
  }, [state, worker]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
