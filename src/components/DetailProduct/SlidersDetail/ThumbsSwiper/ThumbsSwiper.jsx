import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { memo } from "react";

const ThumbsSwiper = ({setThumbsSwiper,mainSwiperRef,activeIndex})=>{
    const { product } = useSelector((store) => store.productReducer);
    return (
        <div className="thumbnail-container d-flex justify-content-end">
            <Swiper
              dir="ltr"
              onSwiper={setThumbsSwiper}
              slidesPerView={5.2}
              allowTouchMove={false}
              watchSlidesProgress={true}
              className="thumbnail-swiper"
            >
              {product?.images?.map((img, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    mainSwiperRef.current.swiper.slideToLoop(index);
                  }}
                >
                  <img
                    src={img}
                    alt={`thumbnail-${index}`}
                    className={`w-100 h-auto ${
                      activeIndex === index ? `border-red` : ``
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>

    )
}
export default memo(ThumbsSwiper)