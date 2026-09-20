import { InfoOutlineRounded } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import FilterToggleButton from '../Components/FilterToggleButton/FilterToggleButton';
import { ToggleItemsType } from '../core/Types';
import DirectDelivery from './DirectDelivery';
import { DirectAddressesType } from './Cart';
import HouseDelivery from './HouseDelivery';

const toggleItems: ToggleItemsType[] = [
  { title: 'تحویل درب منزل', value: 'HOME_DELIVERY', id: 1 },
  { title: 'تحویل حضوری', value: 'IN_PERSON', id: 2 },
];
interface Props {
  deliveryType: string;
  setDeliveryType: Dispatch<SetStateAction<string>>;
  addressId: number;
  setAddressId: Dispatch<SetStateAction<number>>;
  setTalaseaCityId: Dispatch<SetStateAction<number>>;
  setDirectAddresses: Dispatch<SetStateAction<DirectAddressesType>>;
}
export default function Delivery({
  deliveryType,
  setDeliveryType,
  addressId,
  setAddressId,
  setDirectAddresses,
  setTalaseaCityId
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid
        size={{
          xs: 12,
          md: 7.5,
        }}
      >
        {/* <Typography variant="body1" fontSize={22} sx={{ mb: 2 }}>
          نحوه تحویل
        </Typography> */}
        <FilterToggleButton
          active={deliveryType}
          setActive={setDeliveryType}
          items={toggleItems}
          style={{ py: 1.5 }}
        />
        {deliveryType === 'HOME_DELIVERY' ? (
          <HouseDelivery addressId={addressId} setAddressId={setAddressId} setTalaseaCityId={setTalaseaCityId} />
        ) : (
          <DirectDelivery />
        )}
        {/* <HouseDelivery  addressId={addressId} setAddressId={setAddressId} />
         */}
        {/* <DirectDelivery   /> */}
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.5,
        }}
        border={{
          xs: 1,
          md: 1,
        }}
        borderColor={{
          xs: 'background.paper',
          md: 'background.default',
        }}
        p={{
          xs: 2,
          md: 0,
        }}
        borderRadius={2}
      >
        <Stack direction={'row'} alignItems={'center'} gap={1}>
          <InfoOutlineRounded sx={{ color: '#EF8011' }} />
          <Typography variant="body1" fontSize={22} sx={{ color: '#EF8011' }}>
            توجه
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="body1"
            fontSize={{
              xs: 14,
              md: 18,
            }}
            sx={{ color: 'text.secondary', fontWeight: '600', mt: '10px' }}
          >
            {deliveryType === 'HOME' ? 'تحویل امن طلا به سرتاسر ایران' : 'تحویل حضوری طلای شما'}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              md: 16,
            }}
            sx={{ color: 'text.secondary', mt: 1 }}
          >
            {deliveryType === 'HOME'
              ? 'دارینه طلای شما را از ۳۰ سوت، به هر نقطه از کشور که بخواهید ارسال می‌کند. تمامی مرسولات ارسالی بیمه می‌شوند؛ در صورت بروز هرگونه خسارت، جبران آن با دارینه است.'
              : 'برای تحویل حضوری، لطفاً کارت شناسایی خود را همراه داشته باشید. مراجعه تنها در ساعت و آدرس تعیین‌شده امکان‌پذیر است.'}
          </Typography>
          {/* {deliveryType === "delivery" && (
            <Typography
              variant="body1"
              fontSize={16}
              sx={{ color: "text.secondary", fontWeight: "600", mt: 1 }}
            >
              سفارش شما تا ۵ روز کاری به آدرس تعیین شده تحویل داده می‌شود.
            </Typography>
          )} */}
        </Stack>
      </Grid>
    </Grid>
  );
}
