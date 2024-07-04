import Testimonial1 from "../sub-components/testimonials/Testimonial1";
import Testimonial2 from "../sub-components/testimonials/Testimonial2";
import Testimonial3 from "../sub-components/testimonials/Testimonial3";


const Testimonials = () => {
    return (
        <div className="p-4">
        <button className="px-4 py-2 rounded-xl border border-[#343268]"> Testimonials </button>

        <h1 className="my-8 text-4xl font-semibold text-[#020043]">What they say about us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Testimonial1 />
            <Testimonial2 />
            <Testimonial3 />
            
        </div>
        </div>
    );
};

export default Testimonials;