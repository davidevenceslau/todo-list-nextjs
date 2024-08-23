"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { THEME } from "@/constants";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const classIcon = `cursor-pointer text-[20px]`;

  return theme === THEME.DARK ? (
    <MdOutlineLightMode
      className={`${classIcon} text-white`}
      onClick={() => handleChangeTheme(THEME.LIGHT)}
    />
  ) : (
    <MdOutlineDarkMode
      className={`${classIcon} text-black`}
      onClick={() => handleChangeTheme(THEME.DARK)}
    />
  );
}
