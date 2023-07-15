import Image from "next/image";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import HeroBg from "../icons/about/HeroBg";
import ArchiveCarousel from "./ArchiveCarousel";
import dayjs from "dayjs";

const Archives = ({
  archives,
}: {
  archives: any;

  // {
  //   id: string;
  //   title: string;
  //   initiator: any;
  //   date: string;
  //   pictures: any;
  //   thumbnail: any;
  //   description: string;
  // }[];
}) => {
  const kedirjenans = [
    "semua kedirjenan",
    "humas",
    "media",
    "personalia",
    "produk digital",
    "riset data",
    "riset spasial",
  ];
  const [showDirjens, setShowDirjens] = useState(false);
  const [selectedDirjen, setSelectedDirjen] = useState("semua kedirjenan");
  const [countContent, setCountContent] = useState(0);
  const [scroll, setScroll] = useState(0);

  const handleSelectDirjen = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const text = target.innerText;
    // console.log(text);
    setSelectedDirjen(text.toLowerCase());
    setShowDirjens(false);
  };

  const [showContent, setShowContent] = useState(-1);

  useEffect(() => {
    const cat = document.getElementById("cat-scroll");

    // if (cat) {
    //   console.log(cat.scrollWidth);
    //   if ((cat.scrollLeft = cat.scrollWidth)) {
    //     console.log("ok");
    //   }
    // }
  }, []);

  return (
    <>
      <section
        className={`bg-andal-darkblue -mt-7 py-16 rounded-t-3xl relative lg:px-14 xl:px-28`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-andal-yellow rounded-full px-6 py-3 w-[280px] border border-[#ac7904] flex items-center gap-x-4 sm:w-[360px] lg:w-[calc(100%-7rem)] xl:w-[calc(100%-14rem)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="iconamoon:search-bold">
              <path
                id="Vector"
                d="M17.5002 17.4999L13.881 13.8808M13.881 13.8808C14.5001 13.2617 14.9912 12.5267 15.3262 11.7179C15.6612 10.909 15.8337 10.0421 15.8337 9.16659C15.8337 8.29109 15.6612 7.42416 15.3262 6.61531C14.9912 5.80645 14.5001 5.0715 13.881 4.45243C13.2619 3.83335 12.527 3.34228 11.7181 3.00724C10.9093 2.6722 10.0423 2.49976 9.16684 2.49976C8.29134 2.49976 7.42441 2.6722 6.61555 3.00724C5.80669 3.34228 5.07174 3.83335 4.45267 4.45243C3.2024 5.7027 2.5 7.39844 2.5 9.16659C2.5 10.9347 3.2024 12.6305 4.45267 13.8808C5.70295 15.131 7.39868 15.8334 9.16684 15.8334C10.935 15.8334 12.6307 15.131 13.881 13.8808Z"
                stroke="#040D21"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <input
            type="text"
            className="text-andal-darkblue bg-transparent placeholder:text-andal-darkblue focus:outline-none block w-full"
            placeholder="Search"
          />
        </div>
        {/* PILIH KEDIRJENAN - MOBILE */}
        <div className="relative w-full container mx-auto px-8">
          <div
            className="text-ss text-andal-darkblue bg-andal-light flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer active:bg-[#DADEE7] max-w-[360px] mx-auto lg:hidden"
            onClick={() => setShowDirjens(!showDirjens)}
          >
            <div className="flex items-center gap-x-2">
              <span
                className={`w-2 h-2 rounded-full border border-andal-darkblue bg-andal-darkblue`}
              ></span>
              <span className="font-medium capitalize">
                Filter: {selectedDirjen}
              </span>
            </div>
            <div className="font-extrabold tracking-widest flex gap-x-1 items-center -mr-2">
              <span>PILIH</span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`duration-500 ${
                    showDirjens ? "-scale-y-100" : ""
                  }`}
                >
                  <g id="mingcute:left-line" clipPath="url(#clip0_478_12806)">
                    <g id="Group">
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.52876 10.4708C7.65378 10.5958 7.82332 10.666 8.0001 10.666C8.17687 10.666 8.34641 10.5958 8.47143 10.4708L12.2428 6.69949C12.3064 6.63799 12.3572 6.56443 12.3922 6.48309C12.4271 6.40176 12.4455 6.31428 12.4463 6.22576C12.447 6.13724 12.4302 6.04945 12.3966 5.96752C12.3631 5.88559 12.3136 5.81116 12.251 5.74856C12.1884 5.68597 12.114 5.63646 12.0321 5.60294C11.9501 5.56942 11.8623 5.55256 11.7738 5.55332C11.6853 5.55409 11.5978 5.57248 11.5165 5.60742C11.4352 5.64236 11.3616 5.69315 11.3001 5.75682L8.0001 9.05683L4.7001 5.75682C4.57436 5.63539 4.40596 5.56819 4.23116 5.56971C4.05636 5.57123 3.88916 5.64134 3.76555 5.76495C3.64195 5.88855 3.57183 6.05576 3.57031 6.23056C3.56879 6.40536 3.63599 6.57376 3.75743 6.69949L7.52876 10.4708Z"
                        fill="#040D21"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_478_12806">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="matrix(0 -1 -1 0 16 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div
            className={`z-10 absolute -bottom-2 left-1/2 -translate-x-1/2 bg-andal-light text-ss text-andal-darkblue p-4 rounded-lg w-[calc(100%-4rem)] duration-500 flex flex-col gap-y-2 max-w-[360px] ${
              showDirjens
                ? "translate-y-full"
                : "translate-y-[95%] opacity-0 pointer-events-none"
            }`}
          >
            {kedirjenans.map((kedirjenan, i) => (
              <button
                key={i}
                className="flex items-center gap-x-2"
                onClick={(e) => handleSelectDirjen(e)}
              >
                <div
                  className={`w-2 h-2 rounded-full border border-andal-darkblue cursor-pointer ${
                    selectedDirjen == kedirjenan ? "bg-andal-darkblue" : ""
                  }`}
                ></div>
                <div className="capitalize cursor-pointer">{kedirjenan}</div>
              </button>
            ))}
          </div>
        </div>
        {/* PILIH KEDIRJENAN - DESKTOP */}
        <div className="hidden lg:flex bg-andal-lightblue w-full px-8 py-6 rounded-t-2xl overflow-hidden gap-x-4">
          {/* BUTTON MASI NGEBUG BANGETZ */}
          <button
            className="flex justify-start items-center w-[3%]"
            onClick={() => setScroll((scroll) => scroll - 1)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-scale-x-100"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7072 12.707C15.8947 12.5194 16 12.2651 16 12C16 11.7348 15.8947 11.4805 15.7072 11.293L10.0502 5.63598C9.95797 5.54047 9.84762 5.46428 9.72562 5.41188C9.60361 5.35947 9.47239 5.33188 9.33961 5.33073C9.20684 5.32957 9.07516 5.35487 8.95226 5.40516C8.82936 5.45544 8.71771 5.52969 8.62382 5.62358C8.52993 5.71747 8.45567 5.82913 8.40539 5.95202C8.35511 6.07492 8.32981 6.2066 8.33096 6.33938C8.33212 6.47216 8.3597 6.60338 8.41211 6.72538C8.46452 6.84739 8.5407 6.95773 8.63621 7.04998L13.5862 12L8.63621 16.95C8.45406 17.1386 8.35326 17.3912 8.35554 17.6534C8.35782 17.9156 8.46299 18.1664 8.64839 18.3518C8.8338 18.5372 9.08462 18.6424 9.34681 18.6447C9.60901 18.6469 9.86161 18.5461 10.0502 18.364L15.7072 12.707Z"
                fill="#4A5261"
              />
            </svg>
          </button>
          <div className="overflow-hidden w-[94%]" id="cat-scroll">
            <div className={`flex gap-x-4 duration-500`}>
              {kedirjenans.map((kedirjenan, i) => (
                <button
                  key={i}
                  className={`px-6 py-2 rounded-lg text-lg whitespace-nowrap duration-500 capitalize ${
                    selectedDirjen == kedirjenan
                      ? "bg-andal-button-orange text-andal-darkblue"
                      : "bg-andal-darkblue"
                  }`}
                  onClick={(e) => handleSelectDirjen(e)}
                >
                  {kedirjenan}
                </button>
              ))}
            </div>
          </div>
          <button
            className="flex justify-end items-center w-[3%]"
            onClick={() => setScroll((scroll) => scroll + 1)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7072 12.707C15.8947 12.5194 16 12.2651 16 12C16 11.7348 15.8947 11.4805 15.7072 11.293L10.0502 5.63598C9.95797 5.54047 9.84762 5.46428 9.72562 5.41188C9.60361 5.35947 9.47239 5.33188 9.33961 5.33073C9.20684 5.32957 9.07516 5.35487 8.95226 5.40516C8.82936 5.45544 8.71771 5.52969 8.62382 5.62358C8.52993 5.71747 8.45567 5.82913 8.40539 5.95202C8.35511 6.07492 8.32981 6.2066 8.33096 6.33938C8.33212 6.47216 8.3597 6.60338 8.41211 6.72538C8.46452 6.84739 8.5407 6.95773 8.63621 7.04998L13.5862 12L8.63621 16.95C8.45406 17.1386 8.35326 17.3912 8.35554 17.6534C8.35782 17.9156 8.46299 18.1664 8.64839 18.3518C8.8338 18.5372 9.08462 18.6424 9.34681 18.6447C9.60901 18.6469 9.86161 18.5461 10.0502 18.364L15.7072 12.707Z"
                fill="#4A5261"
              />
            </svg>
          </button>
        </div>
        <div className="pt-7 pb-12 mx-8 flex flex-wrap justify-center gap-y-7 gap-7 lg:bg-[#112A7C]/50 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:place-items-center lg:p-9 lg:rounded-b-2xl lg:mx-auto">
          {archives.map((archive: any, i: number) =>
            archive.initiator[0].position.toLowerCase() == selectedDirjen ||
            selectedDirjen == "semua kedirjenan" ? (
              <Card
                key={i}
                index={i}
                archive={archive}
                showContent={showContent}
                setShowContent={setShowContent}
                setCountContent={setCountContent}
              />
            ) : (
              <div className="flex flex-col container mx-auto lg:col-span-3 lg:mb-12">
                <div className="py-10 mx-auto lg:scale-150 lg:py-20">
                  <svg
                    width={182}
                    height={183}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M77.89 120.424l-53.056 51.744M61.042 103.148L7.985 154.892"
                      stroke="#94A0B8"
                      strokeWidth={7.493}
                    />
                    <path
                      d="M7.985 154.892a12.065 12.065 0 00-.214 17.063M24.835 172.168a12.063 12.063 0 01-17.062-.213M124.503 4.479a54.297 54.297 0 10-1.36 108.586 54.297 54.297 0 001.36-108.586zM77.89 120.424l-16.848-17.276M69.466 111.786l15.487-15.104M63.145 134.806l-16.85-17.277"
                      stroke="#94A0B8"
                      strokeWidth={7.493}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M121.528 85.159c-.686-2.437-2.908-7.968-6.306-10.6-3.397-2.632-9.843-3.044-11.923-2.75M103.148 43.893c.283 2.227 1.654 6.996 5.052 9.628 3.397 2.632 9.83 2.262 11.911 1.968M129.906 59.99c.283 2.227 1.654 6.995 5.051 9.628 3.398 2.632 9.831 2.261 11.912 1.968"
                      stroke="#94A0B8"
                      strokeWidth={4.395}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M156.743 66.417c-3.726-1.703-11.151-7.496-11.041-17.047M104.133 32.57c3.172 2.593 11.648 6.698 20.17 2.383"
                      stroke="#94A0B8"
                      strokeWidth={3.174}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M153.272 169.734l.238-1.175c.303-1.5.773-2.77 1.41-3.812.677-1.069 1.446-1.977 2.307-2.725a25.108 25.108 0 012.582-1.978l3.195-2.12c.95-.659 1.531-1.517 1.745-2.573.145-.716.102-1.381-.128-1.995-.224-.648-.645-1.194-1.265-1.639-.578-.472-1.362-.808-2.35-1.008-1.26-.255-2.447-.087-3.56.504-1.072.563-1.841 1.471-2.307 2.725l-6.743-3.227c.693-1.846 1.73-3.374 3.11-4.585 1.414-1.203 3.073-2.038 4.976-2.504 1.937-.459 3.996-.468 6.177-.027 2.658.538 4.783 1.518 6.375 2.94 1.633 1.394 2.744 3.003 3.333 4.824.596 1.788.711 3.585.346 5.391-.263 1.295-.753 2.401-1.471 3.32a12.415 12.415 0 01-2.398 2.388 52.623 52.623 0 01-2.838 1.926 24.453 24.453 0 00-3.442 2.549c-1.038.925-1.706 2.12-2.002 3.585l-.135.664-7.155-1.448zm-2.584 11.714l1.552-7.666 7.666 1.551-1.551 7.667-7.667-1.552zM20.043 31.994l-.471-.896c-.602-1.143-.972-2.225-1.112-3.246a10.382 10.382 0 01.056-3.015c.164-.948.376-1.839.634-2.671l.96-3.093c.27-.938.192-1.81-.232-2.614-.287-.546-.67-.958-1.148-1.237-.492-.305-1.06-.438-1.702-.398-.63 0-1.322.198-2.075.595-.961.505-1.648 1.248-2.061 2.228-.4.94-.42 1.946-.056 3.015l-6.133 1.486c-.532-1.578-.67-3.13-.412-4.66.283-1.541.923-2.973 1.92-4.293 1.022-1.334 2.365-2.439 4.027-3.313 2.027-1.067 3.94-1.56 5.74-1.478 1.813.04 3.398.5 4.756 1.378a8.7 8.7 0 013.102 3.343c.52.987.79 1.973.81 2.957.032.945-.066 1.892-.296 2.842-.243.924-.52 1.85-.829 2.775a20.634 20.634 0 00-.892 3.504c-.186 1.16.015 2.297.602 3.414l.267.507-5.455 2.87zm4.56 9.044l-3.076-5.844 5.845-3.076 3.076 5.845-5.845 3.075z"
                      fill="#94A0B8"
                    />
                  </svg>
                </div>
                <div className="text-center text-andal-lightgrey">
                  <span className="text-5xl font-extrabold lg:text-6xl">
                    Sorry!
                  </span>
                  <p className="text-xl font-semibold mt-2 lg:text-2xl">
                    Your Search Not Found
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Archives;

const Card = ({
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
      {/* MOBILE */}
      <div
        className={`fixed top-0 left-0 z-[60] h-full w-full bg-andal-darkblue overflow-y-auto overflow-x-clip lg:hidden duration-1000 ${
          showContent == archive.id
            ? ""
            : "translate-y-full pointer-events-none"
        }`}
      >
        <div
          className={`bg-andal-lightblue flex w-full items-center p-4 gap-x-2 rounded-b-lg duration-1000`}
        >
          <button onClick={() => setShowContent(-1)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="material-symbols:arrow-downward-rounded">
                <path
                  id="Vector"
                  d="M3.68782 10C3.68782 10.1112 3.70505 10.2153 3.73949 10.3125C3.77394 10.4098 3.8331 10.5 3.91699 10.5834L9.41699 16.0834C9.58366 16.25 9.78144 16.3334 10.0103 16.3334C10.2392 16.3334 10.4373 16.25 10.6045 16.0834C10.7712 15.9167 10.8545 15.7223 10.8545 15.5C10.8545 15.2778 10.7712 15.0834 10.6045 14.9167L6.52116 10.8334H15.8545C16.0906 10.8334 16.285 10.7534 16.4378 10.5934C16.5906 10.4334 16.667 10.2356 16.667 10C16.667 9.76393 16.587 9.56587 16.427 9.40587C16.267 9.24587 16.0692 9.16615 15.8337 9.16671H6.52116L10.6045 5.08337C10.7712 4.91671 10.8545 4.72226 10.8545 4.50004C10.8545 4.27782 10.7712 4.08337 10.6045 3.91671C10.4378 3.75004 10.2398 3.66671 10.0103 3.66671C9.78088 3.66671 9.5831 3.75004 9.41699 3.91671L3.91699 9.41671C3.83366 9.50004 3.77449 9.59032 3.73949 9.68754C3.70449 9.78476 3.68727 9.88893 3.68782 10Z"
                  fill="#040D21"
                />
              </g>
            </svg>
          </button>
          <span className="text-andal-darkblue">Kembali ke Homepage</span>
        </div>
        <div
          className={`mx-4 pt-7 pb-4 lg:hidden duration-1000 ${
            showContent == archive.id ? "" : ""
          }`}
        >
          <h2 className="text-center font-extrabold mx-4 leading-tight">
            {archive.title}
          </h2>
          <div className="relative w-auto flex justify-start gap-x-4 h-[320px] mt-4 p-2">
            {archive.pictures.map((img: any, i: number) => (
              <Image
                key={i}
                src={`https:${img.file.url}`}
                width={0}
                height={0}
                sizes="100%"
                quality={100}
                alt={img.title}
                className="w-auto h-full object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="text-ss relative text-andal-darkblue bg-andal-lightblue rounded-lg px-3 py-4 mt-6">
            <p className="leading-tight text-justify max-h-[270px] overflow-auto pr-2 about-home">
              {archive.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-medium">{archive.author}</span>
              <span className="font-medium">{archive.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className={`hidden lg:inline-block h-screen fixed top-0 left-0 bg-andal-lightblue z-[60] overflow-hidden duration-1000 ${
          showContent == archive.id ? "" : "translate-y-full"
        }`}
      >
        <button
          className="absolute top-10 right-10 bg-andal-light p-2 rounded-full z-50"
          onClick={() => setShowContent(-1)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6899 0.320713C13.5917 0.222272 13.475 0.144172 13.3465 0.090885C13.2181 0.0375978 13.0803 0.010169 12.9413 0.010169C12.8022 0.010169 12.6645 0.0375978 12.536 0.090885C12.4076 0.144172 12.2909 0.222272 12.1926 0.320713L7 5.50274L1.80736 0.310093C1.70905 0.211782 1.59233 0.133796 1.46388 0.0805904C1.33543 0.0273845 1.19776 1.03588e-09 1.05873 0C0.919692 -1.03588e-09 0.78202 0.0273845 0.653569 0.0805904C0.525118 0.133796 0.408405 0.211782 0.310093 0.310093C0.211782 0.408405 0.133796 0.525118 0.0805904 0.653569C0.0273845 0.78202 -1.03588e-09 0.919692 0 1.05873C1.03588e-09 1.19776 0.0273845 1.33543 0.0805904 1.46388C0.133796 1.59233 0.211782 1.70905 0.310093 1.80736L5.50274 7L0.310093 12.1926C0.211782 12.291 0.133796 12.4077 0.0805904 12.5361C0.0273845 12.6646 0 12.8022 0 12.9413C0 13.0803 0.0273845 13.218 0.0805904 13.3464C0.133796 13.4749 0.211782 13.5916 0.310093 13.6899C0.408405 13.7882 0.525118 13.8662 0.653569 13.9194C0.78202 13.9726 0.919692 14 1.05873 14C1.19776 14 1.33543 13.9726 1.46388 13.9194C1.59233 13.8662 1.70905 13.7882 1.80736 13.6899L7 8.49726L12.1926 13.6899C12.291 13.7882 12.4077 13.8662 12.5361 13.9194C12.6646 13.9726 12.8022 14 12.9413 14C13.0803 14 13.218 13.9726 13.3464 13.9194C13.4749 13.8662 13.5916 13.7882 13.6899 13.6899C13.7882 13.5916 13.8662 13.4749 13.9194 13.3464C13.9726 13.218 14 13.0803 14 12.9413C14 12.8022 13.9726 12.6646 13.9194 12.5361C13.8662 12.4077 13.7882 12.291 13.6899 12.1926L8.49726 7L13.6899 1.80736C14.0934 1.40384 14.0934 0.724231 13.6899 0.320713Z"
              fill="#040D21"
            />
          </svg>
        </button>

        <div className="grid grid-cols-[1.1fr_0.9fr] text-andal-darkblue w-full h-full relative z-10 px-24 2xl:px-40 py-14 gap-x-4">
          <ArchiveCarousel />
          {/* <ArchiveCarousel images={archive.photos} /> */}
          {/* <div className="w-full h-full">
            {archive.photos.map((photo, i) => (
                <Image
                  src="/images/hero.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
            ))}
          </div> */}
          <div className="flex flex-col justify-between max-h-screen">
            <div className="">
              <h2 className="font-extrabold text-4xl leading-none mb-4">
                {archive.title}
              </h2>
              <p className="font-medium text-justify pr-4 overflow-auto flex-1 max-h-[72vh]">
                {archive.description}
              </p>
            </div>
            <div className="flex justify-between mb-14 text-lg font-medium">
              <span>{archive.initiator[0].position}</span>
              <span>{dayjs(archive.date).format("DD MMM YYYY")}</span>
            </div>
          </div>
        </div>

        {/* BACKGROUND ORNAMENT */}
        <div className="absolute top-0 left-0">
          <svg
            width={205}
            height={164}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.03 128.813h14.883c8.22 0 14.883 6.663 14.883 14.883 0 8.219-6.664 14.882-14.883 14.882-8.22 0-14.883-6.663-14.883-14.882v-14.883zm35.187 14.883c0 11.213-9.09 20.304-20.304 20.304-11.214 0-20.304-9.091-20.304-20.304v-20.305h20.304c11.214 0 20.304 9.091 20.304 20.305zM20.304 117.97h14.883v-14.883c0-8.22-6.663-14.883-14.883-14.883-8.22 0-14.882 6.664-14.882 14.883s6.663 14.883 14.882 14.883zm0-35.187C9.091 82.783 0 91.873 0 103.087c0 11.214 9.09 20.304 20.304 20.304H40.61v-20.304c0-11.214-9.091-20.304-20.305-20.304zM46.03 117.97h14.883c8.22 0 14.883-6.664 14.883-14.883 0-8.22-6.664-14.883-14.883-14.883-8.22 0-14.883 6.664-14.883 14.883v14.883zm35.187-14.883c0-11.214-9.09-20.304-20.304-20.304-11.214 0-20.304 9.09-20.304 20.304v20.304h20.304c11.214 0 20.304-9.09 20.304-20.304zm78.319-25.813h-15.122c-8.351 0-15.122-6.77-15.122-15.122 0-8.351 6.771-15.121 15.122-15.121 8.352 0 15.122 6.77 15.122 15.121v15.122zm-35.752-15.122c0-11.394 9.236-20.63 20.63-20.63-11.394 0-20.63-9.237-20.63-20.63 0 11.393-9.237 20.63-20.631 20.63 11.394 0 20.631 9.236 20.631 20.63zm0 0c0 11.394-9.237 20.63-20.631 20.63h-20.63v-20.63c0-11.394 9.236-20.63 20.63-20.63-11.394 0-20.63-9.237-20.63-20.63V.26H103.153c11.394 0 20.631 9.237 20.631 20.631 0-11.394 9.236-20.63 20.63-20.63h20.631V20.89c0 11.394-9.237 20.63-20.631 20.63 11.394 0 20.631 9.237 20.631 20.631v20.631h-20.631c-11.394 0-20.63-9.237-20.63-20.63zm-83.175.326c0-11.214 9.09-20.304 20.304-20.304-11.214 0-20.304-9.091-20.304-20.305 0 11.214-9.09 20.305-20.305 20.305 11.214 0 20.305 9.09 20.305 20.304zM20.304 42.174C9.091 42.174 0 33.083 0 21.869V1.565h20.304c11.214 0 20.305 9.09 20.305 20.304 0-11.213 9.09-20.304 20.304-20.304h20.304v20.304c0 11.214-9.09 20.305-20.304 20.305 11.214 0 20.304 9.09 20.304 20.304v20.304H60.913c-11.214 0-20.304-9.09-20.304-20.304 0 11.214-9.09 20.304-20.305 20.304H0V62.478c0-11.214 9.09-20.304 20.304-20.304zM144.414 5.77h15.122V20.89c0 8.352-6.77 15.122-15.122 15.122-8.351 0-15.122-6.77-15.122-15.122 0-8.351 6.771-15.121 15.122-15.121zM88.032 77.274h15.121c8.352 0 15.122-6.77 15.122-15.122 0-8.351-6.77-15.121-15.122-15.121-8.351 0-15.122 6.77-15.122 15.121v15.122zM103.152 5.77H88.032V20.89c0 8.352 6.77 15.122 15.121 15.122 8.352 0 15.122-6.77 15.122-15.122 0-8.351-6.77-15.121-15.122-15.121zM20.304 128.813h14.883v14.883c0 8.219-6.663 14.882-14.883 14.882-8.22 0-14.882-6.663-14.882-14.882 0-8.22 6.663-14.883 14.882-14.883zm0 35.187C9.091 164 0 154.909 0 143.696c0-11.214 9.09-20.305 20.304-20.305H40.61v20.305c0 11.213-9.091 20.304-20.305 20.304zM170.378 36.024h14.644c8.087 0 14.643-6.556 14.643-14.643 0-8.088-6.556-14.644-14.643-14.644-8.088 0-14.644 6.556-14.644 14.644v14.643zM205 21.381c0-11.034-8.945-19.978-19.978-19.978-11.034 0-19.978 8.944-19.978 19.978v19.978h19.978c11.033 0 19.978-8.945 19.978-19.978zm-19.978 4.898h-4.899v-4.898a4.899 4.899 0 114.899 4.898zm0-15.132c5.652 0 10.234 4.582 10.234 10.234 0 5.651-4.582 10.233-10.234 10.233h-10.234V21.381c0-5.652 4.582-10.234 10.234-10.234z"
              fill="#F9B20B"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg
            width={205}
            height={164}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-scale-100"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.03 128.813h14.883c8.22 0 14.883 6.663 14.883 14.883 0 8.219-6.664 14.882-14.883 14.882-8.22 0-14.883-6.663-14.883-14.882v-14.883zm35.187 14.883c0 11.213-9.09 20.304-20.304 20.304-11.214 0-20.304-9.091-20.304-20.304v-20.305h20.304c11.214 0 20.304 9.091 20.304 20.305zM20.304 117.97h14.883v-14.883c0-8.22-6.663-14.883-14.883-14.883-8.22 0-14.882 6.664-14.882 14.883s6.663 14.883 14.882 14.883zm0-35.187C9.091 82.783 0 91.873 0 103.087c0 11.214 9.09 20.304 20.304 20.304H40.61v-20.304c0-11.214-9.091-20.304-20.305-20.304zM46.03 117.97h14.883c8.22 0 14.883-6.664 14.883-14.883 0-8.22-6.664-14.883-14.883-14.883-8.22 0-14.883 6.664-14.883 14.883v14.883zm35.187-14.883c0-11.214-9.09-20.304-20.304-20.304-11.214 0-20.304 9.09-20.304 20.304v20.304h20.304c11.214 0 20.304-9.09 20.304-20.304zm78.319-25.813h-15.122c-8.351 0-15.122-6.77-15.122-15.122 0-8.351 6.771-15.121 15.122-15.121 8.352 0 15.122 6.77 15.122 15.121v15.122zm-35.752-15.122c0-11.394 9.236-20.63 20.63-20.63-11.394 0-20.63-9.237-20.63-20.63 0 11.393-9.237 20.63-20.631 20.63 11.394 0 20.631 9.236 20.631 20.63zm0 0c0 11.394-9.237 20.63-20.631 20.63h-20.63v-20.63c0-11.394 9.236-20.63 20.63-20.63-11.394 0-20.63-9.237-20.63-20.63V.26H103.153c11.394 0 20.631 9.237 20.631 20.631 0-11.394 9.236-20.63 20.63-20.63h20.631V20.89c0 11.394-9.237 20.63-20.631 20.63 11.394 0 20.631 9.237 20.631 20.631v20.631h-20.631c-11.394 0-20.63-9.237-20.63-20.63zm-83.175.326c0-11.214 9.09-20.304 20.304-20.304-11.214 0-20.304-9.091-20.304-20.305 0 11.214-9.09 20.305-20.305 20.305 11.214 0 20.305 9.09 20.305 20.304zM20.304 42.174C9.091 42.174 0 33.083 0 21.869V1.565h20.304c11.214 0 20.305 9.09 20.305 20.304 0-11.213 9.09-20.304 20.304-20.304h20.304v20.304c0 11.214-9.09 20.305-20.304 20.305 11.214 0 20.304 9.09 20.304 20.304v20.304H60.913c-11.214 0-20.304-9.09-20.304-20.304 0 11.214-9.09 20.304-20.305 20.304H0V62.478c0-11.214 9.09-20.304 20.304-20.304zM144.414 5.77h15.122V20.89c0 8.352-6.77 15.122-15.122 15.122-8.351 0-15.122-6.77-15.122-15.122 0-8.351 6.771-15.121 15.122-15.121zM88.032 77.274h15.121c8.352 0 15.122-6.77 15.122-15.122 0-8.351-6.77-15.121-15.122-15.121-8.351 0-15.122 6.77-15.122 15.121v15.122zM103.152 5.77H88.032V20.89c0 8.352 6.77 15.122 15.121 15.122 8.352 0 15.122-6.77 15.122-15.122 0-8.351-6.77-15.121-15.122-15.121zM20.304 128.813h14.883v14.883c0 8.219-6.663 14.882-14.883 14.882-8.22 0-14.882-6.663-14.882-14.882 0-8.22 6.663-14.883 14.882-14.883zm0 35.187C9.091 164 0 154.909 0 143.696c0-11.214 9.09-20.305 20.304-20.305H40.61v20.305c0 11.213-9.091 20.304-20.305 20.304zM170.378 36.024h14.644c8.087 0 14.643-6.556 14.643-14.643 0-8.088-6.556-14.644-14.643-14.644-8.088 0-14.644 6.556-14.644 14.644v14.643zM205 21.381c0-11.034-8.945-19.978-19.978-19.978-11.034 0-19.978 8.944-19.978 19.978v19.978h19.978c11.033 0 19.978-8.945 19.978-19.978zm-19.978 4.898h-4.899v-4.898a4.899 4.899 0 114.899 4.898zm0-15.132c5.652 0 10.234 4.582 10.234 10.234 0 5.651-4.582 10.233-10.234 10.233h-10.234V21.381c0-5.652 4.582-10.234 10.234-10.234z"
              fill="#F9B20B"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
