import { memo } from "react";
import { FaCaretLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";

const TabSection = () => {
  const { product } = useSelector((store) => store.productReducer);
  return (
    <section className="tabSection">
      <Container>
        <Tab.Container defaultActiveKey="description">
          <Nav
            variant="pills"
            role="tablist"
            className="row-cols-2 row-cols-md-4 "
          >
            <Col>
              <Nav.Item role="presentation">
                <Nav.Link
                  eventKey="description"
                  id="pills-desc-tab"
                  role="tab"
                  aria-controls="pills-description"
                  aria-selected="true"
                >
                  توضیحات محصول
                </Nav.Link>
              </Nav.Item>
            </Col>

            <Col>
              <Nav.Item role="presentation">
                <Nav.Link
                  eventKey="full-specification"
                  id="pills-full-specification-tab"
                  role="tab"
                  aria-controls="pills-full-specification"
                  aria-selected="false"
                >
                  مشخصات فنی
                </Nav.Link>
              </Nav.Item>
            </Col>

            <Col>
              <Nav.Item role="presentation">
                <Nav.Link
                  eventKey="reviews"
                  id="pills-reviews-tab"
                  role="tab"
                  aria-controls="pills-reviews"
                  aria-selected="false"
                >
                  نظرات کاربران
                </Nav.Link>
              </Nav.Item>
            </Col>

            <Col>
              <Nav.Item role="presentation">
                <Nav.Link
                  eventKey="specification"
                  id="pills-specification-tab"
                  role="tab"
                  aria-controls="pills-specification"
                  aria-selected="false"
                >
                  بررسی محصول
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>

          <Tab.Content className="tab-content" id="pills-tabContent">
            <Tab.Pane
              eventKey="description"
              className="fade "
              id="pills-description"
              role="tabpanel"
            >
              <h5 className="mb-5">{product.name}</h5>
              <hr />
            </Tab.Pane>

            <Tab.Pane
              eventKey="full-specification"
              className="fade full-specification"
              id="pills-full-specification"
              role="tabpanel"
            >
              <h6 className="title">مشخصات فنی</h6>
              <ListGroup>
                <ListGroup.Item>
                  آرتیکل نامبر : {product?.technical_details?.articleNum}
                </ListGroup.Item>
                <ListGroup.Item>
                  برند : {product?.technical_details?.brand}
                </ListGroup.Item>
                <ListGroup.Item>
                  جنس رویه : {product?.technical_details?.upper_material}
                </ListGroup.Item>
                <ListGroup.Item>
                  فناوری زیره : {product?.technical_details?.outsole}
                </ListGroup.Item>

                <ListGroup.Item>
                  کالکشن : {product?.technical_details?.Collection}
                </ListGroup.Item>
                {product?.technical_details?.quality && (
                  <ListGroup.Item>
                    کیفیت : {product?.technical_details?.quality}
                  </ListGroup.Item>
                )}
                {product?.technical_details?.warranty && (
                  <ListGroup.Item>
                    گارانتی : {product.technical_details.warranty}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Tab.Pane>

            <Tab.Pane
              eventKey="reviews"
              className="fade"
              id="pills-reviews"
              role="tabpanel"
            >
              <div className="p-2 p-sm-3">
                <h6 className="title">
                  <FaCaretLeft color="#2196f3" className="pe1 vertical-top" />
                  نظر خود را در مورد این محصول وارد نمایید
                </h6>
                <Form>
                  <Row className=" gy-xl-4 pt-3">
                    <Col lg={6} xl={3}>
                      <Form.Control
                       
                        size="lg"
                        type="text"
                        placeholder="نام و نام خانوادگی"
                      ></Form.Control>
                    </Col>
                    <Col lg={6} xl={3}>
                      <Form.Select size="lg">
                        <option value="5">عالی</option>
                        <option value="4">خوب</option>
                        <option value="3">متوسط</option>
                        <option value="2">ضعیف</option>
                        <option value="1">خیلی ضعیف</option>
                      </Form.Select>
                    </Col>
                    <Col xl={3}>
                      <Form.Control
                       
                        size="lg"
                        type="email"
                        placeholder="پست الکترونیک"
                      ></Form.Control>
                    </Col>
                    <Col xl={3}>
                      <Form.Check
                        type={"radio"}
                        name="IwillSuggest"
                        label="این محصول را پیشنهاد میکنم"
                      />
                      <Form.Check
                        type={"radio"}
                        name="IwillSuggest"
                        label="این محصول را پیشنهاد نمی کنم"
                      />
                    </Col>
                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="نظر خود را در مورد این محصول وارد نمایید"
                      />
                    </Col>
                    <Col xs={12}>
                      <Button type="submit" className="mt-3 mb-5">
                        ارسال
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Tab.Pane>

            <Tab.Pane
              eventKey="specification"
              className="fade"
              id="pills-specification"
              role="tabpanel"
            >
              specification
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
export default memo(TabSection);
