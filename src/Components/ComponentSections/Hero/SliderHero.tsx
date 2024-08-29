import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {dataCardHero.map((data) => (
          <SwiperSlide key={data.title}>
            <Hero
              title={data.title}
              desc={data.desc}
              img={data.img}
              href={data.href}
              rating={data.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
