"use client";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { Box, Button, SvgIcon } from "@mui/material";

export default function BotButton() {
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
    <Button
      variant="outlined"
      color="inherit"
      sx={{
        fontSize: 20,
        py: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        width: "100%",
        borderRadius: 2,
      }}
      onClick={handleClick}
    >
      <SvgIcon>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.832 15.6346V19.1346C19.832 23.8013 17.9654 25.668 13.2987 25.668H8.86536C4.1987 25.668 2.33203 23.8013 2.33203 19.1346V14.7013C2.33203 10.0346 4.1987 8.16797 8.86536 8.16797H12.3654"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.8339 15.6346H16.1005C13.3005 15.6346 12.3672 14.7013 12.3672 11.9013V8.16797L19.8339 15.6346Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.5352 2.33203H18.2018"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.16797 5.83203C8.16797 3.89536 9.7313 2.33203 11.668 2.33203H14.7246"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M25.669 9.33203V16.5537C25.669 18.362 24.199 19.832 22.3906 19.832"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M25.668 9.33203H22.168C19.543 9.33203 18.668 8.45703 18.668 5.83203V2.33203L25.668 9.33203Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SvgIcon>

      <Box component={"span"}>کپی لینک ربات</Box>
    </Button>
  );
}
