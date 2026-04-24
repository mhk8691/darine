import { Stack } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerItems = ["b1.webp", "b2.webp", "b3.webp", "b4.webp", "b5.webp"];
export default function Banners() {
  const styles = {
    container: {
      height: "226px",
      background: "#10100F",
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      fontSize: "14px",
      color: "#fff",
      borderRadius: "8px",
    },
    swiper: {
      width: "100%",
      height: "100%",
    },
    slide: {
      textAlign: "center",
      fontSize: "18px",
      background: "#444",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.container}>
      <Swiper spaceBetween={10} style={styles.swiper} loop={true}>
        {bannerItems.map((item, index) => (
          <SwiperSlide key={index} style={styles.slide}>
            <Stack width={"100%"} height={"100%"}>
              <Image
                src={`/images/banners/${item}`}
                alt=""
                width={"500"}
                height={226}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                }}
              />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
