"use client";
import { NotifItemsType } from "@/app/core/Types";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  ClickAwayListener,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import CustomTabs from "../Tabs/CustomTabs";
import MessageCard from "./MessageCard";
const tabs = [
  { title: "اعلان های من", count: 5 },
  { title: "اطلاعیه های دارینه" },
];
const notifList: NotifItemsType[] = [
  {
    title: "ورود به حساب کاربری",
    message:
      "محمدحسين کابلي عزیز، ورود شما با موفقیت انجام شد. IP دستگاه: 5.202.35.54 در صورت مشاهده ورود غیرمجاز،به پشتیبانی مراجعه کنید.",
    date: "1405/01/27 16:20:56",
  },
  {
    title: "ثبت رمز عبور",
    message:
      "محمدحسين کابلي عزیز، رمز عبور شما با موفقیت ثبت شد. در صورت مشاهده فعالیت غیرمجاز، لطفاً به پشتیبانی مراجعه کنید.",
    date: "1405/01/27 15:31:36",
  },
  {
    title: "ثبت رمز عبور",
    message:
      "محمدحسين کابلي عزیز، رمز عبور شما با موفقیت ثبت شد. در صورت مشاهده فعالیت غیرمجاز، لطفاً به پشتیبانی مراجعه کنید.",
    date: "1405/01/27 15:31:36",
  },
  {
    title: "ثبت رمز عبور",
    message:
      "محمدحسين کابلي عزیز، رمز عبور شما با موفقیت ثبت شد. در صورت مشاهده فعالیت غیرمجاز، لطفاً به پشتیبانی مراجعه کنید.",
    date: "1405/01/27 15:31:36",
  },
  {
    title: "ثبت رمز عبور",
    message:
      "محمدحسين کابلي عزیز، رمز عبور شما با موفقیت ثبت شد. در صورت مشاهده فعالیت غیرمجاز، لطفاً به پشتیبانی مراجعه کنید.",
    date: "1405/01/27 15:31:36",
  },
];
const children: ReactNode[] = [
  <MessageCard items={notifList} isNotif key={1} />,
  <MessageCard items={notifList} key={2} />,
];
export default function Notification() {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (event) => {
    if (wrapperRef.current?.contains(event.target)) return;
    setOpen(false);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div
          ref={wrapperRef}
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <IconButton onClick={handleToggle} disableRipple>
            <NotificationsIcon
              fontSize="large"
              sx={{
                color: "primary.light",
              }}
            />
          </IconButton>
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: "-80%",
              width: "320px",
              overflow: "hidden",
              background: "#111110",
              boxShadow: "0 0 5px #2E2C26",
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transition: "all .1 cubic-bezier(0.4, 0, 0.2, 1)",
              transformOrigin: "top right",
              pt: 1,
              px: 1.5,
            }}
          >
            <Typography variant="body1" fontSize={16} fontWeight={500}>
              پیام ها
            </Typography>
            <CustomTabs
              style={{ fontSize: "14px", fontWeight: "500", mb: 0.5 }}
              tabsStyle={{ px: 0 }}
              noPadding
              lineHeight="6px"
              tabList={tabs}
            >
              {children}
            </CustomTabs>
          </Paper>
        </div>
      </ClickAwayListener>
    </>
  );
}
