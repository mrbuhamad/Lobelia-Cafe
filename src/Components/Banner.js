import React from "react";
import "../style.css";

function Banner() {
  return (
    <div
      className="banner-area responsive-auto-height ds-fonts text-light video-bg-live bg-fixed"
      style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
    >
      <div
        className="player"
        dataProperty="{videoURL:'https://www.youtube.com/watch?v=hoiGV-N-2Gs',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:5, opacity:1, quality:'default'}"
      ></div>

      <div
        id="bootcarousel"
        className="carousel transparent-nav slide carousel-fade animate_text"
        dataRide="carousel"
      >
        <div className="carousel-inner shadow dark">
          <div className="item active">
            <div className="box-table">
              <div className="box-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="content">
                        <h2 dataAnimation="animated fadeInUp">Reservation</h2>
                        <h1 dataAnimation="animated slideInLeft">
                          special occasions
                        </h1>
                        <div
                          className="lists"
                          dataAnimation="animated slideInUp"
                        >
                          <ul>
                            <li>
                              <i className="flaticon-hamburger"></i> Food
                            </li>
                            <li>
                              <i className="flaticon-champagne-glass"></i>
                              Decorations
                            </li>
                            <li>
                              <i className="flaticon-coffee-cup"></i> Good Tims
                            </li>
                          </ul>
                        </div>
                        <a
                          dataAnimation="animated slideInUp"
                          className="btn btn-theme effect btn-md"
                          href="#"
                        >
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wavesshape">
        <img src="assets/img/shape.png" alt="Shape" />
      </div>
    </div>
  );
}

export default Banner;
