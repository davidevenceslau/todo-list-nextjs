import { API } from "@/constants";
import { apiError } from "@/api/apiError";
import { apiMessages } from "@/api/apiMessages";
import { ApiResponse, ErrorApi } from "@/api/types";

export const fetchTasks = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API}?_sort=createDate&_order=desc`);
    if (!response.ok) throw new Error(apiMessages.error.fetchTasks);
    const data = (await response.json()) as Task[];
    return { data, success: true };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};
