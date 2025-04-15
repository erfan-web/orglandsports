import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <>
    <Header />
      <Outlet />
      <h1>footer</h1>
    </>
  );
}
export default MainLayout