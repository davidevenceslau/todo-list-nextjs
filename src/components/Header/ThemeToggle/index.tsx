"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { THEME } from "@/constants";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    const newTheme = theme === THEME.DARK ? "light" : "dark";
    setTheme(newTheme);
  };

  const classIcon = `cursor-pointer text-[20px]`;

  return (
    <MdOutlineDarkMode
      className={`${classIcon} text-black dark:text-white`}
      onClick={() => handleChangeTheme()}
    />
  );
}
