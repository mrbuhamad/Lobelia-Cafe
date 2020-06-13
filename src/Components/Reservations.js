import React, { Component } from "react";
import "../style.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// data
import roomType from "../roomTypeData";

// componenets
import HutCard from "./HutCard";

// Stors
import reservationStrore from "../stores/reservationStrore";

const colors = [
  "Pink",
  "baby Pink",
  "Red",
  "yellow",
  "Blue",
  "baby Blue",
  "purple",
  "Silver",
  "Black",
  "white",
];

const reservationDuration = 1.45; // reservation duration 1.45 hours

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

class Reservations extends Component {
  state = {
    type: "Small Hut",
    name: "",
    number: "",
    color: "",
    cake_: "",
    color_comment: "",
    notes: "",
    date: "",
    time: "",
  };

  handleChangeType = (event) => {
    console.log(event);

    this.setState({ type: event });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeNumber = (event) => {
    this.setState({ number: event.target.value });
  };

  handleChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  handleChangeTime = (event) => {
    this.setState({ time: event.target.value });
  };

  handleChangeColor = (event) => {
    this.setState({ color: event.target.value });
  };

  handleChangeNotes = (event) => {
    this.setState({ notes: event.target.value });
  };

  handleSubmitReserv = (id, price) => {
    const data = {
      subcalendar_id: id,
      start_dt: "2020-06-18T06:00:00-0400",
      end_dt: "2020-06-18T07:00:00-0400",
      all_day: false,
      rrule: "",
      title: this.state.number, // this is the number of the custmer
      who: "",
      location: "",
      notes: `<p>${this.state.notes}</p>`, // this is the discription has to be in a <p></p>
      custom: {
        phone_number: this.state.name, // this is the name of the custmer
        color: [this.state.color],
        cake_: [this.state.cake_],
        price_paid_: price,
        cash_knet_online_: ["online"],
        color_comment: "test colour comments ",
      },
    };
    console.log("data: ", data);
    reservationStrore.reserv(data);
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
              <div id="resform" className="col-md-5 form">
                <div className="form-box">
                  <div className="icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3>Make a Reservation</h3>
                  <h4>
                    {hutcard.roomName} {hutcard.price}KD
                  </h4>

                  <TextField
                    id="standard-full-width"
                    label="Name"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    helperText="Full Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={this.state.name}
                    onChange={this.handleChangeName}
                  />

                  <TextField
                    id="standard-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={this.state.number}
                    onChange={this.handleChangeNumber}
                  />
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    style={{ margin: 8 }}
                    helperText="Reservation date"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={this.state.date}
                    onChange={this.handleChangeDate}
                  />

                  <Select
                    labelId="time"
                    id="time"
                    fullWidth
                    style={{ margin: 8 }}
                    margin="normal"
                    value={this.state.time}
                    onChange={this.handleChangeTime}
                    variant="outlined"
                  >
                    <MenuItem value="12:00 pm">12:00 pm - 1:00 pm</MenuItem>
                    <MenuItem value="2:00 pm">2:00 pm - 3:00 pm</MenuItem>
                    <MenuItem value="4:00 pm">4:00 pm - 5:00 pm</MenuItem>
                    <MenuItem value="5:00 pm">5:00 pm - 6:00 pm</MenuItem>
                    <MenuItem value="7:00 pm">6:00 pm - 7:00 pm</MenuItem>
                  </Select>

                  <Select
                    labelId="color"
                    id="color"
                    fullWidth
                    style={{ margin: 8 }}
                    margin="normal"
                    value={this.state.color}
                    onChange={this.handleChangeColor}
                    variant="outlined"
                  >
                    {colors.map((color) => {
                      return <MenuItem value={color}>{color}</MenuItem>;
                    })}
                  </Select>

                  <TextField
                    id="outlined-multiline-static"
                    label="Add Comments"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue="Add Comments"
                    variant="outlined"
                    style={{ margin: 8 }}
                    value={this.state.notes}
                    onChange={this.handleChangeNotes}
                  />

                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          onClick={() =>
                            this.handleSubmitReserv(hutcard.id, hutcard.price)
                          }
                        >
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
