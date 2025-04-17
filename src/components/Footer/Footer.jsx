import { Col, Container, Row } from "react-bootstrap";
import { memo } from "react";
function Footer() {
  return (
    <>
      <div className="footer">
        <Container fluid>
          <Row className="row-cols-md-4 gy-3">
            <Col
              className="links contact-links d-none d-sm-block "
              sm={6}
              lg={3}
              xl={3}
            >
              <h5>ارتباط با ما</h5>
              <ul>
                <li>تلفن : 02165236371</li>
                <li>تلفن : 09331171313</li>
                <li>Orglandsport@gmail.com</li>
                <li>
                  <p>خرید حضوری : تهران شهریار</p>
                  <p className="d-sm-none d-xl-block">
                    خیابان مفتح مجتمع تجاری
                  </p>
                  <p className="d-sm-none d-xl-block">
                    الماس شهر طبقه سوم پلاک 425
                  </p>
                </li>
              </ul>
            </Col>
            <Col className="links follow-links" xs={12} sm={6} lg={2} xl={2}>
              <h5>پیگیری سفارش</h5>
              <ul>
                <li>پیگیری پست</li>
                <li>پیگیری تیپاکس</li>
                <li>راهنمای سایز</li>
                <li className="">قوانین</li>
              </ul>
            </Col>

            <Col className="links quick-links" xs={6} sm={6} lg={2} xl={2}>
              <h5>دسترسی سریع</h5>
              <ul>
                <li>خرید کفش فوتسال</li>
                <li>خرید کفش پیاده روی</li>
                <li>خرید توپ ورزشی</li>
                <li>خرید شلوار گلری</li>
                <li className="d-none d-xl-block">خرید تجهیزات ورزشی</li>
                <li className="d-none d-xl-block">
                  خرید انواع کیف و کوله ورزشی
                </li>
              </ul>
            </Col>
            <Col className="links related-links" xs={6} sm={6} lg={3} xl={2}>
              <h5>لینک های مرتبط</h5>
              <ul>
                <li className="longest">شرایط تعویض سایز و مرجوع کردن سفارش</li>
                <li>ضمانت150درصدی اصالت</li>
                <li>ضمانت بهترین قیمت</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="copy-right">
          <Container>
            <p>طراحی سایت و سئو سایت : آوینا پرداز</p>
            <p className="copy-text">
              © تمامی حقوق این وب سایت برای فروشگاه اورج لند محفوظ است
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}
export default memo(Footer);
