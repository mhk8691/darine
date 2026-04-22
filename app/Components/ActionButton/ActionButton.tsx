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
        border={{
          xs: 0,
          sm: 1,
        }}
        borderColor={{
          sm: "background.paper",
        }}
        borderRadius={2}
        width={"100%"}
        py={{
          xs: 0,
          sm: 2.5,
          md: 4,
        }}
        px={{
          xs: 1.5,
          md: 3,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={{xs:1,sm:2}}>
          {typeof icon === "string" ? (
            <Stack
              sx={{
                width: {
                  xs: 25,
                  sm: 35,
                },
                height: {
                  xs: 25,
                  sm: 35,
                },
              }}
            >
              <Image
                alt=""
                src={icon}
                width={35}
                height={35}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Stack>
          ) : (
            <Stack>{icon}</Stack>
          )}
          <Typography
            variant="h6"
            fontSize={{
              xs: 14,
              sm: 16,
              md: 20,
            }}
          >
            {title}
          </Typography>
        </Stack>
        <Stack>
          <ArrowBackIosNewIcon
            color="disabled"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "33px",
              },
            }}
          />
        </Stack>
      </Stack>
    </Link>
  );
}
