import Image from "next/image";
import Andal from "../icons/Andal";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="pt-12 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#061337] to-85% to-[#070879]/60"></div>
        <h2 className="relative text-[2rem] font-extrabold text-center">
          About Andal
        </h2>
        <div className="relative w-[120px] my-7 m-auto">
          <Image
            src="/icons/andal-logo.svg"
            alt=""
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            className="w-full h-auto"
          />
        </div>
        <div className="relative bg-andal-lightblue rounded-lg mx-4 px-3 py-4 ">
          <p className="text-andal-darkblue text-ss leading-tight text-justify max-h-[270px] overflow-auto pr-2 about-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Morbi convallis convallis diam sit amet lacinia.
            Aliquam in elementum tellus.
          </p>
          <Link href="/about">
            <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg mx-auto block mt-4">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
