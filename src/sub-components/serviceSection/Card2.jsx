import { GoArrowUpRight } from 'react-icons/go';
import image from '../../assets/Media/Rectangle 27-1.png'

const Card2 = () => {
    return (
        <div className='relative'>
            <img src={image} alt="" className='rounded-3xl' />
                <div className='absolute bg-[#020043d2] rounded-3xl text-white p-4 bottom-4 left-4'>
                    <h1 className='text-xl font-medium'>Online Doctor Meet</h1>
                    <div className='flex items-center w-80'>
                        <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p> <button className='bg-[#FFC637] text-white p-3 rounded-full text-xl font-semibold mt-6'><GoArrowUpRight /></button>
                    </div>
                </div>
        </div>
    );
};

export default Card2;