import { memo, useCallback, useEffect } from "react";
import { useRef, useState } from "react";
import { Col } from "react-bootstrap";
// icons
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import MainSwiper from "./MainSwiper/MainSwiper";
import ThumbsSwiper from "./ThumbsSwiper/ThumbsSwiper";

function SlidersDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback(
    (swiper) => {
      if (swiper.realIndex !== activeIndex) {
        setActiveIndex(swiper.realIndex);
        thumbsSwiper && thumbsSwiper.slideTo(swiper.realIndex);
      }
    },
    [activeIndex, thumbsSwiper]
  );
  return (
    <Col className="order-lg-2">
      <div className="product-slider">
        <div className="product-prev">
          <FaAngleRight />
        </div>
        <div className="product-next">
          <FaAngleLeft />
        </div>
        <MainSwiper mainSwiperRef={mainSwiperRef} handleSlideChange={handleSlideChange}  />
        <ThumbsSwiper setThumbsSwiper={setThumbsSwiper} mainSwiperRef={mainSwiperRef} activeIndex={activeIndex}  />
      </div>
    </Col>
  );
}
export default memo(SlidersDetail);
