import { Stack } from "@mui/material";
import Test from "./Test";

export default function page() {
  return (
    <Stack
      width={"100%"}
      height={"150vh"}
      bgcolor={"background.paper"}
      justifyContent={"center"}
      direction={"row"}
      alignItems={"center"}
    >
      <Test />
    </Stack>
  );
}
