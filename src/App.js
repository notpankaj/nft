import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import React from "react";
import { store } from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ThankYou from "./pages/ThankYouPage/ThankYou";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import SingupPage from "./pages/SingupPage/SingupPage";
import { loginAction, tokenSelector } from "./redux/feature/authSlice";
import { useEffect } from "react";

const ErrorPage = () => {
  return (
    <h1>
      <a href="/">404 page not found! go to home </a>
    </h1>
  );
};
const authRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/cart" element={<ShoppingCart />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/thankyou" element={<ThankYou />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </>
  )
);
const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SingupPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </>
  )
);

const Init = () => {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const localUser = localStorage.getItem("AUTH");

    if (localUser) {
      try {
        const res = JSON.parse(localUser);
        console.log(res, "localUser");
        dispatch(loginAction(res));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="App">
      <RouterProvider router={token ? authRoutes : publicRoutes} />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="backdrop"></div>
        <Init />
      </Provider>
    </>
  );
}

export default App;
