type UserHash = string;
type UserId = string;

type TaskId = string;
type Task = {
  id: TaskId;
  userId: UserId;
  title: string;
  createDate: string;
  completed: boolean;
};

type ToastType = "success" | "error" | "warning" | "info";

type TodoListActionResponse = {
  success: boolean;
  message?: string;
};
