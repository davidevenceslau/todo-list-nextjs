import { revalidatePath } from "next/cache";
import { API } from "@/constants";
import { apiError } from "@/api/apiError";
import { apiMessages } from "@/api/apiMessages";
import { ApiResponse, ErrorApi } from "@/api/types";
import { getUserHashCookie } from "./userHashCookie";

export const completeTask = async (
  formData: FormData,
): Promise<ApiResponse> => {
  try {
    const id = formData.get("id") as string;
    const userHash = await getUserHashCookie();
    const task = formData.get("task") as string;
    const createDate = formData.get("createDate") as string;
    const completed = formData.get("completed") as string;

    if (!userHash) {
      throw new Error(apiMessages.error.completedTask);
    }

    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userHash,
        task: task,
        createDate: createDate,
        completed: completed === "on" ? true : false,
      }),
    });
    if (!response.ok) throw new Error(apiMessages.error.completedTask);
    const data = (await response.json()) as Task;
    revalidatePath("/");
    return { data, success: true, message: apiMessages.success.completedTask };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};
