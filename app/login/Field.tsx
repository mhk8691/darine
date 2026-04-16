"use client";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
//   handleChange: () => {};
}

export default function Field({ value, setValue, label }: Props) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"

      sx={{
        width:'100%',
        mt: 2.5,
        "& .MuiOutlinedInput-root": {
          borderRadius: 2.5,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#494949",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#C2C2BA",
        },
      }}
    />
  );
}
