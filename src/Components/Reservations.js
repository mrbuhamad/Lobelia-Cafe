import React, { Component } from "react";
import "../style.css";

// data
import roomType from "../roomTypeData";

// componenets
import HutCard from "./HutCard";

class Reservations extends Component {
  state = {
    type: "Small Hut",
    name: "",
  };

  handleChangeType = (event) => {
    console.log(event);

    this.setState({ type: event });
  };

  handleChangeName = (event) => {
    console.log(event);
    this.setState({ name: event.target.value });
  };

  selection = roomType.map((item) => {
    return (
      <button
        className={item.roomName === this.state.selectedCat ? "active" : ""}
        onClick={() => {
          this.handleChangeType(item.roomName);
        }}
      >
        {item.roomName}
      </button>
    );
  });

  render() {
    const hutcard = roomType.find((item) => {
      if (item.roomName === this.state.type) {
        return true;
      }
    });

    return (
      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-items">
              <div className="col-md-7 info">
                <h3>Choose Your Room</h3>
                <div className="mix-item-menu text-center">
                  {this.selection}
                </div>

                <HutCard room={hutcard} />
              </div>
              <div className="col-md-5 form">
                <div className="form-box">
                  <div className="icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3>Make a Reservation</h3>
                  <h4>
                    {hutcard.roomName} {hutcard.price}KD
                  </h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="number"
                            name="number"
                            placeholder="number"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="date"
                            name="date"
                            placeholder="Date"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" name="submit" id="submit">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservations;
