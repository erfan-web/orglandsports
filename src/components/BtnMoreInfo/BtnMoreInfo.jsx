import { memo } from "react";
import { FaExchangeAlt } from "react-icons/fa";
function BtnMoreInfo() {
  return (
    <>
            <div className="btnMoreInfo">
              <span> اطلاعات بیشتر </span>
              <FaExchangeAlt size={"14px"} />
            </div>
    </>
  );
}
export default memo(BtnMoreInfo);
