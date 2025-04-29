import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="Account">
      <Form className="login">
        <p className="title">ورود به سیستم</p>
        <Row className="">
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                در صورتی که قبلا ثبت نام کرده اید از این قسمت وارد شوید .
              </Form.Text>
              <Form.Control
                type="text"
                placeholder="ایمیل یا تلفن همراه"
                className="mt-2"
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Control type="password" placeholder="رمز عبور" />
          </Col>
        </Row>
        <Row className="row-cols-1 mt-3">
          <Col>
            <Link to={`/ForgetPassword`}>
              رمز عبور را فراموش کرده اید؟
            </Link>
          </Col>
          <Col className="text-end ">
            <Button variant="primary" type="submit" className="loginBtn">
              ورود
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default LoginForm;
