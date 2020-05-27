import React, { Component } from "react";
import "../style.css";

class Reservations extends Component {
  state = {
    type: "cake",
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

  selection = ["Big Hut", "Cake Room", "Backyard Garden", "Small Hut"].map(
    (item) => {
      return (
        <button
          className={item === this.state.selectedCat ? "active" : ""}
          onClick={() => {
            this.handleChangeType(item);
          }}
        >
          {item}
        </button>
      );
    }
  );

  render() {
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

                <p>whrite somthing</p>
                <p>test test</p>
                <ul>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=0096599515445"
                      // style={{ padding: 0, border: "none", background: "none" }}
                    >
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
              </div>
              <div className="col-md-5 form">
                <div className="form-box">
                  <div className="icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3>Make a Reservation</h3>
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
