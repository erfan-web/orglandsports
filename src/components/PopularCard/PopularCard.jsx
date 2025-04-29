import { memo } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { generateProductDetailRoute } from "../../utils/routeHelpers";
import { getDiscountedPrice } from "../../utils/price";

function PopularCard({ price, image, discount, name, id }) {
    const productDetailRoute=generateProductDetailRoute(id , name)
  return (
    <Card className="popularCard">
      <Link to={productDetailRoute}>
        <Card.Img  src={image} />
      </Link>
      <Card.Body>
        {discount && (
          <span className="discount">
            {getDiscountedPrice({ discount, price, id }).Percent}% تخفیف
          </span>
        )}

        <Card.Title>
          <Link to={productDetailRoute}>{name}</Link>
        </Card.Title>
        {price && (
          <>
            <div className="price-start">
              <p>{discount && <span>{price.toLocaleString()} تومان </span>}</p>
            </div>
            <div className="price-start">
              <p>
                <strong>
                  {discount
                    ? getDiscountedPrice({ discount, price }).discountedPrice
                    : price.toLocaleString()}
                </strong>
                {' '}تومان
              </p>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
export default memo(PopularCard);
