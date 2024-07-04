import { FaStar } from 'react-icons/fa';
import image from '../../assets/Media/Ellipse 10 (2).png'

const Testimonial3 = () => {
    return (
        <div className="bg-[#fffff5] test-[#020043] rounded-xl p-4 flex flex-col gap-8">
            <h4 className="text-xl font-medium">A Partner in Health and <br />
            Wellness</h4>
            <p className="text-xs">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
            <div className='flex gap-4'>
                <img src={image} alt="" />
                    <div>
                        <h6 className='text-xs'><span className='font-medium'> David S,</span> Lawyar</h6>
                        <div className='text-[#FFE03D] flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
            </div>
        </div>
    );
};

export default Testimonial3;