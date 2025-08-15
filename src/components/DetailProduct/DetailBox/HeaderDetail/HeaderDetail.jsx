import { useSelector } from "react-redux";
import Rating from "./Rating/Rating";
import { memo } from "react";

const HeaderDetail = () => {
  const { product } = useSelector((store) => store.productReducer);
  // if (product)
    return (
      <div className="header">
        <h5 className="productName">{product?.name}</h5>
        <div className="subTitle">
          <span className="model">{product?.model}</span>
          <Rating />
        </div>
      </div>
    );
};
export default memo(HeaderDetail);
