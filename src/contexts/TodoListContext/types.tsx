const textTryAgain = "Tente novamente mais tarde.";

enum TodoListActionErrorMessages {
  default = `Ops, algo deu errado. ${textTryAgain}`,
  gatTasks = `Ocorreu um erro ao buscar os dados. ${textTryAgain}`,
  createTask = `Não foi possível criar a tarefa. ${textTryAgain}`,
  completedTask = `Não foi possível completar a tarefa. ${textTryAgain}`,
  deleteTask = `Não foi possível remover a tarefa. ${textTryAgain}`,
}

enum TodoListActionMessages {
  createTask = "Tarefa adicionada com sucesso.",
  completedTask = "Tarefa completada com sucesso.",
  removeTask = "Tarefa removida com sucesso.",
}

export const todoListActionMessages = {
  error: TodoListActionErrorMessages,
  success: TodoListActionMessages,
};
