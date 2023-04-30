import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ThankYou from "./pages/ThankYouPage/ThankYou";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/cart" element={<ShoppingCart />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/thankyou" element={<ThankYou />}></Route>
    </>
  )
);
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="backdrop"></div>
        <div className="App">
          <RouterProvider router={router} />
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
