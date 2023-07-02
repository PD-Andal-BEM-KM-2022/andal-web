import Instagram from "./icons/Instagram";
import Line from "./icons/Line";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

const Footer = () => {
  return (
    <>
      <footer className="mx-4 -translate-y-4 bg-andal-lightblue py-6 px-4 text-andal-darkblue rounded-lg">
        <h3 className="text-xl font-extrabold leading-none">
          Kementrian Analisis Data dan Produk Digital
        </h3>
        <h3 className="text-xl font-extrabold leading-none">BEM KM UGM 2023</h3>
        <p className="mt-4 leading-snug text-ss">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          aperiam quo aliquid vero, quas ex. Voluptas laudantium illum id porro
          perspiciatis in officiis quisquam.
        </p>
        <hr className="bg-black border-black my-4" />
        <span className="uppercase tracking-wides text-ss font-extrabold">
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
        <hr className="bg-black border-black my-4" />
        <span className="text-ss flex items-center gap-x-2">
          <svg
            width={14}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-1"
          >
            <path
              d="M5.72 6.24a1.62 1.62 0 01.2-.574c.2-.373.54-.567 1-.573.3 0 .573.133.766.326.187.207.313.494.313.78h1.2a2.203 2.203 0 00-.2-.866c-.1-.254-.253-.48-.453-.667-.967-.893-2.76-.767-3.58.247-.86 1.113-.88 3.06-.007 4.173.807.993 2.574 1.133 3.534.247.206-.167.373-.374.506-.614.107-.24.18-.493.187-.766H8c0 .14-.046.266-.106.38-.06.126-.14.226-.227.313-.22.173-.48.267-.76.267-.24-.007-.44-.054-.593-.154a.94.94 0 01-.394-.426c-.333-.6-.28-1.434-.2-2.094zM7 .332c-3.667 0-6.667 3-6.667 6.666.353 8.847 13 8.84 13.333 0 0-3.666-3-6.666-6.667-6.666zm0 12a5.34 5.34 0 01-5.334-5.334C1.96-.074 12.04-.074 12.333 7a5.34 5.34 0 01-5.334 5.334z"
              fill="#4A5467"
            />
          </svg>
          Andal 2023 - All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
