import { memo } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MainSwiper = ({ mainSwiperRef, handleSlideChange }) => {
  const { product } = useSelector((store) => store.productReducer);

  return (
    <Swiper
      ref={mainSwiperRef}
      modules={[Navigation]}
      loop={true}
      navigation={{
        prevEl: ".product-prev",
        nextEl: ".product-next",
      }}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      className="mb-2"
    >
      {product?.images?.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`product-${index}`} className="w-100" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default memo(MainSwiper);
