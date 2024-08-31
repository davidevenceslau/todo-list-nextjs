type UserHash = string;

type TaskId = string;
type Task = {
  id: TaskId;
  task: string;
  createDate: string;
  completed: boolean;
};

type ToastType = "success" | "error" | "warning" | "info";
