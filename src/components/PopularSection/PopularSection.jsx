import { memo, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PopularCard from "../PopularCard/PopularCard";
import { useSelector } from "react-redux";
import { getShuffledItems } from "../../utils/shuffleHelpers";

const PopularSection = () => {
  const { products } = useSelector((store) => store.productsReducer);

  // for swiper proudcts
  const shuffledProducts = useMemo(() => {
    if (!products) return [];
    return getShuffledItems({
      items: products,
      hasPrice: true,
      limit: 12,
    });
  }, [products]);

  return (
    <section className="popular-section my-5">
      <Container fluid>
        <h2 className="text-center mb-4 fs-5">محبوب ترین محصولات فروشگاه</h2>
        <Row className="row-cols-2 row-cols-sm-3  row-cols-md-4 row-cols-lg-6 gy-4">
          {/* p = product */}
          {shuffledProducts.map((p) => (
            <Col key={p.id} className="p-0 p-sm-2">
              <PopularCard {...p} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default memo(PopularSection);
