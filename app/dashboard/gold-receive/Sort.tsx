"use client";
import { CartIcon } from "@/app/Components/CustomIcons/CustomIcons";
import FilterButton from "@/app/Components/Tables/DetailTable/FilterButton";
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
          <CartIcon/>
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}
