import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "../../components/ProductCard/ProductCard";

import { getProductByBrand } from "../../features/slices/productsByBrand";

function ProductBrands() {
  const dispatch = useDispatch();
  const { brandName } = useParams();

  const { productBrands } = useSelector((store) => store.pByBrandReducer);
  console.log(productBrands);
  useEffect(() => {
    dispatch(getProductByBrand({ brandName }));
  }, [dispatch, brandName]);

  return (
    <>
      <section className="py-5 productBrands">
        <Container fluid>
          <Row className="p-0 px-xl-2 justify-content-center">
            <Col xs={12} xl={9} >
              <Row className="row-cols-2 row-cols-lg-3 row-cols-xl-4 p-0 row-product">
                {productBrands.map((Product) => (
                  <Col key={Product.id}>
                    <ProductCard {...Product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default ProductBrands;
