"use client";
import { Badge, BadgeProps, Button, Divider, IconButton, Stack, styled } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Notification from "./Notification";
import ProfileBtn from "./ProfileBtn";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 7,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function ButtonGroupe() {
  const pathname = usePathname();
  const router = useRouter();
  const url = pathname.split("/")[1];
  return (
    <Stack
      direction={"row"}
      gap={url === "dashboard" ? 1 : 0.5}
      alignItems={"center"}
    >
      {url === "dashboard" && (
        <>
          <ProfileBtn />
          <Button
            variant="outlined"
            color="secondary"
            disableRipple
            sx={{
              px: 1,
              border: 1,
              borderRadius: "5px",
              fontSize: 16,
              py: 1.2,
              "&:hover": {
                background: "rgb(16, 16, 15)",
              },
            }}
          >
            ورود به نقره سی
          </Button>
        </>
      )}

      {url === "dashboard" && <Notification />}

      {url !== "dashboard" && (
        <>
          <IconButton
            disableRipple
            onClick={() => router.push("/dashboard/gold-receive")}
            sx={{ color: "text.secondary" }}
          >
            <StyledBadge
              badgeContent={4}
              color="error"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 8.9481V7.81643C8.75 5.19143 10.8617 2.6131 13.4867 2.3681C16.6133 2.06477 19.25 4.52643 19.25 7.59477V9.20477"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.5022 25.6668H17.5022C22.1922 25.6668 23.0322 23.7885 23.2772 21.5018L24.1522 14.5018C24.4672 11.6552 23.6506 9.3335 18.6689 9.3335H9.33557C4.35391 9.3335 3.53724 11.6552 3.85224 14.5018L4.72724 21.5018C4.97224 23.7885 5.81224 25.6668 10.5022 25.6668Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18.0769 13.9998H18.0874"
                  stroke="currentColor"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.90896 13.9998H9.91944"
                  stroke="currentColor"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </StyledBadge>
          </IconButton>
          <Stack direction={"row"} alignItems={"center"}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 35, borderColor: "#EBEBE6", mr: 1 }}
            />
          </Stack>
          <Link href={"/dashboard"}>
            <Button
              variant="outlined"
              color="inherit"
              disableRipple
              sx={{
                px: 3,
                border: 1,
                borderRadius: 2,
                fontSize: 16,
                py: 1.2,
                "&:hover": {
                  background: "rgb(16, 16, 15)",
                },
                fontWeight: "bold",
              }}
              startIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0026 9.99935C12.3038 9.99935 14.1693 8.13387 14.1693 5.83268C14.1693 3.5315 12.3038 1.66602 10.0026 1.66602C7.70142 1.66602 5.83594 3.5315 5.83594 5.83268C5.83594 8.13387 7.70142 9.99935 10.0026 9.99935Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17.1604 18.3333C17.1604 15.1083 13.9521 12.5 10.0021 12.5C6.05208 12.5 2.84375 15.1083 2.84375 18.3333"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              }
            >
              پنل کاربری
            </Button>
          </Link>
        </>
      )}
    </Stack>
  );
}
