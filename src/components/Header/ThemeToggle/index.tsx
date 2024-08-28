"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { THEME } from "@/constants";
import { setThemeCookie } from "@/actions";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (newTheme: string) => {
    setTheme(newTheme);
    setThemeCookie(newTheme);
  };

  const classIcon = `cursor-pointer text-[20px]`;

  if (theme === THEME.DARK) {
    return (
      <MdOutlineLightMode
        className={`${classIcon} text-white`}
        onClick={() => handleChangeTheme(THEME.LIGHT)}
      />
    );
  }

  return (
    <MdOutlineDarkMode
      className={`${classIcon} text-black`}
      onClick={() => handleChangeTheme(THEME.DARK)}
    />
  );
}
