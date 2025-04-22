import { memo } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { getDiscountedPrice } from "../../utils/price";
import { generateProductDetailRoute } from "../../utils/routeHelpers";
import { Card } from "react-bootstrap";
import BtnPercent from "../BtnPercent/BtnPercent";
import BtnMoreInfo from "../BtnMoreInfo/BtnMoreInfo";
function ProductSlide({ price, image, discount, name, id }) {
  const productRoute = generateProductDetailRoute(id, name);
  const location = useLocation();
  return (
    <>
      <Card className="productSlide">
        <div className="product-box-img">
          <Link to={productRoute}>
            <img src={image} alt="" className="w-100" />
          </Link>
        </div>
        <Card.Body>
          {discount && <BtnPercent discount={discount} price={price} id={id} />}
          <h3>{name}</h3>
          {price && (
            <>
              {location.pathname === "/" && (
                <div className="price-start">
                  <p>
                    {discount && <span>{price.toLocaleString()} تومان</span>}
                  </p>
                </div>
              )}
              <div className="price-start">
                <p>
                  <strong>
                    <u>
                      {discount
                        ? getDiscountedPrice({ discount, price })
                            .discountedPrice
                        : price.toLocaleString()}
                    </u>{" "}
                  </strong>
                  تومان
                </p>
              </div>
            </>
          )}
          <div className="rating">
            <span>
              <FaRegStar color="#cecece" size={"16px"} />
            </span>
            <span>
              <FaRegStar color="#cecece" size={"16px"} />
            </span>
            <span>
              <FaStar color="#cecece" size={"16px"} />
            </span>
            <span>
              <FaStar color="#cecece" size={"16px"} />
            </span>
            <span>
              <FaStar color="#cecece" size={"16px"} />
            </span>
          </div>
          <Link to={productRoute} >
          <BtnMoreInfo />
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
export default memo(ProductSlide);
