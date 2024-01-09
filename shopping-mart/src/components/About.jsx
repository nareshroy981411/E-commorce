import React from 'react';
import '../css/Abpage.css';
import '../App.css'
import About from '../assets/about.jpg'

const AboutPage = () => {
  return (
    <div className="hero">
      <div className="card text-white bg-dark border-0">
        <img src={About} className="card-img" alt="..." height={650} />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container-fluid">
            <h4 className="card-title display-3 fw-bolder mb-0">
            About Us
            </h4>
            <p className="text" >Welcome to our online shopping store!</p>
            <p className="text">We are a team of passionate individuals who aim to provide the best shopping experience to our customers. We offer a wide range of products from different categories including electronics, fashion, home decor, and many more.</p>
            <p className="text">Our mission is to make shopping convenient and enjoyable for everyone. We believe in delivering high-quality products at affordable prices, and we are committed to providing exceptional customer service.</p>
            <p className="text" >If you have any questions or feedback, please don't hesitate to contact us. We would love to hear from you!</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutPage;
