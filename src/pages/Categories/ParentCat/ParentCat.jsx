import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { generateCategoryRoute } from "../../../utils/routeHelpers";
import { setSubCategories } from "../../../features/slices/categories";
function ParentCat() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  useEffect(() => {
    dispatch(setSubCategories(categoryId));
  }, [categoryId, dispatch]);
  const { subCategories } = useSelector((store) => store.categoriesReducer);

  return (
    <>
      <div className="category">
        <Container fluid>
          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-3">
            {subCategories.map((subCat) => (
              <Col key={subCat.id}>
                <div className="category-container">
                  <div className="media">
                    <div>
                      <p className="title">{subCat.name}</p>
                      <p className="desc">جهت نمایش {subCat.name} کلیک کنید</p>
                    </div>
                    <Link to={generateCategoryRoute(subCat)}>
                      <div className="imgbox">
                        <img src={subCat.image} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default ParentCat;
