"use client";
import CustomModal from "@/app/Components/CustomModal/CustomModal";
import { Close } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export interface SelectOption {
  value: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface SelectInputProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  options?: SelectOption[];
  placeholder?: string;
  label?: string;
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  disabled?: boolean;
  ModalComponent?: React.ComponentType<ModalProps>;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  sx?: SxProps<Theme>;
  modalMode?: boolean;
  titleModal?: string;
}

export default function SelectInput({
  titleModal,
  value = "",
  onChange,
  options = [],
  placeholder = "Select an option",
  label = "Select",
  fullWidth = true,
  variant = "outlined",
  size = "medium",
  disabled = false,
  error = false,
  helperText,
  required = false,
  sx,
  modalMode = true,
}: SelectInputProps): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const initialValue =
    value !== "" ? value : options.length > 0 ? options[0].value : "";
  const [selectedValue, setSelectedValue] = useState<string | number>(
    initialValue,
  );

  const handleOpenModal = (): void => {
    if (!disabled && modalMode) {
      setIsModalOpen(true);
    }
  };

  const handleSelectItem = (item: SelectOption): void => {
    if (item.disabled) return;
    setSelectedValue(item.value);
    onChange?.(item.value);
    setIsModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange?.(newValue);
  };

  const selectedItem: SelectOption | undefined = options.find(
    (opt) => opt.value === selectedValue,
  );

  const commonSx = {
    ...sx,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: error ? "#d32f2f" : "#575753",
      },
      "&:hover fieldset": {
        borderColor: error ? "#d32f2f" : "#575753",
      },
      "&.Mui-focused fieldset": {
        borderColor: error ? "#d32f2f" : "#575753",
      },
    },
  };

  if (!modalMode) {
    return (
      <TextField
        select
        label={label}
        value={selectedValue || ""}
        placeholder={placeholder}
        fullWidth={fullWidth}
        variant={variant}
        size={size}
        disabled={disabled}
        error={error}
        helperText={helperText}
        required={required}
        onChange={handleChange}
        sx={commonSx}
        SelectProps={{
          IconComponent: KeyboardArrowDownIcon,
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            <Box>
              <div>{option.label}</div>
              {option.description && (
                <div style={{ fontSize: 12, color: "gray" }}>
                  {option.description}
                </div>
              )}
            </Box>
          </MenuItem>
        ))}
      </TextField>
    );
  }

  const displayValue = selectedItem
    ? selectedItem.description
      ? `${selectedItem.label} - ${selectedItem.description}`
      : selectedItem.label
    : "";

  return (
    <>
      <TextField
        select={false}
        label={label}
        value={displayValue}
        placeholder={placeholder}
        fullWidth={fullWidth}
        variant={variant}
        size={size}
        disabled={disabled}
        error={error}
        helperText={helperText}
        required={required}
        onClick={handleOpenModal}
        sx={commonSx}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardArrowDownIcon sx={{ color: "action.active" }} />
            </InputAdornment>
          ),
        }}
      />

      <CustomModal open={isModalOpen} setOpen={setIsModalOpen}>
        <Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={1}
          >
            <Typography variant="h6" fontSize={16}>
              {titleModal}
            </Typography>
            <IconButton onClick={() => setIsModalOpen(false)} disableRipple>
              <Close />
            </IconButton>
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {options.map((option) => (
              <Box
                key={option.value}
                onClick={() => handleSelectItem(option)}
                sx={{
                  p: 1,
                  borderRadius: 1,
                  cursor: option.disabled ? "not-allowed" : "pointer",
                  bgcolor:
                    selectedValue === option.value
                      ? "action.selected"
                      : "transparent",
                  opacity: option.disabled ? 0.5 : 1,
                  "&:hover": {
                    bgcolor: !option.disabled ? "action.hover" : "transparent",
                  },
                  transition: "background-color 0.2s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 12,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight:
                      selectedValue === option.value ? "bold" : "normal",
                  }}
                >
                  {option.label}
                </Box>
                {option.description && (
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      fontSize: 12,
                      color: "text.secondary",
                      mt: 0.5,
                    }}
                  >
                    {option.description}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </CustomModal>
    </>
  );
}
