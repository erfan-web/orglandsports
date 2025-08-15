import { FaHeart, FaShareAlt } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { getDiscountedPrice } from "../../../../utils/price";
import { Link } from "react-router-dom";
import FeaturesList from "./FeaturesList/FeaturesList";
import Sending from "./Sending/Sending";
import {
  generateCategoryRoute,
  productBrandRoute,
} from "../../../../utils/routeHelpers";
const BodyDetail = () => {
  const { product } = useSelector((store) => store.productReducer);

  const sortDisplay = useCallback((id) => {
    switch (id) {
      case 2:
        return `کفش فوتسال`;
      case 3:
        return `کفش پیاده روی`;
      case 4:
        return `کفش چمن مصنوعی`;
      case 6:
        return `جوراب`;
      case 7:
        return `شلوار گلری`;
      case 8:
        return `لوازم ورزشی`;
      case 9:
        return `کیف و کوله`;
      case 10:
        return `توپ`;
      default:
        return `___`;
    }
  }, []);
    return (
      <div className="bodyDetail">
        <div className="PopularProduct">
          <span>
            <FaShareAlt color="#ec008c" size={"16px"} />
          </span>
          <span>
            <FaHeart color="#ec008c" size={"16px"} />
          </span>
        </div>
        <div className="title">
          <span>
            برند :{" "}
            <Link to={productBrandRoute(product?.brand)}>{product?.brand}</Link>
          </span>{" "}
          <span>
            دسته بندی :
            <Link
              to={generateCategoryRoute({
                id: product?.category_id,
                name: sortDisplay(product?.category_id),
              })}
            >
              {" "}
              {product && sortDisplay(product?.category_id)}
            </Link>
          </span>
        </div>
        <FeaturesList />
        <Sending />
        <div className="discount">
          {product?.discount && (
            <>
              <span>
                <RiDiscountPercentFill size={"20px"} color="#ec008c" />
              </span>{" "}
              {
                getDiscountedPrice({
                  price: product?.price,
                  discount: product?.discount,
                }).Percent
              }
              <span className="ps-1">درصد تخفیف</span>
            </>
          )}
        </div>
      </div>
    );
};
export default memo(BodyDetail);
