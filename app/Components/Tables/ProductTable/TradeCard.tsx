import priceFormater from '@/app/core/PriceFormater';
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import CircleAnimation from '../../CircleAnimation/CircleAnimation';
import Container from '../../Containers/Container/Container';
interface Props {
  isDetail: boolean;
}
export default function TradeCard({ isDetail }: Props) {
  return (
    <Container
      style={{
        py: 1.5,
        px: 2,
        border: 1,
        borderColor: 'primary.light',
        bgcolor: 'background.paper',
        width: {
          xs: '100%',
          sm: isDetail ? '100%' : '307px',
          md: isDetail ? '100%' : '50%',
        },
        height: '100%',
      }}
    >
      <Stack
        direction={isDetail ? 'row-reverse' : 'column'}
        justifyContent={isDetail ? 'space-between' : 'center'}
        alignItems={isDetail ? 'center' : 'flex-start'}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={!isDetail ? '100%' : 'fit-conetent'}
        >
          <Typography variant="body2" sx={{ color: 'text.subtitle' }} fontSize={10}>
            ۱۶:۳۷:۲۲ - ۲۵ فروردین ۱۴۰۵
          </Typography>
          {!isDetail && (
            <Stack>
              <CircleAnimation type="red" />
            </Stack>
          )}
        </Stack>

        <Stack direction={'row'} gap={1.5} alignItems={'center'}>
          {isDetail && (
            <Stack>
              <CircleAnimation type="red" />
            </Stack>
          )}
          <Typography
            variant="body2"
            sx={{ color: 'text.muted', mt: isDetail ? 0 : 1.5 }}
            fontSize={14}
          >
            قیمت لحظه‌ای طلا ۱۸ عیار(گرم)
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={'row'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        mb={isDetail ? 1.5 : 0}
      >
        <Typography variant="body2" sx={{ color: 'text.title', mt: 1.5 }} fontSize={20}>
          {priceFormater(17785000)}{' '}
          <Box component={'span'} fontSize={16}>
            تومان
          </Box>
        </Typography>
        <Stack direction={isDetail ? 'row' : 'column'} gap={1} alignItems={'center'}>
          <Typography variant="body2" fontSize={10} sx={{ color: '#75751' }}>
            (۲۴ ساعت)
          </Typography>
          <Stack bgcolor={'#691818'} color={'#D12F2F'} borderRadius={1.5} px={1} py={0.5}>
            -0.875٪
          </Stack>
        </Stack>
      </Stack>
      {!isDetail && (
        <Link href={'/dashboard/trades'}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: 12,
              fontWeight: '600',
              borderRadius: 2,
              py: 1,
              mt: 2,
              width: '100%',
            }}
          >
            خرید طلای آب شده
          </Button>
        </Link>
      )}
    </Container>
  );
}
