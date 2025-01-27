import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function HeroCarousel() {
  return (
    <>
      <Swiper
        className="relative h-full"
        modules={[Autoplay]}
        autoplay={{ delay: 6000 }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src="/images/background/hero-2.svg"
            alt="Software Solutions"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/background/hero-1.svg"
            alt="Software Solutions"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/background/hero-3.svg"
            alt="Software Solutions"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/background/hero-4.svg"
            alt="Software Solutions"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
