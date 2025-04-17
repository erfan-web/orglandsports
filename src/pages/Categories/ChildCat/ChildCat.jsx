import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../../features/slices/productsByCat";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
function ChildCat({ currentCategories }) {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory({ categoryId }));
  }, [categoryId, dispatch]);

  const { filteredProducts, status } = useSelector(
    (store) => store.pByCatReducer
  );
  if (status === "loading") return <p>در حال بارگذاری...</p>;
  return (
    <>
      <div className="headerInfo">
        <Container fluid>
          <Row className="">
            <Col className="d-sm-none d-xl-block order-lg-2 " xs={12} xl={3}>
              <div className="imgBox text-center">
                <img src={currentCategories.image} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs={12} xl={9}>
              <h2>{currentCategories.title}</h2>
              <p>{currentCategories.desc}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="productsList">
        <Container fluid>
          <Row >
            <Col xs={12} xl={9} className="p-0 p-md-3">
              <Row className="row-cols-2 row-cols-lg-3 row-cols-xl-4 p-0 row-product">
                {filteredProducts.map((Product) => (
                  <Col key={Product.id} className="col-product">
                    <ProductCard {...Product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default ChildCat;
