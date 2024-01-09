import React from "react";
import backg from "../assets/123.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero mt-5">
      <div className="card text-white bg-dark border-0">
        <img src={backg} className="card-img" alt="..." height={550} />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASONS ARRIVAL
            </h5>
            <p className="card-text Llead fs-2">CHECK OUT THE NEW TRENDS</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
