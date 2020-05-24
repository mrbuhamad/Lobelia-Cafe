import React from "react";
import "./style.css";

// components
import WebNavbar from "./Components/WebNavbar";
import Banner from "./Components/Banner";
import Reservations from "./Components/Reservations";
import Menu from "./Components/Menu";
import Staff from "./Components/Staff";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <WebNavbar />
      <Banner />
      <Reservations />
      <Menu />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;
