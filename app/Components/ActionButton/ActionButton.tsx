import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  title: string;
  icon: ReactNode;
  link: string;
}
export default function ActionButton({ title, icon, link }: Props) {
  return (
    <Link href={link}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={1}
        borderColor={"background.paper"}
        borderRadius={2}
        width={"100%"}
        py={4}
        px={3}
      >
        <Stack direction={"row"} alignItems={"center"} gap={0.5}>
          {icon}
          <Typography variant="h6" fontSize={20}>
            {title}
          </Typography>
        </Stack>
        <Stack>
          <ArrowBackIosNewIcon color="disabled" sx={{ fontSize: "33px" }} />
        </Stack>
      </Stack>
    </Link>
  );
}
