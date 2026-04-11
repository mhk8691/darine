import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface ActionButtonType {
  title: string;
  icon: ReactNode | string;
  link: string;
}
export default function ActionButton({ title, icon, link }: ActionButtonType) {
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
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          {typeof icon === "string" ? (
            <Image
              alt=""
              src={icon}
              width={35}
              height={35}
              style={{
                
              }}
            />
          ) : (
            <Stack>{icon}</Stack>
          )}
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
