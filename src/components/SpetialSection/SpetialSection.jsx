import { memo ,useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SpetialSlide from "../SpetialSlide/SpetialSlide";


const SpetialSection = () => {
  const { products } = useSelector((store) => store.productsReducer);
        const spetialProducts = useMemo(() => {
            if (!products) return [];
            return [...products].filter((p) => p.discount?.spetial);
          }, [products]);
        
    return (
        <section className="spetial-section m-0 mb-5">
      <Container fluid className="p-0">
        <Row>
          <Col xs={"12"}>
            <div className="spetial-title-box">
              <h2 className="spetial-title">پیشنهاد شگفت انگیز</h2>
            </div>
          </Col>
          <Col
            md="4"
            className="d-none d-xxl-block"
            style={{ paddingTop: "10px" }}
          >
            <div className="about">
              <p>
                فروشگاه اورج لند از سال 97 فعالیت حرفه ای خود را در زمینه فروش
                تخصصی کفش های فوتسالی اورجینال آغاز کرده و با افزایش تنوع و حفظ
                اصالت محصولات و با تاکید بر رضایت مشتریان وبسایت اینترنتی خود را
                راه اندازی کرده.
              </p>
              <p>
                کاربران گرامی و مشتریان عزیز فروشگاه اینترنتی اورج لند ، شما
                میتوانید در صورت بروز هر گونه مشکل و یا راهنمای خرید خود همچنین
                دریافت اطلاعات و آگاهی های لازم برای خرید بهترین جنس مورد نظر
                خود متناسب با نیاز خودتان که بتوانید یک عمر با خیال راحت از
                محصولات خریداری شده ی خود استفاده کنید ، با شماره های درج شده
                تماس حاصل فرمایید و از ما مشاوره رایگان دریافت کنید . همچنین
                میتوانید مشکلات خود را در رابطه با محصولات خریداری شده ی خود را
                برای ما بازگو کنید تا اقدامات لازم را برای شما عزیزان انجام
                دهیم.
              </p>
            </div>
          </Col>
          <Col
            xl="12"
            md="12"
            xxl="8"
            style={{ paddingTop: "10px" }}
          >
            <div className="product-spetial">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".spetialBtn-next",
                  prevEl: ".spetialBtn-prev",
                }}
                className="slider-spetial"
                loop={true}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  568: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 1.3,
                    spaceBetween: 15,
                  },
                  1400: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
              >
                {spetialProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="item"></div>
                    <SpetialSlide {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="spetialBtn-prev ">
                <LiaAngleRightSolid size={"18px"} />
              </button>
              <button className="spetialBtn-next ">
                <LiaAngleLeftSolid size={"18px"} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default memo(SpetialSection);
