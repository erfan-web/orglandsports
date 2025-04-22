import { memo } from "react";
import { GoStarFill } from "react-icons/go";

const Rating = () => {
  return (
    <div className="rating">
        <GoStarFill color="#ec008c" size={"20px"} />
        <GoStarFill color="#ec008c" size={"20px"} />
        <GoStarFill color="#ec008c" size={"20px"} />
        <GoStarFill color="#ec008c" size={"20px"} />
        <GoStarFill color="#ec008c" size={"20px"} />
    </div>
  );
};

export default memo(Rating)