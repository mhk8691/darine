"use client";
import FilterButton from "@/app/Components/OrderDetail/FilterButton";
import { Badge, BadgeProps, IconButton, Stack, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Sort() {
  const [active, setActive] = useState<number | null>(1);
  const router = useRouter()
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={3}
    >
      <Stack direction={"row"} gap={1.5}>
        <FilterButton
          active={active}
          setActive={setActive}
          item={{
            title: "۱۸ عیار",
            id: 1,
            value: "18",
          }}
        />
        <FilterButton
          active={active}
          setActive={setActive}
          item={{
            title: "۲۴ عیار",
            id: 2,
            value: "24",
          }}
        />
        <FilterButton
          active={active}
          setActive={setActive}
          item={{
            title: "پارسیان",
            id: 3,
            value: "parsian",
          }}
        />
      </Stack>
      <IconButton onClick={()=>router.push('/gold-shop-basket')}>
        <StyledBadge badgeContent="3" color="error">
          <svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 6.39167V5.58334C6.25 3.70834 7.75833 1.86667 9.63333 1.69167C11.8667 1.47501 13.75 3.23334 13.75 5.42501V6.57501"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.50327 18.3333H12.5033C15.8533 18.3333 16.4533 16.9916 16.6283 15.3583L17.2533 10.3583C17.4783 8.32496 16.8949 6.66663 13.3366 6.66663H6.66994C3.11161 6.66663 2.52827 8.32496 2.75327 10.3583L3.37827 15.3583C3.55327 16.9916 4.15327 18.3333 7.50327 18.3333Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12.9121 10H12.9196"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.07615 10H7.08364"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}
