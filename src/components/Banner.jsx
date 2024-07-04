import bannertop from '../assets/Media/Rectangle 5.png';

const Banner = () => {
    return (
        <div className="relative rounded-[48px] overflow-hidden">
            <div className="absolute inset-0 bg-custom-gradient"></div>
            <img src={bannertop} className="w-full h-full object-cover mix-blend-overlay" alt="Banner" />
        </div>
    );
};

export default Banner;
