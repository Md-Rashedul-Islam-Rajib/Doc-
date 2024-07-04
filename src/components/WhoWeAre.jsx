import Description from "../sub-components/whoweare/Description";
import ImageSection from "../sub-components/whoweare/ImageSection";


const WhoWeAre = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
            <Description />
            </div>
            <div className="flex-1">
            <ImageSection />            
            </div>
        </div>
    );
};

export default WhoWeAre;