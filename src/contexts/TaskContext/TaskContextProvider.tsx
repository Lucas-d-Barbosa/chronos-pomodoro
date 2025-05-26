import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";
import { TimerWorkerMenager } from "../../workes/TimerWorkerManager";

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
      console.log("Worker COMPLETED");

      worker.terminate();
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
