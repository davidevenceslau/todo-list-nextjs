const textTryAgain = "Tente novamente mais tarde.";

enum ApiErrorMessages {
  default = `Ops, algo deu errado. ${textTryAgain}`,
  fetchTasks = `Ocorreu um erro ao buscar os dados. ${textTryAgain}`,
  createTask = `Não foi possível criar a tarefa. ${textTryAgain}`,
  completedTask = `Não foi possível completar a tarefa. ${textTryAgain}`,
  deleteTask = `Não foi possível remover a tarefa. ${textTryAgain}`,
}

enum ApiSuccessMessages {
  createTask = "Tarefa adicionada com sucesso.",
  completedTask = "Tarefa completada com sucesso.",
  removeTask = "Tarefa removida com sucesso.",
}

export const apiMessages = {
  error: ApiErrorMessages,
  success: ApiSuccessMessages,
};
