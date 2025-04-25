import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { fetchArticles } from "../../features/slices/articles";
function Articles() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  const { articles, status } = useSelector((store) => store.articlesReducer);
  return (
    <>
      <Container fluid>
        <h2 className="text-center my-3 mb-5 fs-5 fw-bold">مقالات و دانستنی ها</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-5 mb-5 pb-3">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleCard {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Articles;
