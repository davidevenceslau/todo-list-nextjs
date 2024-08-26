"use server";

import { revalidatePath } from "next/cache";
import { apiError } from "@/api/apiError";
import { ApiResponse, ErrorApi } from "@/api/types";
import { apiMessages } from "@/api/apiMessages";
import { Task } from "./types";
import { API, THEME } from "@/constants";
import { cookies } from "next/headers";
import { KEY_COOKIE } from "@/constants/cookie";

export const setThemeCookie = async (theme: string) => {
  if (theme === THEME.LIGHT || theme === THEME.DARK) {
    cookies().set(KEY_COOKIE.THEME, theme);
    revalidatePath("/");
  }
};

export const fetchTasks = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API}?_sort=-createDate`);
    if (!response.ok) throw new Error(apiMessages.error.fetchTasks);
    const data = (await response.json()) as Task[];
    return { data, success: true };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};

export const createTask = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const task = formData.get("task") as string;

    const date = new Date();

    const response = await fetch(API, {
      method: "POST",
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

export const toggleTaskCompleted = async (
  formData: FormData,
): Promise<ApiResponse> => {
  try {
    const id = formData.get("id") as string;
    const task = formData.get("task") as string;
    const createDate = formData.get("createDate") as string;
    const completed = formData.get("completed") as string;

    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        task: task,
        createDate: createDate,
        completed: completed === "on" ? true : false,
      }),
    });
    if (!response.ok) throw new Error(apiMessages.error.completedTask);
    const data = (await response.json()) as Task;
    console.log("revalidatePath /");
    revalidatePath("/");
    return { data, success: true, message: apiMessages.success.completedTask };
  } catch (error: unknown) {
    return apiError(error as ErrorApi);
  }
};
