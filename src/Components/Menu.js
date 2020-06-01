import React, { Component } from "react";
import "../style.css";

// componenets
import MenuCard from "./MenuCard";

// data
import menu from "../data";
import catagoryData from "../catagoryData";

class Menu extends Component {
  state = {
    filterdMenu: menu,
    selectedCat: "All",
  };

  handlefilter = (catagory) => {
    this.setState({ selectedCat: catagory });
    if (catagory === "ALL") {
      this.setState({ filterdMenu: menu });
    } else {
      const filterdMenu = menu.filter((item) => {
        return item.catagory === catagory;
      });
      this.setState({ filterdMenu });
    }
  };

  render() {
    const catagory = catagoryData.map((item) => {
      return (
        <button
          className={item === this.state.selectedCat ? "active" : ""}
          onClick={() => {
            this.handlefilter(item);
          }}
        >
          {item}
        </button>
      );
    });

    let menuCard = this.state.filterdMenu.map((item) => {
      return <MenuCard item={item} />;
    });
    return (
      <div className="food-menu-area inc-isotop default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="site-heading text-center">
                <h3>Discorver</h3>
                <h2>Our Menu</h2>
                <p>
                  At Lobelia Cafe, each ingredient we use are premium, fresh and
                  handled with care. Indulge yourself in an experience that
                  touch your heart
                </p>
              </div>
            </div>
          </div>
          <div className="food-menu-area text-center">
            <div className="row">
              <div className="col-md-12 food-menu-content">
                <div className="mix-item-menu text-center">
                  <button
                    className={this.state.selectedCat === "All" ? "active" : ""}
                    onClick={() => {
                      this.handlefilter("All");
                    }}
                  >
                    All
                  </button>
                  {catagory}
                </div>

                <div className="row ">{menuCard}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
