type TaskId = string;
type Task = {
  id: TaskId;
  userHash: UserHash;
  task: string;
  createDate: string;
  completed: boolean;
};

type ToastType = "success" | "error" | "warning" | "info";
