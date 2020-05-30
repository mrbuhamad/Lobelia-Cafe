import React from "react";
import "../style.css";

function HutCard(props) {
  let room = props.room;
  return (
    <>
      <div className="thumb">
        <a href="#">
          <img src={room.image} alt="Thumb" />
        </a>
      </div>
      <p> </p>
      <p>{room.discribtion}</p>
      <ul>
        <li>total price {room.price} kd</li>
        <li>for {room.numbofGuests}</li>
      </ul>
      <p> </p>
      <li>
        the reservation includs {room.foodPrice} kd food and bevregus of your
        selection
      </li>
      <p> </p>
      <li>the reservation spans a 2 hours duration</li>

      <ul>
        <li>
          <a href="https://api.whatsapp.com/send?phone=0096599515445">
            <div className="icon">
              <i className="fab fa-whatsapp-square"></i>
            </div>
            <div className="info">
              <h4>whatsapp</h4>
              <span>+965 9951 5445</span>
            </div>
          </a>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-envelope-open"></i>
          </div>
          <div className="info">
            <h4>Eamil</h4>
            <span>lobelia.cafe@hotmail.com</span>
          </div>
        </li>
      </ul>
      <a className="col-md-12 button-about" href="#resform">
        Book Now
      </a>
    </>
  );
}

export default HutCard;
