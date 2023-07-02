import Image from "next/image";
import Link from "next/link";

const Archive = () => {
  return (
    <>
      <section className="pt-12">
        <h2 className="text-[2rem] font-extrabold text-center">Archive</h2>
        <p className="font-medium text-ss text-center px-10 text-andal-lightgrey mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="relative h-[360px] border-8 border-andal-lightblue mx-4 mt-6 rounded-2xl pb-9 overflow-hidden">
          <Image
            src="/images/hero.png"
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt=""
            className="h-full w-auto object-cover rounded-lg"
          />
          <div className="absolute w-[calc(100%-28px)] bottom-4 left-1/2 -translate-x-1/2 bg-[#EBEFF8] rounded-2xl px-5 py-4 border-[#040D21] border-[2px] overflow-hidden">
            <span className="text-andal-darkblue font-extrabold">
              Lorem Ipsum
            </span>
            <p className="text-ss mt-2 text-justify text-andal-lightgreyblue leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus.
            </p>
          </div>
        </div>
        <Link href="/archive">
          <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg mx-auto block mt-6">
            More Archived
          </button>
        </Link>
      </section>
    </>
  );
};

export default Archive;
