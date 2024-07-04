import { FaStar } from 'react-icons/fa';
import image from '../../assets/Media/Ellipse 10.png'

const Testimonial1 = () => {
    return (
        <div className="bg-[#fffff5] test-[#020043] rounded-xl p-4 flex flex-col gap-8">
            <h4 className="text-xl font-medium">Expertise and Compassion <br /> Combined</h4>
            <p className="text-xs">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
            <div className='flex gap-4'>
                <img src={image} alt="" />
                    <div>
                        <h6 className='text-xs'><span className='font-medium'> Sarah D,</span> IT Professional</h6>
                        <div className='text-[#FFE03D] flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
            </div>
        </div>
    );
};

export default Testimonial1;