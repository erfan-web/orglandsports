import { memo } from "react"


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const HeroSwiper=()=>{
    return (
        <Swiper
        className="mySwiper"
        dir="ltr"
        modules={[Autoplay]}
        autoplay={{
          duration: 1000,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Link to={`category/2/کفش-فوتسال`}>
            <img
              src="https://www.orglandsports.com/WebsiteImages/SliderMpImages/705751903.JPG"
              className="w-100"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`category/3/کفش-پیاده-روی`}>
            <img
              src="https://www.orglandsports.com/WebsiteImages/SliderMpImages/468450925.JPG"
              alt=""
              className="w-100"
            />
          </Link>
        </SwiperSlide>
      </Swiper>

    )
}
export default memo(HeroSwiper)