"use client";
import Card from "@/app/Components/Container/Container";
import InputField from "@/app/Components/InputField/InputField";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function PriceAlert() {
  const [value, setValue] = useState<number | null>(null);
  const [active, setActive] = React.useState("one-time");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive((event.target as HTMLInputElement).value);
  };
  return (
    <Card >
      <Typography variant="h6" fontSize={22}>
        آلارم قیمت
      </Typography>
      <Typography
        variant="body1"
        fontSize={18}
        sx={{ color: "text.secondary", mt: 2 }}
      >
        با تعیین آلارم قیمت، در صورت رسیدن قیمت طلا به مقدار دلخواهتان، بلافاصله
        از طریق اعلان مطلع خواهید شد.
      </Typography>
      <Stack sx={{ mt: 3.1 }}>
        <InputField
          placeholder="مبلغ به تومان"
          title="تومان"
          value={value}
          setValue={setValue}
        />
      </Stack>
      <Stack direction={"column"} gap={1} mt={5}>
        <Typography variant="h6" fontSize={18} sx={{ color: "text.secondary" }}>
          زمانبندی اعلان:
        </Typography>
        <FormControl>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={active}
            onChange={handleChange}
            sx={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <FormControlLabel
              value="one-time"
              control={<Radio disableRipple disableTouchRipple />}
              label="فقط یکبار اطلاع بده"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: 18,
                },
              }}
            />
            <FormControlLabel
              value="every-time"
              control={<Radio disableRipple disableTouchRipple />}
              label="هربار اطلاع بده"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: 18,
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: 20,
          py: 1,
          mt: 6,
        }}
      >
        فعال کردن آلارم
      </Button>
    </Card>
  );
}
