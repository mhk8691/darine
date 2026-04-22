"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ReactNode } from "react";
import { SxProps } from "@mui/material";

interface Props {
  placeholder: string;
  icon?: ReactNode;
  title?: string;
  value: number | null | string;
  setValue: React.Dispatch<React.SetStateAction<number | null | string>>;
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
  const formatNumber = (num: number | null | string) => {
    if (num === null) return "";
    return num.toLocaleString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, "");
    if (val === "") {
      setValue(null);
    } else {
      const num = Number(val);
      setValue(isNaN(num) ? 0 : num);
    }
  };

  return (
    <TextField
      placeholder={placeholder}
      value={formatNumber(value)}
      onChange={handleChange}
      id="outlined-start-adornment"
      multiline={multiline}
      minRows={2}
      sx={{
        direction: "ltr",
        "& .MuiInputBase-input": {
          py: 0,
          minHeight: "56px",
          textAlign: value || value === 0 ? "right" : "left",
          fontSize: "18px",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius:2,
          "& fieldset": {
            borderColor: "#494949",
            borderWidth: "1px",
          },
          "&:hover fieldset": {
            borderColor: "#494949",
            borderWidth: "1px",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#494949",
            borderWidth: "1px",
          },
          "&.Mui-disabled fieldset": {
            borderColor: "#494949",
            borderWidth: "1px",
          },
        },
        ...style,
      }}
      slotProps={{
        input: {
          endAdornment: title && (
            <InputAdornment position="end">
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mr: {
                    xs: title === "گرم" ? 2.5 : 1,
                    sm: title === "گرم" ? 3 : 1,
                  },
                  borderColor: "#393936",
                  border: "1px solid #393936",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: 14,
                    sm: "18px",
                  },
                }}
              >
                {title}
              </Typography>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="end">{icon}</InputAdornment>
          ),
        },
      }}
    />
  );
}
