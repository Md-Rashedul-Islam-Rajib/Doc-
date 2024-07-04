import image from '../../assets/Media/Rectangle 24.png';
import TextBanner from './TextBanner';

const ImageSection = () => {
    return (
        <div className='relative md:h-full p-2'>
            <img src={image} className='md:h-full'  />
            <div className="hidden lg:grid absolute -bottom-16 -left-20">
                <TextBanner/>
            </div>
        </div>
    );
};

export default ImageSection;