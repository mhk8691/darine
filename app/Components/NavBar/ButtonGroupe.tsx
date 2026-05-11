'use client';
import {
  Badge,
  BadgeProps,
  Button,
  Divider,
  IconButton,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Notification from './Notification';
import ProfileBtn from './ProfileBtn';
import ToggleButton from './ToggleButton';
import { CartIcon, UserCircleIcon, UserIcon } from '../CustomIcons/CustomIcons';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 7,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
export default function ButtonGroupe() {
  const pathname = usePathname();
  const router = useRouter();
  const url = pathname.split('/')[1];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack
      direction={{
        xs: url === 'dashboard' ? 'row-reverse' : 'row',
        sm: 'row',
      }}
      gap={{
        xs: 0,
        md: url === 'dashboard' ? 1 : 0.5,
      }}
      alignItems={'center'}
    >
      {url === 'dashboard' && (
        <>
          <ProfileBtn />
          <Button
            variant="outlined"
            color="secondary"
            disableRipple
            onClick={() => router.push('http://silver.darine.shop/dashboard')}
            sx={{
              px: 1,
              border: 1,
              borderRadius: '5px',
              fontSize: {
                xs: 14,
                md: 16,
              },
              py: 1.2,
              '&:hover': {
                bgcolor: 'background.default',
              },
              whiteSpace: 'nowrap',
            }}
            size="small"
          >
            {isMobile ? 'نقره ' : ' ورود به نقره '}
          </Button>
        </>
      )}

      {url === 'dashboard' && <Notification />}
      <ToggleButton />

      {url !== 'dashboard' && (
        <>
          <IconButton
            disableRipple
            onClick={() => router.push('/dashboard/gold-receive')}
            sx={{ color: 'text.secondary' }}
          >
            <StyledBadge
              badgeContent={4}
              color="error"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <CartIcon />
            </StyledBadge>
          </IconButton>
          <Stack direction={'row'} alignItems={'center'}>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 35, borderColor: 'text.primary', mr: 1 }}
            />
          </Stack>
          <Link href={'/dashboard'}>
            {isDesktop ? (
              <IconButton>
                <UserCircleIcon />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="inherit"
                disableRipple
                sx={{
                  px: 3,
                  border: 1,
                  borderRadius: 2,
                  fontSize: 16,
                  py: 1.2,
                  '&:hover': {
                    background: 'rgb(16, 16, 15)',
                  },
                  fontWeight: 'bold',
                }}
                startIcon={<UserIcon />}
              >
                پنل کاربری
              </Button>
            )}
          </Link>
        </>
      )}
    </Stack>
  );
}
