"use client";
import { NotifItemsType } from "@/app/core/Types";
import {
  Button,
  ClickAwayListener,
  Dialog,
  Fade,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { ReactNode } from "react";
import CustomTabs from "../Tabs/CustomTabs";
import MessageCard from "./MessageCard";
import { ArrowForward } from "@mui/icons-material";

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
];

const children: ReactNode[] = [
  <MessageCard items={notifList} isNotif key={1} />,
  <MessageCard items={notifList} key={2} />,
];

const NotificationContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={1.5}
        pt={{
          xs: 2,
          sm: 1,
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton onClick={onClose} disableRipple>
            <ArrowForward sx={{ color: "text.subtitle" }} />
          </IconButton>
          <Typography variant="body1" fontSize={16} fontWeight={500}>
            پیام ها
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          fontSize={16}
          fontWeight={500}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          پیام ها
        </Typography>
        <Stack
          width={{
            xs: "auto",
            sm: 40,
          }}
        >
          <Button
            disableRipple
            variant="outlined"
            color="inherit"
            size="small"
            sx={{
              py: 0.75,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "background.default",
              },
              display: {
                sm: "none",
              },
            }}
          >
            خواندن همه
          </Button>
        </Stack>
      </Stack>
      <Stack px={1.5}>
        <CustomTabs
          style={{ fontSize: "14px", fontWeight: "500", mb: 0.5 }}
          tabsStyle={{ px: 0 }}
          noPadding
          lineHeight="6px"
          tabList={tabs}
        >
          {children}
        </CustomTabs>
      </Stack>
    </>
  );
};

export default function Notification() {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDarkMode = theme.palette.mode === "dark";
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (event?: MouseEvent | TouchEvent) => {
    const target = event?.target as Node;

    if (wrapperRef.current && wrapperRef.current.contains(target)) return;

    setOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <IconButton onClick={handleToggle} disableRipple>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0223 3.63672C10.8848 3.63672 7.5223 6.99922 7.5223 11.1367V14.7492C7.5223 15.5117 7.1973 16.6742 6.8098 17.3242L5.3723 19.7117C4.4848 21.1867 5.0973 22.8242 6.7223 23.3742C12.1098 25.1742 17.9223 25.1742 23.3098 23.3742C24.8223 22.8742 25.4848 21.0867 24.6598 19.7117L23.2223 17.3242C22.8473 16.6742 22.5223 15.5117 22.5223 14.7492V11.1367C22.5223 7.01172 19.1473 3.63672 15.0223 3.63672Z"
              fill="#FDE378"
              stroke="#575753"
              strokeWidth="1.6875"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
            <path
              d="M17.3398 3.99883C16.9523 3.88633 16.5523 3.79883 16.1398 3.74883C14.9398 3.59883 13.7898 3.68633 12.7148 3.99883C13.0773 3.07383 13.9773 2.42383 15.0273 2.42383C16.0773 2.42383 16.9773 3.07383 17.3398 3.99883Z"
              stroke="#575753"
              strokeWidth="1.6875"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.7734 23.8262C18.7734 25.8887 17.0859 27.5762 15.0234 27.5762C13.9984 27.5762 13.0484 27.1512 12.3734 26.4762C11.6984 25.8012 11.2734 24.8512 11.2734 23.8262"
              stroke="#575753"
              strokeWidth="1.6875"
              strokeMiterlimit="10"
            ></path>
          </svg>
        </IconButton>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullScreen
          TransitionComponent={Fade}
          transitionDuration={300}
          PaperProps={{
            sx: {
              background: isDarkMode ? "#111110" : "#FFFFFF",
              backgroundImage: "none",
            },
          }}
        >
          <NotificationContent onClose={() => setOpen(false)} />
        </Dialog>
      </>
    );
  }

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
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0223 3.63672C10.8848 3.63672 7.5223 6.99922 7.5223 11.1367V14.7492C7.5223 15.5117 7.1973 16.6742 6.8098 17.3242L5.3723 19.7117C4.4848 21.1867 5.0973 22.8242 6.7223 23.3742C12.1098 25.1742 17.9223 25.1742 23.3098 23.3742C24.8223 22.8742 25.4848 21.0867 24.6598 19.7117L23.2223 17.3242C22.8473 16.6742 22.5223 15.5117 22.5223 14.7492V11.1367C22.5223 7.01172 19.1473 3.63672 15.0223 3.63672Z"
                fill="#FDE378"
                stroke="#575753"
                strokeWidth="1.6875"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M17.3398 3.99883C16.9523 3.88633 16.5523 3.79883 16.1398 3.74883C14.9398 3.59883 13.7898 3.68633 12.7148 3.99883C13.0773 3.07383 13.9773 2.42383 15.0273 2.42383C16.0773 2.42383 16.9773 3.07383 17.3398 3.99883Z"
                stroke="#575753"
                strokeWidth="1.6875"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.7734 23.8262C18.7734 25.8887 17.0859 27.5762 15.0234 27.5762C13.9984 27.5762 13.0484 27.1512 12.3734 26.4762C11.6984 25.8012 11.2734 24.8512 11.2734 23.8262"
                stroke="#575753"
                strokeWidth="1.6875"
                strokeMiterlimit="10"
              ></path>
            </svg>
          </IconButton>
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: "-50%",
              width: "320px",
              overflow: "hidden",
              background: isDarkMode ? "#111110" : "#FFFFFF",
              boxShadow: isDarkMode ? "0 0 5px #2E2C26" : "none",
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
