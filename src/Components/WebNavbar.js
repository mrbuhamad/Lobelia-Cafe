import React from "react";
import "../style.css";

function WebNavbar() {
  return (
    <div>
      <header id="home">
        <nav className="navbar navbar-default navbar-fixed navbar-transparent dark bootsnav shadow-less">
          <div className="container">
            <div className="attr-nav">
              <ul>
                <li className="side-menu">
                  <a href="#">
                    <i className="fa fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                dataToggle="collapse"
                dataTarget="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/img/Logobackround.png"
                  className="logo logo-display"
                  style={{ width: "190px" }}
                  alt="Logo"
                />
                <img
                  src="assets/img/logosmall.png"
                  className="logo logo-scrolled"
                  style={{ width: "50px" }}
                  alt="Logo"
                />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                dataIn="#"
                dataOut="#"
              >
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="reservation.html">Reservation</a>
                </li>
                <li className="dropdown">
                  <a href="#">Menus</a>
                </li>
                <li className="dropdown">
                  <a href="#">Gallery</a>
                </li>

                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="side">
            <a href="#" className="close-side">
              <i className="fa fa-times"></i>
            </a>
            <div className="widget">
              <h4 className="title">About Us</h4>
              <p>
                Arrived compass prepare an on as. Reasonable particular on my it
                in sympathize. Size now easy eat hand how. Unwilling he
                departure elsewhere dejection at. Heart large seems may purse
                means few blind.
              </p>
            </div>
            <div className="widget opening-hours">
              <h4 className="title">Openig Hours</h4>
              <ul>
                <li>
                  <span> Mon - Tues : </span>
                  <div className="pull-right"> 6.00 am - 10.00 pm </div>
                </li>
                <li>
                  <span> Wednes - Thurs :</span>
                  <div className="pull-right"> 8.00 am - 6.00 pm </div>
                </li>
                <li>
                  <span> Launch :</span>
                  <div className="pull-right"> Everyday </div>
                </li>
                <li>
                  <span> Sun : </span>
                  <div className="pull-right closed"> Closed </div>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h4 className="title">Our Menus</h4>
              <ul>
                <li>
                  <a href="#">Chees croissants</a>
                </li>
                <li>
                  <a href="#">Bruschetti</a>
                </li>
                <li>
                  <a href="#">Awesome Vegetables</a>
                </li>
                <li>
                  <a href="#">Tasty Snacks</a>
                </li>
                <li>
                  <a href="#">Meal for whole family</a>
                </li>
              </ul>
            </div>
            <div className="widget social">
              <h4 className="title">Connect With Us</h4>
              <ul className="link">
                <li className="facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="pinterest">
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="dribbble">
                  <a href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default WebNavbar;
