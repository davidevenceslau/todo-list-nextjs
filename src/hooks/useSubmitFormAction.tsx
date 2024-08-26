import { ApiResponse } from "@/api/types";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export function useSubmitFormAction(
  sendServerAction: (
    state: object,
    formData: FormData,
    delayMs?: number,
  ) => Promise<ApiResponse>,
  delayMs = 0,
) {
  const [pending, setPending] = useState(false);
  const [state, action] = useFormState(
    async (state: object, formData: FormData) =>
      await sendServerAction(state, formData, delayMs),
    {
      data: null,
      success: false,
      message: "",
    },
  );

  const onSubmit = () => {
    setPending(true);
  };

  useEffect(() => {
    setPending(false);
  }, [state]);

  return {
    action,
    pending,
    state,
    onSubmit,
  };
}
