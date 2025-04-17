import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import { Dropdown } from "react-bootstrap";
import { memo, useEffect, useMemo, useState } from "react";
import BtnShop from "../../BtnShop/BtnShop";
import SortBox from "./SortBox/SortBox";

function BlogNav() {
  const expand = "lg";
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [isExpand, setIsExpand] = useState(window.innerWidth >= 992);
  useEffect(() => {
    const handleResize = () => {
      setIsExpand(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortBox = useMemo(() => {
    return location.pathname === "/" && isExpand ? <SortBox /> : null;
  }, [location.pathname, isExpand]);

  return (
    <>
      <Navbar key={expand} expand={expand} className="blogNav">
        <Container fluid className="d-flex">
          <Link to={`/cart`} className="d-none d-lg-block ">
            <BtnShop>سبد خرید {`(0)`}</BtnShop>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Brand className="d-lg-none">
            فروشگاه اینترنتی اورجلند
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            backdrop={false}
            className={"offCanvasNav"}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1">
                <NavLink to="/" className="nav-link">
                  صفحه اصلی
                </NavLink>
                <Dropdown
                  className="dropDownNav"
                  {...(isExpand
                    ? {
                        onMouseEnter: () => setShow(true),
                        onMouseLeave: () => setShow(false),
                        show: show,
                      }
                    : {
                        onClick: () => setShow(!show),
                        show: true,
                      })}
                >
                  <Dropdown.Toggle id="dropdown-basic">
                    <span className="">محصولات</span>
                    {isExpand ? (
                      <FaAngleDown size={`10px`} />
                    ) : (
                      <FaAngleLeft
                        size={`14px`}
                        style={
                          show && {
                            rotate: "-90deg",
                          }
                        }
                      />
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    {...(isExpand && {
                      onMouseEnter: () => setShow(true),
                      onMouseLeave: () => setShow(false),
                    })}
                    className={`${show ? `expand` : ``}`}
                  >
                    <div className="my-2 m-lg-0">
                      <Link
                        className="dropdown-item"
                        to={`/category/1/کفش-ورزشی`}
                      >
                        کفش ورزشی
                      </Link>
                      <Dropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to={`/category/5/پوشاک-ورزشی`}
                      >
                        پوشاک ورزشی
                      </Link>
                      <Dropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to={`/category/8/لوازم-ورزشی`}
                      >
                        تجهیزات ورزشی
                      </Link>
                      <Dropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to={`/category/9/کیف-و-کوله`}
                      >
                        کیف و کوله
                      </Link>
                      <Dropdown.Divider />
                      <Link className="dropdown-item" to={`/category/10/توپ`}>
                        توپ
                      </Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <NavLink to="/AllBrand" className="nav-link">
                  برند ها
                </NavLink>
                <NavLink to="/Articles" className="nav-link">
                  دانستنی ها
                </NavLink>
                <NavLink to="/About" className="nav-link">
                  درباره ما
                </NavLink>
                <NavLink to="/Account/Newuser" className="nav-link">
                  ثبت نام
                </NavLink>
                <NavLink to="/Account" className="nav-link">
                  پروفایل من
                </NavLink>
                <NavLink to="/Contact" className="nav-link">
                  ارتباط با ما
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {sortBox}
        </Container>
      </Navbar>
    </>
  );
}
export default memo(BlogNav);
