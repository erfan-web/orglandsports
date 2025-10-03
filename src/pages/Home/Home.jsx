import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroSwiper from "../../components/HeroSwiper/HeroSwiper";
import ServicesList from "../../components/ServicesList/ServicesList";
import ShopSlider from "../../components/ShopSlider/ShopSlider";
import SpetialSection from "../../components/SpetialSection/SpetialSection";
import PopularSection from "../../components/PopularSection/PopularSection";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getShuffledItems } from "../../utils/shuffleHelpers";
import { fetchArticles } from "../../features/slices/articles";
import { Helmet } from "react-helmet";
function Home() {
  const { articles } = useSelector((store) => store.articlesReducer);
  const dispatch = useDispatch();
  const shuffledArticles = useMemo(() => {
    if (!articles) return [];
    return getShuffledItems({
      items: articles,
      limit: 4,
    });
  }, [articles]);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>
          فروشگاه کفش فوتسال - لوازم و پوشاک ورزشی اورجینال - اورج لند
        </title>
      </Helmet>

      <HeroSwiper />
      <ServicesList />
      <ShopSlider />
      <SpetialSection />
      <Container fluid>
        <Row className="row-cols-1 row-cols-sm-2 gy-2">
          <Col className="p-0 shadow order-2 order-sm-1">
            <div className="p-3 border  border-light-subtle">
              <Link to={`/category/6/جوراب`}>
                <img
                  src="/images/ServiceGroup/792208336.jfif"
                  alt=""
                  className="w-100"
                />
              </Link>
            </div>
          </Col>
          <Col className="p-0 shadow order-1 order-sm-2">
            <div className="p-3 border  border-light-subtle">
              <Link to={`/category/3/کفش-پیاده-روی`}>
                <img
                  src="/images/ServiceGroup/760320642.jfif"
                  alt=""
                  className="w-100"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <PopularSection />

      <Container fluid>
        <Row className="row-cols-1 gy-4">
          <Col className="p-0 shadow ">
            <div className="p-3 border border-light-subtle">
              <Link to={`/category/5/کفش-پیاده-روی`}>
                <img
                  src="/images/ServiceGroup/846827143.jfif"
                  alt=""
                  className="w-100"
                />
              </Link>
            </div>
          </Col>
          <Col className="p-0 shadow orde-1 order-sm-2">
            <div className="p-3 border border-light-subtle">
              <Link to={`/category/2/کفش-فوتسال`}>
                <img
                  src="/images/ServiceGroup/848929074.jfif"
                  alt=""
                  className="w-100"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="py-5">
        <Container fluid>
          <ArticlesList>{shuffledArticles}</ArticlesList>
        </Container>
      </section>
    </>
  );
}
export default Home;
