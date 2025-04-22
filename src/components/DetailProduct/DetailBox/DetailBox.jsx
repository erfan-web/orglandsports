import { Col } from "react-bootstrap";
import HeaderDetail from "./HeaderDetail/HeaderDetail";
import BodyDetail from "./BodyDetail/BodyDetail";
import FooterDetail from "./FooterDetail/FooterDetail";
import { memo, useEffect } from "react";

function DetailBox() {
useEffect(()=>{
  console.log('detailBox mount');
})
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
export default memo(DetailBox)
