const Hero = () => {
  return (
    <>
      <main className="bg-[url(/images/hero.png)] bg-no-repeat bg-bottom bg-[length:185%] lg:bg-cover pt-24 lg:pt-36 overflow-hidden h-screen">
        <div className="relative z-10 leading-snug">
          <h1 className="text-2xl text-center font-extrabold text-andal-lightblue mx-auto lg:text-6xl">
            <p className="w-[70%] mx-auto ">
              Kementrian Analisis Data dan Produk Digital
            </p>
            <p className="block text-transparent bg-clip-text bg-gradient-to-r from-andal-orange to-andal-yellow">
              BEM KM UGM 2023
            </p>
          </h1>
          <p className="text-ss lg:text-xl text-center mt-7 w-[70%] mx-auto">
            Have meals delivered to you within minutes from a wide variety of
            restaurants ranging from African to Continental cuisines to satisfy
            your cravings.
          </p>
        </div>
        <div className="bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[60vh]" />
      </main>
    </>
  );
};

export default Hero;
