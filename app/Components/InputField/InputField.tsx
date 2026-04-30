"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ReactNode } from "react";
import { SxProps } from "@mui/material";

type ValueType = string | number | null;

interface Props<T extends ValueType> {
  placeholder: string;
  icon?: ReactNode;
  title?: string;
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  style?: SxProps;
  multiline?: boolean;
}
export default function InputField<T extends ValueType>({
  placeholder,
  title,
  icon,
  value,
  setValue,
  style,
  multiline = false,
}: Props<T>) {
  const formatNumber = (val: ValueType) => {
    if (val === null || val === "") return "";

    if (typeof val === "number") {
      return val.toLocaleString();
    }

    const num = Number(val.replace(/,/g, ""));
    return isNaN(num) ? val : num.toLocaleString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");

    if (raw === "") {
      setValue(null as T); // ✅ وقتی خالی شد → null
      return;
    }

    const num = Number(raw);

    if (!isNaN(num)) {
      if (typeof value === "number") {
        setValue(num as T);
      } else {
        setValue(raw as T);
      }
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
          textAlign: value !== null && value !== "" ? "right" : "left",
          fontSize: "16px",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
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
