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
      sx={{
        borderRadius: 2.5,
        py: 3,
        px: 4,

        ...style,
      }}
    >
      {children}
    </Stack>
  );
}
