"use client";

import { useThemeMode } from "@/app/theme-provider";
import { IconButton } from "@mui/material";
import { DarkIcon, LightIcon } from "../CustomIcons/CustomIcons";

export default function ToggleButton() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton onClick={toggleTheme}>
      {mode === "light" ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
}
