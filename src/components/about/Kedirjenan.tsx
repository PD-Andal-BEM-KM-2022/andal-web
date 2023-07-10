import Image from "next/image";
import Link from "next/link";

const Kedirjenan = () => {
  return (
    <>
      <section className="mb-24 relative overflow-y-visible overflow-x-clip">
        <h3 className="text-3xl font-extrabold text-center lg:text-5xl">
          Kedirjenan
        </h3>
        <div className="grid grid-cols-2 mt-14 place-content-center gap-3 px-3 lg:gap-10 lg:px-28 container mx-auto">
          <KedirjenanCard name="Riset Data" />
          <KedirjenanCard name="Riset Spasial" />
          <KedirjenanCard name="Humas" />
          <KedirjenanCard name="Media" />
          <KedirjenanCard name="Produk Digital" />
          <KedirjenanCard name="Personalia" />
        </div>

        <div
          className={`hidden lg:inline-block w-[250vw] h-[720px] absolute top-0 [translate-y-1/2 right-0 translate-x-[40%] bg-gradient-to-t via-[#072A79] from-transparent to-transparent scale-50 duration-500 rotate-[126deg]`}
        ></div>
      </section>
    </>
  );
};

export default Kedirjenan;

const KedirjenanCard = ({ name }: { name: string }) => {
  const slug = name.replace(/\s/g, "").toLowerCase();

  return (
    <>
      <Link href={`/kedirjenan/${slug}`}>
        <div className="relative z-10 h-[160px] bg-andal-lightblue rounded-lg overflow-hidden lg:grid lg:grid-cols-[1.2fr_0.8fr] group lg:h-full">
          <div className="absolute w-8 h-8 top-2 left-2 bg-andal-lightblue p-1 rounded-lg lg:hidden flex items-center justify-center">
            <Image
              src={`/icons/kedirjenan/${slug}.svg`}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full h-28 bg-red-500 lg:h-full lg:w-auto lg:row-span-2 lg:relative lg:z-30">
            <Image
              src="/images/hero.png"
              alt=""
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden lg:flex items-end justify-center lg:my-1 relative">
            {/* <svg
              width="262"
              height="248"
              viewBox="0 0 262 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-9 relative z-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M157.052 15.0438C145.476 -5.01478 116.524 -5.01474 104.948 15.0438L4.0726 189.824C-7.5013 209.877 6.9713 234.94 30.125 234.94H42.7292L40.8794 227.33L111.327 177.457L188.212 162.357V210.545C188.212 226.066 194.589 234.91 209.027 234.91L209.037 234.94H231.875C255.029 234.94 269.501 209.877 257.927 189.824L157.052 15.0438Z"
                fill="url(#paint0_linear_437_12756)"
              />
              <rect
                x="154.102"
                y="110.8"
                width="33.8101"
                height="64.8527"
                rx="6.01602"
                fill="url(#paint1_linear_437_12756)"
              />
              <rect
                x="117.163"
                y="58.2188"
                width="33.6897"
                height="122.005"
                rx="6.01602"
                fill="url(#paint2_linear_437_12756)"
              />
              <rect
                x="80.3444"
                y="67.3643"
                width="33.6897"
                height="143.422"
                rx="6.01602"
                fill="url(#paint3_linear_437_12756)"
              />
              <rect
                x="43.2864"
                y="124.517"
                width="33.8101"
                height="93.489"
                rx="6.01602"
                fill="url(#paint4_linear_437_12756)"
              />
              <path
                d="M80.5251 187.383C67.8313 195.565 52.7913 182.811 63.1388 168.132L60.4317 156.22L40.1576 169.155L13.266 198.994L32.9384 234.85H48.4597C76.9151 234.85 83.29 235.853 96.4676 224.803L134.686 191.173C144.355 183.753 150.388 178.209 157.59 179.623C174.856 183.011 190.919 187.985 205.719 168.132C205.719 168.132 225.391 143.948 227.557 141.12C229.723 138.293 226.715 135.037 223.045 137.33C219.375 139.624 198.379 152.671 198.379 152.671C191.22 156.281 190.318 159.77 176.18 156.22C162.042 152.671 147.062 141.425 131.24 152.009L80.5251 187.383Z"
                fill="url(#paint5_radial_437_12756)"
              />
              <g filter="url(#filter0_d_437_12756)">
                <path
                  d="M80.5251 187.383C67.8313 195.565 52.7913 182.811 63.1388 168.132L60.4317 156.22L40.1576 169.155L13.266 198.994L32.9384 234.85H48.4597C76.9151 234.85 83.29 235.853 96.4676 224.803L134.686 191.173C144.355 183.753 150.388 178.209 157.59 179.623C174.856 183.011 190.919 187.985 205.719 168.132C205.719 168.132 225.391 143.948 227.557 141.12C229.723 138.293 226.715 135.037 223.045 137.33C219.375 139.624 198.379 152.671 198.379 152.671C191.22 156.281 190.318 159.77 176.18 156.22C162.042 152.671 147.062 141.425 131.24 152.009L80.5251 187.383Z"
                  fill="url(#paint6_radial_437_12756)"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M157.415 15.0439C145.838 -5.01466 116.887 -5.01463 105.31 15.0439L4.43492 189.824C-7.13898 209.878 7.33362 234.94 30.4873 234.94H73.5419C52.2163 232.838 39.5202 209.123 50.5708 189.975L128.471 54.9938C139.643 35.6362 166.995 34.9589 179.299 52.9618L157.415 15.0439Z"
                fill="url(#paint7_linear_437_12756)"
              />
              <defs>
                <filter
                  id="filter0_d_437_12756"
                  x="-22.8302"
                  y="100.459"
                  width="275.179"
                  height="158.479"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-6.01602" dy="-6.01602" />
                  <feGaussianBlur stdDeviation="15.0401" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_437_12756"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_437_12756"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_437_12756"
                  x1="131"
                  y1="-30.0955"
                  x2="457.069"
                  y2="156.522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#061648" />
                  <stop offset="0.217236" stop-color="#112A7D" />
                  <stop offset="1" stop-color="#0152CC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_437_12756"
                  x1="171.007"
                  y1="110.8"
                  x2="171.007"
                  y2="175.652"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F5E45F" />
                  <stop offset="0.401042" stop-color="#E3B326" />
                  <stop offset="0.979167" stop-color="#D86D0B" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_437_12756"
                  x1="134.008"
                  y1="58.2188"
                  x2="134.008"
                  y2="180.224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F5E45F" />
                  <stop offset="0.401042" stop-color="#E3B326" />
                  <stop offset="1" stop-color="#D86D0B" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_437_12756"
                  x1="97.1892"
                  y1="67.3643"
                  x2="97.1892"
                  y2="210.786"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F5E45F" />
                  <stop offset="0.401042" stop-color="#E3B326" />
                  <stop offset="1" stop-color="#D86D0B" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_437_12756"
                  x1="60.1914"
                  y1="124.517"
                  x2="60.1914"
                  y2="218.006"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F5E45F" />
                  <stop offset="0.401042" stop-color="#E3B326" />
                  <stop offset="0.994792" stop-color="#D86D0B" />
                </linearGradient>
                <radialGradient
                  id="paint5_radial_437_12756"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(228.339 101.475) rotate(155.143) scale(219.396 479.811)"
                >
                  <stop stop-color="#FFFAD0" />
                  <stop offset="0.244429" stop-color="#F1DC3A" />
                  <stop offset="0.584686" stop-color="#DCA11D" />
                  <stop offset="0.824111" stop-color="#E0710B" />
                  <stop offset="1" stop-color="#9E4E04" />
                </radialGradient>
                <radialGradient
                  id="paint6_radial_437_12756"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(228.339 101.475) rotate(155.143) scale(219.396 479.811)"
                >
                  <stop stop-color="#FFFAD0" />
                  <stop offset="0.244429" stop-color="#F1DC3A" />
                  <stop offset="0.584686" stop-color="#DCA11D" />
                  <stop offset="0.885417" stop-color="#E0710B" />
                  <stop offset="1" stop-color="#9E4E04" />
                </radialGradient>
                <linearGradient
                  id="paint7_linear_437_12756"
                  x1="197.96"
                  y1="45.947"
                  x2="89.8307"
                  y2="234.94"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0885417" stop-color="#3076FF" />
                  <stop offset="0.411458" stop-color="#024FC6" />
                  <stop offset="1" stop-color="#0D2267" />
                </linearGradient>
              </defs>
            </svg> */}
            <div className="relative z-10">
              <Image
                src={`/icons/kedirjenan/${slug}.svg`}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                quality={100}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-andal-button-orange absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-1 h-1 duration-500 scale-0 group-hover:scale-[50] 2xl:group-hover:scale-[75]"></div>
          </div>
          <h6 className="text-andal-darkblue text-ss font-extrabold text-center h-12 grid place-content-center leading-none lg:h-full lg:flex lg:flex-col lg:justify-start lg:my-1 lg:text-lg 2xl:text-xl relative z-40">
            <span className="lg:leading-none">Kedirjenan</span>
            <span className="lg:leading-none">{name}</span>
          </h6>
        </div>
      </Link>
    </>
  );
};
