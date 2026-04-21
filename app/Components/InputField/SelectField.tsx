"use client";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import * as React from "react";

interface Props {
  itemsList: string[];
  label: string;
  isOrederDetail: boolean;
  style?:SxProps
  maxWidth?:string
}
export default function SelectField({ label, itemsList, isOrederDetail, style,maxWidth }: Props) {
  const [value, setValue] = React.useState<string>("");
  const MenuProps = {
    slotProps: {
      paper: {
        sx: {
          background: "#10100f",
          border: "1px solid #575753",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
        },
      },
    },
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue("");
  };

  return (
    <FormControl sx={{ maxWidth: maxWidth ||'100%', width: "100%" }}>
      <Select
        displayEmpty
        value={value}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        sx={{
          borderRadius: "8px",
          color: "#EBEBE6",
          fontSize: "18px",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: value ? "#FCD535" : "#575753",
            transition: "0.2s",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: value ? "#FCD535" : "#575753",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: value ? "1px solid #FCD535" : "1px solid #575753",
          },

          "& .MuiSelect-icon": {
            right: 8,
            left: "auto",
            color: "text.primary",
            display: !isOrederDetail
              ? "block"
              : isOrederDetail && value
                ? "none"
                : "block",
          },

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.9,
            pr: 1,
          },
          ...style,
        }}
        renderValue={() => {
          if (!value) {
            return (
              <Typography
                sx={{
                  color: "#7C7C7B",
                  top: "50%",
                  transform: "translateY(-50%)",
                  position: "absolute ",
                }}
              >
                {label}
              </Typography>
            );
          }

          return (
            value && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                  {isOrederDetail && <Typography>{label}</Typography>}
                  <Typography
                    variant="body1"
                    sx={{ color: isOrederDetail ? "#B29727" : "text.title" }}
                  >
                    {value}
                  </Typography>
                </Stack>

                {isOrederDetail && (
                  <IconButton
                    size="small"
                    onClick={handleClear}
                    onMouseDown={(e) => e.stopPropagation()}
                    disableRipple
                    sx={{
                      color: "#FFFFFF",
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
            )
          );
        }}
      >
        {itemsList.map((name) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              color: "#ddd",

              "&.Mui-selected": {
                backgroundColor: "#52524f !important",
              },

              "&.Mui-selected:hover": {
                backgroundColor: "#52524f !important",
              },

              "&:hover": {
                backgroundColor: "#52524f",
              },
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
