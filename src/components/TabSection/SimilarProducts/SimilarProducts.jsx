import { memo, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductSwiper from "../../ProductSwiper/ProductSwiper";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../../features/slices/productsByCat";
import { getShuffledItems } from "../../../utils/shuffleHelpers";

const SimilarProducts = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.productReducer);
  const { filteredProducts } = useSelector((store) => store.pByCatReducer);
  useEffect(() => {
    if (product && filteredProducts.length === 0) {
      dispatch(getProductsByCategory({ categoryId: product.category_id }));
    }
  }, [dispatch, product, filteredProducts]);

  const shuffledProducts = useMemo(() => {
    if (!filteredProducts) return [];
    return getShuffledItems({
      items: filteredProducts,
      excludeId: product?.id,
      hasPrice: true,
      limit: 12,
    });
  }, [filteredProducts, product]);
  const similarSwiperBtn = {
    prevEl: ".similar-prev",
    nextEl: ".similar-next",
  };
  return (
    <section className="similarSection">
      <Container>
        <h6 className="title">محصولات مشابه</h6>
        {shuffledProducts.length>11 && (
          <div className="product-slider">
            <div className="similar-prev">
              <FaAngleRight />
            </div>
            <div className="similar-next">
              <FaAngleLeft />
            </div>
            <ProductSwiper similarSwiperBtn={similarSwiperBtn}>
              {shuffledProducts}
            </ProductSwiper>
          </div>
        )}
      </Container>
    </section>
  );
};
export default memo(SimilarProducts);
