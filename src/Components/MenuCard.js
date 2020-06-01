import React from "react";
import "../style.css";

function MenuCard(props) {
  const item = props.item;
  return (
    <div
      id="portfolio-grid"
      className="menu-lists text-center  col-12 col-md-3  "
      style={{ width: "3ram" }}
    >
      <div className="item-single pf-item ">
        <div className="item">
          <div className="thumb">
            <a href="#">
              <img src={item.image} alt="Thumb" />
            </a>
            <div className="price">
              <h5>{`${item.price}KD`}</h5>
            </div>
          </div>
          <div className="info">
            <h4>
              <a href="#">{item.item}</a>
            </h4>
            <span>{item.subcatagory}</span>
            <p>{item.discribtion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
