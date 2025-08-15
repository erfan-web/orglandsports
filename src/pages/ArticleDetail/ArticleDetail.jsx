import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../../features/slices/article";
import ProductSwiper from "../../components/ProductSwiper/ProductSwiper";
import { getShuffledItems } from "../../utils/shuffleHelpers";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { fetchProducts } from "../../features/slices/products";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import { fetchArticles } from "../../features/slices/articles";
import { Helmet } from "react-helmet";
function ArticleDetail() {
  const dispatch = useDispatch();
  const { articleId, articleName } = useParams();
  const { article, status } = useSelector((store) => store.articleReducer);
  const { products } = useSelector((store) => store.productsReducer);
  const { articles } = useSelector((store) => store.articlesReducer);
  const FormatedArticleName = articleName.replace(/(-)+/g, " ");
  // for swiper proudcts
  const shuffledProducts = useMemo(() => {
    if (!products) return [];
    return getShuffledItems({
      items: products,
      hasPrice: true,
      limit: 9,
    });
  }, [products]);

  const productsSwiperBtn = {
    prevEl: ".productBtn-prev",
    nextEl: ".productBtn-next",
  };

  const shuffledArticles = useMemo(() => {
    if (!articles) return [];
    return getShuffledItems({
      items: articles,
      excludeId: article?.id,
      limit: 4,
    });
  }, [article, articles]);

  useEffect(() => {
    dispatch(getArticleById({ articleId }));
    dispatch(fetchProducts());
    if (articles.length == 0) {
      dispatch(fetchArticles());
    }
  }, [dispatch, articles, articleId]);

  if (article && status === "success")
    return (
      <>
        <Helmet>
          <title>{FormatedArticleName}</title>
        </Helmet>
        <div className="markdown-content">
          <Container>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <Link to={props.href}>{props.children}</Link>
                ),
                img: ({ node, ...props }) => (
                  <span
                    style={{
                      textAlign: "center",
                      margin: "40px 0",
                      display: "block",
                    }}
                    className="list-menu"
                  >
                    <img
                      {...props}
                      style={{
                        maxWidth: "100%",
                        borderRadius: "10px",
                        display: "inline-block",
                      }}
                    />
                  </span>
                ),
                h6: ({ node, ...props }) => (
                  <div className="list-item">
                    <h6>{props.children}</h6>
                  </div>
                ),
              }}
            >
              {article ? article.content : ""}
            </ReactMarkdown>
            <div style={{ padding: "60px 0px 90px" }}>
              <hr className="m-0" />
            </div>
          </Container>
        </div>
        <section className="bg-white">
          <Container>
            <div className="product-slider py-3">
              <div className="productBtn-prev">
                <FaAngleRight />
              </div>
              <div className="productBtn-next">
                <FaAngleLeft />
              </div>
              <ProductSwiper SwiperButtons={productsSwiperBtn}>
                {shuffledProducts}
              </ProductSwiper>
            </div>
          </Container>
        </section>
        <section className="bg-white px-4" style={{ paddingBottom: "80px" }}>
          <Container>
            <ArticlesList>{shuffledArticles}</ArticlesList>
          </Container>
        </section>
      </>
    );
}
export default ArticleDetail;
