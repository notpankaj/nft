import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import { store } from './redux/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/cart" element={<ShoppingCart />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
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
      </div>
    </Provider>
    </>
  );
}

export default App;
