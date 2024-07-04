
import Chart from './Chart';

const LeftBlock = () => {
    return (
        <div className="border bg-[#FBFBFB] rounded-lg p-1 md:p-4 lg:p-6 text-[#020043]">
      <h2 className="md:text-2xl lg:text-4xl font-semibold text-start">90%</h2>
      <p className="mt-2 text-start text-xs md:text-base">Patient satisfaction rate, reflecting our commitment</p>
        <div className='-my-2 md:my-4 lg:my-9 flex justify-center'>
      <Chart />
        </div>
    </div>
    );
};

export default LeftBlock;