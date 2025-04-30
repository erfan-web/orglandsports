import { Button, Col, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
function SignUpForm() {
  return (
    <>
      <Helmet>
        <title>ثبت نام</title>
      </Helmet>
      <div className="Account">
        <Form className="signup" autoComplete="off">
          <p className="title">ثبت نام</p>
          <Row className="">
            <Col xs={12} sm={6}>
              <Form.Group className=" formGroup">
                <Form.Control
                  autoComplete="new-firstName"
                  type="text"
                  placeholder="نام"
                  name="firstName"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className=" formGroup">
                <Form.Control
                  id="نام"
                  autoComplete="new-lastName"
                  type="text"
                  placeholder="نام خانوادگی"
                  name="lastName"
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className=" formGroup">
                <Form.Control
                  autoComplete="new-phone"
                  type="text"
                  placeholder="تلفن همراه"
                  name="phoneNumber"
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="formGroup">
                <Form.Control
                  autoComplete="new-email"
                  type="email"
                  placeholder="پست الکترونیک"
                  name="email"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className=" formGroup">
                <Form.Control
                  type="password"
                  placeholder="رمز عبور"
                  name="password"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className=" formGroup">
                <Form.Control
                  type="password"
                  placeholder="تکرار رمز عبور"
                  name="rePassword"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="" xs={8}>
              <Form.Check
                type="radio"
                value={"sms"}
                name="method"
                label="فعال سازی از طریق پیامک"
              />

              <Form.Check
                type="radio"
                value={"email"}
                name="method"
                label="فعال سازی از طریق ایمیل"
              />
            </Col>
            <Col className="text-end " xs={4}>
              <Button variant="primary" type="button">
                ثبت نام
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default SignUpForm;
