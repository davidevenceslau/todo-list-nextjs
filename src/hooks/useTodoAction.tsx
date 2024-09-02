import { useEffect, useState } from "react";

export function useTodoAction(
  action: (params: unknown) => Promise<TodoListActionResponse>,
  actionParams: unknown,
) {
  const [pending, setPending] = useState(false);
  const [isActionFinalized, setIsActionFinalized] = useState(false);
  const [response, setResponse] = useState<TodoListActionResponse | undefined>(
    undefined,
  );

  const executeAction = async (): Promise<void> => {
    setPending(true);
    setIsActionFinalized(false);
    setResponse(undefined);
    const resp = await action(actionParams);
    setResponse(resp);
  };

  const applyStatesAfterResponse = (response: TodoListActionResponse) => {
    setPending(false);
    if (response.success) {
      setIsActionFinalized(true);
    }
  };

  useEffect(() => {
    if (actionParams) {
      executeAction();
    }
  }, [actionParams]);

  useEffect(() => {
    if (response?.message) {
      applyStatesAfterResponse(response);
    }
  }, [response]);

  return {
    pending,
    response,
    isActionFinalized,
  };
}
