'use client';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import {
  ArrowBottomIcon,
  BankCardIcon,
  FriendsIcon,
  PriceAlertIcon,
  UserFillIcon,
  UserIcon,
} from '../CustomIcons/CustomIcons';
import { getMe, logout, User } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '../Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import priceFormater from '@/app/core/PriceFormater';
import { AssetsDataType } from '@/app/core/Types';
import { getAssets } from '@/lib/getAssets/getAssets';
import { handleLogout } from '@/app/dashboard/profile/ChangePassword';
import { useAssets } from '@/app/AssetsProvider';
const options = [
  {
    title: 'پروفایل',
    link: '/dashboard/profile',
    icon: (
      <SvgIcon>
        <UserFillIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'کارت های بانکی',
    link: '/dashboard/bank-card',
    icon: (
      <SvgIcon>
        <BankCardIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'طلا فروش شو',
    link: '/dashboard/invite',
    icon: (
      <SvgIcon>
        <FriendsIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'آالارم قیمت',
    link: '/dashboard/price-alert',
    icon: (
      <SvgIcon fontSize="small">
        <PriceAlertIcon />
      </SvgIcon>
    ),
  },
];

export default function ProfileBtn() {
  const {assets} = useAssets()
  const router = useRouter()
  const [user, setUser] = React.useState<User | null>(null);
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleToggle = () => setOpen((prev) => !prev);
  const isDarkMode = theme.palette.mode == 'dark';

   const fetchUser = React.useCallback(async () => {
    try {
      const me = await getMe();
      setUser(me);
    } catch (error:unknown) {
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)

      }
      setUser(null);
    }
  }, []);
React.useEffect(()=>{
  fetchUser()
},[fetchUser])
  const handleClose = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node;

    if (wrapperRef.current?.contains(target)) return;

    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {!isMobile && (
          <>
            {isDownMd ? (
              <IconButton onClick={handleToggle}>
                <ArrowBottomIcon />
              </IconButton>
            ) : (
              <Button
                onClick={handleToggle}
                endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                variant="outlined"
                color="inherit"
                 
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  borderRadius: 2,
                  px: 1.5,
                  py: 1.2,
                  '&:hover': {
                    bgcolor: 'background.default',
                  },
                  whiteSpace: 'nowrap',
                  minWidth:'10rem',
                }}
                startIcon={<UserIcon />}
              >
              {user?.full_name}
              </Button>
            )}
          </>
        )}

        <Paper
          elevation={4}
          sx={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: {
              xs: '-175%',
              md: '0%',
            },
            minWidth:{
              xs:'13rem',
              md:'10rem'
            },
            width:'100%',
            overflow: 'hidden',
            background: isDarkMode ? '#111110' : '#FFFFFF',
            boxShadow: isDarkMode ? '0 0 5px #2E2C26' : 'none',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(-48px) scale(0.98)',
            pointerEvents: open ? 'auto' : 'none',
            transition: 'all .25s cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'top center',
            py: 1,
          }}
        >
          <Stack px={1}>
            <Stack
              bgcolor={'background.paper'}
              borderRadius={1}
              border={1}
              borderColor={'background.border'}
            >
              <Stack direction={'column'} gap={1} p={1}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }} fontSize={12}>
                  موجودی تومان:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {priceFormater(assets?.toman_balance)||0} تومان
                </Typography>
              </Stack>
              <Divider />
              <Stack direction={'column'} gap={1} p={1}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }} fontSize={12}>
                  موجودی طلا:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  {assets?.gold_balance_gr} گرم
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <MenuList>
            {options.map((option) => (
              <Box component={Link} href={option.link} key={option.title}>
                <MenuItem
                  onClick={() => setOpen(false)}
                  sx={{
                    px: 1.5,
                    '&:hover': {
                      background: 'background.paper',
                    },
                  }}
                >
                  <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Stack>{option.icon}</Stack>
                    <Typography variant="body2" fontWeight={600}>
                      {option.title}
                    </Typography>
                  </Stack>
                </MenuItem>
                <Divider />
              </Box>
            ))}
          </MenuList>
          <Stack px={1.5} direction={'column'} gap={1.5}>
            <Button
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/dashboard/irt-transaction"
               
              onClick={() => setOpen(false)}
            >
              افزایش اعتبار
            </Button>
            <Button variant="outlined" color="error"  onClick={async ()=>{
          const res = await handleLogout()
          if (res?.status === 200 || res?.status === 201){
            router.push('/login/login-password')
          }
        }}>
              خروج
            </Button>
          </Stack>
        </Paper>
      </div>
    </ClickAwayListener>
  );
}
