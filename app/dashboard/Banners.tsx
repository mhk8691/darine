'use client'
import { getBanners } from '@/lib/banners/banners';
import { Stack } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannersType } from '../core/Types';
import Link from 'next/link';

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
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  } satisfies React.CSSProperties,
};


export default function Banners() {

  const [bannersData,setBannersData] = useState<BannersType[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      const response  = await getBanners()
      setBannersData(response || [])
    }
    getData()
  },[])
  return (
    <div style={styles.container}>
      <Swiper spaceBetween={10} style={styles.swiper} loop={true}>
        {bannersData.map((item, index) => (
          <SwiperSlide key={index} style={styles.slide}>
            <Stack width={'100%'} height={'100%'}>
              <Link href={item.link || ''}>
              <Image
                src={item.image || ''}
                alt=""
                width={500}
                height={226}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
              /></Link>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
