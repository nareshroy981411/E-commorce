import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ROY from '../assets/ROY.png'

const Navbar = () => {
    const state = useSelector((state)=> state.HandleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm fixed-top" >
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <a className="navbar-brand " href="..">
            <img
              src={ROY}
              alt="ROY"
              className="img-circle"
              width={50}
              height={50}
            />
          </a>
            ROY COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products" >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/login" className=" btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i>Login
                </NavLink>
                <NavLink to="/register" className=" btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i>Register
                </NavLink>
                <NavLink to="/cart" className=" btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>Cart (
                        {state.length})
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
