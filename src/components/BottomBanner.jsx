import { GoArrowUpRight } from "react-icons/go";
import banner from "../assets/Media/Rectangle 32.png";
import logo from "../assets/Media/logo light.png";

const BottomBanner = () => {
  return (
    <div className="relative rounded-[48px] overflow-hidden">
      <div className="absolute inset-0 bg-custom-gradient2"></div>
      <img
        src={banner}
        className="w-full h-full object-cover mix-blend-overlay"
        alt="Banner"
      />
      <div className="absolute top-4 lg:top-16 right-4 lg:right-32">
        <img src={logo} className="w-16 md:w-auto" alt="Logo" />
      </div>
      <div className="absolute top-8 left-6 md:top-16 lg:top-32 md:left-4 lg:left-32 flex flex-col md:gap-4 lg:gap-8">
        <h1 className="text-lg md:text-4xl font-semibold text-white leading-snug md:leading-10">
          Get Your <br />
          First Appointment <br />
          at 50% Off!
        </h1>
        <div className="flex gap-4">
          <button className="px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded-xl bg-[#FFC637] font-medium flex items-center gap-2">
            <span>Appointment</span>
            <GoArrowUpRight />
          </button>
          <button className="px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded-xl border border-white text-white font-medium flex items-center gap-2">
            <span>Learn More</span>
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
