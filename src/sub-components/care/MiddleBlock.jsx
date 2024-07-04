
import InnerMidBlock1 from './InnerMidBlock1';
import InnerMidBlock2 from './InnerMidBlock2';
import InnerMidBlock3 from './InnerMidBlock3';

const MiddleBlock = () => {
    return (
        <div className="flex flex-col gap-9 items-center">
            <h1 className="md:text-3xl lg:text-5xl font-semibold text-center text-[#020043]">Comprehensive Care for Every Patient</h1>
            <div className='flex md:gap-2 lg:gap-12 items-end justify-evenly'>
                <div className='max-w-[33%]'>
                <InnerMidBlock1 />
                </div>
                <div className='max-w-[33%]'>
                <InnerMidBlock2 />
                </div>
                <div className='max-w-[33%]'>
                <InnerMidBlock3 />
                </div>
                
            </div>
            
        </div>
    );
};

export default MiddleBlock;