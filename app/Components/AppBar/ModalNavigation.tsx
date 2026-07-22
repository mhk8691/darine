import { ArrowForward, Close } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Chip,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import CustomModal from '../CustomModal/CustomModal';
import { AppbarItemsType } from '@/app/core/Types';
import ShieldMoonRoundedIcon from "@mui/icons-material/ShieldMoonRounded";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemsType {
  title: string;
  navigation: AppbarItemsType[];
}

// توجه: باید در فایل Types، فیلد comingSoon به AppbarItemsType اضافه بشه
// export interface AppbarItemsType {
//   name: string;
//   image: string;
//   link: string;
//   comingSoon?: boolean;
// }

const items: ItemsType[] = [
  {
    title: 'سفارش',
    navigation: [
      {
        name: 'خرید و فروش',
        image: '/trade-active-dark.svg',
        link: '/trades',
        comingSoon: false,
      },
      {
        name: 'سفارش با قیمت',
        image: '/limitOrder-active-dark.svg',
        link: '/limit-order',
        comingSoon: false, 
      },
      {
        name: 'سفارش تعهدی',
        image: '/marginOrder-active-dark.svg',
        link: '/margin-trade',
        comingSoon: false,
      },
    ],
  },
  {
    title: 'کیف پول',
    navigation: [
      {
        name: 'دارایی ها',
        image: '/wallet-active-dark.svg',
        link: '/wallet',
        comingSoon: false,
      },
      {
        name: 'واریز و برداشت',
        image: '/irtTransaction-active-dark.svg',
        link: '/irt-transaction',
        comingSoon: false,
      },
      {
        name: 'کارت های بانکی',
        image: '/irtTransaction-active-dark.svg',
        link: '/bank-card',
        comingSoon: false, 
      },
    ],
  },
  {
    title: 'امکانات',
    navigation: [
      {
        name: 'خرید اقساطی',
        image: '/credit-active-dark.svg',
        link: '/credit-menu',
        comingSoon: false,
      },
      {
        name: 'اعتبار خرید کالا',
        image: '/loan-active-dark.svg',
        link: '/loan',
        comingSoon: false, 
      },
      {
        name: 'تحویل فیزیکی',
        image: '/shop-active-dark.svg',
        link: '/gold-receive',
        comingSoon: false,
      },
      {
        name: 'کارت هدیه',
        image: '/giftCard-active-dark.svg',
        link: '/gift-card-menu',
        comingSoon: false, 
      },
      {
        name: 'پس انداز خودکار',
        image: '/automatic-active-dark.svg',
        link: '/automatic-investment',
        comingSoon: false,
      },
      {
        name: 'آلارم قیمت',
        image: '/priceAlert-active-dark.svg',
        link: '/price-alert',
        comingSoon: false,
      },
       {
        name: 'سرمایه گذاری',
        image: '/staking-active.svg',
        link: '/staking',
        comingSoon: false,
      },
         {
        name: 'تضمین قیمت',
        image: '/shield.png',
        link: '/insurance',
        comingSoon: false,
      },
    ],
  },
  {
    title: 'سایر',
    navigation: [
      {
        name: 'گزارش ها',
        image: '/reports-active-dark.svg',
        link: '/reports',
        comingSoon: false,
      },
      {
        name: 'طلا فروش شو',
        image: '/invite-active-dark.svg',
        link: '/invite',
        comingSoon: false, 
      },
      {
        name: 'پروفایل',
        image: '/profile-active-dark.svg',
        link: '/profile',
        comingSoon: false,
      },
      {
        name: 'تیکت',
        image: '/support.png',
        link: '/tickets',
        comingSoon: false,
      },
    ],
  },
];

const Content = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const router = useRouter();

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{
          xs: 1,
          sm: 0,
        }}
      >
        <IconButton onClick={() => setOpen(false)}>
          <Close
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          />
          <ArrowForward
            sx={{
              display: {
                sm: 'none',
              },
            }}
          />
        </IconButton>
        <Typography
          variant="body2"
          fontSize={{
            xs: 16,
            sm: 18,
          }}
        >
          منو
        </Typography>
        <Stack></Stack>
      </Stack>

      <Stack direction={'column'} gap={1.5}>
        {items.map((item, index) => (
          <Stack key={item.title}>
            <Stack
              direction={'column'}
              gap={{
                xs: 1.5,
                sm: 1,
              }}
            >
              <Typography
                variant="body1"
                fontSize={{
                  xs: 16,
                  sm: 18,
                }}
              >
                {item.title}
              </Typography>
              <Grid
                container
                spacing={{
                  xs: 1,
                  sm: 2,
                }}
              >
                {item.navigation.map((navigate) => (
                  <Grid
                    size={4}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    key={navigate.name}
                    py={1}
                    px={1.5}
                    component={'div'}
                    onClick={() => {
                      if (!navigate.comingSoon) {
                        router.push(`/dashboard${navigate.link}`);
                        setOpen(false);
                      }
                    }}
                    sx={{
                      cursor: navigate.comingSoon ? 'default' : 'pointer',
                      position: 'relative',
                      opacity: navigate.comingSoon ? 0.6 : 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        opacity: navigate.comingSoon ? 0.6 : 0.8,
                        transform: navigate.comingSoon ? 'none' : 'scale(1.02)',
                      },
                    }}
                  >
                    <Stack direction={'column'} alignItems={'center'} gap={1.5}>
                      <Image
                        src={`/images/appbar${navigate.image}`}
                        alt=""
                        width={30}
                        height={30}
                      />
                      <Typography
                        variant="body1"
                        fontSize={{
                          xs: 12,
                          sm: 14,
                        }}
                        fontWeight={500}
                        sx={{ whiteSpace: 'nowrap' }}
                      >
                        {navigate.name}
                      </Typography>

                      {/* نشانگر "به زودی" */}
                      {navigate.comingSoon && (
                        <Chip
                          label="به زودی"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            backgroundColor: '#FF6B6B',
                            color: 'white',
                            fontSize: '10px',
                            height: '20px',
                            fontWeight: 'bold',
                            '& .MuiChip-label': {
                              px: 1,
                            },
                          }}
                        />
                      )}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            {index !== items.length - 1 && <Divider sx={{ mt: 1.5 }} />}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default function ModalNavigation({ open, setOpen }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={{ enter: 300, exit: 300 }}
        PaperProps={{
          sx: {
            width: '100vw',
            p: 2,
            background: isDarkMode ? 'rgb(1,1,1,1)' : 'rgb(255,255,255,1)',
          },
        }}
      >
        <Content setOpen={setOpen} />
      </Drawer>
    );
  }

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      modalStyle={{
        height: '65%',
        overflow: 'auto',
        px: 5,
        pb: 2,
      }}
    >
      <Content setOpen={setOpen} />
    </CustomModal>
  );
}