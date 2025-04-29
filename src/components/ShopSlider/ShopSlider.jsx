import { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getShuffledItems } from "../../utils/shuffleHelpers";
import { fetchProducts } from "../../features/slices/products";
import ProductSwiper from "../ProductSwiper/ProductSwiper";
import { Container } from "react-bootstrap";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const ShopSlider = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsReducer);

  // for swiper proudcts
  const shuffledProducts = useMemo(() => {
    if (!products) return [];
    return getShuffledItems({
      items: products,
      hasPrice: true,
      limit: 11,
    });
  }, [products]);

  const productsSwiperBtn = {
    prevEl: ".shopSliderBtn-prev",
    nextEl: ".shopSliderBtn-next",
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container fluid className="px-0 bg-white">
      <div className="shop-slider">
        <p>خرید آنلاین کفش فوتسال - انواع لوازم و پوشاک ورزشی اورجینال</p>
        <ProductSwiper SwiperButtons={productsSwiperBtn}>
          {shuffledProducts}
        </ProductSwiper>
        <button className="shopSliderBtn-prev ">
          <LiaAngleRightSolid size={"18px"} />
        </button>
        <button className="shopSliderBtn-next ">
          <LiaAngleLeftSolid size={"18px"} />
        </button>
      </div>
    </Container>
  );
};
export default memo(ShopSlider);
