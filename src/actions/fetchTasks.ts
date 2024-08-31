import { API, KEY_COOKIE } from "@/constants";
import { apiError } from "@/api/apiError";
import { apiMessages } from "@/api/apiMessages";
import { ApiResponse, ErrorApi } from "@/api/types";
import { getUserHashCookie } from "./userHashCookie";

export const fetchTasks = async (): Promise<ApiResponse> => {
  try {
    const userHash = await getUserHashCookie();

    if (!userHash) {
      return Promise.resolve({ data: null, success: true });
    }
    const response = await fetch(
      `${API}?_sort=createDate&_order=desc&${KEY_COOKIE.USER_HASH}=${userHash}`,
    );
    if (!response.ok) throw new Error(apiMessages.error.fetchTasks);
    const data = (await response.json()) as Task[];
    return { data, success: true };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};
