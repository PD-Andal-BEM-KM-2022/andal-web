import Instagram from "./icons/Instagram";
import Line from "./icons/Line";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

const Footer = () => {
  return (
    <>
      <footer className="mx-4 -translate-y-4 bg-andal-lightblue py-6 px-4 text-andal-darkblue rounded-lg lg:px-20 lg:py-12 lg:grid lg:grid-cols-[2fr_auto]">
        <div className="">
          <h3 className="text-xl lg:text-3xl font-extrabold leading-none lg:inline">
            Kementrian Analisis Data dan Produk Digital
          </h3>
          <h3 className="text-xl lg:text-3xl font-extrabold leading-none lg:inline lg:ml-[.25em]">
            BEM KM UGM 2023
          </h3>
          <p className="mt-4 leading-snug text-ss lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aperiam quo aliquid vero, quas ex. Voluptas laudantium illum id
            porro perspiciatis in officiis quisquam.
          </p>
        </div>
        <hr className="bg-black border-black my-4 lg:hidden" />
        <div className="lg:flex lg:justify-end">
          <div>
            <span className="uppercase tracking-wides text-ss font-extrabold lg:text-base">
              Follow Us
            </span>
            <div className="flex mt-2 gap-x-3">
              <button>
                <LinkedIn />
              </button>
              <button>
                <Instagram />
              </button>
              <button>
                <Line />
              </button>
              <button>
                <Twitter />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:order-3 lg:col-span-2">
          <hr className="bg-black border-black my-4 lg:my-6" />
          <span className="text-ss flex items-center gap-x-2 lg:text-base">
            © Andal 2023 - All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
