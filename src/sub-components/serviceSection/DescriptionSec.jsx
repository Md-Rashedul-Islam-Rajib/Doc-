import { GoArrowUpRight } from "react-icons/go";

const DescriptionSec = () => {
    return (
        <div className="flex flex-col gap-6 p-2">
            <button className="px-4 py-2 rounded-3xl border border-[#343268] max-w-[32%] md:max-w-[36%] lg:max-w-[28%]"> Service </button>
            <h1 className="text-4xl font-semibold text-[#020043]">Empowering Health, <br /> Enriching Lives</h1>
            <p className="lg:w-3/4">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
            </p>
            <button className="flex gap-1 items-center bg-[#ffc637] px-4 py-2 rounded-xl max-w-[36%] md:max-w-[40%] lg:max-w-[24%] mt-6"> <span>Appointment</span> <GoArrowUpRight /> </button>
        </div>
    );
};

export default DescriptionSec;