"use client";
import { ToggleItemsType } from "@/app/core/Types";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface Props {
  item: ToggleItemsType;
  active: number | null;
  setActive: Dispatch<SetStateAction<number | null>>;
  setMessage?: Dispatch<SetStateAction<string>>;
}
export default function FilterButton({
  active,
  setActive,
  item,
  setMessage,
}: Props) {
  console.log(setMessage)
  return (
    <Button
      variant="outlined"
      color="inherit"
      disableRipple
      onClick={() => {
        setActive(item.id);
        if (setMessage) {
          setMessage(item.emptyMessage || "");
        }
      }}
      sx={{
        py: 0.75,
        fontSize: {
          xs: 12,
          sm: 16,
        },
        width: "fit-content",
        borderRadius: "999px",
        px: 2,
        borderColor: active === item.id ? "primary.main" : "#393936",
        bgcolor: active === item.id ? "#3F3817" : "background.default",
        color: active === item.id ? "primary.main" : "text.secondary",
      }}
    >
      {item.title}
    </Button>
  );
}
