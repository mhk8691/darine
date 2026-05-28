'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const sliderItems = [
    {id:1,image:'applicationImg1'},
    {id:2,image:'applicationImg2'},
    {id:3,image:'applicationImg3'},
    {id:4,image:'applicationImg4'},
    {id:5,image:'applicationImg5'},
    {id:6,image:'applicationImg6'},
]
export default function OverviewSlider() {
  return (
     <Swiper
      slidesPerView={4.5}
      navigation
      modules={[Navigation]}
      className="mySwiper"
     breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        600: {
          slidesPerView:3.5,
          spaceBetween: 10,
        },
         700: {
          slidesPerView:4,
          spaceBetween: 10,
        },
         900: {
          slidesPerView:4.5,
          spaceBetween: 15,
        },
      }}
    >
      {sliderItems.map((item) => (
        <SwiperSlide key={item.id}>
          <Image alt='' src={`/images/application-download/overview/${item.image}.webp`} width={100} height={100} style={{width:'100%',height:'100%'}}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
