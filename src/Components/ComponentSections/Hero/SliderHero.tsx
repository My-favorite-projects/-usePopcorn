import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box } from "@mui/material";
import Hero from "./Hero.tsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderHero() {
  return (
    <Box
      className="w-full"
      sx={{
        bgcolor: "orange",
      }}
    >
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
