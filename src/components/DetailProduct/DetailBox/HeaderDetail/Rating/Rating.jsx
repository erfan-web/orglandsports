import { memo } from "react";
import { GoStarFill } from "react-icons/go";

const Rating = () => {
  return (
    <div className="rating">
        <GoStarFill color="#ec008c"  />
        <GoStarFill color="#ec008c"  />
        <GoStarFill color="#ec008c"  />
        <GoStarFill color="#ec008c"  />
        <GoStarFill color="#ec008c"  />
    </div>
  );
};

export default memo(Rating)