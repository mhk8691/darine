import InputField from "@/app/Components/InputField/InputField";
import { Grid, SxProps } from "@mui/material";
import React, { useState } from "react";

const inputStyle: SxProps = {
  width: "100%",
  "& .MuiInputBase-input": {
    textAlign: "left",
  },
};

export default function NewAddress() {
  const [address, setAddress] = useState("تست");
  const [plaque, setPlaque] = useState("");
  const [unit, setUnit] = useState("");
  const [postCode, setPostCode] = useState("");
  return (
    <Grid container spacing={2} width={"100%"}>
      <Grid size={12}>
        <InputField
          placeholder="آدرس محل تحویل"
          value={address}
          setValue={setAddress}
          style={inputStyle}
        />
      </Grid>
      <Grid size={6}>
        <InputField
          placeholder="پلاک"
          value={plaque}
          setValue={setPlaque}
          style={inputStyle}
        />
      </Grid>
      <Grid size={6}>
        <InputField
          placeholder="واحد"
          value={unit}
          setValue={setUnit}
          style={inputStyle}
        />
      </Grid>
      <Grid size={12}>
        <InputField
          placeholder="کد پستی"
          value={postCode}
          setValue={setPostCode}
          style={inputStyle}
        />
      </Grid>
    </Grid>
  );
}
