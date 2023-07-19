import Image from "next/image";
import LinkedIn from "../icons/LinkedIn";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import TeamCarousel from "../TeamCarousel";

const CoreTeam = () => {
  const coreTeams = [
    {
      name: "Anggit 'Best Staff' Ihsananto",
      prodi: "Ilmu Komputer 2021",
      image: "lead.png",
      linkedin: "https://linkedin.com/in/anggit-ihsananto",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
      image: "hero.png",
      linkedin: "/",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
      image: "hero.png",
      linkedin: "/",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
      image: "hero.png",
      linkedin: "/",
    },
    {
      name: "Raden Restu Akbar Bagus Pratama",
      prodi: "Ilmu Komputer 2021",
      image: "hero.png",
      linkedin: "/",
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
          <TeamCarousel members={coreTeams} />
          <div
            className={`hidden lg:inline-block w-[1000px] h-[1000px] absolute top-0 -translate-y-[10%] left-0 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
          ></div>
        </div>
      </section>
    </>
  );
};

export default CoreTeam;
