import { create } from "zustand";

type Task = {
  id: Number;
  title: string;
  description: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [task, ...state.tasks],
    })),
  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      ),
    })),
}));

export default useTaskStore;
