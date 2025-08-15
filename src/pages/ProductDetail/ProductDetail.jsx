import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../features/slices/productById";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import TabSection from "../../components/TabSection/TabSection";
import SimilarProducts from "../../components/TabSection/SimilarProducts/SimilarProducts";
import MessageBox from "../../components/MessageBox/MessageBox";
import MessageProvider from "./MessageContext";
import { getShuffledItems } from "../../utils/shuffleHelpers";
import { fetchArticles } from "../../features/slices/articles";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import { Container } from "react-bootstrap";
function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((store) => store.productReducer);
  const { articles } = useSelector((store) => store.articlesReducer);

  const shuffledArticles = useMemo(() => {
    if (!articles) return [];
    return getShuffledItems({
      items: articles,
      limit: 4,
    });
  }, [articles]);

  useEffect(() => {
    dispatch(getProductById({ productId }));
    dispatch(fetchArticles());
  }, [dispatch, productId]);

  const [messageStatus, setMessageStatus] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  // if (status == "success" && product)
    return (
      <>
        <MessageProvider
          value={{
            setMessageStatus,
            messageStatus,
            selectedSize,
            setSelectedSize,
          }}
        >
          <MessageBox />
          <DetailProduct />
        </MessageProvider>
        <TabSection />
        <SimilarProducts />
        <section className=" px-4 pt-4" style={{ paddingBottom: "80px" }}>
          <Container>
            <ArticlesList>{shuffledArticles}</ArticlesList>
          </Container>
        </section>
      </>
    );
}
export default ProductDetail;
