"use client";

import { ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { getTheme } from "./theme";

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
