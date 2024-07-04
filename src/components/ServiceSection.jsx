import Card1 from "../sub-components/serviceSection/Card1";
import Card2 from "../sub-components/serviceSection/Card2";
import Card3 from "../sub-components/serviceSection/Card3";
import DescriptionSec from "../sub-components/serviceSection/DescriptionSec";


const ServiceSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center">
            <DescriptionSec />
            </div>
            <div className="flex justify-center">
            <Card1 />
            </div>
            <div className="flex justify-center">
            <Card2 />
            </div>
            <div className="flex justify-center">
            <Card3 />
            </div>
        </div>
    );
};

export default ServiceSection;