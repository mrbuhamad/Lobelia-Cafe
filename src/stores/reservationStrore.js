import { decorate, observable } from "mobx";
import axios from "axios";
// import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://teamup.com/ks1apob6syz48hr7m5/",
});

class ReservationStrore {
  reservationData = null;
  reserv = async (data) => {
    try {
      const res = await instance.post("events", data);
      const data = res.data;
      this.reservationData = data;
      console.log("res created", data);
    } catch (err) {
      console.log(err);
      console.log("something went wrong reserving");
    }
  };
}

decorate(ReservationStrore, {
  reservationData: observable,
});

const reservationStrore = new ReservationStrore();
export default reservationStrore;
