import { decorate, observable } from "mobx";
import axios from "axios";
// import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://teamup.com/ks1apob6syz48hr7m5/",
});

class ReservationStrore {
  reservationData = null;
  reserv = async (reserv) => {
    try {
      instance.defaults.headers.common.Authorization = `Teamup-Token: 271761f6d0a737d8a4092d2d5479d8abc9faaf5b6c54bb9007a1653f3ec12654`;
      const res = await instance.post("events", reserv);
      this.reservationData = res.data;
      console.log("res created", res.data);
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
