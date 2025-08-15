import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { memo, useCallback, useContext, useEffect } from "react";
import BtnShop from "../../../BtnShop/BtnShop";
import { addToCart } from "../../../../features/slices/cart";
import MessageContext from "../../../../pages/ProductDetail/MessageContext";

function FooterDetail() {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.productReducer);
  const { setMessageStatus, messageStatus, selectedSize, setSelectedSize } =
    useContext(MessageContext);
  console.log(selectedSize);
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    if (product && product.sizes) setSelectedSize(product?.sizes[0]);
  }, [product, setSelectedSize]);

  const addToCartHandler = useCallback(() => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product?.price,
      image: product.image,
      size: selectedSize,
      color: product.color[0],
      discount: product.discount?.discountedPrice,
    };
    dispatch(addToCart(productToAdd));
    if (!messageStatus) {
      setMessageStatus(true);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [dispatch, product, selectedSize, messageStatus, setMessageStatus]);

  let price;
  if (product?.price) {
    if (product?.discount) {
      price = (
        <span>
          {product?.discount?.discountedPrice.toLocaleString()}
          <sub>تومان</sub>
        </span>
      );
    } else {
      price = (
        <span>
          {product?.price.toLocaleString()}
          <sub>تومان</sub>
        </span>
      );
    }
  } else {
    price = (
      <span
        style={{
          color: "#c63b36",
          fontSize: "16px",
          marginRight: "20px",
        }}
      >
        تماس بگیرید{" "}
      </span>
    );
  }
  if (product)
    return (
      <div className="footerDetail">
        <div className="price">قیمت برای شما : {price}</div>
        <Form className="mb-5 pb-5">
          {product.sizes ? (
            <>
              <Form.Group className="form-group">
                <div>
                  <Form.Label>رنگ محصول</Form.Label>
                  <Form.Select size="sm">
                    <option value="">{product.color}</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="form-group ">
                <div>
                  <Form.Label>سایز محصول</Form.Label>
                  <Form.Select size="sm" onChange={handleSizeChange}>
                    {product.sizes.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </Form.Select>{" "}
                </div>
                <BtnShop addToCartHandler={addToCartHandler}>
                  افزودن به سبد خرید
                </BtnShop>
              </Form.Group>
            </>
          ) : (
            <Form.Group className="form-group justify-content-end">
              <BtnShop>اطلاع از قیمت</BtnShop>
            </Form.Group>
          )}
        </Form>
        <Link className="footer-end-link">
          مقایسه محصول با سایر محصولات این گروه
        </Link>
      </div>
    );
}
export default memo(FooterDetail);
