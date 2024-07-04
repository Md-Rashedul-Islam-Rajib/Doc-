import { FaStar } from 'react-icons/fa';
import image from '../../assets/Media/Ellipse 10 (1).png'

const Testimonial2 = () => {
    return (
        <div className="bg-[#fffff5] test-[#020043] rounded-xl p-4 flex flex-col gap-8">
            <h4 className="text-xl font-medium">Life-Saving Care, Life-Changing <br /> Experience</h4>
            <p className="text-xs">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life</p>
            <div className='flex gap-4'>
                <img src={image} alt="" />
                    <div>
                        <h6 className='text-xs'><span className='font-medium'> Michael R,</span>  Business Executive</h6>
                        <div className='text-[#FFE03D] flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
            </div>
        </div>
    );
};

export default Testimonial2;