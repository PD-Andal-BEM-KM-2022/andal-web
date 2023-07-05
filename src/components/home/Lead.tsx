import Image from "next/image";
import LeadBg from "../icons/LeadBg";

const Lead = () => {
  return (
    <>
      <section className="mt-28 px-10 mb-24 container mx-auto lg:grid lg:grid-cols-[1.3fr_0.7fr] relative">
        {/* <div className="w-52 h-52 bg-andal-lightblue mx-auto"></div> */}
        <div className="flex relative justify-center lg:order-2 lg:flex lg:items-center mx-10 lg:mx-0">
          {/* <svg
            width={200}
            height={201}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={8.257}
              y={8.826}
              width={183.486}
              height={183.486}
              rx={7.339}
              fill="#061337"
            />
            <rect
              x={0.459}
              y={1.028}
              width={199.083}
              height={199.083}
              rx={6.881}
              stroke="#94A0B8"
              strokeWidth={0.917}
              strokeLinejoin="round"
              strokeDasharray="7.34 7.34"
            />
            <path
              opacity={0.4}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M119.512 192.312l72.231-112.549v87.105l-16.329 25.444h-55.902z"
              fill="#3C5AE0"
            />
            <path
              opacity={0.3}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.443 192.222L132.142 8.826h52.262c1.138 0 2.215.259 3.176.721L70.286 192.312h-54.69c-.392 0-.777-.031-1.153-.09z"
              fill="#EBEFF8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.257 73.589L49.82 8.826h110.993L43.056 192.312h-27.46a7.34 7.34 0 01-7.34-7.34V73.589z"
              fill="#222849"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M187.573 9.544a7.339 7.339 0 014.17 6.603v2.71a9.314 9.314 0 01-9.314 9.314 9.314 9.314 0 110-18.627h5.144zM163.801 28.17a9.313 9.313 0 01-9.313-9.313V9.544h9.313a9.314 9.314 0 110 18.627zm9.314 9.314a9.314 9.314 0 019.314-9.314 9.314 9.314 0 019.314 9.314V46.8h-9.314a9.314 9.314 0 01-9.314-9.314zm0 0a9.314 9.314 0 00-18.627 0V46.8h9.313a9.314 9.314 0 009.314-9.314zm18.628 18.628a9.314 9.314 0 00-9.314-9.314 9.314 9.314 0 00-9.314 9.314v9.314h9.314a9.314 9.314 0 009.314-9.314zm0 18.628a9.314 9.314 0 01-9.314 9.314 9.314 9.314 0 01-9.314-9.314v-9.314h9.314a9.314 9.314 0 019.314 9.314zm-16.141-6.827h6.827a6.827 6.827 0 110 13.654 6.827 6.827 0 01-6.827-6.827v-6.827zm-11.801 0h6.827v6.827a6.827 6.827 0 11-13.653 0 6.826 6.826 0 016.826-6.827zm0 16.141a9.314 9.314 0 110-18.628h9.314v9.314a9.314 9.314 0 01-9.314 9.314zm11.801-21.115h6.827a6.827 6.827 0 100-13.654 6.827 6.827 0 00-6.827 6.827v6.827zm-11.801 0h6.827v-6.827a6.827 6.827 0 10-6.827 6.827zm0-16.14a9.314 9.314 0 100 18.627h9.314v-9.314a9.314 9.314 0 00-9.314-9.314zm-38.303-2.528h-6.936v-6.936a6.936 6.936 0 1113.873 0 6.937 6.937 0 01-6.937 6.936zm0-16.4a9.464 9.464 0 110 18.927H116.035V37.336a9.463 9.463 0 019.463-9.464zm9.464-9.463a9.464 9.464 0 01-18.927 0V8.945H125.498a9.464 9.464 0 019.464 9.464zm9.463 9.463a9.464 9.464 0 019.464 9.464V46.799h-9.464a9.463 9.463 0 010-18.927zm0 0a9.464 9.464 0 009.464-9.463V8.945h-9.464c-5.226 0-9.463 4.237-9.463 9.464 0 5.226 4.237 9.463 9.463 9.463zm-25.863-16.4h6.936a6.937 6.937 0 11-6.936 6.937v-6.937zm25.863 32.8h6.937v-6.936a6.937 6.937 0 10-6.937 6.936zm6.937-32.8h-6.937a6.936 6.936 0 00-6.936 6.937 6.936 6.936 0 1013.873 0v-6.937zm-44.491 13.879h6.717v-6.718a6.718 6.718 0 10-6.717 6.717zm0-15.882a9.164 9.164 0 00-9.165 9.164 9.164 9.164 0 009.165 9.165h9.164v-9.165a9.164 9.164 0 00-9.164-9.164zm2.247 11.412h-2.247a2.248 2.248 0 112.247-2.248v2.248zm-6.942-2.248a4.695 4.695 0 019.389 0v4.695h-4.694a4.695 4.695 0 01-4.695-4.695zM12.69 191.714a7.342 7.342 0 01-4.433-6.723V182.4a9.314 9.314 0 119.314 9.314h-4.882zm23.509-18.628a9.314 9.314 0 019.314 9.314v9.314h-9.314a9.314 9.314 0 01-9.314-9.314 9.314 9.314 0 019.314-9.314zm-9.314-9.314a9.314 9.314 0 11-18.628 0v-9.314h9.314a9.314 9.314 0 019.314 9.314zm0 0a9.314 9.314 0 1018.628 0v-9.314h-9.314a9.314 9.314 0 00-9.314 9.314zM8.257 145.144a9.314 9.314 0 1018.628 0v-9.314H17.57a9.314 9.314 0 00-9.314 9.314zm0-18.628a9.314 9.314 0 1118.628 0v9.314H17.57a9.314 9.314 0 01-9.314-9.314zm27.942 6.827h-6.827v-6.827a6.827 6.827 0 116.827 6.827zm0-16.141a9.314 9.314 0 019.314 9.314 9.314 9.314 0 01-9.314 9.314h-9.314v-9.314a9.314 9.314 0 019.314-9.314zm-11.801 21.115H17.57a6.827 6.827 0 106.827 6.827v-6.827zm11.8 0h-6.826v6.827a6.827 6.827 0 106.827-6.827zm0 16.141a9.314 9.314 0 009.315-9.314 9.314 9.314 0 00-9.314-9.314h-9.314v9.314a9.314 9.314 0 009.314 9.314zm38.304 2.527h6.936v6.936a6.937 6.937 0 11-6.936-6.936zm0 16.4a9.464 9.464 0 010-18.927H83.965V163.921a9.464 9.464 0 01-9.463 9.464zm-9.464 9.463a9.463 9.463 0 019.464-9.463 9.463 9.463 0 019.463 9.463v9.464H74.502a9.464 9.464 0 01-9.464-9.464zm-9.463-9.463a9.464 9.464 0 01-9.464-9.464V154.458h9.464a9.464 9.464 0 010 18.927zm0 0c-5.227 0-9.464 4.237-9.464 9.463v9.464h9.464a9.464 9.464 0 000-18.927zm25.863 16.4h-6.936a6.937 6.937 0 116.936-6.937v6.937zm-25.863-32.8h-6.937v6.936a6.937 6.937 0 106.937-6.936zm-6.937 32.8h6.937a6.937 6.937 0 10-6.937-6.937v6.937zm-24.24-56.442H17.57a6.827 6.827 0 116.827-6.827v6.827zm68.731 42.564h-6.717v6.717a6.717 6.717 0 106.717-6.717zm0 15.881a9.165 9.165 0 100-18.328h-9.164v9.164a9.164 9.164 0 009.164 9.164zm-2.247-11.411h2.247a2.247 2.247 0 11-2.247 2.247v-2.247zm6.942 2.247a4.694 4.694 0 11-9.389 0v-4.694h4.694a4.694 4.694 0 014.695 4.694z"
              fill="#F9B20B"
            />
          </svg>
          <Image
            src="/images/lead.png"
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt=""
            className="w-auto h-[115%] absolute bottom-2"
          /> */}
          <Image
            src="/images/lead-n-bg.png"
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            alt=""
            className="w-full h-auto max-w-[360px]"
          />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center relative z-10">
          <h2 className="text-[2rem] font-extrabold text-center leading-none mt-12 lg:text-5xl lg:text-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-andal-orange to-andal-yellow">
              Lorem ipsum{" "}
            </span>
            dolor sit amet.
          </h2>
          <p className="text-center text-andal-lightgrey mt-6 lg:text-start lg:text-xl">
            Have meals delivered to you within minutes from a wide variety of
            restaurants ranging from African to Continental cuisines
          </p>
          <button className="text-ss font-medium text-andal-darkblue bg-andal-button-orange px-6 py-2 rounded-lg mx-auto block mt-4 lg:mr-auto lg:ml-0 lg:text-lg">
            Andalin Page
          </button>
        </div>

        <div
          className={`w-[280px] h-[280px] absolute top-0 -translate-y-full left-0 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
        ></div>

        <div
          className={`w-[680px] h-[680px] absolute bottom-0 translate-y-2/3 left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#072A79] via-transparent to-transparent duration-500`}
        ></div>
      </section>
    </>
  );
};

export default Lead;
