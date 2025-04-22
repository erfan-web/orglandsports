import { memo } from "react";
import { getDiscountedPrice } from "../../utils/price";
function BtnPercent({ discount, price, id }) {
  return (
    <>
      <span className="btnPercent">
        {getDiscountedPrice({ discount, price, id }).Percent}% تخفیف
      </span>
    </>
  );
}
export default memo(BtnPercent);
