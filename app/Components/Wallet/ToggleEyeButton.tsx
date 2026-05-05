"use client";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
export default function ToggleEyeButton({ visible, setVisible }: Props) {
  useEffect(() => {
    const stored = localStorage.getItem("eyeState");
    if (stored !== null) {
      setVisible(stored === "true");
    }
  }, []);

  const handleClick = () => {
    const newValue = !visible;
    setVisible(newValue);
    localStorage.setItem("eyeState", newValue.toString());
  };

  return (
    <IconButton onClick={handleClick}>
      {visible ? (
        <VisibilityOutlinedIcon sx={{ color: "text.muted" }} fontSize="small" />
      ) : (
        <VisibilityOffOutlinedIcon
          sx={{ color: "text.muted" }}
          fontSize="small"
        />
      )}
    </IconButton>
  );
}
