import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <>
      <nav className="flex justify-between fixed z-50 w-full h-full p-6">
        {/* NAVBAR BUTTONS */}
        <Link href="/">
          <button
            type="button"
            className={`bg-andal-lightblue rounded-full p-1 border border-andal-lightgreyblue aspect-square w-8 h-8 grid place-content-center duration-1000 ${
              navMenu ? "-translate-y-[200%]" : ""
            }`}
          >
            <svg
              width="262"
              height="248"
              viewBox="0 0 262 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
            </svg>
          </button>
        </Link>
        <button
          type="button"
          onClick={() => setNavMenu(!navMenu)}
          className={`bg-andal-lightblue rounded-full p-1 border border-andal-lightgreyblue aspect-square w-8 h-8 grid place-content-center duration-1000 ${
            navMenu ? "-translate-y-[200%]" : ""
          }`}
        >
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M1.4375 11.375H14.5625M1.4375 6.375H14.5625M1.4375 1.375H14.5625"
              stroke="#040D21"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* NAVBAR CONTENT */}
        <div
          className={`absolute inset-0 w-full h-screen z-[51] bg-andal-darkblue flex flex-col justify-between p-8 duration-500 ${
            navMenu ? "" : "translate-x-full pointer-events-none"
          }`}
        >
          <div>
            <div className="flex justify-end">
              <button
                className={`duration-1000 ${navMenu ? "" : "rotate-[180deg]"}`}
                onClick={() => setNavMenu(!navMenu)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M13.6899 0.320713C13.5917 0.222272 13.475 0.144172 13.3465 0.090885C13.2181 0.0375978 13.0803 0.010169 12.9413 0.010169C12.8022 0.010169 12.6645 0.0375978 12.536 0.090885C12.4076 0.144172 12.2909 0.222272 12.1926 0.320713L7 5.50274L1.80736 0.310093C1.70905 0.211782 1.59233 0.133796 1.46388 0.0805904C1.33543 0.0273845 1.19776 1.03588e-09 1.05873 0C0.919692 -1.03588e-09 0.78202 0.0273845 0.653569 0.0805904C0.525118 0.133796 0.408405 0.211782 0.310093 0.310093C0.211782 0.408405 0.133796 0.525118 0.0805904 0.653569C0.0273845 0.78202 -1.03588e-09 0.919692 0 1.05873C1.03588e-09 1.19776 0.0273845 1.33543 0.0805904 1.46388C0.133796 1.59233 0.211782 1.70905 0.310093 1.80736L5.50274 7L0.310093 12.1926C0.211782 12.291 0.133796 12.4077 0.0805904 12.5361C0.0273845 12.6646 0 12.8022 0 12.9413C0 13.0803 0.0273845 13.218 0.0805904 13.3464C0.133796 13.4749 0.211782 13.5916 0.310093 13.6899C0.408405 13.7882 0.525118 13.8662 0.653569 13.9194C0.78202 13.9726 0.919692 14 1.05873 14C1.19776 14 1.33543 13.9726 1.46388 13.9194C1.59233 13.8662 1.70905 13.7882 1.80736 13.6899L7 8.49726L12.1926 13.6899C12.291 13.7882 12.4077 13.8662 12.5361 13.9194C12.6646 13.9726 12.8022 14 12.9413 14C13.0803 14 13.218 13.9726 13.3464 13.9194C13.4749 13.8662 13.5916 13.7882 13.6899 13.6899C13.7882 13.5916 13.8662 13.4749 13.9194 13.3464C13.9726 13.218 14 13.0803 14 12.9413C14 12.8022 13.9726 12.6646 13.9194 12.5361C13.8662 12.4077 13.7882 12.291 13.6899 12.1926L8.49726 7L13.6899 1.80736C14.0934 1.40384 14.0934 0.724231 13.6899 0.320713Z"
                    fill="#CCDAE7"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`mt-7 relative z-20 duration-1000 ${
                navMenu ? "" : "-translate-y-1/2 opacity-0"
              }`}
            >
              <Link href="/">
                <button className="font-extrabold text-lg">Homepage</button>
              </Link>
              <hr className="bg-andal-button-orange border-transparent my-6" />
              <Link href="/about">
                <button className="font-extrabold text-lg">About Us</button>
              </Link>
              <hr className="bg-andal-button-orange border-transparent my-6" />
              <Link href="/kedirjenan">
                <button className="font-extrabold text-lg">Kedirjenan</button>
              </Link>
              <hr className="bg-andal-button-orange border-transparent my-6" />
              <Link href="/archive">
                <button className="font-extrabold text-lg">Archive</button>
              </Link>
            </div>
          </div>
          <div
            className={`relative z-20 duration-1000 delay-200 ${
              navMenu ? "" : "translate-y-full opacity-0"
            }`}
          >
            <span>© Andal 2023 - All rights reserved.</span>
          </div>
          <div
            className={`w-[150%] h-[150%] absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500 ${
              navMenu ? "" : "opacity-0"
            }`}
          ></div>
          <div className="absolute bottom-0 right-0">
            <svg
              width="120"
              height="151"
              viewBox="0 0 120 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89.2832 106.359C89.2832 114.577 82.621 121.239 74.4027 121.239C66.1845 121.239 59.5222 114.577 59.5222 106.359L59.5222 91.4783L74.4027 91.4783C82.621 91.4783 89.2832 98.1405 89.2832 106.359Z"
                fill="#F9B20B"
              />
              <path
                d="M89.2832 106.359C89.2832 114.577 95.9454 121.239 104.164 121.239C112.382 121.239 119.044 114.577 119.044 106.359L119.044 91.4783L104.164 91.4783C95.9454 91.4783 89.2832 98.1405 89.2832 106.359Z"
                fill="#F9B20B"
              />
              <path
                d="M89.2832 136.12C89.2832 127.901 82.621 121.239 74.4027 121.239C66.1845 121.239 59.5222 127.901 59.5222 136.12L59.5222 151L74.4027 151C82.621 151 89.2832 144.338 89.2832 136.12Z"
                fill="#F9B20B"
              />
              <path
                d="M89.2832 136.12C89.2832 127.901 95.9454 121.239 104.164 121.239C112.382 121.239 119.044 127.901 119.044 136.12L119.044 151L104.164 151C95.9454 151 89.2832 144.338 89.2832 136.12Z"
                fill="#F9B20B"
              />
              <path
                d="M87.7424 45.1627C87.7424 52.3981 81.8769 58.2636 74.6415 58.2636C67.406 58.2636 61.5406 52.3981 61.5406 45.1627L61.5406 32.0618L74.6415 32.0618C81.8769 32.0618 87.7424 37.9273 87.7424 45.1627Z"
                stroke="#F9B20B"
                stroke-width="4.03726"
              />
              <path
                d="M91.7796 45.1627C91.7796 52.3981 97.6451 58.2636 104.881 58.2636C112.116 58.2636 117.981 52.3981 117.981 45.1627L117.981 32.0618L104.881 32.0618C97.6451 32.0618 91.7796 37.9273 91.7796 45.1627Z"
                stroke="#F9B20B"
                stroke-width="4.03726"
              />
              <path
                d="M87.7424 75.4017C87.7424 68.1663 81.8769 62.3009 74.6415 62.3009C67.406 62.3009 61.5406 68.1663 61.5406 75.4017L61.5406 88.5026L74.6415 88.5026C81.8769 88.5026 87.7424 82.6372 87.7424 75.4017Z"
                stroke="#F9B20B"
                stroke-width="4.03726"
              />
              <path
                d="M91.7796 75.4017C91.7796 68.1663 97.6451 62.3009 104.881 62.3009C112.116 62.3009 117.981 68.1663 117.981 75.4017L117.981 88.5026L104.881 88.5026C97.6451 88.5026 91.7796 82.6372 91.7796 75.4017Z"
                stroke="#F9B20B"
                stroke-width="4.03726"
              />
              <path
                d="M57.5353 106.358C57.5353 99.2375 51.7625 93.4647 44.6415 93.4647C37.5205 93.4647 31.7478 99.2375 31.7478 106.358L31.7478 119.252L44.6415 119.252C51.7625 119.252 57.5353 113.48 57.5353 106.358Z"
                stroke="#F9B20B"
                stroke-width="3.97342"
              />
              <path
                d="M57.5353 136.12C57.5353 143.241 51.7625 149.013 44.6415 149.013C37.5205 149.013 31.7478 143.241 31.7478 136.12L31.7478 123.226L44.6415 123.226C51.7625 123.226 57.5353 128.999 57.5353 136.12Z"
                stroke="#F9B20B"
                stroke-width="3.97342"
              />
              <path
                d="M1.98671 106.358C1.98671 99.2375 7.75944 93.4647 14.8805 93.4647C22.0015 93.4647 27.7742 99.2375 27.7742 106.358L27.7742 119.252L14.8805 119.252C7.75944 119.252 1.98671 113.48 1.98671 106.358Z"
                stroke="#F9B20B"
                stroke-width="3.97342"
              />
              <path
                d="M1.98671 136.12C1.98671 143.241 7.75944 149.013 14.8805 149.013C22.0015 149.013 27.7742 143.241 27.7742 136.12L27.7742 123.226L14.8805 123.226C7.75944 123.226 1.98671 128.999 1.98671 136.12Z"
                stroke="#F9B20B"
                stroke-width="3.97342"
              />
              <path
                d="M117.209 15.4022C117.209 8.39554 111.529 2.71554 104.522 2.71554C97.5153 2.71554 91.8353 8.39554 91.8353 15.4022L91.8353 28.0888L104.522 28.0888C111.529 28.0888 117.209 22.4088 117.209 15.4022Z"
                stroke="#F9B20B"
                stroke-width="3.9096"
              />
              <path
                d="M110.067 15.4023C110.067 12.3398 107.585 9.85714 104.522 9.85714C101.46 9.85714 98.977 12.3398 98.977 15.4023L98.977 20.9474L104.522 20.9474C107.585 20.9474 110.067 18.4647 110.067 15.4023Z"
                stroke="#F9B20B"
                stroke-width="3.9096"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
