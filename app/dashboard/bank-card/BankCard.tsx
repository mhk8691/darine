"use client";
import Card from "@/app/Components/Card/Card";
import { Stack, Typography, IconButton, SvgIcon } from "@mui/material";
import Image from "next/image";

export default function BankCard() {
  return (
    <Card style={{ px: 2, py: 3 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Image
            src={"/images/simple/mellat.svg"}
            alt={""}
            width={36}
            height={36}
          />
          <Typography variant="body2" fontSize={16} sx={{ color: "#C2C2BA" }}>
            بانک ملت
          </Typography>
        </Stack>
        <Stack>
          <IconButton disableRipple onClick={() => {}}>
            <SvgIcon fontSize="small" sx={{ color: "#C2C2BA" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14.1344 6.85547L13.6469 14.408C13.5644 15.5855 13.4969 16.5005 11.4044 16.5005H6.58937C4.49687 16.5005 4.42938 15.5855 4.34688 14.408L3.85938 6.85547"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.75 12.375H10.2475"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.125 9.375H10.875"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </SvgIcon>
          </IconButton>
        </Stack>
      </Stack>
      <Stack mt={2}>
        <Typography variant="body2" fontSize={18} sx={{ color: "text.title" }}>
          ۶۱۰۴ ۳۳۱۰ ۸۶۲۹ ۲۰۵۰
        </Typography>
        <Typography variant="body2" fontSize={18} sx={{ color: "text.title" }}>
          IR۸***۰۳۰۹۰۶۹۷۶۸۷
        </Typography>
      </Stack>
    </Card>
  );
}
