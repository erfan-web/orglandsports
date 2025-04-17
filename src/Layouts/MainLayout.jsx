import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
  );
}
export default MainLayout