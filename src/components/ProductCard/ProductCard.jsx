import { memo } from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generateProductDetailRoute } from "../../utils/routeHelpers";
import { getDiscountedPrice } from "../../utils/price";
function ProductCard({ image, name, price, discount, id }) {
  const productRoute = generateProductDetailRoute(id, name);
  return (
    <Card className="productCard">
      <Link to={productRoute}>
        <Card.Img src={image} alt="" variant="bottom" />
      </Link>
      <Card.Body>
        {discount &&  (
          <span className="discount">
            {getDiscountedPrice({ discount, price, id }).Percent }% تخفیف
          </span>
        )}
        <h6>
          <Link to={productRoute}> {name} </Link>
        </h6>
        <Form.Check type="checkbox" label="مقایسه" />
        <div className="price-start">
          {discount && (
            <p>
              <span>{price.toLocaleString()} تومان</span>
            </p>
          )}
        </div>
        {price ? (
          discount ? (
            <div className="discount-price">
              {getDiscountedPrice({ discount, price }).discountedPrice}
              <span>تومان</span>
            </div>
          ) : (
            <div className="discount-price">
              {price.toLocaleString()} <span>تومان </span>
            </div>
          )
        ) : (
          <div className="discount-price">
            <span>نا موجود</span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default memo(ProductCard);
