import Video from "./Video";


const RightBlock = () => {
    return (
        <div className="border rounded-lg bg-[#FBFBFB] p-1 md:p-6 text-[#020043]">
      <h2 className="md:text-2xl lg:text-4xl font-semibold text-start">50+</h2>
      <p className="mt-2 text-xs md:text-base text-start">Free lession video 
      for patient</p>
     <div className='my-2 md:my-9 flex justify-center'>
      <Video />
     </div>
    </div>
    );
};

export default RightBlock;