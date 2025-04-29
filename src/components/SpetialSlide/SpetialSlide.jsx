import { memo } from "react"
import { Col, Row } from "react-bootstrap"
import { generateProductDetailRoute } from "../../utils/routeHelpers"
import { getDiscountedPrice } from "../../utils/price"
import { Link } from "react-router-dom"
import CountDown from "../CountDown/CountDown"

const SpetialSlide=({ image, name, price, discount ,id})=>{
    return (
        <Row>
        <Col xs={12} md={4}>
          <img src={image} alt="" className="w-100" />
        </Col>
        <Col xs={12} md={8} className="px-md-0">
          <div style={{ paddingTop: "6px" }}>
            <Link to={generateProductDetailRoute(id , name)} className="author-name">{name}</Link >
          </div>
          <div className="sub-title">
            {getDiscountedPrice({ price, discount }).Percent}% تخفیف
          </div>
          <Row style={{ paddingTop: "15px" }}>
            <div className="price-start">
              <p>
                <span>{price.toLocaleString()} تومان</span>
              </p>
              <div className="discount-price">
                <div style={{ color: "#630460", fontSize: "19px" }}>
                  {discount.discountedPrice.toLocaleString()} <span>تومان</span>
                </div>
              </div>
            </div>
              <CountDown {...discount} />
          </Row>
        </Col>
      </Row>

    )
}
export default memo(SpetialSlide)