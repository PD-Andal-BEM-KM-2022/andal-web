import Image from "next/image";
import LinkedIn from "./icons/LinkedIn";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const TeamCarousel = ({ members }: { members: any }) => {
  return (
    <>
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
          1920: {
            slidesPerView: 5.2,
            autoplay: {
              delay: 1,
              disableOnInteraction: false,
            },
          },
        }}
        className="flex w-full ease-linear"
      >
        {members?.map((member: any, i: number) => (
          <SwiperSlide key={i} className="pt-3">
            {/* <Card name={name} prodi={prodi} i={i} /> */}
            <TeamCard
              data={{
                ...member,
                i: i,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCarousel;

const TeamCard = ({ data }: { data: any }) => {
  return (
    <>
      <div
        className={`sm:max-w-[300px] relative border-8 border-andal-lightblue rounded-xl bg-andal-lightblue lg:mt-3 ml-4 group/card overflow-hidden md:max-w-[48vw] lg:max-w-[32vw] xl:max-w-[24vw] ${
          data.i % 2 == 0 ? "lg:-translate-y-[24px]" : ""
        }`}
      >
        <div className="absolute z-10 top-0 text-center px-6 pb-3 pt-2 rounded-b-[24px] bg-andal-lightblue text-andal-darkblue w-[80%] left-1/2 -translate-x-1/2">
          <p className="text-sm leading-snug font-semibold">{data.position}</p>

          {/* SMOOTH CORNER CURVE TL */}
          <div className="absolute z-10 top-0 left-0 -translate-x-full -scale-x-100">
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
          {/* SMOOTH CORNER CURVE TR */}
          <div className="absolute z-10 top-0 right-0 translate-x-full">
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
          src={`https:${data.picture.file.url}`}
          width={0}
          height={0}
          sizes="100%"
          quality={100}
          alt=""
          className="h-[400px] xl:h-[500px] w-full object-cover rounded-xl overflow-hidden bg-andal-darkblue"
        />
        <div className="flex justify-between bg-andal-lightblue px-3 pt-3 pb-2 items-center lg:absolute z-10 lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[80%] lg:rounded-t-3xl lg:px-5 xl:py-3">
          <div className="text-andal-darkblue text-ss lg:text-center lg:w-full">
            <h5 className="font-extrabold leading-snug lg:leading-none lg:text-base lg:mb-1">
              {data.name}
            </h5>
            <h6 className="">{data.faculty}</h6>
          </div>
          {data.linkedin && (
            <Link href={`${data.linkedin ?? "#"}`} target="_blank">
              <div className="lg:hidden">
                <LinkedIn color="text-andal-darkblue" />
              </div>
            </Link>
          )}

          {/* SMOOTH CORNER CURVE BL */}
          <div className="absolute z-10 bottom-0 left-0 -translate-x-full -scale-100 hidden lg:inline-block">
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
          {/* SMOOTH CORNER CURVE BR */}
          <div className="absolute z-10 bottom-0 right-0 translate-x-full -scale-y-100 hidden lg:inline-block">
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

        {/* LINKEDIN OVERLAY */}
        {data.linkedin && (
          <div className="hidden lg:flex inset-0 m-auto absolute items-center justify-center rounded-xl bg-black/50 translate-y-full duration-500 group-hover/card:translate-y-0">
            <Link href={`${data.linkedin}`} target="_blank">
              <div className="group/linkedin">
                <LinkedIn color="group-hover/linkedin:text-[#0077B5] group-hover/linkedin:bg-andal-lightblue " />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
