import Image from "next/image";
import { useEffect } from "react";

const Hero = () => {
  const handleScroll = () => {
    if (typeof document !== undefined && typeof window !== undefined) {
      let scrollVal = window.scrollY;

      const bg = document.querySelector<HTMLElement>("#bg-hero");
      if (bg) {
        bg.style.scale = `calc(105% - ${scrollVal / 50}%)`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="pt-24 lg:pt-36 overflow-hidden h-screen bg-andal-lightblue relative">
        <div className="relative z-10">
          <h1 className="text-2xl text-center font-extrabold text-andal-lightblue mx-auto lg:text-6xl">
            <p className="w-[70%] mx-auto tracking-tighter leading-tight">
              Kementerian Analisis Data dan Produk Digital
            </p>
            <p className="block text-transparent bg-clip-text bg-gradient-to-r from-andal-orange to-andal-yellow tracking-tighter">
              BEM KM UGM 2023
            </p>
          </h1>
          <p className="text-ss lg:text-xl text-center mt-4 whitespace-nowrap mx-auto">
            Selamat datang di situs resmi kami!
          </p>
        </div>
        <div className="absolute inset-0 h-screen w-screen" id="bg-hero">
          <Image
            id="bg-hero"
            src={"/images/hero.png"}
            alt="hero bg"
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            unoptimized
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </main>
    </>
  );
};

export default Hero;
