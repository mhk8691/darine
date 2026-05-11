import { Stack } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const bannerItems = ['b1.webp', 'b2.webp', 'b3.webp', 'b4.webp', 'b5.webp'];
const styles = {
  container: {
    height: 226,
    background: 'background.default',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: 14,
    color: '#fff',
    borderRadius: 8,
  } satisfies React.CSSProperties,

  swiper: {
    width: '100%',
    height: '100%',
  } satisfies React.CSSProperties,

  slide: {
    textAlign: 'center',
    fontSize: 18,
    background: '#444',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  } satisfies React.CSSProperties,
};
export default function Banners() {
  return (
    <div style={styles.container}>
      <Swiper spaceBetween={10} style={styles.swiper} loop={true}>
        {bannerItems.map((item, index) => (
          <SwiperSlide key={index} style={styles.slide}>
            <Stack width={'100%'} height={'100%'}>
              <Image
                src={`/images/banners/${item}`}
                alt=""
                width={500}
                height={226}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
              />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
