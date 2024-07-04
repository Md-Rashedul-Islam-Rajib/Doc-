
import Star from './Star';
import person1 from '../../assets/Media/Ellipse 2.png'
import person2 from '../../assets/Media/Ellipse 3.png'
import person3 from '../../assets/Media/Ellipse 4.png'
import person4 from '../../assets/Media/Ellipse 5.png'

const InnerMidBlock2 = () => {
    return (
        <div className="border flex flex-col gap-3 p-1 justify-start rounded-lg bg-[#FBFBFB] md:p-4 text-[#020043]">
      <h2 className="md:text-2xl lg:text-4xl font-semibold text-start flex gap-2 items-center"> <span>4.8</span> <Star /></h2>
      <p className="mt-2 text-start text-xs md:text-base">Over 20,000 Patient</p>
    
      <div className='flex'>
        <img className='w-1/5 md:w-1/3 lg:w-1/2' src={person1} alt="" />
        <img className='w-1/5 md:w-1/3 lg:w-1/2' src={person2} alt="" />
        <img className='w-1/5 md:w-1/3 lg:w-1/2' src={person3} alt="" />
        <img className='w-1/5 md:w-1/3 lg:hidden' src={person4} alt="" />
        
      </div>
    </div>
    );
};

export default InnerMidBlock2;