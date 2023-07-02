import Image from "next/image";
import Footer from "../Footer";
import { MouseEvent, useState } from "react";

const Archives = () => {
  const kedirjenans = [
    "semua dirjen",
    "kedirjenan a",
    "kedirjenan b",
    "kedirjenan c",
    "kedirjenan d",
    "kedirjenan e",
  ];
  const [showDirjens, setShowDirjens] = useState(false);
  const [selectedDirjen, setSelectedDirjen] = useState(0);

  const handleSelectDirjen = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
    // setSelectedDirjen(i);
    setShowDirjens(false);
  };

  return (
    <>
      <section className="bg-andal-darkblue -mt-7 pt-16 rounded-t-3xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-andal-yellow rounded-full px-6 py-3 w-[280px] border border-[#ac7904]">
          <span className="text-andal-darkblue">O Search</span>
        </div>
        <div className="relative w-full">
          <div
            className="text-ss text-andal-darkblue bg-[#EBEFF8] flex items-center justify-between px-4 py-2 rounded-lg mx-8 cursor-pointer active:bg-[#DADEE7]"
            onClick={() => setShowDirjens(!showDirjens)}
          >
            <div className="flex items-center gap-x-2">
              <span
                className={`w-2 h-2 rounded-full border border-andal-darkblue bg-andal-darkblue`}
              ></span>
              <span className="font-medium capitalize">
                Filter: {kedirjenans[selectedDirjen]}
              </span>
            </div>
            <div className="font-extrabold tracking-widest">PILIH v</div>
          </div>
          {showDirjens && (
            <div className="z-10 absolute -bottom-2 mx-8 translate-y-full bg-[#EBEFF8] text-ss text-andal-darkblue p-4 rounded-lg w-[calc(100%-4rem)]">
              {kedirjenans.map((kedirjenan, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-2"
                  onClick={() => setSelectedDirjen(i)}
                >
                  <div
                    className={`w-2 h-2 rounded-full border border-andal-darkblue ${
                      selectedDirjen == i ? "bg-andal-darkblue" : ""
                    }`}
                  ></div>
                  <label htmlFor="dirjen" className="capitalize">
                    {kedirjenan}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pb-12 mx-8">
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Archives;

const Card = () => {
  return (
    <>
      <div className="mt-7 relative border-8 border-andal-lightblue rounded-xl bg-andal-lightblue">
        <Image
          src="/hero.png"
          width={0}
          height={0}
          sizes="100%"
          quality={100}
          alt=""
          className="h-[400px] w-auto object-cover rounded-xl overflow-hidden"
        />
        <div className="absolute bottom-3 mx-3 rounded-xl flex justify-between bg-[#EBEFF8] px-5 py-4 items-center">
          <div className="text-andal-darkblue text-ss">
            <h5 className="font-extrabold leading-none">
              You are a restaurant owner looking to grow your business
            </h5>
            <div className="flex justify-between items-start mt-4">
              <h6 className="text-xs font-bold">Dirjen BlaBla</h6>
              <h6 className="text-xs">May 17, 2023</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
