import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { fetchArticles } from "../../features/slices/articles";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
function Articles() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  const { articles, status } = useSelector((store) => store.articlesReducer);
  return (
    <>
      <section style={{ margin: "30px 0px 50px " }}>
        <Container fluid>
          <ArticlesList>{articles}</ArticlesList>
        </Container>
      </section>
    </>
  );
}
export default Articles;
