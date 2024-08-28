import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { KEY_COOKIE, THEME } from "@/constants";

export const setThemeCookie = async (theme: string) => {
  if (theme === THEME.LIGHT || theme === THEME.DARK) {
    cookies().set(KEY_COOKIE.THEME, theme);
    revalidatePath("/");
  }
};
