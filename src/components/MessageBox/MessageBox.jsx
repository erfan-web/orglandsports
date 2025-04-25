import { memo, useContext } from "react";
import { Alert, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import BtnShop from "../../components/BtnShop/BtnShop";
import MessageContext from "../../pages/ProductDetail/MessageContext";

const MessageBox = () => {
  const { product } = useSelector((store) => store.productReducer);
  const { isExisting } = useSelector((store) => store.cartReducer);
  const { messageStatus, selectedSize } = useContext(MessageContext);

  let innerAlert;
  if (isExisting) {
    innerAlert = (
      <>
        <Col xs={12} md={7} lg={9} xl={10}>
          <p>{`${product?.name} با سایز ${selectedSize} به سبد خرید اضافه شد.`}</p>
        </Col>
        <Col className="text-end" xs={12} md={3} lg={2}>
          <Link to={`/cart`} className="btnSuccess">
            مشاهده سبد خرید
          </Link>
        </Col>
      </>
    );
  } else {
    innerAlert = (
      <>
        <Col xs={12} md={7} lg={9} xl={9}>
          <p>{`${product.name} با سایز ${selectedSize} قبلا به سبد خرید اضافه شده.`}</p>
        </Col>
        <Col xs={12} md={3} dir="ltr">
          <Link to={`/cart`}>
            <BtnShop>مشاهده سبد خرید </BtnShop>
          </Link>
        </Col>
      </>
    );
  }

  return (
    <Container className="p-0">
      {messageStatus && (
        <Alert variant={isExisting ? "success" : "danger"}>{innerAlert}</Alert>
      )}
    </Container>
  );
};
export default memo(MessageBox);
