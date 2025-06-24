import { create } from "zustand";

type Task = {
  title: string;
  description: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [task, ...state.tasks],
    })),
}));

export default useTaskStore;
