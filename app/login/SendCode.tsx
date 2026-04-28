import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SendCode() {
  const [time, setTime] = useState<number>(120);

  useEffect(() => {
    if (time <= 0) return;

    const interval: NodeJS.Timeout = setInterval(() => {
      setTime((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={{
        xs: 3,
        md: 6,
      }}
      mb={{
        xs: 0,
        md: 4,
      }}
    >
      {time != 0 ? (
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            md: 16,
          }}
          sx={{ color: "#ADADA9" }}
        >
          {formatTime(time)}
        </Typography>
      ) : (
        <Button
          variant="text"
          color="success"
          disableRipple
          onClick={() => setTime(120)}
          sx={{
            "&:hover": {
              bgcolor: "background.default",
            },
            fontSize: {
              xs: 12,
              md: 16,
            },
          }}
        >
          ارسال مجدد کد
        </Button>
      )}

      <Link href={"/login/forget"}>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              md: 14,
            }}
          >
            اصلاح شماره موبایل
          </Typography>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84055 2.39884L3.36722 8.19218C3.16055 8.41218 2.96055 8.84551 2.92055 9.14551L2.67389 11.3055C2.58722 12.0855 3.14722 12.6188 3.92055 12.4855L6.06722 12.1188C6.36722 12.0655 6.78722 11.8455 6.99389 11.6188L12.4672 5.82551C13.4139 4.82551 13.8406 3.68551 12.3672 2.29218C10.9006 0.912176 9.78722 1.39884 8.84055 2.39884Z"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.92676 3.36719C8.21342 5.20719 9.70676 6.61385 11.5601 6.80052"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 14.666H14"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Stack>
      </Link>
    </Stack>
  );
}
