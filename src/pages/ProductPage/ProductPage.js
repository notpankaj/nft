import ReactStars from "react-rating-stars-component";
import React from "react";
import Navbar from "../../components/Navbar";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

import { IllustrationbyMeldaVNH } from "../../utils/dummy";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
// import { FeatureList } from "../../components/Feature/FeatureList";
const ProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch()
  const product = IllustrationbyMeldaVNH.find(item => item.id === Number(id)) || null
  
  const handleAdd = (item) => {
    dispatch(addToCart(item))
  }

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])



  if (product === null) return <h1>no product found</h1>;
  return (
    <>
      <Navbar />
      <div className="product">
        <section className="left">
          <img
            src={`/IllustrationbyMeldaVNH/${product?.photo}`}
            className="product__image"
          />
        </section>
        <section className="right">
          <div>
            <h4>{product?.title}</h4>
            <h6>$13.12</h6>
            <div className="rating">
              <ReactStars count={5} size={15} activeColor="#ffd700" />
            </div>
            <p>{product?.des}</p>
          </div>
          <div className="btns">
            <button onClick={() => handleAdd(product)} className="product__actionBtn cart">ADD TO CART</button>
            <button className="product__actionBtn">ADD TO WISHLIST</button>
          </div>
        </section>
      </div>

      {/* <FeatureList /> */}
    </>
  );
};

export default ProductPage;
