"use client";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface Props {
  title: string;
  id: number;
  active: number |null;
  setActive: Dispatch<SetStateAction<number | null>>;
}
export default function FilterButton({ title, id, active, setActive }: Props) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      disableRipple
      onClick={() => setActive(id)}
      sx={{
        py: 0.75,
        fontSize: 16,
        width: "fit-content",
        borderRadius: "999px",
        px: 2,
        borderColor: active === id ? "primary.main" : "#393936",
        bgcolor: active === id ? "#3F3817" : "background.default",
        color: active === id ? "primary.main" : "text.secondary",
      }}
    >
      {title}
    </Button>
  );
}
