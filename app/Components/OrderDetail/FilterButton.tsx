"use client";
import { ToggleItemsType } from "@/app/core/Types";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
interface Props {
  item: ToggleItemsType;
  active: number | null;
  setActive: Dispatch<SetStateAction<number | null>>;
}
export default function FilterButton({
  active,
  setActive,
  item,
}: Props) {
  useEffect(()=>{
    console.log(active)
  },[])
  return (
    <Button
      variant="outlined"
      color="inherit"
      disableRipple
      onClick={() => setActive(item.id)}
      sx={{
        py: 0.75,
        fontSize: 16,
        witemth: "fit-content",
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
