import Image from "next/image";
import HeroBg from "../icons/about/HeroBg";

const AboutHero = () => {
  return (
    <>
      <section className="bg-andal-lightblue text-andal-darkblue">
        <div className="absolute top-0 flex justify-between w-full">
          <HeroBg flip={false} />
          <HeroBg flip={true} />
        </div>
        <div className="pt-24 lg:pt-36 xl:container mx-auto">
          <div className="lg:bg-andal-darkblue lg:mx-20 2xl:mx-52 lg:rounded-2xl lg:py-12 lg:px-16 lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-x-20">
            <h2 className="text-center text-3xl font-extrabold px-10 lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-andal-orange lg:to-andal-yellow lg:order-2 lg:text-start lg:p-0 lg:text-6xl">
              About Andal
            </h2>
            <div className="w-[120px] my-7 block m-auto lg:row-span-2 lg:flex lg:items-center lg:w-full lg:m-0 lg:h-full">
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
            <div className="container mx-auto lg:order-4">
              <div className="bg-andal-darkblue text-andal-lightgreyblue px-3 py-4 rounded-lg mx-4 lg:p-0 lg:mx-0 lg:mt-6">
                <div className="max-h-[320px] overflow-auto about-content-scrollbar text-ss text-justify pr-3 indent-6 flex flex-col gap-y-[1em] lg:text-xl">
                  <p>
                    Kementerian Analisis Data dan Produk Digital menjadi garda
                    terdepan BEM KM UGM 2023 dalam pengkajian isu-isu berbasis
                    data dan teknologi berdasarkan sentimen yang berada di
                    sosial media. Pengkajian isu dilakukan menggunakan metode
                    riset data sehingga sehingga menghasilkan produk digital
                    yang objektif, aplikatif, berdaya guna, serta inovatif dalam
                    merespons perkembangan teknologi. Produk digital yang
                    dihasilkan juga akan diterapkan melalui metode Data Driven
                    dalam perumusan kebijakan BEM KM UGM 2023.
                  </p>
                  <p>
                    Kementerian Analisis Data dan Produk Digitial memiliki tiga
                    program kerja utama, yaitu :
                  </p>
                  <ol className="list-decimal list-inside indent-0">
                    <li>
                      Andalin yang berfokus pada layanan dan penyediaan jasa.
                    </li>
                    <li>
                      Celoteh Data berupa kajian dalam bentuk video/podcast.
                    </li>
                    <li>
                      Pantau Data berupa penampilan dashboard dari sosial media.
                    </li>
                  </ol>
                  <p>
                    Selain tiga program kerja utama, Kementerian Analisis Data
                    dan Produk Digital juga mengeluarkan output berupa hasil
                    kajian dalam bentuk GAMADATA dan GAMASPACE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
