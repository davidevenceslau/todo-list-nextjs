import { revalidatePath } from "next/cache";
import { API } from "@/constants";
import { apiError } from "@/api/apiError";
import { apiMessages } from "@/api/apiMessages";
import { ApiResponse, ErrorApi } from "@/api/types";

export const createTask = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const task = formData.get("task") as string;

    const date = new Date();

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
        createDate: date.toISOString(),
        completed: false,
      }),
    });
    if (!response.ok) throw new Error(apiMessages.error.createTask);
    const data = (await response.json()) as Task;
    revalidatePath("/");
    return { data, success: true, message: apiMessages.success.createTask };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};
