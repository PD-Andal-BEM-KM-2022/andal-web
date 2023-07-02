import Image from "next/image";
import LeadBg from "../icons/LeadBg";

const Lead = () => {
  return (
    <>
      <section className="mt-28 px-10 mb-24">
        {/* <div className="w-52 h-52 bg-andal-lightblue mx-auto"></div> */}
        <div className="flex relative justify-center">
          <LeadBg />
          <Image
            src="/images/lead.png"
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt=""
            className="w-auto h-[115%] absolute bottom-2"
          />
        </div>
        <h2 className="text-[2rem] font-extrabold text-center leading-none mt-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-andal-orange to-andal-yellow">
            Lorem ipsum{" "}
          </span>
          dolor sit amet.
        </h2>
        <p className="text-center text-andal-lightgrey mt-6">
          Have meals delivered to you within minutes from a wide variety of
          restaurants ranging from African to Continental cuisines
        </p>
        <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg mx-auto block mt-4">
          Andalin Page
        </button>
      </section>
    </>
  );
};

export default Lead;
