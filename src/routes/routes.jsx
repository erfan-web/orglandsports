import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Brands from "../pages/Brands/Brands";
import Cart from "../pages/Cart/Cart";
import Articles from "../pages/Articles/Articles";
import ArticleDetail from "../pages/ArticleDetail/ArticleDetail";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductBrands from "../pages/ProductBrands/ProductBrands";
import Account from "../pages/Account/Account";
import LoginForm from "../components/forms/LoginForm/LoginForm";
import SignUpForm from "../components/forms/SignUpForm/SignUpForm";
import RecoveryForm from "../components/forms/RecoveryForm/RecoveryForm";
import AdminLayout from "../Layouts/AdminLayout";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:categoryId/:categoryName", element: <Categories /> },
      {
        path: "/productDetail/:productId/:productName",
        element: <ProductDetail />,
      },
      { path: "/Articles", element: <Articles /> },
      {
        path: "/ArticleDetail/:articleId/:articleName",
        element: <ArticleDetail />,
      },
      { path: "/Allbrand/", element: <Brands /> },
      { path: "/ProductBrands/:brandName", element: <ProductBrands /> },
      { path: "/cart", element: <Cart /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Account", element: <Account /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/Newuser", element: <SignUpForm /> },
      { path: "/ForgetPassword", element: <RecoveryForm /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
