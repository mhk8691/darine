import { useState } from 'react';
import ChooseAddress from '../Components/ChooseAddress/ChooseAddress';

export default function HouseDelivery() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Typography
        variant="body1"
        fontSize={16}
        fontWeight={"bold"}
        sx={{ mt: 3 }}
      >
        تاریخ تحویل
      </Typography>
      <Typography variant="body1" fontSize={16}>
        سفارش شما تا ۵ روز کاری به آدرس تعیین شده تحویل داده می‌شود.
      </Typography> */}
      {/* <ChooseAddress
        open={open}
        setOpen={setOpen}
        description="برای دریافت کالای انتخاب شده، ابتدا آدرس خود را اضافه کنید"
        cardStyle={{ mt: 3 }}

      /> */}
    </>
  );
}
