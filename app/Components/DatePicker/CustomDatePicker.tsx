"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import transition from "react-element-popper/animations/transition";
import { InputAdornment, Stack, TextField } from "@mui/material";
import "react-multi-date-picker/styles/colors/yellow.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

export default function CustomDatePicker() {
  const [value, setValue] = React.useState<DateObject[] | undefined>(undefined);

  return (
    <div style={{ direction: "rtl" }}>
      <DatePicker
        monthYearSeparator="|"
        className="yellow bg-dark "
        range
        value={value}
        onChange={(val) => setValue(val as DateObject[] | undefined)}
        render={<CustomRangeInput />}
        animations={[
          opacity(),
          transition({
            from: 40,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
        ]}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

type CustomRangeInputProps = {
  value?: DateObject[] | string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  separator?: string;
};

function CustomRangeInput({
  onFocus,
  value,
  separator = ",",
}: CustomRangeInputProps) {
  let from = "";
  let to = "";

  if (Array.isArray(value)) {
    from = value[0]?.format?.() || "";
    to = value[1]?.format?.() || "";
  } else if (typeof value === "string") {
    const values = value.split(separator);
    from = values[0] || "";
    to = values[1] || "";
  }

  const displayValue =
    from && to ? `از ${from} تا ${to}` : from ? `از ${from}` : "";

  return (
    <Stack>
      <TextField
        placeholder={"تاریخ"}
        value={displayValue}
        onFocus={onFocus}
        sx={{
          direction: "ltr",
          width: "100%",
          minWidth: "260px",
          color: "red",
          "& .MuiInputBase-input": {
            py: 1.4,
            fontSize: "14px",
          },
          "& .MuiOutlinedInput-root": {
            color: "#ffffff",
            opacity: 1,

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
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
}
