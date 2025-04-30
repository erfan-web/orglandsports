import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdDone, MdClose, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
function Contact() {
  return (
    <>
      <Helmet>
        <title>تماس با ما</title>
      </Helmet>

      <section className="contact">
        <Container>
          <p className="top-address">
            فروش حضوری :تهران شهریار خیابان مفتح مجتمع تجاری الماس شهر طبقه سوم
            پلاک 425
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.916579324099!2d51.057833215258!3d35.65442688020058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xafff34f670936ce5!2zMzXCsDM5JzE1LjkiTiA1McKwMDMnMzYuMSJF!5e0!3m2!1sen!2s!4v1652869126316!5m2!1sen!2s"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p className="info">
            کاربران گرامی و مشتریان عزیز فروشگاه اینترنتی اورج لند ، شما
            میتوانید در صورت بروز هر گونه مشکل و یا راهنمای خرید خود همچنین
            دریافت اطلاعات و آگاهی های لازم برای خرید بهترین جنس مورد نظر خود
            متناسب با نیاز خودتان که بتوانید یک عمر با خیال راحت از محصولات
            خریداری شده ی خود استفاده کنید ، با شماره های درج شده در زیر تماس
            حاصل فرمایید و از ما مشاوره رایگان دریافت کنید . همچنین میتوانید
            مشکلات خود را در رابطه با محصولات خریداری شده ی خود را برای ما بازگو
            کنید تا ما در اصرع وقت اقدامات لازم را برای شما عزیزان انجام دهیم در
            فرم زیر نیز میتوانید در رابطه با موضوعات ذکر شده برای تیم پشتیبانی
            اورج لند تیکت ارسال کنید تا ما پاسخگوی شما باشیم
          </p>
          <Row className="row-cols-1">
            <Col lg={8} className="order-lg-2">
              <Form>
                <Row className="row-cols-1">
                  <Col sm={6} className="col">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>نام و نام خانوادگی</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col sm={6} className="col">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>پست الکترونیک</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Label>متن پیام</Form.Label>
                      <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                  </Col>
                  <Col className="text-end">
                    <Button variant="primary" type="submit">
                      ارسال درخواست
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={4}>
              <div className="contact-address-area">
                <div className="contact-address">
                  <div className="address">
                    <div className="radius-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <ul>
                      <li>آدرس فروش حضوری :</li>
                      <li></li>
                      <li>تهران شهریار خیابان مفتح مجتمع تجاری </li>
                      <li>الماس شهر طبقه سوم پلاک 425</li>
                      <li>ساعات کاری :</li>
                      <li>
                        <MdDone />
                        <span> شنبه از ساعت 10 الی 20:30.</span>
                      </li>
                      <li>
                        <MdDone />
                        <span> یکشنبه از ساعت 10 الی 20:30.</span>
                      </li>
                      <li>
                        <MdDone />
                        <span> دوشنبه از ساعت 10 الی 20:30.</span>
                      </li>
                      <li>
                        <MdClose />
                        <span> سه شنبه از ساعت 10 الی 20:30.</span>
                      </li>
                      <li>
                        <MdDone />
                        <span> چهارشنبه از ساعت 10 الی 20:30.</span>
                      </li>
                      <li>
                        <MdDone />
                        <span> پنجشنبه از ساعت 10 الی 20:30.</span>
                      </li>
                      <li>
                        <MdDone />
                        <span> جمعه و روزهای تعطیل از ساعت 12 الی 20:30. </span>
                      </li>
                    </ul>
                  </div>
                  <div className="phoneNumber">
                    <div className="radius-icon">
                      <FaPhoneAlt />
                    </div>
                    <ul>
                      <li>02165236371</li>
                      <li>09331171313</li>
                    </ul>
                  </div>
                  <div className="email">
                    <div className="radius-icon">
                      <MdEmail size={"20px"} />
                    </div>
                    <p>Orglandsport@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Contact;
