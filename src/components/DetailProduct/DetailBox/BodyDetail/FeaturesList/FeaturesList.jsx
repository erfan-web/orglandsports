import { useSelector } from "react-redux";
import { FaRegDotCircle } from "react-icons/fa";

const FeaturesList = () => {
  const { product } = useSelector((store) => store.productReducer);

  return (
    <ul className="featuresList">
      {product?.key_features?.map((item, index) => (
        <li key={index}>
          <span>
            <FaRegDotCircle size={"10px"} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};
export default FeaturesList;
