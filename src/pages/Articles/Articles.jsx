import {  Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/slices/articles";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import { Helmet } from "react-helmet";
function Articles() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  const { articles, status } = useSelector((store) => store.articlesReducer);
  return (
    <>
      <Helmet>
        <title>مقالات</title>
      </Helmet>
      <section style={{ margin: "30px 0px 50px " }}>
        <Container fluid>
          <ArticlesList>{articles}</ArticlesList>
        </Container>
      </section>
    </>
  );
}
export default Articles;
