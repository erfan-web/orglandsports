import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink, useLocation } from "react-router-dom";
import { memo, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import BtnShop from "../../BtnShop/BtnShop";
import SortBox from "./SortBox/SortBox";
import DropDownNav from "./DropDownNav/DropDownNav";
function BlogNav() {
  const expand = "lg";
  const location = useLocation();
  const [isExpand, setIsExpand] = useState(null);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { addedToCart } = useSelector((store) => store.cartReducer);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    const handleMediaChange = (e) => {
      const isNowDesktop = e.matches;
      setIsExpand(isNowDesktop);
      if (isNowDesktop && isOffcanvasOpen) {
        setIsOffcanvasOpen(false);
      }
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [isOffcanvasOpen]);

  useEffect(() => {
    setIsOffcanvasOpen(false);
  }, [location]);

  const sortBox = useMemo(() => {
    return location.pathname === "/" && isExpand ? <SortBox /> : null;
  }, [location.pathname, isExpand]);

  const navLinks = (
    <>
      <NavLink to="/" className="nav-link">
        صفحه اصلی
      </NavLink>
      <DropDownNav isExpand={isExpand} />
      <NavLink to="/AllBrand" className="nav-link">
        برند ها
      </NavLink>
      <NavLink to="/Articles" className="nav-link">
        دانستنی ها
      </NavLink>
      <NavLink to="/About" className="nav-link">
        درباره ما
      </NavLink>
      <NavLink to="/Newuser" className="nav-link">
        ثبت نام
      </NavLink>
      <NavLink to="/Account" className="nav-link">
        پروفایل من
      </NavLink>
      <NavLink to="/Contact" className="nav-link">
        ارتباط با ما
      </NavLink>
    </>
  );
  return (
    <>
      <Navbar key={expand} expand={expand} className="blogNav">
        <Container fluid className="d-flex">
          <Link to={`/cart`} className="d-none d-lg-block ">
            <BtnShop>سبد خرید {`(${addedToCart})`}</BtnShop>
          </Link>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={() => setIsOffcanvasOpen((prev) => !prev)}
          />
          <Navbar.Brand className="d-lg-none">
            فروشگاه اینترنتی اورجلند
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            backdrop={isOffcanvasOpen}
            show={isOffcanvasOpen}
            className={`offCanvasNav ${isOffcanvasOpen ? "d-flex" : "d-none"}`}
            onHide={() => setIsOffcanvasOpen(false)}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1">{navLinks} </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className="flex-grow-1 d-none d-lg-flex">{navLinks}</Nav>
          {sortBox}
        </Container>
      </Navbar>
    </>
  );
}
export default memo(BlogNav);
