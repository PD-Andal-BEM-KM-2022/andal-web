import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { MouseEventHandler, useCallback, useRef } from "react";

const ArchiveCarousel = ({ images }: { images: string[] }) => {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    // swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    // swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div className="h-[calc(100vh)] flex items-center justify-center -mt-[3.5rem]">
        <Swiper
          ref={swiperRef}
          // onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          direction={"vertical"}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          modules={[Pagination, EffectCoverflow]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: "opacity-100 scale-125",
            renderBullet: function (i, className) {
              return `<button className='${className}' >0${i + 1}</button>`;
            },
          }}
          effect="coverflow"
          coverflowEffect={{
            scale: 1,
            rotate: 0,
            stretch: 0,
            depth: 100,
            slideShadows: false,
          }}
          className="w-full flex flex-col h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="h-full w-full pr-10">
              <Image
                src={`/images/${img}`}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className="w-auto h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 -translate-y-1/2  right-0 z-50 overflow-visible flex flex-col justify-between gap-y-80">
            {/* <Button className="swiper-button-prev/ hidden bg-red-800" /> */}
            <Button onclick={() => {}} />
            <div className="flex flex-col gap-4 text-andal-darkblue font-extrabold swiper-pagination overflow-hidden justify-start items-center" />
            <Button next onclick={() => {}} />
            {/* <Button className="swiper-button-next/ hidden bg-red-800" next /> */}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ArchiveCarousel;

const Button = ({
  className,
  next,
  onclick,
}: {
  className?: string;
  next?: boolean;
  onclick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={`-translate-x-[calc(50%+2px)]`}>
      <svg
        width={17}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${!next ? "" : "-scale-y-100"}`}
      >
        <path
          d="M8.5.925c-.133 0-.258.02-.375.062A.866.866 0 007.8 1.2L1.2 7.8c-.2.2-.3.437-.3.712 0 .275.1.512.3.713.2.2.434.3.7.3.267 0 .5-.1.7-.3l4.9-4.9v11.2c0 .283.096.517.288.7.192.183.43.275.712.275a.968.968 0 00.713-.288.964.964 0 00.287-.712V4.325l4.9 4.9c.2.2.434.3.7.3.267 0 .5-.1.7-.3.2-.2.3-.438.3-.713a.97.97 0 00-.3-.712L9.2 1.2a.883.883 0 00-.325-.213A1.083 1.083 0 008.5.925z"
          fill="#000"
        />
      </svg>
    </button>
  );
};
