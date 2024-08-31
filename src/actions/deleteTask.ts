import { revalidatePath } from "next/cache";
import { API } from "@/constants";
import { apiError } from "@/api/apiError";
import { apiMessages } from "@/api/apiMessages";
import { ApiResponse, ErrorApi } from "@/api/types";
import { getUserHashCookie } from "./userHashCookie";

export const deleteTask = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const userHash = await getUserHashCookie();
    const id = formData.get("id") as string;

    if (!userHash) {
      throw new Error(apiMessages.error.deleteTask);
    }

    const response = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error(apiMessages.error.deleteTask);
    const data = (await response.json()) as Task[];
    revalidatePath("/");
    return { data, success: true, message: apiMessages.success.removeTask };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};
