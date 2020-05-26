import React, { Component } from "react";
import "../style.css";
import { NativeSelect, Select, Box, MenuItem } from "@material-ui/core";

class Reservations extends Component {
  state = {
    type: "cake",
    name: "",
  };

  handleChangeType = (event) => {
    console.log(event.target.value);
    this.setState({ type: event.target.value });
  };

  handleChangeName = (event) => {
    console.log(event);
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-items">
              <div className="col-md-7 info">
                <h3>Our Story</h3>
                <h2>
                  Until I discovered cooking I was never
                  <br /> really interested in anything
                </h2>
                <p>whrite somthing</p>
                <p>test test</p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="info">
                      <h4>Phone</h4>
                      <span>+123 456 7890</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                    <div className="info">
                      <h4>Eamil</h4>
                      <span>support@restcafe.com</span>
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
                        <Box my={2}>
                          <Select
                            variant="outlined"
                            value={this.state.type}
                            onChange={this.handleChangeType}
                            fullWidth
                          >
                            <MenuItem value="big">Big Hut</MenuItem>
                            <MenuItem value="cake">Cake Room</MenuItem>
                            <MenuItem value="backyard">
                              Backyard Garden
                            </MenuItem>
                            <MenuItem value="Small">Small Hut</MenuItem>
                          </Select>
                        </Box>
                      </div>
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
