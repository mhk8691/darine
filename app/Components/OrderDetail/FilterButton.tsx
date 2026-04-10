"use client";
import { Button } from "@mui/material";
import { useState } from "react";
interface Props {
  title: string;
}
export default function FilterButton({ title }: Props) {
  const [active, setActive] = useState(false);
  return (
    <Button
      variant="outlined"
      color="inherit"
      disableRipple
      onClick={() => setActive(!active)}
      sx={{
        py: 0.75,
        fontSize: 16,
        width: "fit-content",
        borderRadius: "999px",
        px: 2,
        borderColor: active ? "primary.main" : "#393936",
        bgcolor: active ? "#3F3817" : "background.default",
        color: active ? "primary.main" : "text.secondary",
        mb: 2,
      }}
    >
      {title}
    </Button>
  );
}
