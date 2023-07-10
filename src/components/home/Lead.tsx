import Image from "next/image";
import LeadBg from "../icons/LeadBg";

const Lead = () => {
  return (
    <>
      <section className="mt-28 px-10 mb-24 container mx-auto lg:grid lg:grid-cols-[1.3fr_0.7fr] relative lg:gap-x-10 overflow-x-clip overflow-y-visible ">
        <div className="flex relative justify-center lg:order-2 lg:flex lg:items-center mx-10 lg:mx-0">
          <Image
            src="/images/lead-n-bg.png"
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt=""
            className="w-full h-auto max-w-[360px]"
          />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center relative z-10">
          <h2 className="text-[2rem] font-extrabold text-center leading-none mt-12 lg:text-5xl lg:text-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-andal-orange to-andal-yellow">
              Lorem ipsum{" "}
            </span>
            dolor sit amet.
          </h2>
          <p className="text-center text-andal-lightgrey mt-6 lg:text-start lg:text-xl">
            Have meals delivered to you within minutes from a wide variety of
            restaurants ranging from African to Continental cuisines.
          </p>
          <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg mx-auto block mt-4 lg:mr-auto lg:ml-0 lg:text-lg">
            Andalin Page
          </button>
        </div>

        <div
          className={`w-[680px] h-[680px] absolute bottom-0 translate-y-2/3 left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
        ></div>
      </section>
    </>
  );
};

export default Lead;
