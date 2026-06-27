'use client';
import { NotifItemsType } from '@/app/core/Types';
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
} from '@mui/material';
import React, { ReactNode } from 'react';
import CustomTabs from '../Tabs/CustomTabs';
import MessageCard from './MessageCard';
import { ArrowForward } from '@mui/icons-material';
import { NotificationIcon } from '../CustomIcons/CustomIcons';

const tabs = [ { title: 'اطلاعیه های دارینه' }];

const notifList: NotifItemsType[] = [
  {
    title: 'ورود به حساب کاربری',
    message:
      'محمدحسين کابلي عزیز، ورود شما با موفقیت انجام شد. IP دستگاه: 5.202.35.54 در صورت مشاهده ورود غیرمجاز،به پشتیبانی مراجعه کنید.',
    date: '1405/01/27 16:20:56',
  },
  {
    title: 'ثبت رمز عبور',
    message:
      'محمدحسين کابلي عزیز، رمز عبور شما با موفقیت ثبت شد. در صورت مشاهده فعالیت غیرمجاز، لطفاً به پشتیبانی مراجعه کنید.',
    date: '1405/01/27 15:31:36',
  },
];

const children: ReactNode[] = [
  <MessageCard items={notifList} key={1} />,
];

const NotificationContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={1.5}
        pt={{
          xs: 2,
          sm: 1,
        }}
      >
        <Stack direction={'row'} alignItems={'center'}>
          <IconButton onClick={onClose}  >
            <ArrowForward sx={{ color: 'text.subtitle' }} />
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
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          پیام ها
        </Typography>
        <Stack
          width={{
            xs: 'auto',
            sm: 40,
          }}
        >
          <Button
             
            variant="outlined"
            color="inherit"
            size="small"
            sx={{
              py: 0.75,
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'background.default',
              },
              display: {
                sm: 'none',
              },
            }}
          >
            خواندن همه
          </Button>
        </Stack>
      </Stack>
      <Stack px={1.5}>
        <CustomTabs
          style={{ fontSize: '14px', fontWeight: '500', mb: 0.5 }}
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
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
        <IconButton onClick={handleToggle}  >
          <NotificationIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullScreen
          TransitionComponent={Fade}
          transitionDuration={300}
          PaperProps={{
            sx: {
              background: isDarkMode ? '#111110' : '#FFFFFF',
              backgroundImage: 'none',
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
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <IconButton onClick={handleToggle}  >
            <NotificationIcon />
          </IconButton>
          <Paper
            elevation={4}
            sx={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: '-50%',
              width: '320px',
              overflow: 'hidden',
              background: isDarkMode ? '#111110' : '#FFFFFF',
              boxShadow: isDarkMode ? '0 0 5px #2E2C26' : 'none',
              opacity: open ? 1 : 0,
              pointerEvents: open ? 'auto' : 'none',
              transition: 'all .1 cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'top right',
              pt: 1,
              px: 1.5,
            }}
          >
            <Typography variant="body1" fontSize={16} fontWeight={500}>
              پیام ها
            </Typography>
            <CustomTabs
              style={{ fontSize: '14px', fontWeight: '500', mb: 0.5 }}
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
