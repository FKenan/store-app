import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/Main";
import HomePage from "./pages/Home";
import CartPage from "./pages/cart/Cart";
import ProductsPage from "./pages/Products";
import RegisterPage from "./pages/account/Register";
import ErrorPage from "./pages/errors/Error";
import ServerErrorPage from "./pages/errors/ServerError";
import NotFoundPage from "./pages/errors/NotFound";
import LoginPage from "./pages/account/Login";
import ProductDetailsPage from "./pages/ProductDetails";
import { getUser, logout, setUser } from "./pages/account/accountSlice";
import { useEffect, useState } from "react";
import { getCart, setCart } from "./pages/cart/cartSlice";
import requests from "./api/apiClient";
import { useDispatch } from "react-redux";

//npm install @reduxjs/toolkit, npm install react-redux kütüphanleri kurulur.Redux-toolkit kütüphanesi kullanacağız.
// chrome eklentilerine redux devtools ekle => debug amaçlı yardımcı tool

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      {
        path: "products",
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ":id", element: <ProductDetailsPage /> },
        ],
      },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        path: "errors",
        children: [
          { index: true, element: <ErrorPage /> },
          { path: "server-error", element: <ServerErrorPage /> },
          { path: "not-found", element: <NotFoundPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = async () => {
    await dispatch(getUser());
    await dispatch(getCart());
  };

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
