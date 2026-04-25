"use client";

import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { Stack, SvgIcon, Typography } from "@mui/material";

export default function RefralButton() {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://t.me/talaseaBot?start=WOmMQhRxxr",
      );
      showSnackbar("کپی شد", true);
    } catch (err) {
      console.error("failed to copy", err);
    }
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={{
        xs: "100%",
        sm: 320,
      }}
      bgcolor={"background.paper"}
      px={{
        xs: 2,
        sm: 4,
      }}
      py={{
        xs: 1,
        sm: 1.5,
      }}
      borderRadius={2}
      mt={3}
      component={"div"}
      sx={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <SvgIcon color="primary">
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.168 11.1666V13.6666C14.168 17 12.8346 18.3333 9.5013 18.3333H6.33464C3.0013 18.3333 1.66797 17 1.66797 13.6666V10.5C1.66797 7.16665 3.0013 5.83331 6.33464 5.83331H8.83464"
              stroke="currentColor"
              stroke-width="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M14.1693 11.1666H11.5026C9.5026 11.1666 8.83594 10.5 8.83594 8.49998V5.83331L14.1693 11.1666Z"
              stroke="currentColor"
              stroke-width="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.66797 1.66669H13.0013"
              stroke="currentColor"
              stroke-width="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5.83203 4.16669C5.83203 2.78335 6.9487 1.66669 8.33203 1.66669H10.5154"
              stroke="currentColor"
              stroke-width="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.3339 6.66669V11.825C18.3339 13.1167 17.2839 14.1667 15.9922 14.1667"
              stroke="currentColor"
              stroke-width="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.332 6.66669H15.832C13.957 6.66669 13.332 6.04169 13.332 4.16669V1.66669L18.332 6.66669Z"
              stroke="currentColor"
              stroke-width="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </SvgIcon>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary" }}
          fontSize={{
            xs: 14,
            sm: 18,
          }}
        >
          کپی کد
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        fontSize={{
          xs: 14,
          sm: 20,
        }}
      >
        WuxwOhzW
      </Typography>
    </Stack>
  );
}
