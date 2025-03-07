import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type HeroCarouselProps = {
  slides: { id: number; src: string; alt: string; text: string }[];
};

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  return (
    <>
      <Swiper
        className="relative h-full"
        modules={[Autoplay]}
        autoplay={{ delay: 6000 }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill={true}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
