import { Box } from "@mui/material";
import Card from "../../ComponentsElement/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Slider(params: any) {
  return (
    <>
      <Box className={`w-11/12 m-auto mb-10 relative`}>
        <div
          id="swiper-prev"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 mx-4 l left-prev cursor-pointer text-secondary"
        >
          <ArrowBackIosNewIcon />
        </div>
        <div
          id="swiper-next"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 right-next cursor-pointer text-secondary"
        >
          <ArrowForwardIosIcon />
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 90,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={{
            prevEl: "#swiper-prev",
            nextEl: "#swiper-next",
          }}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
