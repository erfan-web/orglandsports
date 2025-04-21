import { Container, Row } from "react-bootstrap";
import DetailBox from "./DetailBox/DetailBox";
import SlidersDetail from "./SlidersDetail/SlidersDetail";

const DetailProduct = () => {
  return (
    <section className="productDetail">
      <Container >
        <Row className="row-cols-lg-2">
          <SlidersDetail />
          <DetailBox />
        </Row>
      </Container>
    </section>
  );
};
export default DetailProduct;
