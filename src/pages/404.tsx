import Lottie from "lottie-react";

import errorAnimation from "../constants/93120-erorr-404.json";

export default function Error404() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className=" w-1/2">
          <Lottie animationData={errorAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
}
