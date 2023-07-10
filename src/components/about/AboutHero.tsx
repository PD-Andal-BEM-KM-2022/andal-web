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
        <div className="pt-20 lg:pt-36 xl:container mx-auto">
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
                <p className="max-h-[320px] overflow-auto about-content text-ss text-justify pr-3 lg:max-h-full lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus dolore voluptas, necessitatibus reiciendis adipisci
                  odio blanditiis perspiciatis voluptatibus? Nostrum eaque
                  tenetur optio atque, aliquam suscipit ea, voluptatem
                  exercitationem quisquam facilis ab temporibus voluptates omnis
                  cumque laboriosam saepe nesciunt ipsum. Minus quae nemo, ipsam
                  aliquid dolorum expedita temporibus alias? Suscipit labore
                  laboriosam, officiis perspiciatis nihil accusamus vitae
                  commodi omnis tempore placeat soluta impedit dignissimos
                  facere aperiam nostrum dolorum culpa eius magni explicabo
                  consectetur pariatur sed debitis. Non dolore nisi officia
                  dolor ex alias illum est, laborum blanditiis fugiat autem
                  neque, dolorem optio magnam! Mollitia deserunt, impedit
                  facilis suscipit voluptatem consequuntur nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
