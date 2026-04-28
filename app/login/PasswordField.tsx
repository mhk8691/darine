import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
interface Props {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  label?: string;
}
export default function PasswordField({ password, setPassword, label }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl
      variant="outlined"
      sx={{
        mt: 2.5,
        width: "100%",
        "& .MuiInputLabel-root": {
          color: "#C2C2BA",
          fontSize: {
            xs: "14px",
            sm: "16px",
          },
        },
      }}
    >
      <InputLabel htmlFor="outlined-adornment-password">
        {label || "رمز ورود"}
      </InputLabel>
      <OutlinedInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        sx={{
          fontSize: {
            xs: 14,
            sm: 16,
          },
          borderRadius: 2.5,
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 2.5,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#494949",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
