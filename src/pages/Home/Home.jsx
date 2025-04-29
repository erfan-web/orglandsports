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
                  src="https://www.orglandsports.com/WebsiteImages/ServiceGroupImages/792208336.JPG"
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
                  src="https://www.orglandsports.com/WebsiteImages/ServiceGroupImages/760320642.JPG"
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
                  src="https://www.orglandsports.com/WebsiteImages/ServiceGroupImages/846827143.JPG"
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
                  src="https://www.orglandsports.com/WebsiteImages/ServiceGroupImages/848929074.JPG"
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
