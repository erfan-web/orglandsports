import {  Row } from "react-bootstrap";


import { useSelector } from "react-redux";

import TotalPriceCard from "../../components/TotalPriceCard/TotalPriceCard";
import CartList from "../../components/CartList/CartList";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

function Cart() {
  const {  addedToCart } = useSelector(
    (store) => store.cartReducer
  );
  return (
    <>
      {addedToCart === 0 ? (
        <EmptyCart />
      ) : (
        <section className="cartSection">
          <div className="cartSectionContainer">
            <div className="info">
              <h6>سبد خرید شما در اورجلند</h6>
              <p>
                افزودن کالاها به سبد خرید به معنی رزرو کالا برای شما نیست. برای
                ثبت سفارش باید مراحل بعدی خرید را تکمیل نمایید.
              </p>
            </div>
            <Row className="gy-4">
              <CartList />
              <TotalPriceCard />
            </Row>
          </div>
        </section>
      )}
    </>
  );
}
export default Cart;
