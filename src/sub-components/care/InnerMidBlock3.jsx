
import Coin from './Coin';

const InnerMidBlock3 = () => {
    return (
        <div className="border rounded-lg bg-[#fffff5] p-1 md:py-5 md:pl-5 md:pr-8 text-[#020043]">
      <h2 className="md:text-2xl lg:text-4xl font-semibold text-start">$5000</h2>
      <p className="mt-2 text-start text-xs md:text-base">Money spend <br />
      for poor patient</p>
      <div className='flex justify-end'>
      <Coin />
    </div>
      
    </div>
    );
};

export default InnerMidBlock3;