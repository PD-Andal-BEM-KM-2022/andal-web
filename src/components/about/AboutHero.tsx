import Image from "next/image";
import HeroBg from "../icons/about/HeroBg";

const AboutHero = ({
  about,
  archive,
}: {
  about?: boolean;
  archive?: boolean;
}) => {
  return (
    <>
      <section className="bg-andal-lightblue text-andal-darkblue">
        <div className="absolute top-0 flex justify-between w-full">
          <HeroBg flip={false} />
          <HeroBg flip={true} />
        </div>
        <h2 className="pt-20 text-center text-3xl font-extrabold px-10">
          {about
            ? "About Andal"
            : archive
            ? "Archive"
            : "Kedirjenan Produk Digital"}
        </h2>
        {!archive && (
          <div className="w-[120px] my-7 block m-auto">
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
        )}
        {archive && (
          <p className="text-center w-2/3 m-auto mt-4 pb-[calc(4.5rem+28px)]">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
        {!archive && (
          <div className="bg-andal-darkblue text-andal-lightgreyblue mx-4 px-3 py-4 rounded-lg ">
            <p className="h-[320px] overflow-auto about-content text-ss text-justify pr-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              dolore voluptas, necessitatibus reiciendis adipisci odio
              blanditiis perspiciatis voluptatibus? Nostrum eaque tenetur optio
              atque, aliquam suscipit ea, voluptatem exercitationem quisquam
              facilis ab temporibus voluptates omnis cumque laboriosam saepe
              nesciunt ipsum. Minus quae nemo, ipsam aliquid dolorum expedita
              temporibus alias? Suscipit labore laboriosam, officiis
              perspiciatis nihil accusamus vitae commodi omnis tempore placeat
              soluta impedit dignissimos facere aperiam nostrum dolorum culpa
              eius magni explicabo consectetur pariatur sed debitis. Non dolore
              nisi officia dolor ex alias illum est, laborum blanditiis fugiat
              autem neque, dolorem optio magnam! Mollitia deserunt, impedit
              facilis suscipit voluptatem consequuntur nulla.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutHero;
