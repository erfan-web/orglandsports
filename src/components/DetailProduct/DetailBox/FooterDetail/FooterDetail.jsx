import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { useState } from "react";
import BtnShop from "../../../BtnShop/BtnShop";

function FooterDetail() {
  const { product } = useSelector((store) => store.productReducer);

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  
  let price;
  if (product.price) {
    if (product.discount) {
      price = (
        <span>
          {product.discount.discountedPrice.toLocaleString()}
          <sub>تومان</sub>
        </span>
      );
    } else {
      price = (
        <span>
          {product.price.toLocaleString()}
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

  return (
    <div className="footerDetail">
      <div className="price">
        قیمت برای شما : {price}
      </div>
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
              <BtnShop>افزودن به سبد خرید</BtnShop>
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
export default FooterDetail;
