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
        <div className="pt-24 lg:pt-36 mx-auto">
          <div className="px-8 lg:px-40">
            <h2 className="text-center text-3xl font-extrabold lg:text-6xl">
              Archive Page
            </h2>
            <p className="text-justify font-medium mt-4 lg:text-xl container mx-auto lg:mt-6">
              Hi, ANDAL Buddies! Selamat datang di page Archive. Page ini
              merupakan page yang memuat arsip dan dokumentasi seluruh program
              kerja kementerian dan tiap-tiap kedirjenan. Harapannya, page ini
              dapat menjadi cerminan dari komitmen Kementerian Analisis Data dan
              Produk Digital untuk memberikan dampak yang luas pada masyarakat
              sesuai dengan bidang dan fokus dari Kementerian. Menjunjung tinggi
              transparansi, Kementerian Analisis Data dan Produk Digital terbuka
              atas semua kritik dan saran dari teman-teman ANDAL Buddies
              semuanya!!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchiveHero;
