"use client";

import { AnnouncementsType } from "@/app/core/Types";
import { ArrowForward } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  BadgeProps,
  Button,
  ClickAwayListener,
  Dialog,
  Fade,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import CustomTabs from "../Tabs/CustomTabs";
import MessageCard from "./MessageCard";
import { getAnnouncements, markAllRead } from "@/lib/announcements/announcements";
import { showSnackbar } from "../Snackbar/Snackbar";
import { isAxiosError } from "axios";
import Loading from "../Loading/Loading";

const tabs = [{ title: "اطلاعیه های دارینه" }];

type NotificationContentProps = {
  onClose: () => void;
  children: ReactNode;
    handleMarkReadAll:() => Promise<void>
  isLoading:boolean
};

const NotificationContent = ({
  onClose,
  children,
  isLoading,
  handleMarkReadAll
}: NotificationContentProps) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={1.5}
        pt={{
          xs: 2,
          sm: 1,
        }}
      >
        <Stack direction="row" alignItems="center">
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
            onClick={handleMarkReadAll}
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
           {isLoading ? <Loading size={30}/>:'خواندن همه'}
          </Button>
        </Stack>
      </Stack>

      <Stack px={1.5}>
        <CustomTabs
          style={{
            fontSize: "14px",
            fontWeight: "500",
            mb: 0.5,
          }}
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
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 7,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
export default function Notification() {
  const [open, setOpen] = useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading,setIsLoading] = useState(false)
  const isDarkMode = theme.palette.mode === 'dark'
  const [announcements, setAnnouncements] = useState<AnnouncementsType>({} as AnnouncementsType);
const handleMarkReadAll = async () => {
  try {
    setIsLoading(true);

    const response = await markAllRead();

    if (window.AndroidBridge) {
      window.AndroidBridge.updateUnreadCount(0);
    }

    const res = await getAnnouncements();
    setAnnouncements(res || ({} as AnnouncementsType));

    showSnackbar(response?.message || '', 'success');
    setOpen(false);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  } finally {
    setIsLoading(false);
  }
};
useEffect(() => {
  const getData = async () => {
    const response = await getAnnouncements();

    setAnnouncements(response || ({} as AnnouncementsType));

    if (window.AndroidBridge) {
      window.AndroidBridge.updateUnreadCount(response?.unread_count ?? 0);
    }
  };

  getData();
}, []);
  const tabContent = <MessageCard isLoading={isLoading} handleMarkReadAll={handleMarkReadAll} announcements={announcements}  />;

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (event?: MouseEvent | TouchEvent) => {
    const target = event?.target as Node;

    if (wrapperRef.current && target && wrapperRef.current.contains(target))
      return;

    setOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <IconButton onClick={handleToggle} disableRipple>
          {
            announcements.unread_count === 0 ?    <NotificationsIcon
            color="primary"
            sx={{
              fontSize: {
                xs: 25,
                sm: 30,
              },
            }}
          /> :<StyledBadge badgeContent={announcements.unread_count?.toString()} color="error">
            <NotificationsIcon
            color="primary"
            sx={{
              fontSize: {
                xs: 25,
                sm: 30,
              },
            }}
          />
          </StyledBadge>
          }
        </IconButton>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullScreen
          TransitionComponent={Fade}
          transitionDuration={300}
          PaperProps={{
            sx: {
              bgcolor: "background.default",
              backgroundImage: "none",
            },
          }}
        >
          <NotificationContent onClose={() => setOpen(false)} handleMarkReadAll={handleMarkReadAll} isLoading={isLoading}>
            {tabContent}
          </NotificationContent>
        </Dialog>
      </>
    );
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <IconButton onClick={handleToggle} disableRipple>
          {
            announcements.unread_count === 0 ? <NotificationsIcon
            color="primary"
            sx={{
              fontSize: {
                xs: 25,
                sm: 30,
              },
            }}
          /> :<StyledBadge badgeContent={announcements.unread_count?.toString()} color="error">
          <NotificationsIcon
            color="primary"
            sx={{
              fontSize: {
                xs: 25,
                sm: 30,
              },
            }}
          />
          </StyledBadge>
          }
             
        </IconButton>

        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: "-50%",
            width: 320,
            overflow: "auto",
            background: isDarkMode ? "#10100F":'#FFFFFF',
            boxShadow:  `0 0 10px ${isDarkMode ? '#292926' : '#EFEEEC'}`,
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: "all .1s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "top right",
            pt: 1,
            px: 1.5,
            
          }}
        >
          <Typography variant="body1" fontSize={16} fontWeight={500}>
            پیام ها
          </Typography>

          <CustomTabs
            style={{
              fontSize: "14px",
              fontWeight: "500",
              mb: 0.5,
            }}
            tabsStyle={{ px: 0 }}
            noPadding
            lineHeight="6px"
            tabList={tabs}
          >
            {tabContent}
          </CustomTabs>
        </Paper>
      </div>
    </ClickAwayListener>
  );
}