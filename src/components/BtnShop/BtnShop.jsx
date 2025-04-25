import { memo } from "react";
import { GiShoppingCart } from "react-icons/gi";
function BtnShop({children , addToCartHandler}) {
  return (
    <>
        <button className="btnShop"  type="button" onClick={addToCartHandler}>
          <span className="icon">
            <GiShoppingCart color="#fff" />
          </span>
          <span className="shopText">{children}</span>
        </button>
    </>
  );
}
export default memo(BtnShop);
