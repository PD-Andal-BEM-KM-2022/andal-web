import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { setInterval } from "timers";
import ArchiveContent from "../archive/ArchiveContent";

import useSWR from "swr";
import * as contentful from "contentful";

const fetcher = async (url: string) => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,

    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  });

  const data = await client.getEntries({
    content_type: "archieve",
  });

  return data.items.map((entry) => {
    const fields = entry.fields as any;

    return {
      id: entry.sys.id,
      title: fields.title,
      description: fields.description,
      date: fields.date,
      initiator: fields.initiator.map((member: any) => member.fields),
      pictures: fields.pictures.map((picture: any) => picture.fields),
      thumbnail: fields.thumbnail.fields,
    };
  });
};

const Archive = () => {
  const [active, setActive] = useState(0);
  const [showContent, setShowContent] = useState(-1);

  const { data, error, isLoading } = useSWR("/api/archive", fetcher);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active) => (active + 1) % 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   console.log(showContent);
  // }, [showContent]);

  // const content = [
  //   {
  //     title: "Lorem Ipsum 1",
  //     desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.`,
  //   },
  //   {
  //     title: "Lorem Ipsum 2",
  //     desc: `Lorem ipsum dolor sit amet, consectetur eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.`,
  //   },
  //   {
  //     title: "Lorem Ipsum 3",
  //     desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.`,
  //   },
  //   {
  //     title: "Lorem Ipsum 4",
  //     desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.`,
  //   },
  // ];

  return (
    <>
      <section className="pt-12 overflow-x-clip overflow-y-visible relative md:overflow-visible md:container md:mx-auto z-[70]">
        <div className="lg:flex lg:items-end relative z-10 lg:px-4">
          <h2 className="text-[2rem] font-extrabold text-center lg:text-5xl">
            Archive
          </h2>
          <p className="font-medium text-ss text-center px-10 text-andal-lightgrey mt-4 lg:px-0 lg:ml-6 lg:text-base">
            Jelajahi berbagai kegiatan dan pencapaian yang telah dilakukan oleh
            kementrian Andal BEM KM UGM.
          </p>
        </div>
        <div
          className={`mt-6 relative z-10 flex justify-between h-[360px] w-[360vw] md:w-full md:h-[400px] duration-1000 px-3 ${
            active == 1
              ? "-translate-x-1/4 md:translate-x-0"
              : active == 2
              ? "-translate-x-2/4 md:translate-x-0"
              : active == 3
              ? "-translate-x-[calc(72.5%)] md:translate-x-0"
              : ""
            //  ""
          }`}
        >
          {data?.map((content: any, i: number) => (
            <>
              <div
                key={i}
                className={`p-2 bg-andal-lightblue rounded-lg relative duration-1000 w-full cursor-pointer ${
                  i == active ? "" : "md:flex-shrink-[1.25]"
                }
              ${
                i == 0 ? "ml-4 md:mr-2 md:ml-0" : i != 3 ? "mx-2" : "ml-2"
              }               
               `}
                onClick={() => setShowContent(content.id)}
                onMouseEnter={() => setActive(i)}
              >
                <Image
                  src="/images/hero.png"
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={100}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div
                  className={`w-[calc(100%-40px)] h-[160px] flex flex-col items-start justify-start absolute bottom-5 left-1/2 -translate-x-1/2 overflow-hidden border-2 bg-andal-light border-andal-darkblue rounded-lg px-4 py-4 sm:py-5 md:max-h-[160px] md:h-auto ${
                    active == i
                      ? ""
                      : "md:bg-andal-darkblue md:border-andal-light"
                  }`}
                >
                  <h5
                    className={`w-full font-extrabold text-andal-darkblue duration-1000 ${
                      active == i
                        ? "text-start"
                        : "md:text-andal-lightblue text-center"
                    }`}
                  >
                    {content.title}
                  </h5>
                  <p
                    className={`leading-snug text-justify text-sm text-andal-darkgreyblue line-clamp-5 md:line-clamp-4 duration-1000 ${
                      active == i ? "h-20 mt-1 sm:mt-2" : "h-0 m-0"
                    }`}
                  >
                    {content.description}
                  </p>
                </div>
              </div>

              <ArchiveContent
                archive={content}
                showContent={showContent}
                setShowContent={setShowContent}
              />
            </>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/archive">
            <button className="text-ss font-semibold text-andal-darkblue bg-andal-button-orange/ bg-button px-6 py-2 rounded-lg">
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
