import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h1>nav</h1>
      <Outlet />
      <h1>footer</h1>
    </>
  );
}
export default MainLayout