'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import GoldCard from '../Components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';

export default function ProductSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [isClient, setIsClient]);

  if (!isClient) {
    return <div style={{ height: '300px' }} />;
  }

  return (
    <Swiper
      slidesPerView={4.5}
      navigation
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },
        600: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        900: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4.5,
          spaceBetween: 25,
        },
      }}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <GoldCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
