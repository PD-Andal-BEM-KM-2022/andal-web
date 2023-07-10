import { useRouter } from "next/router";
import { archives } from "..";
import Image from "next/image";
import Link from "next/link";

const PostID = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);
  const archive = archives[id - 1];

  return (
    <>
      <section className="w-full h-full overflow-hidden">
        {/* MOBILE */}
        <div className="min-h-screen bg-andal-darkblue lg:hidden">
          <div className="bg-andal-lightblue flex w-full items-center p-4 gap-x-2 rounded-b-lg">
            <Link href="/archive">
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
            </Link>
            <span className="text-andal-darkblue">Kembali ke Homepage</span>
          </div>
          <div className="mx-4 pt-7 pb-4 lg:hidden">
            <h2 className="text-center font-extrabold mx-4 leading-tight">
              {archive["title"]}
            </h2>
            <div className="relative w-auto flex justify-start gap-x-4 h-[320px] mt-4 p-2">
              {archive["photos"].map((img, i) => (
                <Image
                  key={i}
                  src={`/images/${img}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={100}
                  alt=""
                  className="w-auto h-full object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="text-ss relative text-andal-darkblue bg-andal-lightblue rounded-lg px-3 py-4 mt-6">
              <p className="leading-tight text-justify max-h-[270px] overflow-auto pr-2 about-home">
                {archive["content"]}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-medium">{archive["author"]}</span>
                <span className="font-medium">{archive["date"]}</span>
              </div>
            </div>
          </div>
        </div>
        {/* END MOBILE */}

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-2 bg-andal-lightblue w-full">
          <div className="">
            {archive["photos"].map((img, i) => (
              <Image
                key={i}
                src={`/images/${img}`}
                width={0}
                height={0}
                sizes="100%"
                quality={100}
                alt=""
                className="w-auto h-full object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="text-andal-darkblue">
            <h2>{archive["title"]}</h2>
            <p>{archive["content"]}</p>
            <div className="flex justify-between">
              <h5>{archive["author"]}</h5>
              <h5>{archive["date"]}</h5>
            </div>
          </div>
        </div>
        {/* ENDDESKTOP */}
      </section>
    </>
  );
};

export default PostID;
