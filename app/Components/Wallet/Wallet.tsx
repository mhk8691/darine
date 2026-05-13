'use client';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Containers/Container/Container';
import MobileWalletStatus from './MobileWalletStatus';
import ToggleEyeButton from './ToggleEyeButton';
import { AssetsDataType } from '@/app/core/Types';
import { getAssets } from '@/lib/getAssets/getAssets';
import priceFormater from '@/app/core/PriceFormater';
interface Props {
  type: 'dashboard' | 'wallet';
}
export default function Wallet({ type }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [visible, setVisible] = useState(false);
  const [assets, setAssets] = useState<AssetsDataType>({} as AssetsDataType);
  useEffect(() => {
    const getData = async () => {
      const response = await getAssets();
      setAssets(response);
    };
    getData();
  }, []);
  return (
    <Container
      style={{
        minHeight: {
          xs: 180,
          sm: 386,
        },
        pb:
          type === 'wallet'
            ? {
                xs: 0,
                sm: 4.5,
              }
            : 3,
        px: {
          sm: 2,
          lg: 4,
        },
        borderColor: {
          xs: 'background.default',
          sm: 'background.paper',
        },
      }}
    >
      {isDesktop && (
        <Typography variant="h6" fontSize={22} sx={{ color: 'text.primary', mb: 4 }}>
          کیف پول شما
        </Typography>
      )}

      <Stack
        px={
          type === 'wallet'
            ? {
                xs: 1,
                sm: 4.5,
                md: 0,
              }
            : 0
        }
      >
        <Stack
          sx={{
            height: '134px',
            bgcolor: 'background.paper',
            width: '100%',
            borderRadius: 2.5,
          }}
        >
          <Stack direction={'row'} justifyContent={'space-between'} p={2}>
            {type === 'dashboard' && <Stack></Stack>}
            <Stack direction={'column'} gap={1} alignItems={type === 'wallet' ? 'start' : 'center'}>
              <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
                ارزش کل دارایی
              </Typography>
              <Stack direction={'row'} gap={0.5} alignItems={'center'} fontWeight={500}>
                <Typography variant="body1" fontSize={20} sx={{ color: 'text.title' }}>
                  {visible ? priceFormater(assets.total_assets_value) : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: 'text.title' }}
                >
                  تومان
                </Typography>
              </Stack>
              {type === 'wallet' && (
                <Typography variant="body2" fontSize={10}>
                  ارزش دارایی مجموع دارایی طلا و دارایی نقدی شماست
                </Typography>
              )}
            </Stack>
            <Stack>
              <ToggleEyeButton visible={visible} setVisible={setVisible} />
            </Stack>
          </Stack>
          <MobileWalletStatus visible={visible} isDesktop={isDesktop} assets={assets} />
        </Stack>
        {type === 'wallet' && (
          <Stack
            mt={{
              xs: 10,
              sm: 14.5,
            }}
            direction={'row'}
            gap={2}
          >
            <Link href={'/dashboard/irt-transaction'} style={{ width: '100%' }}>
              <Stack
                bgcolor={'background.paper'}
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                borderRadius={'1.5rem'}
                sx={{ borderEndEndRadius: '6px', borderStartEndRadius: '6px' }}
                pl={0.2}
                py={0.2}
              >
                <Stack bgcolor={'background.default'} borderRadius={'50%'} p={1}>
                  <Image src={'/images/simple/deposit.svg'} alt="" width={30} height={30} />
                </Stack>
                <Typography variant="body2" fontSize={12} sx={{ color: 'text.title' }}>
                  واریز
                </Typography>
                <Stack></Stack>
              </Stack>
            </Link>
            <Link href={'/dashboard/irt-transaction'} style={{ width: '100%' }}>
              <Stack
                bgcolor={'background.paper'}
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                borderRadius={'1.5rem'}
                pl={0.2}
                py={0.2}
                sx={{ borderEndEndRadius: '6px', borderStartEndRadius: '6px' }}
              >
                <Stack bgcolor={'background.default'} borderRadius={'50%'} p={1}>
                  <Image src={'/images/simple/withdraw.svg'} alt="" width={30} height={30} />
                </Stack>
                <Typography variant="body2" fontSize={12} sx={{ color: 'text.title' }}>
                  برداشت
                </Typography>
                <Stack></Stack>
              </Stack>
            </Link>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
