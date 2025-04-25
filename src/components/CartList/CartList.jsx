import { Col, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import { memo } from "react";

function CartList() {
  const { addedToProduct } = useSelector((store) => store.cartReducer);
  return (
    <>
      <Col xl={8}>
        <div className="cartList">
          <Row className="d-none d-md-flex text-center">
            <Col md={1}></Col>
            <Col md={2}>
              <p>تصویر</p>
            </Col>
            <Col md={3}>
              <p >شرح محصول</p>
            </Col>
            <Col md={1}>
              <p >سایز</p>
            </Col>
            <Col md={2}>
              <p >قیمت</p>
            </Col>
            <Col md={1}>
              <p >تعداد</p>
            </Col>
            <Col md={2}>
              <p >مجموع</p>
            </Col>
          </Row>
          {addedToProduct.map((product) => (
            <CartCard key={`${product.id}-${product.size}`} {...product} />
          ))}
        </div>
      </Col>
    </>
  );
}
export default memo(CartList);
