import LeftBlock from "../sub-components/care/LeftBlock";
import MiddleBlock from "../sub-components/care/MiddleBlock";
import RightBlock from "../sub-components/care/RightBlock";

const Care = () => {
  return (
    <div className="flex gap-6 justify-between">
      <div className="max-w-[20%]">
        <LeftBlock />
      </div>
      <div className="max-w-[55%]">
        <MiddleBlock />
      </div>
      <div className="max-w-[20%]">
        <RightBlock />
      </div>
    </div>
  );
};

export default Care;
