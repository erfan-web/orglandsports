import { Navigate, Outlet, useLocation } from "react-router-dom";
function Account() {
  const location = useLocation();
  const isLogin = (user) => {
    if (user == "admin") return true;
  };
  const isAuthPage = [
    "/login",
    "/Newuser",
    "/ForgetPassword",
  ].includes(location.pathname);
  if (!isLogin("amin") && !isAuthPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {isLogin("admin") && location.pathname === "/Account" && (
        <h1>welcome to your profile</h1>
      )}
    </>
  );
}
export default Account;
