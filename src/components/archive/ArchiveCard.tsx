import dayjs from "dayjs";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import ArchiveCarousel from "./ArchiveCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
import ArchiveContent from "./ArchiveContent";

const ArchiveCard = ({
  index,
  showContent,
  setShowContent,
  setCountContent,
  archive,
}: {
  index: number;
  showContent: number;
  setShowContent: Dispatch<SetStateAction<number>>;
  setCountContent: Dispatch<SetStateAction<number>>;
  archive: any;
  // {
  //   id: number;
  //   title: string;
  //   author: string;
  //   date: string;
  //   photos: string[];
  //   content: string;
  // };
}) => {
  return (
    <>
      <div
        className="relative border-8 border-andal-lightblue rounded-xl bg-andal-lightblue max-w-[360px] mx-auto lg:mt-auto xl:max-w-none xl:w-full cursor-pointer group"
        onClick={() => setShowContent(archive.id)}
        onLoad={() => setCountContent(1)}
      >
        <div className="h-[400px]">
          <Image
            src={`https:${archive.thumbnail.file.url}`}
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt={archive.thumbnail.title}
            className="h-full w-full object-cover rounded-xl overflow-hidden"
          />
        </div>
        {/* CARD DETAIL */}
        <div className="absolute w-[calc(100%-1.5rem)] bottom-3 mx-3 rounded-xl flex justify-between bg-andal-light border-2 border-andal-darkblue px-5 py-4 items-center duration-500 lg:h-fit lg:hover:h-[calc(100%-1.5rem)]/ lg:flex-col">
          <div className="w-full text-andal-darkblue text-ss overflow-hidden text-ellipsis lg:group-hover:mb-2">
            <h5 className="font-extrabold leading-none lg:text-base lg:leading-none lg:line-clamp-2 lg:pb-[2.5px]">
              {archive.title}
            </h5>
            <div className="flex justify-between items-start mt-4 lg:mt-3">
              <span className="text-xs font-bold">
                {archive.initiator[0].position}
              </span>
              <span className="text-xs lg:flex">
                {dayjs(archive.date).format("DD MMM YYYY")}
              </span>
            </div>
            <p className="hidden lg:inline-block leading-tight line-clamp-2 h-0 duration-500 group-hover:mt-5 group-hover:h-9">
              {archive.description}
            </p>
          </div>
          <button className="hidden lg:block bg-andal-button-orange py-0 w-full rounded-md font-medium text-andal-button-orange h-0 opacity-0 duration-500 group-hover:py-3 group-hover:text-andal-darkblue group-hover:h-12 group-hover:opacity-100">
            Read More
          </button>
        </div>
      </div>

      {/* ARCHIVE CONTENT */}
      <ArchiveContent
        archive={archive}
        showContent={showContent}
        setShowContent={setShowContent}
      />
    </>
  );
};

export default ArchiveCard;
