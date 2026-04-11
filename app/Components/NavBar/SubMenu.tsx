"use client";
import { MenuType } from "@/app/core/Types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface Props {
  item: MenuType;
}
export default function SubMenu({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      component={"div"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{
        position: "relative",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <Stack
        direction="row"
        gap={0.5}
        alignItems="center"
        sx={{ cursor: "pointer" ,py:2}}
        
      >
        <Typography>{item.title}</Typography>
        <KeyboardArrowDownIcon />
      </Stack>

        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            minWidth: "200%",
            overflow: "hidden",
            background: "rgb(17, 17, 16)",
            boxShadow: "0 0 5px #2E2C26",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "top center",
            p: 2,
          }}
        >
          <Stack direction={"column"} gap={2}>
            {item.subMenu?.map((link,index) => (
              <Link href={link.link || ""} key={index}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Paper>
    </Stack>
  );
}
