import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// helper
import { productBrandRoute } from "../../utils/routeHelpers";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBrands } from "../../features/slices/brands";

function Brands() {
  const dispatch = useDispatch();
  const { allBrands, status } = useSelector((store) => store.brandsReducer);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  

  if (status === "loading") return <p>در حال بارگذاری...</p>;
  return (
    <>
      <section className="content">
        <h2 className="title ">برندهای فروشگاه</h2>
        <Container>
          <Row
            className="row-cols-1 row-cols-sm-2 row-cols-md-5 row-cols-lg-6"
            dir="ltr"
          >
            {allBrands.map((brand) => (
              <Col key={brand.id}>
                <Link to={productBrandRoute(brand.name)}>
                  <img src={brand.image} alt="" className="w-100" />
                </Link>
                <p className="text-center m-0 fw-bold">{brand.name}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Brands;
