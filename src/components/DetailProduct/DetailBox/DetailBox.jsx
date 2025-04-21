import { Col } from "react-bootstrap";
import HeaderDetail from "./HeaderDetail/HeaderDetail";
import BodyDetail from "./BodyDetail/BodyDetail";
import FooterDetail from "./FooterDetail/FooterDetail";

function DetailBox() {

  return (
    <Col>
      <div className="infoDetail">
        <HeaderDetail />
        <BodyDetail />
        <FooterDetail />
      </div>
    </Col>
  );
}
export default DetailBox;
