import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, Form, Row } from "react-bootstrap";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { memo } from "react";
import { useSelector } from "react-redux";
import BtnShop from "../../BtnShop/BtnShop";
function SearchNav() {
  const { addedToCart } = useSelector((store) => store.cartReducer);

  return (
    <>
      <Navbar expand="lg" className="searchNav bg-whiteSmoke text-gray-50">
        <Container fluid>
          <Row>
            <Col xs={2} lg={2}>
              <img
                src={
                  "https://www.orglandsports.com/Content/Newcss/img/logo.png"
                }
                alt=""
                className="logoImg"
              />
            </Col>
            {/* mobile-link profile & search */}
            <Col xs={4} className="d-lg-none px-0 ps-3 ">
              <Nav className="profile">
                <NavLink to="/Account">
                  <span>پروفایل </span>
                </NavLink>
                <span className="px-2">|</span>
                <NavLink to="/login">
                  <span className="">جستجو</span>
                </NavLink>
              </Nav>
            </Col>
            {/* mobile-btn shop */}
            <Col xs={6} className="d-lg-none px-2 d-flex justify-content-end ">
              <Link to={`/cart`}>
                <BtnShop>سبد خرید {`(${addedToCart})`}</BtnShop>
              </Link>
            </Col>
            {/* expand-search input */}
            <Col lg={7} className="d-none d-lg-block">
              <Form className="searchContainer">
                <Form.Control
                  type="text"
                  placeholder="جستجو در محصول،دسته یا برند"
                  className="MegaSearch"
                  aria-label="Search"
                />
              </Form>
            </Col>
            {/* expand-link signin and login */}
            <Col lg={3} className="d-none d-lg-block">
              <div className="Account-expand-lg">
                <BsFillPersonPlusFill className="icon" size={"20px"} />
                <span style={{ marginTop: "2px", paddingRight: "6px" }}>
                  <NavLink to="/Newuser">ثبت نام</NavLink>
                </span>
                <BsFillPersonFill className="icon" size={"20px"} />
                <span style={{ marginBottom: "2px", paddingRight: "3px" }}>
                  <NavLink to="/login">ورود</NavLink>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
export default memo(SearchNav);
