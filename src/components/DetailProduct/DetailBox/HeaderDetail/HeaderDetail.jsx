import { useSelector } from "react-redux";
import Rating from "./Rating/Rating";

const HeaderDetail = () => {
  const { product } = useSelector((store) => store.productReducer);
  return (
    <div className="header">
      <h5 className="productName">{product.name}</h5>
      <div className="subTitle">
        <span className="model">{product.model}</span>
        <Rating />
      </div>
    </div>
  );
};
export default HeaderDetail;
