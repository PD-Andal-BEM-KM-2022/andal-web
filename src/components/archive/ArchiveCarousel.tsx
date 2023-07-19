import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { MouseEventHandler, useCallback, useRef, useState } from "react";

const ArchiveCarousel = () => {
  const images = ["hero.png", "hero.png", "hero.png", "hero.png", "hero.png"];
  const paginationRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="h-[calc(100vh)] flex items-center justify-center -mt-[3.5rem]">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          direction={"vertical"}
          modules={[Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            scale: 0.75,
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletClass:
              "text-2xl font-bold cursor-pointer opacity-80 duration-500",
            bulletActiveClass: "scale-110 opacity-[1_!important]",
            renderBullet: function (i: number, className: string) {
              return `<div class='${className}'>0${i + 1}</div>`;
            },
          }}
          navigation={{
            disabledClass: "opacity-50",
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 1.7,
            },
            1920: {
              slidesPerView: 1.5,
            },
          }}
          className="h-full flex w-full"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i} className="grid place-content-center">
              <div className="w-full h-full pr-[4em]">
                <Image
                  src={`/images/${image}`}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={100}
                  className="w-full h-full object-cover rounded-2xl border-t-2 border-r-2 border-l-2 border-andal-darkblue"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="flex flex-col absolute top-1/2 -translate-y-1/2 right-0 z-10 items-center gap-y-[20em]">
            <div
              ref={prevRef}
              className="w-8 h-8 flex items-center justify-center cursor-pointer -translate-x-1/3"
            >
              <svg
                width={17}
                height={17}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5.925c-.133 0-.258.02-.375.062A.866.866 0 007.8 1.2L1.2 7.8c-.2.2-.3.437-.3.712 0 .275.1.512.3.713.2.2.434.3.7.3.267 0 .5-.1.7-.3l4.9-4.9v11.2c0 .283.096.517.288.7.192.183.43.275.712.275a.968.968 0 00.713-.288.964.964 0 00.287-.712V4.325l4.9 4.9c.2.2.434.3.7.3.267 0 .5-.1.7-.3.2-.2.3-.438.3-.713a.97.97 0 00-.3-.712L9.2 1.2a.883.883 0 00-.325-.213A1.083 1.083 0 008.5.925z"
                  fill="#000"
                />
              </svg>
            </div>

            <div
              ref={paginationRef}
              className="swiper-pagination flex flex-col justify-center items-center gap-y-[1em] absolute top-40 left-20"
            ></div>

            <div
              ref={nextRef}
              className="w-8 h-8 flex items-center justify-center cursor-pointer -translate-x-1/3"
            >
              <svg
                width={17}
                height={17}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M8.5.925c-.133 0-.258.02-.375.062A.866.866 0 007.8 1.2L1.2 7.8c-.2.2-.3.437-.3.712 0 .275.1.512.3.713.2.2.434.3.7.3.267 0 .5-.1.7-.3l4.9-4.9v11.2c0 .283.096.517.288.7.192.183.43.275.712.275a.968.968 0 00.713-.288.964.964 0 00.287-.712V4.325l4.9 4.9c.2.2.434.3.7.3.267 0 .5-.1.7-.3.2-.2.3-.438.3-.713a.97.97 0 00-.3-.712L9.2 1.2a.883.883 0 00-.325-.213A1.083 1.083 0 008.5.925z"
                  fill="#000"
                />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ArchiveCarousel;
