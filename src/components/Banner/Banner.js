import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <h1>The Next Generation of Digital Art</h1>
        <h6>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, rerum
          iusto facere ut nihil doloremque sint. Magni deserunt atque
          architecto!
        </h6>
        <button>
          <span>Get Started</span>
        </button>
        <div className="banner-stats">
          <div>
            <span>Collection</span>
            <h4>90K+</h4>
          </div>
          <div>
            <span>Current Bid</span>
            <h4>950K+</h4>
          </div>
          <div>
            <span>Acution End</span>
            <h4>9.2K+</h4>
          </div>
        </div>
      </div>
      <div className="banner-right">
        <img src="images/NFT.jpg" />{" "}
      </div>
    </div>
  );
};

export default Banner;
