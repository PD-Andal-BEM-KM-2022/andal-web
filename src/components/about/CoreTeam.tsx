import Image from "next/image";
import LinkedIn from "../icons/LinkedIn";

const CoreTeam = ({
  about,
  kedirjenan,
}: {
  about?: boolean;
  kedirjenan?: boolean;
}) => {
  return (
    <>
      <style jsx>{`
        .curved-border-l::after,
        .curved-border-r::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 1rem;
          width: 1rem;
          background-color: #0000ff;
        }

        .curved-border-l::after {
          border-radius: 0 16px 0 0;
        }

        .curved-border-r::after {
          border-radius: 16px 0 0 0;
        }
      `}</style>
      <section
        className={`pt-[100px] bg-andal-lightblue overflow-hidden ${
          kedirjenan ? "mb-20" : ""
        }`}
      >
        <div className="bg-andal-darkblue rounded-t-3xl">
          <h3
            className={`font-extrabold flex justify-center text-center text-3xl  py-16 ${
              about ? "whitespace-nowrap px-[4.5rem]" : ""
            }`}
          >
            {kedirjenan ? "Anggota Kedirjenan Produk Digital" : "Our Core Team"}
          </h3>
          <div className="flex gap-x-4 mx-4 w-[400vw]">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreTeam;

const Card = () => {
  return (
    <>
      <div className="max-w-[75vw] relative border-8 border-andal-lightblue rounded-xl bg-andal-lightblue">
        <div className="absolute top-0 text-center px-6 pb-3 pt-2 font-extrabold leading-snug rounded-b-[24px] bg-andal-lightblue text-andal-darkblue w-3/4 left-1/2 -translate-x-1/2">
          <div className="absolute top-0 left-0 -translate-x-full bg-andal-lightblue h-4 w-4 curved-border-l"></div>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <div className="absolute top-0 right-0 translate-x-full bg-andal-lightblue h-4 w-4 curved-border-r"></div>
        </div>
        <Image
          src="/hero.png"
          width={0}
          height={0}
          sizes="100%"
          quality={100}
          alt=""
          className="h-[400px] w-auto object-cover rounded-xl overflow-hidden"
        />
        <div className="flex justify-between bg-andal-lightblue px-3 pt-3 pb-2 items-center">
          <div className="text-andal-darkblue text-ss">
            <h5 className="font-extrabold leading-tight">
              Raden Restu Akbar Bagus Pratama
            </h5>
            <h6>Ilmu Komputer 2021</h6>
          </div>
          <div className="scale-[1.75]">
            <LinkedIn />
          </div>
        </div>
      </div>
    </>
  );
};
