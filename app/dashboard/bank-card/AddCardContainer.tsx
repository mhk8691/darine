"use client";
import { Add as AddIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import AddCard from "./AddCard";
export default function AddCardContainer() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <Button
        variant="contained"
        sx={{
          fontSize: 16,
          width: "fit-content",
          borderRadius: 2,
          py: 1,
          fontWeight: 600,
          mt: 4,
        }}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        افزودن کارت جدید
      </Button>
      <AddCard open={open} setOpen={setOpen} value={value} setValue={setValue} />
    </>
  );
}
