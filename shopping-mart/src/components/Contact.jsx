import React from "react";
import "../css/page.css";
import contact from '../assets/troly2.jpg'

const ContactPage = () => {
  return (
    <div className="hero ">
      <div className="card text-white bg-dark border-0">
        <img src={contact} className="card-img" alt="..." height={650} />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h1 className="card-title display-3 fw-bolder mb-0">Contact Us</h1>
          <p>
            If you have any questions or feedback, please don't hesitate to
            contact us.
          </p>
          <form className=" d-flex  justify-content-center">
            <div className="mb-2 ">
              <label htmlFor="name " className="text-warning d-flex flex-column">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="text-warning d-flex flex-column">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div  className="mb-2">
              <label htmlFor="message" className="text-warning d-flex flex-column">Message:</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="btn btn-outline-primary me-2">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
