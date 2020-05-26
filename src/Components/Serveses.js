import React from "react";
import "../style.css";

function Serveses() {
  return (
    <div className="services-area item-bg bg-gray">
      <div className="container-full">
        <div className="row">
          <div className="services-items services-carousel owl-carousel owl-theme text-center text-light">
            <div
              className="item bg-cover"
              style={{ backgroundImage: "url(assets/img/800x600.png)" }}
            >
              <div className="box">
                <i className="flaticon-dinner-table"></i>
                <h4>Fine Dining</h4>
                <p>
                  Belonging sir curiosity discovery extremity yet forfeited
                  prevailed own off. Travelling by introduced of mr terminated.
                </p>
              </div>
            </div>

            <div
              className="item bg-cover"
              style={{ backgroundImage: "url(assets/img/800x600.png)" }}
            >
              <div className="box">
                <i className="flaticon-champagne-glass"></i>
                <h4>Party and Event</h4>
                <p>
                  Belonging sir curiosity discovery extremity yet forfeited
                  prevailed own off. Travelling by introduced of mr terminated.
                </p>
              </div>
            </div>

            <div
              className="item bg-cover"
              style={{ backgroundImage: "url(assets/img/800x600.png)" }}
            >
              <div className="box">
                <i className="flaticon-buffet"></i>
                <h4>Buffet</h4>
                <p>
                  Belonging sir curiosity discovery extremity yet forfeited
                  prevailed own off. Travelling by introduced of mr terminated.
                </p>
              </div>
            </div>

            <div
              className="item bg-cover"
              style={{ backgroundImage: "url(assets/img/800x600.png)" }}
            >
              <div className="box">
                <i className="flaticon-moving-truck"></i>
                <h4>Home Delivery</h4>
                <p>
                  Belonging sir curiosity discovery extremity yet forfeited
                  prevailed own off. Travelling by introduced of mr terminated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serveses;
