"use client";

import { SxProps } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";

interface Props {
  placeholder: string;
  icon?: ReactNode;
  title?: string;
  value: string;
  setValue: (value: string) => void;
  style?: SxProps;
  multiline?: boolean;
}

export default function InputField({
  placeholder,
  title,
  icon,
  value,
  setValue,
  style,
  multiline = false,
}: Props) {
  const formatNumber = (val: string) => {
    if (!val) return "";

    const safeVal = String(val);

    const num = Number(safeVal.replace(/,/g, ""));
    if (isNaN(num)) return safeVal;

    return num.toLocaleString();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    setValue(raw);
  };

  return (
    <TextField
      placeholder={placeholder}
      value={formatNumber(value)}
      onChange={handleChange}
      multiline={multiline}
      minRows={multiline ? 2 : undefined}
      sx={{
        direction: "ltr",
        "& .MuiInputBase-input": {
          py: 0,
          minHeight: "56px",
          textAlign: value ? "right" : "left",
          fontSize: "16px",
        },
        ...style,
      }}
      slotProps={{
        input: {
          startAdornment: icon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          endAdornment: title && (
            <InputAdornment position="end">
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mr: 1,
                  borderColor: "background.paper",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontSize: 16, color: "text.primary" }}
              >
                {title}
              </Typography>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
