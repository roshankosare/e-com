import { BASE_URL } from "@/constants";

const Banner = () => {
  return (
    <div className={`w-full h-[230px] sm:h-[600px] bg-cover flex flex-col justify-end py-5 sm:py-16 gap-x-2`}
    style={{ backgroundImage: `url('${BASE_URL}banner.png')` }}>
      <div className="w-full py-5 backdrop-blur-sm flex flex-col justify-center">
        <h1 className="text-white text-xl sm:text-6xl font-bold uppercase mx-auto ">
          New Arrivals Are Here!{" "}
        </h1>
        <p className="text-white text-sm sm:text-4xl mt-2 mx-auto">
          Shop the latest trends & upgrade your style today.
        </p>
      </div>
    </div>
  );
};

export default Banner;
