import Image from "next/image";
import Link from "next/link";

const Kedirjenan = () => {
  return (
    <>
      <section className="pt-36 mb-24">
        <h3 className="text-3xl font-extrabold text-center">Kedirjenan</h3>
        <div className="grid grid-cols-2 mt-14 place-content-center gap-3 px-3">
          <KedirjenanCard name="Riset Data" />
          <KedirjenanCard name="Riset Spasial" />
          <KedirjenanCard name="Humas" />
          <KedirjenanCard name="Media" />
          <KedirjenanCard name="Produk Digital" />
          <KedirjenanCard name="Personalia" />
        </div>
      </section>
    </>
  );
};

export default Kedirjenan;

const KedirjenanCard = ({ name }: { name: string }) => {
  return (
    <>
      <Link href="/kedirjenan">
        <div className="relative h-[160px] bg-andal-lightblue rounded-lg overflow-hidden">
          <div className="absolute w-8 h-8 top-2 left-2 bg-andal-lightblue p-1 rounded-lg">
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
          <div className="w-full h-28 bg-red-500">
            <Image
              src="/hero.png"
              alt=""
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="h-full w-auto object-cover"
            />
          </div>
          <h6 className="text-andal-darkblue text-ss font-extrabold text-center h-12 grid place-content-center leading-none">
            <span>Kedirjenan</span>
            <span>{name}</span>
          </h6>
        </div>
      </Link>
    </>
  );
};
