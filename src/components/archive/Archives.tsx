import Image from "next/image";
import Footer from "../Footer";
import { MouseEvent, useState } from "react";
import Link from "next/link";

const Archives = ({
  archives,
}: {
  archives: {
    id: number;
    title: string;
    author: string;
    date: string;
    photos: string[];
    content: string;
  }[];
}) => {
  const kedirjenans = [
    "semua kedirjenan",
    "kedirjenan a",
    "kedirjenan b",
    "kedirjenan c",
    "kedirjenan d",
    "kedirjenan e",
  ];
  const [showDirjens, setShowDirjens] = useState(false);
  const [selectedDirjen, setSelectedDirjen] = useState(0);

  const handleSelectDirjen = (i: number) => {
    setSelectedDirjen(i);
    setShowDirjens(false);
  };

  return (
    <>
      <section className="bg-andal-darkblue -mt-7 pt-16 rounded-t-3xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-andal-yellow rounded-full px-6 py-3 w-[280px] border border-[#ac7904] flex items-center gap-x-4">
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
                stroke-width="2.08333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <input
            type="text"
            className="text-andal-darkblue bg-transparent placeholder:text-andal-darkblue focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="relative w-full">
          <div
            className="text-ss text-andal-darkblue bg-[#EBEFF8] flex items-center justify-between px-4 py-2 rounded-lg mx-8 cursor-pointer active:bg-[#DADEE7]"
            onClick={() => setShowDirjens(!showDirjens)}
          >
            <div className="flex items-center gap-x-2">
              <span
                className={`w-2 h-2 rounded-full border border-andal-darkblue bg-andal-darkblue`}
              ></span>
              <span className="font-medium capitalize">
                Filter: {kedirjenans[selectedDirjen]}
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
                  <g id="mingcute:left-line" clip-path="url(#clip0_478_12806)">
                    <g id="Group">
                      <path
                        id="Vector"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
            className={`z-10 absolute -bottom-2 mx-8 bg-[#EBEFF8] text-ss text-andal-darkblue p-4 rounded-lg w-[calc(100%-4rem)] duration-500 flex flex-col gap-y-2 ${
              showDirjens
                ? "translate-y-full"
                : "translate-y-[95%] opacity-0 pointer-events-none"
            }`}
          >
            {kedirjenans.map((kedirjenan, i) => (
              <div
                key={i}
                className="flex items-center gap-x-2"
                onClick={() => handleSelectDirjen(i)}
              >
                <div
                  className={`w-2 h-2 rounded-full border border-andal-darkblue cursor-pointer ${
                    selectedDirjen == i ? "bg-andal-darkblue" : ""
                  }`}
                ></div>
                <label htmlFor="dirjen" className="capitalize cursor-pointer">
                  {kedirjenan}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-12 mx-8">
          {archives.map((archive, i) => (
            <Card key={i} archive={archive} />
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Archives;

const Card = ({
  archive,
}: {
  archive: {
    id: number;
    title: string;
    author: string;
    date: string;
    photos: string[];
    content: string;
  };
}) => {
  return (
    <>
      <Link href={`/archive/post/${archive.id}`}>
        <div className="mt-7 relative border-8 border-andal-lightblue rounded-xl bg-andal-lightblue">
          <Image
            src={`/images/${archive.photos[0]}`}
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt=""
            className="h-[400px] w-auto object-cover rounded-xl overflow-hidden"
          />
          <div className="absolute bottom-3 mx-3 rounded-xl flex justify-between bg-[#EBEFF8] px-5 py-4 items-center">
            <div className="text-andal-darkblue text-ss">
              <h5 className="font-extrabold leading-none">{archive.title}</h5>
              <div className="flex justify-between items-start mt-4">
                <h6 className="text-xs font-bold">{archive.author}</h6>
                <h6 className="text-xs">{archive.date}</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
