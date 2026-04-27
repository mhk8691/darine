"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack, Typography } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(1);
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: "1px solid #333333",
        borderRadius: 2,
        width: "100px",
      }}
    >
      <IconButton onClick={() => setCount((prev) => prev + 1)} disableRipple>
        <AddIcon fontSize="small" />
      </IconButton>
      <Typography fontWeight={600}>{count}</Typography>

      <IconButton onClick={() => setCount((prev) => prev - 1)} disableRipple>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}
