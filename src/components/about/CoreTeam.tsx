import Image from "next/image";
import LinkedIn from "../icons/LinkedIn";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const CoreTeam = () => {
  const coreTeams = [
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
    },
  ];

  return (
    <>
      <section
        className={`pt-[100px] lg:pt-36 bg-andal-lightblue overflow-hidden`}
      >
        <div className="pb-36 bg-andal-darkblue rounded-t-3xl lg:rounded-t-[48px] relative overflow-hidden">
          <h3
            className={`font-extrabold flex justify-center text-center text-3xl py-16 whitespace-nowrap lg:text-5xl`}
          >
            Our Core Team
          </h3>
          <Swiper
            initialSlide={0}
            slidesPerView={1.2}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={5000}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                autoplay: {
                  delay: 1,
                  disableOnInteraction: false,
                },
              },
              1024: {
                slidesPerView: 3.2,
                autoplay: {
                  delay: 1,
                  disableOnInteraction: false,
                },
              },
              1280: {
                slidesPerView: 4.2,
                autoplay: {
                  delay: 1,
                  disableOnInteraction: false,
                },
              },
            }}
            className="flex w-full ease-linear"
          >
            {coreTeams.map(({ name, prodi }, i) => (
              <SwiperSlide key={i} className="pt-3">
                <Card name={name} prodi={prodi} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`hidden lg:inline-block w-[1000px] h-[1000px] absolute top-0 -translate-y-[10%] left-0 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
          ></div>
        </div>
      </section>
    </>
  );
};

export default CoreTeam;

const Card = ({
  name,
  prodi,
  i,
}: {
  name: string;
  prodi: string;
  i: number;
}) => {
  return (
    <>
      <div
        className={`sm:max-w-[300px] relative border-8 border-andal-lightblue rounded-xl bg-andal-lightblue lg:mt-3 ml-4 md:max-w-[48vw] lg:max-w-[32vw] xl:max-w-[24vw] ${
          i % 2 == 0 ? "lg:-translate-y-[24px]" : ""
        }`}
      >
        <div className="absolute top-0 text-center px-6 pb-3 pt-2 font-extrabold leading-snug rounded-b-[24px] bg-andal-lightblue text-andal-darkblue w-3/4 left-1/2 -translate-x-1/2">
          <div className="absolute top-0 left-0 -translate-x-full -scale-x-100">
            <svg
              width={16}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0H0v16C0 7.163 7.163 0 16 0z"
                fill="#CCDAE7"
              />
            </svg>
          </div>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <div className="absolute top-0 right-0 translate-x-full">
            <svg
              width={16}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0H0v16C0 7.163 7.163 0 16 0z"
                fill="#CCDAE7"
              />
            </svg>
          </div>
        </div>
        <Image
          src="/images/hero.png"
          width={0}
          height={0}
          sizes="100%"
          quality={100}
          alt=""
          className="h-[400px] w-auto object-cover rounded-xl overflow-hidden"
        />
        <div className="flex justify-between bg-andal-lightblue px-3 pt-3 pb-2 items-center">
          <div className="text-andal-darkblue text-ss">
            <h5 className="font-extrabold leading-tight">
              Raden Restu Akbar Bagus Pratama
            </h5>
            <h6>Ilmu Komputer 2021</h6>
          </div>
          <div className="scale-[1.75]">
            <LinkedIn />
          </div>
        </div>
      </div>
    </>
  );
};
