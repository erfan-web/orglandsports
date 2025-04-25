import { memo } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const TotalPriceCard = () => {
  const { total } = useSelector((store) => store.cartReducer);
  return (
    <Col xl={4}>
      <div className="TotalPriceCard">
        <div>
          <span>جمع کل سبد خرید</span>
          <span>{total.toLocaleString()}</span>
        </div>
        <p>
          کالاهای موجود در سبد شما ثبت و رزرو نشده اند، برای ثبت سفارش مراحل
          بعدی را تکمیل کنید
        </p>
        <hr />
        <button>ادامه جهت تسویه حساب</button>
      </div>
    </Col>
  );
};
export default memo(TotalPriceCard);
