import priceFormater from '@/app/core/PriceFormater';
import { AssetsDataType } from '@/app/core/Types';
import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function MobileWalletStatus({
  visible,
  isDesktop,
  assets,
}: {
  visible: boolean;
  isDesktop: boolean;
  assets: AssetsDataType;
}) {
  return (
    <Stack direction={'row'} justifyContent={'center'}>
      <Stack
        direction={'row'}
        gap={2}
        alignItems="center"
        border={1}
        borderColor={'background.paper'}
        bgcolor={'background.default'}
        borderRadius={2.5}
        justifyContent={'center'}
        py={2}
        width={isDesktop ? '95%' : '100%'}
      >
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={0.5}
          width={'100%'}
        >
          {isDesktop && (
            <Image
              alt=""
              src={'/images/simple/goldWallet.svg'}
              width={26}
              height={100}
              style={{ height: 'auto' }}
            />
          )}
          <Typography
            variant="body1"
            fontSize={{
              xs: 10,
              sm: 12,
            }}
            sx={{ color: 'text.muted' }}
          >
            موجودی طلا
          </Typography>
          <Stack direction={'row'} gap={0.5} alignItems={'center'} fontWeight={500}>
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 16,
              }}
              sx={{ color: 'text.title' }}
            >
              {visible ? assets.gold_balance_gr : '***'}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                xs: 10,
                sm: 12,
              }}
              fontWeight={500}
              sx={{ color: 'text.title' }}
            >
              گرم
            </Typography>
          </Stack>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          gap={0.5}
        >
          {isDesktop && (
            <Image
              alt=""
              src={'/images/simple/irtWallet.svg'}
              width={26}
              height={100}
              style={{ height: 'auto' }}
            />
          )}
          <Typography
            variant="body1"
            fontSize={{
              xs: 10,
              sm: 12,
            }}
            sx={{ color: 'text.muted' }}
          >
            موجودی تومان
          </Typography>
          <Stack direction={'row'} gap={0.5} alignItems={'center'} fontWeight={500}>
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 16,
              }}
              sx={{ color: 'text.title' }}
            >
              {visible ? priceFormater(assets.toman_balance) : '***'}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                xs: 10,
                sm: 12,
              }}
              fontWeight={500}
              sx={{ color: 'text.title' }}
            >
              تومان
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
