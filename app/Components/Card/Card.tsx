import { Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";
interface Props {
  style?: SxProps;
  children: ReactNode;
}
export default function Card({ style, children }: Props) {
  return (
    <Stack
      bgcolor={"background.default"}
      border={1}
      direction={"column"}
      borderColor={"background.paper"}
      gap={1}
      sx={{
        p: 2.5,
        width: "100%",
        borderRadius: 3,

        ...style,
      }}
    >
      {children}
    </Stack>
  );
}
