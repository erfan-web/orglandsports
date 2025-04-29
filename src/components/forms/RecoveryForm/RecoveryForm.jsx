import { Button, Col, Form, Row } from "react-bootstrap";

const RecoveryForm = () => {
  return (
    <div className="Account">
      <Form className="ForgetPassword">
        <p className="title">بازیابی رمز عبور</p>
        <Row className="">
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                شماره تلفن یا ایمیل خود را وارد کنید
              </Form.Text>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-cols-1">
          <Col className="text-end ">
            <Button variant="primary" type="submit" className="loginBtn">
              بازیابی
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default RecoveryForm;
