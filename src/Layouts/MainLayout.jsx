import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShareBar from "../components/ShareBar/ShareBar";

function MainLayout() {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    <ShareBar />
    </>
  );
}
export default MainLayout