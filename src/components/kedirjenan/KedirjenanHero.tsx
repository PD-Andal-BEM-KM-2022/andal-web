import Image from "next/image";
import HeroBg from "../icons/about/HeroBg";

const KedirjenanHero = ({
  kedirjenan,
}: {
  kedirjenan?: {
    title: string;
    desc: string;
  };
}) => {
  const slug = kedirjenan?.title.replace(/\s/g, "").toLowerCase();

  return (
    <>
      <section className="bg-andal-lightblue text-andal-darkblue">
        <div className="absolute top-0 flex justify-between w-full">
          <HeroBg flip={false} />
          <HeroBg flip={true} />
        </div>
        <div className="pt-20 lg:pt-36 xl:container mx-auto">
          <div className="lg:bg-andal-darkblue lg:mx-20 2xl:mx-52 lg:rounded-2xl lg:py-12 lg:px-16 lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-x-20">
            <h2 className="text-center text-3xl font-extrabold px-12 lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-andal-orange lg:to-andal-yellow lg:p-auto lg:text-6xl lg:col-span-2">
              Kedirjenan {kedirjenan?.title}
            </h2>
            <div className="w-[120px] my-7 block m-auto lg:row-span-2 lg:flex lg:items-center lg:w-full lg:mt-7 lg:h-full">
              <Image
                src={`/icons/kedirjenan/${slug}.svg`}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                quality={100}
                className="w-full h-auto"
              />
            </div>
            <div className="container mx-auto">
              <div className="bg-andal-darkblue text-andal-lightgreyblue px-3 py-4 rounded-lg mx-4 lg:p-0 lg:mx-0 lg:mt-6 lg:bg-transparent">
                <p className="max-h-[320px] overflow-auto about-content text-ss text-justify pr-3 lg:max-h-full lg:text-xl">
                  {kedirjenan?.desc}
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent col-span-2 my-6 hidden lg:inline-block"></div>
            <div className="hidden lg:flex justify-between text-andal-lightgreyblue lg:col-span-2">
              <button className="flex gap-x-2">
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
                    fill="#94A0B8"
                  />
                </svg>
                <span>before</span>
              </button>
              <button className="flex gap-x-2">
                <span>test</span>
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
                    fill="#94A0B8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KedirjenanHero;