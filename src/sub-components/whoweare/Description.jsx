import { GoArrowUpRight } from "react-icons/go";


const Description = () => {
    return (
        <div className="flex flex-col gap-6 p-2">
            <button className="px-4 py-2 rounded-3xl border border-[#343268] max-w-[32%] md:max-w-[36%] lg:max-w-[28%]"> Who We Are </button>
            <h1 className="text-4xl font-semibold text-[#020043]">We Help To Get <br /> Soultions</h1>
            <p className="lg:w-3/4">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
            <button className="flex gap-1 items-center bg-[#ffc637] px-4 py-2 rounded-xl max-w-[36%] md:max-w-[40%] lg:max-w-[24%] mt-6"> <span>Learn More</span> <GoArrowUpRight /> </button>
        </div>
    );
};

export default Description;