import { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductSlide from "../ProductSlide/ProductSlide";

const ProductSwiper = ({ SwiperButtons, children }) => {
  return (
    <>
      <Swiper
        className="ProductsSwiper"
        modules={[Navigation]}
        loop={true}
        navigation={SwiperButtons}
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
          568: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {children?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductSlide {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default memo(ProductSwiper);
