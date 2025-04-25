import { Col, Row } from "react-bootstrap";

import { MdDeleteForever } from "react-icons/md";

import { useDispatch } from "react-redux";
import { memo } from "react";

import { deleteFromCart } from "../../features/slices/cart";

const CartCard = ({
  image,
  name,
  price,
  count,
  totalPrice,
  color,
  size,
  id,
  discount,
}) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(deleteFromCart({ id, size, price }));
  };
  return (
    <div className="cartCard">
      <Row >
        <Col xs={12} md={1}>
          <div className="item">
            <div className="delete" onClick={removeItemHandler}>
              <MdDeleteForever size={"20px"} color="#630460" />
            </div>
          </div>
          <hr />
        </Col>
        <Col xs={12} md={2}>
          <div className="item">
            <span>تصویر:</span>
            <div className="imgBox">
              <img src={image} alt="" className="w-100" />
            </div>
          </div>
          <hr />
        </Col>
        <Col xs={12} md={3}>
          <div className="item ">
            <span>محصول:</span>
            <span className="cartCardName">
              {name} - {color}
            </span>
          </div>
          <hr />
        </Col>
        <Col xs={12} md={1}>
          <div className="item">
            <span>سایز:</span>
            <span className="">{size}</span>
          </div>
          <hr />
        </Col>
        <Col xs={12} md={2}>
          <div className="item">
            <span>قیمت:</span>
            {discount ? (
              <span className="cartCardPrice">{discount.toLocaleString()}</span>
            ) : (
              <span className="cartCardPrice">{price.toLocaleString()}</span>
            )}
          </div>
          <hr />
        </Col>
        <Col xs={12} md={1}>
          <div className="item">
            <span>تعداد:</span>
            <span>{count}</span>
          </div>
          <hr />
        </Col>
        <Col xs={12} md={2}>
          <div className="item">
            <span>جمع:</span>
            <span>{totalPrice.toLocaleString()}</span>
          </div>
          <hr />
        </Col>
      </Row>
    </div>
  );
};
export default memo(CartCard);
