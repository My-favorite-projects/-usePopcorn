import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box } from "@mui/material";
import Hero from "./Hero.tsx";
import { dataCardHero } from "./dataCards.tsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderHero() {
  return (
    <Box className="w-full">
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
        {dataCardHero.map((data) => (
          <SwiperSlide>
            <Hero title={data.title} desc={data.desc} img={data.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
