import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const Archive = () => {
  const [active, setActive] = useState(0);

  const content = [
    {
      title: "Lorem Ipsum 1",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.`,
    },
    {
      title: "Lorem Ipsum 2",
      desc: `Lorem ipsum dolor sit amet, consectetur eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.`,
    },
    {
      title: "Lorem Ipsum 3",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.`,
    },
    {
      title: "Lorem Ipsum 4",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.`,
    },
  ];

  return (
    <>
      <section className="pt-12 overflow-x-clip overflow-y-visible relative z-10 lg:overflow-visible">
        <div className="lg:flex lg:ml-4 lg:items-end relative z-10 ">
          <h2 className="text-[2rem] font-extrabold text-center lg:text-5xl">
            Archive
          </h2>
          <p className="font-medium text-ss text-center px-10 text-andal-lightgrey mt-4 lg:px-0 lg:ml-6 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* <div className="flex w-[300vw] lg:w-full relative z-10">
          {content.map((content, i) => (
            <Card
              key={i}
              i={i}
              content={content}
              active={active}
              setActive={setActive}
            />
          ))}
        </div> */}
        <Swiper
          onActiveIndexChange={(i) => setActive(i.realIndex)}
          initialSlide={0}
          slidesPerView={1.2}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              loop: true,
              slidesPerView: 2.2,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            },
            1024: {
              loop: true,
              slidesPerView: 3.2,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            },
            1280: {
              loop: true,
              slidesPerView: 4.2,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            },
          }}
          className="flex "
        >
          {content.map((content, i) => (
            <SwiperSlide
              key={i}
              className={`duration-1000 ${
                active == i ? "lg:flex-grow-[2]" : "lg:flex-shrink-[2]"
              }`}
            >
              <Card
                key={i}
                i={i}
                content={content}
                active={active}
                setActive={setActive}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-6 relative z-10">
          <Link href="/archive">
            <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg">
              More Archived
            </button>
          </Link>
        </div>

        {/* GRADIENT BG */}
        <div
          className={`w-[280px] h-[280px] absolute top-0 right-0 translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
        ></div>

        <div
          className={`w-[280px] h-[280px] absolute bottom-0 translate-y-[40%] left-0 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
        ></div>
      </section>
    </>
  );
};

export default Archive;

const Card = ({
  i,
  content,
  active,
  setActive,
}: {
  i: number;
  content: {
    title: string;
    desc: string;
  };
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div
        className="relative h-[360px] lg:h-[400px] border-8 border-andal-lightblue mx-4 mt-6 rounded-2xl pb-9 overflow-hidden cursor-pointer duration-1000 bg-andal-darkblue"
        onMouseEnter={() => setActive(i)}
      >
        <Image
          src="/images/hero.png"
          width={0}
          height={0}
          sizes="100%"
          quality={100}
          alt=""
          className="w-full h-auto lg:h-full object-cover rounded-lg"
        />
        <div
          className={`absolute w-[calc(100%-28px)] bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-4 border-[2px] overflow-hidden ${
            active == i
              ? "bg-andal-light border-[#040D21]"
              : "bg-[#040D21] border-light  w-fit"
          }`}
        >
          <h5
            className={`font-extrabold leading-none ${
              active == i ? "text-andal-darkblue" : "text-center text-light"
            }`}
          >
            {content.title}
          </h5>
          <p
            className={`text-ss mt-2 text-justify text-andal-lightgreyblue leading-snug duration-500 line-clamp-4 ${
              active == i ? "h-[5.5em]" : "h-0"
            }`}
          >
            {content.desc}
          </p>
        </div>
      </div>
    </>
  );
};
