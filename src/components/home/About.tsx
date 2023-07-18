import Image from "next/image";
import Andal from "../icons/Andal";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="pt-12 lg:pt-20 relative px-4">
        <div className="absolute top-0 left-0 w-full h-1/2 sm:h-2/3 bg-gradient-to-r from-[#061337] to-85% to-[#070879]/60"></div>
        <h2 className="lg:hidden relative text-[2rem] font-extrabold text-center">
          About Andal
        </h2>
        <div className="lg:hidden relative w-[120px] my-7 m-auto">
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
        <div className="relative bg-andal-lightblue rounded-lg px-3 py-4 container mx-auto lg:px-16 lg:py-12 lg:grid lg:gap-x-14 2xl:gap-x-28 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="hidden lg:inline-block text-andal-darkblue lg:text-5xl font-extrabold mb-6">
                About Andal
              </h2>
              <p className="text-andal-darkblue text-ss lg:text-xl leading-tight text-justify max-h-[270px] overflow-auto pr-2 about-home lg:max-h-full">
                Dengan berlatar belakang teknologi, Kementerian Analisis Data
                dan Produk Digital menjadi garda terdepan BEM KM UGM 2023 dalam
                bidang tersebut yang dielaborasikan dengan isu hangat pada
                khalayak publik. Melalui metode riset digital, pengkajian
                terhadap isu dilakukan sehingga menawarkan output produk digital
                yang objektif, aplikatif, berdaya guna, serta inovatif dalam
                merespons perkembangan teknologi.
              </p>
            </div>
            <Link href="/about">
              <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg mx-auto block mt-4 lg:text-lg lg:mr-auto lg:ml-0">
                Read More
              </button>
            </Link>
          </div>
          <div className="hidden w-full h-full lg:flex lg:items-center">
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
        </div>
      </section>
    </>
  );
};

export default About;
