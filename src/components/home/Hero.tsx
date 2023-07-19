const Hero = () => {
  return (
    <>
      <main className="bg-[url(/images/hero.png)] bg-no-repeat bg-bottom bg-[length:250%] lg:bg-cover pt-24 lg:pt-36 overflow-hidden h-screen">
        <div className="relative z-10">
          <h1 className="text-2xl text-center font-extrabold text-andal-lightblue mx-auto lg:text-6xl">
            <p className="w-[70%] mx-auto tracking-tighter leading-tight">
              Kementrian Analisis Data dan Produk Digital
            </p>
            <p className="block text-transparent bg-clip-text bg-gradient-to-r from-andal-orange to-andal-yellow tracking-tighter">
              BEM KM UGM 2023
            </p>
          </h1>
          <p className="text-ss lg:text-xl text-center mt-4 whitespace-nowrap mx-auto">
            Selamat datang di situs resmi kami!
          </p>
        </div>
        <div className="bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[60vh]" />
      </main>
    </>
  );
};

export default Hero;
