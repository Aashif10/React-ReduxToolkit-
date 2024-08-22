import React from "react";
import image from "../assets/images.jpeg"
import Add from "../assets/AddToCart.webp"
function Home() {
  return <div>
      <h1>Home component</h1>
      <div className="AddtoCart">
        <img src={Add} alt="" />
      </div>
        <div className="container">
          <div className="img-wrapper item">
            <img src={image} />
          </div>
          <div className="text-wrapper item">
            <span>Panda Image</span>
            <h3>$140.00</h3>
          </div>
          <div className="btn-wrapper item">
            <button>Add To Cart</button>
          </div>
      </div>
    </div>;
}
export default Home;
