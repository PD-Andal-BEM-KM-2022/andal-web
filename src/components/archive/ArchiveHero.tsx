import Image from "next/image";
import HeroBg from "../icons/about/HeroBg";

const ArchiveHero = () => {
  return (
    <>
      <section className="bg-andal-lightblue text-andal-darkblue pb-24">
        <div className="absolute top-0 flex justify-between w-full">
          <HeroBg flip={false} />
          <HeroBg flip={true} />
        </div>
        <div className="pt-20 mx-auto">
          <div className="">
            <h2 className="text-center text-3xl font-extrabold px-10 lg:text-6xl">
              Archive Page
            </h2>
            <p className="text-center font-medium px-10 mt-4 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchiveHero;
